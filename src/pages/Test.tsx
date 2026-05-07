import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { questions } from '../data/testQuestions';
import { crafts } from '../data/crafts';
import { useTranslation } from 'react-i18next';
import { useThemeSettings } from '../contexts/ThemeContext';

const ParticleBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-30">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-[var(--color-primary)] rounded-full"
        initial={{
          x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
          y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
          opacity: Math.random() * 0.5 + 0.1,
        }}
        animate={{
          y: [null, Math.random() * -100],
          opacity: [null, Math.random() * 0.8, 0],
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    ))}
  </div>
);

export default function TestPlatform() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [showResults, setShowResults] = useState(false);
  const { t, i18n } = useTranslation();
  const { isDarkMode } = useThemeSettings();
  const isRTL = i18n.language === 'ar';

  const progress = (currentStep / questions.length) * 100;

  const handleAnswer = (questionId: string, answer: string | string[], type: string) => {
    setAnswers(prev => {
      if (type === 'multiple') {
        const currentAnswers = (prev[questionId] as string[]) || [];
        if (currentAnswers.includes(answer as string)) {
          return { ...prev, [questionId]: currentAnswers.filter(a => a !== answer) };
        } else {
          return { ...prev, [questionId]: [...currentAnswers, answer as string] };
        }
      }
      return { ...prev, [questionId]: answer };
    });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(s => s + 1);
    } else {
      setShowResults(true);
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(s => s - 1);
    }
  };

  const calculateTopCrafts = () => {
    const scores: Record<string, number> = {};
    Object.keys(answers).forEach(qId => {
      const q = questions.find(qu => qu.id === qId);
      if (!q) return;

      const userAns = answers[qId];
      if (Array.isArray(userAns)) {
        userAns.forEach(ans => {
          const option = q.options?.find(o => o.value === ans);
          if (option && option.weights) {
            Object.entries(option.weights).forEach(([craftId, weight]) => {
              scores[craftId] = (scores[craftId] || 0) + weight;
            });
          }
        });
      } else {
        const option = q.options?.find(o => o.value === userAns);
        if (option && option.weights) {
          Object.entries(option.weights).forEach(([craftId, weight]) => {
             if (q.type === 'scale' && Number(userAns) > 3) {
                scores[craftId] = (scores[craftId] || 0) + weight;
             } else if (q.type !== 'scale') {
                scores[craftId] = (scores[craftId] || 0) + weight;
             }
          });
        }
      }
    });

    const sortedIds = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
    const topCrafts = sortedIds.slice(0, 3).map(id => ({ craft: crafts.find(c => c.id === id)!, score: scores[id] }));

    // Save to localStorage
    const saved = localStorage.getItem('hirfati_progress');
    const currentProgress = saved ? JSON.parse(saved) : {};
    currentProgress.test_result = {
      top_crafts: topCrafts.map(t => t.craft.id),
      date: new Date().toISOString()
    };
    localStorage.setItem('hirfati_progress', JSON.stringify(currentProgress));

    return topCrafts;
  };

  if (showResults) {
    const topCrafts = calculateTopCrafts();
    return (
      <div className="py-16 px-4 max-w-5xl mx-auto relative">
        {isDarkMode && <ParticleBackground />}
        <div className="text-center mb-12 relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-bg-sand)] text-[var(--color-success)] rounded-full mb-6 border border-[var(--color-border)]">
             <CheckCircle2 className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-heading font-bold text-[var(--color-dark)] mb-4">{isRTL ? 'اكتمل التحليل بنجاح' : 'Analysis Completed Successfully'}</h1>
          <p className="text-xl text-[var(--color-secondary)]">{isRTL ? 'بناءً على إجاباتك، إليك قائمة بأفضل 3 مسارات مهنية تناسب قدراتك وشخصيتك.' : 'Based on your answers, here are the top 3 career paths that suit your abilities and personality.'}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {topCrafts.map((result, idx) => {
            if (!result.craft) return null;
            return (
              <motion.div 
                key={result.craft.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.15 }}
                className={`bg-[var(--color-card)] rounded-2xl overflow-hidden shadow-sm border-2 ${idx === 0 ? 'border-[var(--color-primary)]' : 'border-[var(--color-border)]'}`}
              >
                {idx === 0 && (
                   <div className="bg-[var(--color-primary)] text-[var(--color-bg-sand)] text-center py-2 font-bold uppercase tracking-wider text-sm">
                     {isRTL ? 'التطابق الأفضل' : 'Best Match'}
                   </div>
                )}
                <div className="h-48 relative">
                   <img src={result.craft.image} loading="lazy" alt={(!isRTL && result.craft.nameEN) ? result.craft.nameEN : result.craft.nameAR} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold font-heading mb-2 text-[var(--color-dark)]">{(!isRTL && result.craft.nameEN) ? result.craft.nameEN : result.craft.nameAR}</h3>
                  <p className="text-[var(--color-secondary)] text-sm mb-4">{isRTL ? 'نسبة التوافق:' : 'Match Rate:'} {Math.min(100, Math.round(result.score * 8))}%</p>
                  <p className="text-[var(--color-secondary)] text-sm mb-6">{(!isRTL && result.craft.shortDescriptionEN) ? result.craft.shortDescriptionEN : result.craft.shortDescription}</p>
                  <Link to={`/craft/${result.craft.id}`} className={`block text-center w-full py-3 rounded-xl font-bold transition-colors ${idx === 0 ? 'bg-[var(--color-primary)] text-[var(--color-bg-sand)] hover:bg-[var(--color-primary-hover)]' : 'bg-[var(--color-bg-sand)] text-[var(--color-dark)] hover:border hover:border-[var(--color-primary)]'}`}>
                    {isRTL ? 'ابدأ في هذه الحرفة' : 'Start in this craft'}
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
        
        <div className="mt-16 flex flex-col items-center gap-6 relative z-10">
           <button onClick={() => { setShowResults(false); setCurrentStep(0); setAnswers({}); }} className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] flex items-center justify-center gap-2 mx-auto font-medium transition-colors">
             <RotateCcw className="w-4 h-4" /> {isRTL ? 'إعادة الاختبار' : 'Retake Test'}
           </button>
           
           <p className="text-xs text-[var(--color-secondary)] opacity-70 mb-2">
             {isRTL ? 'أنشئ حساباً (مجاناً) لتحفظ نتيجتك للأبد.' : 'Create a free account to save your result forever.'}
           </p>
        </div>
      </div>
    )
  }

  const q = questions[currentStep];
  const isAnswered = q.type === 'multiple' 
    ? ((answers[q.id] as string[])?.length > 0)
    : !!answers[q.id];

  return (
    <div className="min-h-[80vh] bg-[var(--color-bg-sand)] flex flex-col pt-12 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {isDarkMode && <ParticleBackground />}
      <div className="max-w-3xl mx-auto w-full relative z-10">
        {/* Progress bar */}
        <div className="mb-12">
           <div className="flex justify-between text-sm text-[var(--color-secondary)] mb-2 font-medium">
             <span>{isRTL ? 'الخطوة' : 'Step'} {currentStep + 1} {isRTL ? 'من' : 'of'} {questions.length}</span>
             <span>{Math.round(progress)}%</span>
           </div>
           <div className="h-2 w-full bg-[var(--color-border)] rounded-full overflow-hidden">
             <motion.div 
               className="h-full bg-[var(--color-primary)]"
               initial={{ width: 0 }}
               animate={{ width: `${progress}%` }}
               transition={{ duration: 0.3 }}
             />
           </div>
        </div>

        {/* Question Panel */}
        <div className="bg-[var(--color-card)] rounded-3xl p-8 md:p-12 shadow-sm border border-[var(--color-border)] relative min-h-[400px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isRTL ? 20 : -20 }}
              transition={{ duration: 0.2 }}
            >
               <div className="inline-block px-3 py-1 bg-[var(--color-bg-sand)] border border-[var(--color-border)] text-[var(--color-secondary)] rounded-md text-sm font-bold mb-6">
                 {q.category === 'personality' ? (isRTL ? 'الميول الشخصية' : 'Personality Traits') : q.category === 'environment' ? (isRTL ? 'البيئة المفضلة' : 'Preferred Environment') : q.category === 'abilities' ? (isRTL ? 'القدرات الجسدية' : 'Physical Abilities') : (isRTL ? 'الاهتمامات' : 'Interests')}
               </div>
               <h2 className="text-2xl md:text-3xl font-heading font-bold text-[var(--color-dark)] mb-8 leading-tight">
                 {q.text}
               </h2>

               <div className="space-y-4">
                 {q.type === 'scale' ? (
                   <div className="flex flex-col gap-4">
                     <p className="text-[var(--color-secondary)] text-sm mb-2 text-center">{isRTL ? 'اختر من 1 (أقل) إلى 5 (أعلى)' : 'Choose from 1 (lowest) to 5 (highest)'}</p>
                     <div className="flex justify-between gap-2 max-w-sm mx-auto w-full">
                       {[1,2,3,4,5].map(val => (
                         <button
                           key={val}
                           onClick={() => handleAnswer(q.id, String(val), 'scale')}
                           className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg transition-all ${answers[q.id] === String(val) ? 'bg-[var(--color-primary)] text-[var(--color-bg-sand)] scale-110 shadow-md' : 'bg-[var(--color-bg-sand)] text-[var(--color-dark)] border border-[var(--color-border)]'}`}
                         >
                           {val}
                         </button>
                       ))}
                     </div>
                   </div>
                 ) : (
                   q.options?.map(opt => {
                     const isSelected = q.type === 'multiple' 
                       ? ((answers[q.id] as string[]) || []).includes(opt.value)
                       : answers[q.id] === opt.value;
                     return (
                       <button
                         key={opt.value}
                         onClick={() => handleAnswer(q.id, opt.value, q.type)}
                         className={`w-full ${isRTL ? 'text-right' : 'text-left'} p-5 rounded-2xl border-2 transition-all flex items-center gap-4 ${isSelected ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/5' : 'border-[var(--color-border)] bg-[var(--color-bg-sand)] hover:border-[var(--color-secondary)]'}`}
                       >
                         <div className={`w-6 h-6 rounded-md flex items-center justify-center border transition-colors flex-shrink-0 ${isSelected ? 'bg-[var(--color-primary)] border-[var(--color-primary)]' : 'bg-[var(--color-card)] border-[var(--color-border)]'}`}>
                           {isSelected && <CheckCircle2 className="w-4 h-4 text-[var(--color-bg-sand)]" />}
                         </div>
                         <span className={`text-lg transition-colors ${isSelected ? 'text-[var(--color-primary)] font-bold' : 'text-[var(--color-dark)]'}`}>{opt.label}</span>
                       </button>
                     )
                   })
                 )}
               </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-12 pt-6 border-t border-[var(--color-border)] w-full z-10">
            <button
               onClick={handlePrev}
               disabled={currentStep === 0}
               className={`flex items-center gap-2 font-bold px-6 py-3 rounded-xl transition-all ${currentStep === 0 ? 'opacity-0 pointer-events-none' : 'text-[var(--color-secondary)] hover:bg-[var(--color-bg-sand)]'}`}
            >
              {isRTL ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
              {isRTL ? 'السابق' : 'Previous'}
            </button>
            <button
               onClick={handleNext}
               disabled={!isAnswered}
               className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all shadow-md group ${isAnswered ? 'bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-[var(--color-bg-sand)]' : 'bg-[var(--color-border)] text-[var(--color-secondary)] cursor-not-allowed'}`}
            >
              {currentStep === questions.length - 1 ? (isRTL ? 'اكتشف النتيجة' : 'Reveal Result') : (isRTL ? 'التالي' : 'Next')}
              {isRTL ? <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> : <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
