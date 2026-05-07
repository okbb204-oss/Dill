import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Trophy, Clock, Hammer, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { coursesData } from '../data/courses';
import { crafts } from '../data/crafts';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useProgress } from '../contexts/ProgressContext';

export default function LearnHome() {
  const { t, i18n } = useTranslation();
  const { progress } = useProgress();
  const isRTL = i18n.language === 'ar';
  const availableCourses = Object.values(coursesData);

  return (
    <div className="bg-[var(--color-bg-sand)] min-h-screen pb-24">
      {/* Header */}
      <div className="bg-[var(--color-header)] text-[var(--color-dark)] pt-20 pb-16 px-4 border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-[var(--color-primary)]/10 p-2 rounded-lg">
               <BookOpen className="w-8 h-8 text-[var(--color-primary)]" />
            </div>
            <h1 className="text-4xl font-heading font-bold">{t('learn.space_title')}</h1>
          </div>
          <p className="text-[var(--color-secondary)] text-lg leading-relaxed max-w-2xl">
            {t('learn.space_subtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Progress Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-[var(--color-card)] rounded-3xl p-8 shadow-sm border border-[var(--color-border)] flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-[var(--color-bg-sand)] rounded-full flex items-center justify-center mb-4 border-4 border-[var(--color-card)] shadow-sm">
              <Trophy className="w-10 h-10 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-2xl font-bold font-heading mb-1 text-[var(--color-dark)]">{t('learn.progress_profile')}</h2>
            <p className="text-[var(--color-secondary)] text-sm mb-8">{t('learn.space_subtitle').split('.')[0]}.</p>

            <div className="w-full bg-[var(--color-bg-sand)] rounded-2xl p-6 flex justify-around mb-6">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold font-heading text-[var(--color-primary)]">{progress.xp}</span>
                <span className="text-[var(--color-secondary)] text-sm mt-1">{t('learn.xp_points')}</span>
              </div>
              <div className="w-px bg-[var(--color-border)]"></div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold font-heading text-[var(--color-success)]">{progress.completedLessons.length}</span>
                <span className="text-[var(--color-secondary)] text-sm mt-1">{t('learn.completed_lessons')}</span>
              </div>
            </div>

            <div className="w-full text-start rtl:text-right">
              <h3 className="font-bold text-[var(--color-dark)] mb-3 flex items-center gap-2">
                 <Trophy className="w-4 h-4 text-[var(--color-secondary)]" />
                 {t('learn.badges')}
              </h3>
              <div className="flex justify-center gap-4 text-[var(--color-secondary)] flex-wrap">
                 <div className={`w-16 h-16 rounded-xl border-2 border-[var(--color-border)] flex items-center justify-center transition-all ${progress.badges.includes('sh_starter') ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)] border-[var(--color-primary)] shadow-sm' : 'border-dashed opacity-50 grayscale'}`} title={t('sewing.badges.start')}>
                    <Hammer className="w-6 h-6" />
                 </div>
                 <div className={`w-16 h-16 rounded-xl border-2 border-[var(--color-border)] flex items-center justify-center transition-all ${progress.badges.includes('sh_pro') ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent)] border-[var(--color-accent)] shadow-sm' : 'border-dashed opacity-50 grayscale'}`} title={t('sewing.badges.pro')}>
                    <Trophy className="w-6 h-6" />
                 </div>
                 <div className={`w-16 h-16 rounded-xl border-2 border-[var(--color-border)] flex items-center justify-center transition-all ${progress.badges.includes('sh_repair') ? 'bg-[var(--color-success)]/10 text-[var(--color-success)] border-[var(--color-success)] shadow-sm' : 'border-dashed opacity-50 grayscale'}`} title={t('sewing.badges.repair')}>
                    <CheckCircle2 className="w-6 h-6" />
                 </div>
              </div>
              <p className="text-xs text-center text-[var(--color-secondary)] mt-3">{t('learn.unlock_badges')}</p>
            </div>
          </div>
        </div>

        {/* Available Courses */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold font-heading mb-6 border-b border-[var(--color-border)] pb-4">{t('learn.available_paths')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {availableCourses.map((course, idx) => {
              const craft = crafts.find(c => c.id === course.craftId);
              if (!craft) return null;

              return (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={course.craftId}
                  className="bg-[var(--color-card)] rounded-2xl overflow-hidden shadow-sm border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-md transition-all group flex flex-col"
                >
                  <div className="h-40 overflow-hidden relative">
                    <img src={craft.image} loading="lazy" alt={isRTL ? course.title : (course.titleEN || course.title)} className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                       <span className="bg-[var(--color-primary)] text-white px-3 py-1 rounded-sm text-xs font-bold">
                         {isRTL ? craft.category : craft.category}
                       </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold font-heading mb-2 text-[var(--color-dark)]">
                      {isRTL ? course.title : (course.titleEN || course.title)}
                    </h3>
                    <p className="text-[var(--color-secondary)] text-sm mb-6 line-clamp-2 leading-relaxed flex-grow">
                      {isRTL ? course.description : (course.descriptionEN || course.description)}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-[var(--color-secondary)] mb-6 font-medium">
                      <div className="flex items-center gap-1.5 bg-[var(--color-bg-sand)] px-3 py-1.5 rounded-lg border border-[var(--color-border)]">
                        <Trophy className="w-4 h-4 text-orange-500" />
                        {course.levels.length} {t('learn.stages')}
                      </div>
                      <div className="flex items-center gap-1.5 bg-[var(--color-bg-sand)] px-3 py-1.5 rounded-lg border border-[var(--color-border)]">
                        <BookOpen className="w-4 h-4 text-[var(--color-accent)]" />
                        {course.levels.reduce((acc, lvl) => acc + lvl.lessons.length, 0)} {t('learn.lessons')}
                      </div>
                    </div>

                    <Link to={`/learn/${course.craftId}`} className="block text-center w-full bg-[var(--color-bg-sand)] hover:bg-[var(--color-primary)] hover:text-[var(--color-bg-sand)] text-[var(--color-dark)] py-3 rounded-xl font-bold transition-colors border border-[var(--color-border)] hover:border-[var(--color-primary)]">
                      {t('learn.explore_path')}
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
