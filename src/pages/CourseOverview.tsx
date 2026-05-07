import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, BookOpen, Clock, Lock, CheckCircle2, PlayCircle, Trophy, Hammer } from 'lucide-react';
import { motion } from 'motion/react';
import { coursesData } from '../data/courses';
import { crafts } from '../data/crafts';
import { useTranslation } from 'react-i18next';
import { useProgress } from '../contexts/ProgressContext';

export default function CourseOverview() {
  const { craftId } = useParams<{ craftId: string }>();
  const course = craftId ? coursesData[craftId] : undefined;
  const craft = crafts.find(c => c.id === craftId);
  const { t, i18n } = useTranslation();
  const { progress } = useProgress();
  const isRTL = i18n.language === 'ar';

  if (!course || !craft) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[var(--color-bg-sand)]">
        <h2 className="text-3xl font-bold font-heading mb-4 text-[var(--color-dark)]">{isRTL ? 'المسار غير متوفر' : 'Course path unavailable'}</h2>
        <Link to="/learn" className="text-[var(--color-primary)] font-bold">{isRTL ? 'العودة لمساحة التعلّم' : 'Back to Learning Space'}</Link>
      </div>
    );
  }

  // Using the context for completed lessons
  const completedLessonIds = progress.completedLessons; 

  return (
    <div className="bg-[var(--color-bg-sand)] min-h-screen pb-24">
      {/* Hero Header */}
      <div className="relative pt-16 pb-20 overflow-hidden bg-[var(--color-dark)]">
         <img src={craft.image} loading="lazy" alt={course.title} className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" />
         <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)] to-black/30" />
         
         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <Link to="/learn" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors">
             {isRTL ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
             <span>{t('learn.back_to_space')}</span>
           </Link>
           <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 leading-tight">{isRTL ? course.title : (course.titleEN || course.title)}</h1>
           <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">{isRTL ? course.description : (course.descriptionEN || course.description)}</p>
         </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-[var(--color-card)] rounded-2xl p-8 shadow-md border border-[var(--color-border)] mb-12">
            {craftId === 'sewing' && completedLessonIds.length === 0 && (
              <div className="mb-8 p-6 bg-[var(--color-primary)]/10 border-l-4 border-[var(--color-primary)] text-[var(--color-dark)] rounded-r-xl">
                 <p className="text-lg font-medium italic">"{t('sewing.start_msg')}"</p>
              </div>
            )}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
             <div>
               <h3 className="font-heading font-bold text-xl mb-2 text-[var(--color-dark)]">{t('learn.your_journey')}</h3>
               <p className="text-[var(--color-secondary)]">{t('learn.journey_desc')}</p>
             </div>
             <div className="w-full md:w-1/3">
               <div className="flex justify-between text-sm text-[var(--color-primary)] font-bold mb-2">
                 <span>{t('learn.overall_progress')}</span>
                 <span>{Math.round((completedLessonIds.length / course.levels.reduce((acc, lvl) => acc + lvl.lessons.length, 0)) * 100)}%</span>
               </div>
               <div className="h-3 w-full bg-[var(--color-bg-sand)] rounded-full overflow-hidden border border-[var(--color-border)]">
                 <div className="h-full bg-[var(--color-primary)] transition-all" style={{ width: `${Math.round((completedLessonIds.length / course.levels.reduce((acc, lvl) => acc + lvl.lessons.length, 0)) * 100)}%` }} />
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-12">
          {course.levels.map((level, lvlIdx) => {
             const allLessons = course.levels.flatMap(l => l.lessons);
             const firstLessonInLevel = level.lessons[0];
             const firstLessonGlobalIndex = allLessons.findIndex(l => l.id === firstLessonInLevel?.id);
             
             // A level is locked if its first lesson cannot be accessed yet
             const isLevelLocked = firstLessonGlobalIndex > 0 && 
                                   !completedLessonIds.includes(allLessons[firstLessonGlobalIndex - 1].id) && 
                                   !completedLessonIds.includes(firstLessonInLevel.id);

             return (
               <div key={level.id} className="relative">
                 {/* Connecting line for levels */}
                 {lvlIdx !== course.levels.length - 1 && (
                   <div className={`absolute ${isRTL ? 'right-8' : 'left-8'} top-24 bottom-[-3rem] w-1 bg-[var(--color-border)] z-0 hidden md:block`}></div>
                 )}

                 <div className="flex flex-col md:flex-row gap-6 relative z-10">
                   {/* Level Indicator */}
                   <div className="flex-shrink-0 flex items-start">
                     <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-heading font-bold text-2xl shadow-sm border-4 border-[var(--color-card)] ${isLevelLocked ? 'bg-[var(--color-bg-sand)] text-[var(--color-secondary)]' : 'bg-[var(--color-primary)] text-[var(--color-bg-sand)]'}`}>
                       {lvlIdx + 1}
                     </div>
                   </div>

                   {/* Level Content */}
                   <div className="flex-grow">
                     <div className="bg-[var(--color-card)] rounded-3xl p-8 shadow-sm border border-[var(--color-border)]">
                       <div className="flex items-center justify-between mb-4 border-b border-[var(--color-border)] pb-4">
                         <div>
                           <h2 className={`text-2xl font-bold font-heading mb-2 ${isLevelLocked ? 'text-[var(--color-secondary)]' : 'text-[var(--color-dark)]'}`}>{isRTL ? level.title : (level.titleEN || level.title)}</h2>
                           <p className="text-[var(--color-secondary)] leading-relaxed max-w-2xl">{isRTL ? level.description : (level.descriptionEN || level.description)}</p>
                         </div>
                         {isLevelLocked && <Lock className="w-6 h-6 text-[var(--color-secondary)] opacity-50" />}
                       </div>

                       <div className="space-y-4">
                         {level.lessons.map((lesson, idx) => {
                            const isCompleted = completedLessonIds.includes(lesson.id);
                            const lessonGlobalIndex = allLessons.findIndex(l => l.id === lesson.id);
                            
                            // Unlocked if it's the very first lesson, OR if it's completed, OR if the previous lesson is completed
                            const isLessonUnlocked = lessonGlobalIndex === 0 || 
                                                     isCompleted || 
                                                     completedLessonIds.includes(allLessons[lessonGlobalIndex - 1].id);
                            const isLessonLocked = !isLessonUnlocked;

                            return (
                              <Link 
                                key={lesson.id}
                                to={isLessonLocked ? '#' : `/learn/${course.craftId}/lesson/${lesson.id}`}
                                onClick={(e) => {
                                  if (isLessonLocked) e.preventDefault();
                                }}
                                className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all ${isLessonLocked ? 'border-[var(--color-border)] bg-[var(--color-bg-sand)] cursor-not-allowed opacity-60' : 'border-[var(--color-border)] hover:border-[var(--color-primary)] bg-[var(--color-card)] hover:shadow-sm group'}`}
                              >
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isCompleted ? 'bg-green-100/50 text-green-500 border border-green-200' : isLessonLocked ? 'bg-[var(--color-bg-sand)] border border-[var(--color-border)] text-[var(--color-secondary)]/50' : 'bg-[var(--color-bg-sand)] border border-[var(--color-border)] text-[var(--color-secondary)] group-hover:text-[var(--color-primary)] group-hover:bg-[var(--color-primary)]/10 group-hover:border-[var(--color-primary)]/20'}`}>
                                   {isCompleted ? <CheckCircle2 className="w-6 h-6" /> : isLessonLocked ? <Lock className="w-5 h-5 opacity-60" /> : <PlayCircle className="w-6 h-6" />}
                                </div>
                                <div className="flex-grow">
                                  <h4 className={`font-bold font-heading text-lg ${isCompleted ? 'text-[var(--color-dark)]' : isLessonLocked ? 'text-[var(--color-secondary)]' : 'text-[var(--color-dark)]'}`}>
                                    {t('learn.lesson')} {idx + 1}: {isRTL ? lesson.title : (lesson.titleEN || lesson.title)}
                                  </h4>
                                  <div className={`flex items-center gap-4 mt-2 text-sm font-medium ${isLessonLocked ? 'text-[var(--color-secondary)]/60' : 'text-[var(--color-secondary)]'}`}>
                                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {lesson.duration}</span>
                                    {lesson.task && <span className={`flex items-center gap-1.5 ${isLessonLocked ? 'text-[var(--color-secondary)]/60' : 'text-[var(--color-accent)]'}`}><Hammer className="w-4 h-4" /> {t('learn.practical_task')}</span>}
                                  </div>
                                </div>
                                {!isLessonLocked && (
                                   <div className="hidden sm:flex px-4 py-2 bg-[var(--color-bg-sand)] border border-[var(--color-border)] rounded-lg text-sm font-bold text-[var(--color-secondary)] group-hover:bg-[var(--color-primary)] group-hover:text-[var(--color-bg-sand)] group-hover:border-[var(--color-primary)] transition-colors">
                                     {isCompleted ? t('learn.review') : t('learn.start_lesson')}
                                   </div>
                                )}
                              </Link>
                            )
                         })}
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             )
          })}

          <div className="bg-[var(--color-dark)] rounded-3xl p-8 flex flex-col items-center text-center mt-12 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
             <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/20">
               <Trophy className="w-10 h-10 text-[var(--color-primary)]" />
             </div>
             <h3 className="text-2xl font-bold font-heading text-[var(--color-bg-sand)] mb-2">{t('learn.final_project')}</h3>
             <p className="text-[var(--color-secondary)] max-w-lg mx-auto mb-6">{t('learn.final_project_desc')}</p>
             <button disabled className="bg-white/10 text-white/50 px-8 py-3 rounded-xl font-bold flex items-center gap-2 cursor-not-allowed">
               <Lock className="w-4 h-4" /> {t('learn.locked')}
             </button>
          </div>

        </div>
      </div>
    </div>
  )
}
