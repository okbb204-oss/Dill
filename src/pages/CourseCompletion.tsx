import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Trophy, ArrowLeft, ArrowRight, Share2, Award, Star, GraduationCap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { crafts } from '../data/crafts';
import { coursesData } from '../data/courses';
import confetti from 'canvas-confetti';

import { db } from '../lib/firebase';
import { doc, getDoc, updateDoc, increment } from 'firebase/firestore';
import { useAuth } from '../contexts/AuthContext';

export default function CourseCompletion() {
  const { profile } = useAuth();
  const { craftId } = useParams<{ craftId: string }>();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const craft = crafts.find(c => c.id === craftId);
  const course = craftId ? coursesData[craftId] : undefined;

  useEffect(() => {
    // Process referral reward if needed
    async function processReferral() {
      if (!profile || !profile.referred_by || profile.referral_processed) return; 
      
      try {
        const referrerRef = doc(db, 'users', profile.referred_by);
        await updateDoc(referrerRef, {
          friends_invited: increment(1)
        });
        
        // Mark current user as processed so we don't reward multiple times
        const userRef = doc(db, 'users', profile.id);
        await updateDoc(userRef, {
          referral_processed: true
        });
      } catch (err) {
        console.error("Failed to process referral", err);
      }
    }
    
    processReferral();

    // Fire confetti!
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  if (!craft || !course) return null;

  return (
    <div className="min-h-screen bg-[var(--color-bg-sand)] py-20 px-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-5">
        <GraduationCap className="absolute -top-10 -left-10 w-64 h-64 rotate-12" />
        <Trophy className="absolute bottom-10 right-10 w-80 h-80 -rotate-12" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-[var(--color-card)] rounded-[3rem] p-10 md:p-16 shadow-2xl border border-[var(--color-border)] text-center relative"
        >
          {/* Badge/Avatar mockup */}
          <div className="relative inline-block mb-10">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center text-white text-5xl md:text-6xl shadow-2xl relative z-10">
              <Trophy className="w-16 h-16 md:w-20 md:h-20" />
            </div>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-4 border-2 border-dashed border-[var(--color-primary)] opacity-30 rounded-full"
            ></motion.div>
            <div className="absolute -bottom-2 -right-2 bg-yellow-400 w-10 h-10 rounded-full flex items-center justify-center text-black border-4 border-[var(--color-card)] z-20">
              <Star className="w-5 h-5 fill-current" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold font-heading text-[var(--color-dark)] mb-6 leading-tight">
            {isRTL ? 'تهانينا الحارة يا بطل!' : 'Huge Congratulations, Champ!'}
          </h1>
          
          <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold text-sm mb-8 uppercase tracking-widest">
            {isRTL ? 'إكمال المسار بنجاح' : 'Successful Course Completion'}
          </div>

        <p className="text-xl text-[var(--color-secondary)] mb-12 leading-relaxed">
          {isRTL 
            ? `لقد أتممت ببراعة مسار "${course.title}". بفضل مجهودك وتركيزك، أصبحت الآن تمتلك المعارف الأساسية في ${craft.nameAR}. هذه هي الخطوة الأولى نحو الاحتراف!` 
            : `You have masterfully completed the "${course.titleEN || course.title}" track. Thanks to your effort, you now hold the core knowledge in ${craft.nameEN || craft.nameFR}. This is your first step towards professional excellence!`}
        </p>

          <div className="grid grid-cols-2 gap-4 mb-12">
            <div className="bg-[var(--color-bg-sand)] p-6 rounded-3xl border border-[var(--color-border)]">
              <div className="text-3xl font-bold text-[var(--color-primary)] mb-1">
                {course.levels.reduce((acc, lvl) => acc + lvl.lessons.length, 0)}
              </div>
              <div className="text-xs text-[var(--color-secondary)] uppercase font-bold tracking-wider">
                {isRTL ? 'درس مكتمل' : 'Lessons Finished'}
              </div>
            </div>
            <div className="bg-[var(--color-bg-sand)] p-6 rounded-3xl border border-[var(--color-border)]">
              <div className="text-3xl font-bold text-[var(--color-accent)] mb-1">
                {course.levels.flatMap(l => l.lessons).reduce((acc, l) => acc + l.xpReward, 0)}
              </div>
              <div className="text-xs text-[var(--color-secondary)] uppercase font-bold tracking-wider">
                {isRTL ? 'نقطة خبرة' : 'XP Earned'}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-[var(--color-dark)] text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-black transition-all">
              <Share2 className="w-5 h-5" />
              {isRTL ? 'شارك النجاح مع الأصدقاء' : 'Share Achievement'}
            </button>
            <Link 
              to="/learn" 
              className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-[var(--color-border)] text-[var(--color-dark)] font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-[var(--color-bg-sand)] transition-all"
            >
              {isRTL ? 'مسار جديد' : 'New Track'}
              {isRTL ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
            </Link>
          </div>
          
          <div className="mt-12 pt-8 border-t border-[var(--color-border)] opacity-60 flex items-center justify-center gap-4 text-sm font-bold text-[var(--color-secondary)]">
             <Award className="w-5 h-5" />
             <span>{isRTL ? 'منصة حرفتي - فخر الصناعة الجزائرية' : 'Hirfati Platform - Proudly Algerian'}</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
