import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, PlayCircle, Star, Wrench, Target, Trophy, Menu, Lock } from 'lucide-react';
import { motion, AnimatePresence, useAnimation } from 'motion/react';
import { coursesData, Lesson } from '../data/courses';
import { useTranslation } from 'react-i18next';
import { useProgress } from '../contexts/ProgressContext';
import { AmbientMotion } from '../components/AmbientMotion';

export default function LessonDetail() {
  const { craftId, lessonId } = useParams<{ craftId: string, lessonId: string }>();
  const navigate = useNavigate();
  const { progress, markLessonComplete, addXP } = useProgress();
  
  const course = craftId ? coursesData[craftId] : undefined;
  
  let lessonData: Lesson | undefined;
  let levelIndex = -1;
  let lessonIndex = -1;

  if (course) {
    for (let i = 0; i < course.levels.length; i++) {
      const idx = course.levels[i].lessons.findIndex(l => l.id === lessonId);
      if (idx !== -1) {
        lessonData = course.levels[i].lessons[idx];
        levelIndex = i;
        lessonIndex = idx;
        break;
      }
    }
  }

  // Quick locking guard
  useEffect(() => {
    if (!course || !lessonData) return;
    
    // Allow if it's the first lesson of the first level
    if (levelIndex === 0 && lessonIndex === 0) return;
    
    // Allow if already completed
    if (progress.completedLessons.includes(lessonId!)) return;
    
    // Check prerequisite
    let prevId: string | null = null;
    if (lessonIndex > 0) {
      prevId = course.levels[levelIndex].lessons[lessonIndex - 1].id;
    } else if (levelIndex > 0) {
      const prevLevelLessons = course.levels[levelIndex - 1].lessons;
      if (prevLevelLessons.length > 0) {
        prevId = prevLevelLessons[prevLevelLessons.length - 1].id;
      }
    }
    
    if (prevId && !progress.completedLessons.includes(prevId)) {
      // If pranked or trying to skip, redirect back to course overview
      console.warn('Access denied: Lesson is locked.');
      navigate(`/learn/${craftId}`, { replace: true });
    }
  }, [course, lessonData, levelIndex, lessonIndex, progress.completedLessons, lessonId, craftId, navigate]);

  const [taskDone, setTaskDone] = useState(false);
  const [taskProgress, setTaskProgress] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<Record<string, boolean>>({}); // Track submission per question
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [lessonCompleted, setLessonCompleted] = useState(false);
  const [xpEarned, setXpEarned] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);
  const [shakeQuestion, setShakeQuestion] = useState(false); // For wrong answer animation
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  // Sync local completion state with global progress
  useEffect(() => {
    if (lessonId && progress.completedLessons.includes(lessonId)) {
      setLessonCompleted(true);
      setTaskDone(true);
      setTaskProgress(100);
    } else {
      setLessonCompleted(false);
      setTaskDone(false);
      setTaskProgress(0);
      setQuizAnswers({});
      setQuizSubmitted({});
      setCurrentQuestionIndex(0);
    }
  }, [lessonId, progress.completedLessons]);
  
  const [animationsDisabled, setAnimationsDisabled] = useState(false);
  const visualControls = useAnimation();

  useEffect(() => {
    const checkDisabled = () => setAnimationsDisabled(localStorage.getItem('disable-animations') === 'true');
    checkDisabled();
    window.addEventListener('storage', checkDisabled);
    return () => window.removeEventListener('storage', checkDisabled);
  }, []);

  useEffect(() => {
    if (animationsDisabled) {
       visualControls.stop();
       return;
    }
    visualControls.start({
      scale: [1, 1.05, 1],
      transition: { duration: 15, repeat: Infinity, ease: 'linear' }
    });
  }, [visualControls, animationsDisabled]);

  if (!course || !lessonData) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[var(--color-bg-sand)]">
        <h2 className="text-3xl font-bold font-heading mb-4 text-[var(--color-dark)]">{isRTL ? 'الدرس غير موجود' : 'Lesson not found'}</h2>
        <Link to={`/learn/${craftId}`} className="text-[var(--color-primary)] font-bold">{t('learn.back_to_path')}</Link>
      </div>
    );
  }

  const levelLessons = course.levels[levelIndex].lessons;
  const progressInLevel = ((lessonIndex + 1) / levelLessons.length) * 100;

  // Using the context for completed lessons
  const completedLessonIds = progress.completedLessons; 
  
  const handleAnswerSelect = (qId: string, optId: string, isCorrect: boolean) => {
    if (quizSubmitted[qId]) return;

    setQuizAnswers(prev => ({ ...prev, [qId]: optId }));
    setQuizSubmitted(prev => ({ ...prev, [qId]: true }));

    if (!isCorrect) {
      setShakeQuestion(true);
      setTimeout(() => setShakeQuestion(false), 500);
    } else {
      setTimeout(() => {
        if (currentQuestionIndex < (lessonData?.quiz?.length || 0) - 1) {
          setCurrentQuestionIndex(prev => prev + 1);
        } else {
          finishLesson();
        }
      }, 1500);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < (lessonData?.quiz?.length || 0) - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      finishLesson();
    }
  };

  const finishLesson = () => {
    if (!lessonCompleted) {
      setLessonCompleted(true);
      const reward = lessonData?.xpReward || 0;
      setXpEarned(reward);
      addXP(reward, 'lesson', lessonId!);
      markLessonComplete(lessonId!, course.levels[levelIndex].id, craftId);
    }
  };

  const getScore = () => {
    let correctCount = 0;
    lessonData?.quiz?.forEach(q => {
      const correctOpt = q.options.find(o => o.isCorrect);
      if (correctOpt && quizAnswers[q.id] === correctOpt.id) {
        correctCount++;
      }
    });
    return correctCount;
  };

  const nextLessonId = () => {
    if (lessonIndex < course.levels[levelIndex].lessons.length - 1) {
      return course.levels[levelIndex].lessons[lessonIndex + 1].id;
    } else if (levelIndex < course.levels.length - 1 && course.levels[levelIndex+1].lessons.length > 0) {
      return course.levels[levelIndex + 1].lessons[0].id;
    }
    return null;
  };

  const prevLessonId = () => {
    if (lessonIndex > 0) {
      return course.levels[levelIndex].lessons[lessonIndex - 1].id;
    } else if (levelIndex > 0) {
      const prevLevelLessons = course.levels[levelIndex - 1].lessons;
      if (prevLevelLessons.length > 0) {
         return prevLevelLessons[prevLevelLessons.length - 1].id;
      }
    }
    return null;
  };

  const nxtId = nextLessonId();
  const prId = prevLessonId();

  const handleTaskComplete = () => {
    if (taskDone) return;
    setTaskProgress(100);
    setTimeout(() => {
      setTaskDone(true);
    }, 400);
  };

  return (
    <div className="bg-[var(--color-bg-sand)] min-h-screen pb-32 flex flex-col relative overflow-hidden transition-colors duration-500">
      <AmbientMotion />
      {/* Top Nav */}
      <div className="bg-[var(--color-card)] border-b border-[var(--color-border)] sticky top-0 z-40 relative shadow-sm">
        <div className="absolute bottom-0 left-0 h-1 bg-[var(--color-primary)]/20 w-full">
           <div className="h-full bg-[var(--color-primary)] transition-all duration-500" style={{ width: `${progressInLevel}%` }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setShowSidebar(!showSidebar)}
              className="lg:hidden p-2 hover:bg-[var(--color-bg-sand)] rounded-lg text-[var(--color-secondary)]"
            >
              <Menu className="w-6 h-6" />
            </button>
            <Link to={`/learn/${craftId}`} className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] flex items-center gap-2 font-bold transition-colors">
              {isRTL ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
              <span className="hidden sm:inline">{t('learn.back_to_path')}</span>
            </Link>
          </div>
          
          <div className="hidden md:block font-bold text-[var(--color-dark)] font-heading">
            {isRTL ? course.levels[levelIndex].title : (course.levels[levelIndex].titleEN || course.levels[levelIndex].title)}
          </div>
          <div className="flex items-center gap-3">
             <button
               onClick={() => {
                 const current = localStorage.getItem('disable-animations') === 'true';
                 localStorage.setItem('disable-animations', (!current).toString());
                 window.dispatchEvent(new Event('storage'));
               }}
               className="p-2 hover:bg-[var(--color-bg-sand)] rounded-lg text-[var(--color-secondary)] transition-colors"
               title={isRTL ? "إيقاف/تشغيل الحركات" : "Toggle animations"}
             >
               <Star className="w-5 h-5" />
             </button>
             <div className="text-sm font-bold text-[var(--color-primary)] bg-[var(--color-primary)]/10 px-3 py-1 rounded-md">
                {t('learn.lesson')} {lessonIndex + 1} / {levelLessons.length}
             </div>
          </div>
        </div>
      </div>

      <div className="flex-grow max-w-7xl mx-auto w-full flex flex-col lg:flex-row relative">
         
         {/* Sidebar Navigation */}
         <div className={`fixed inset-y-0 ${isRTL ? 'right-0 border-l' : 'left-0 border-r'} z-30 transform lg:transform-none lg:static w-80 bg-[var(--color-card)] border-[var(--color-border)] overflow-y-auto transition-transform duration-300 ease-in-out ${showSidebar ? 'translate-x-0' : (isRTL ? 'translate-x-full lg:translate-x-0' : '-translate-x-full lg:translate-x-0')}`} style={{ top: '64px', height: 'calc(100vh - 64px)' }}>
           <div className="p-6">
             <h3 className="font-heading font-bold text-lg mb-6 text-[var(--color-dark)]">{t('learn.stages')}</h3>
             <div className="space-y-6">
               {course.levels.map((level, lIdx) => {
                 const isLevelCompleted = level.lessons.every(l => completedLessonIds.includes(l.id));
                 const completedInLevel = level.lessons.filter(l => completedLessonIds.includes(l.id)).length;
                 const progressPercent = Math.round((completedInLevel / level.lessons.length) * 100);

                 return (
                   <div key={level.id}>
                     <div className="mb-3">
                       <h4 className="font-bold text-sm text-[var(--color-dark)] mb-2">{isRTL ? level.title : (level.titleEN || level.title)}</h4>
                       <div className="h-1.5 w-full bg-[var(--color-bg-sand)] rounded-full overflow-hidden border border-[var(--color-border)]">
                         <div className="h-full bg-[var(--color-primary)]" style={{ width: `${progressPercent}%` }} />
                       </div>
                     </div>
                     <div className="space-y-1">
                       {level.lessons.map((lesson, idx) => {
                         const isActive = lesson.id === lessonId;
                         const isCompleted = completedLessonIds.includes(lesson.id);
                         const isLocked = !isCompleted && !isActive && (idx > 0 && !completedLessonIds.includes(level.lessons[idx-1].id)); // simplified locking

                         return (
                           <Link 
                             key={lesson.id}
                             to={isLocked ? '#' : `/learn/${course.craftId}/lesson/${lesson.id}`}
                             className={`flex items-center gap-3 p-3 rounded-xl transition-colors border border-transparent ${isActive ? 'bg-[var(--color-bg-sand)] border-[var(--color-primary)]/20' : (isLocked ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[var(--color-bg-sand)]')}`}
                           >
                             <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${isCompleted ? 'bg-green-100/50 text-green-500 border border-green-200' : (isActive ? 'bg-[var(--color-primary)]/20 text-[var(--color-primary)]' : 'bg-[var(--color-bg-sand)] border border-[var(--color-border)] text-[var(--color-secondary)]')}`}>
                               {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : (isLocked ? <Lock className="w-3 h-3" /> : <PlayCircle className={`w-4 h-4 ${isRTL ? 'mr-0.5' : 'ml-0.5'}`} />)}
                             </div>
                             <span className={`text-sm font-medium line-clamp-1 ${isActive ? 'text-[var(--color-primary)] font-bold' : 'text-[var(--color-secondary)]'}`}>
                               {idx + 1}. {isRTL ? lesson.title : lesson.title}
                             </span>
                           </Link>
                         )
                       })}
                     </div>
                   </div>
                 )
               })}
             </div>
           </div>
         </div>

         {/* Overlay for mobile sidebar */}
         {showSidebar && (
           <div 
             className="fixed inset-0 bg-black/20 z-20 lg:hidden"
             style={{ top: '64px' }}
             onClick={() => setShowSidebar(false)}
           />
         )}

         {/* Main Content Area */}
         <div className="flex-grow p-4 sm:p-6 lg:p-10 w-full overflow-x-hidden">
            <div className="max-w-3xl mx-auto">
              
              {/* Header */}
              <div className="mb-8">
                 <h1 className="text-3xl md:text-4xl font-heading font-bold text-[var(--color-dark)] leading-tight">
                   {isRTL ? lessonData.title : (lessonData.titleEN || lessonData.title)}
                 </h1>
              </div>

              {/* Visual Scene Area (Animation / Illustration) */}
              <motion.div 
                 onMouseMove={(e: any) => {
                   if (animationsDisabled) return;
                   const bounds = e.currentTarget.getBoundingClientRect();
                   const x = (e.clientX - bounds.left) / bounds.width - 0.5;
                   const y = (e.clientY - bounds.top) / bounds.height - 0.5;
                   visualControls.start({ x: x * -20, y: y * -20, scale: 1.05, transition: { type: 'spring', stiffness: 300, damping: 30 } });
                 }}
                 onMouseLeave={() => {
                   if (animationsDisabled) return;
                   visualControls.start({ x: 0, y: 0, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 30 } });
                 }}
                 className="bg-[var(--color-card)] rounded-3xl overflow-hidden aspect-video relative shadow-sm border border-[var(--color-border)] mb-12 flex items-center justify-center group"
              >
                 {lessonData.visualType === 'animation' ? (
                   <div className="w-full h-full relative bg-[#F9F6F0] dark:bg-[#1E1C1A] flex items-center justify-center transition-colors duration-500">
                      {lessonData.visualUrls && lessonData.visualUrls.length > 0 ? (
                        <div className="relative w-full h-full overflow-hidden">
                           <motion.img animate={visualControls} src={lessonData.visualUrls[0]} alt="Animation representation" className="absolute inset-0 w-[110%] h-[110%] -left-[5%] -top-[5%] object-cover mix-blend-multiply dark:mix-blend-lighten opacity-90 transition-opacity duration-500" />
                           <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-sand)]/80 via-transparent to-transparent"></div>
                           <div className="absolute inset-0 bg-black/5 dark:bg-black/40 pointer-events-none transition-colors duration-500"></div>
                           <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[var(--color-card)]/90 backdrop-blur-md px-5 py-2.5 flex items-center gap-3 rounded-full shadow-lg text-sm font-bold text-[var(--color-dark)] border border-[var(--color-border)] transform transition-transform group-hover:scale-105">
                              <motion.div 
                                animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }} 
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                className="w-3 h-3 bg-[#3A7B85] dark:bg-[#6BB5C1] rounded-full shadow-[0_0_8px_rgba(58,123,133,0.6)]"
                              />
                              {t('learn.playing')}
                           </div>
                        </div>
                      ) : (
                        <div className="text-[var(--color-secondary)] font-bold flex flex-col items-center gap-4">
                           <PlayCircle className="w-16 h-16 opacity-50" />
                           <p>مساحة عرض الرسوم المتحركة الخفيفة (Lottie/SVG)</p>
                        </div>
                      )}
                   </div>
                 ) : (
                   <div className="w-full h-full relative bg-[#F9F6F0] dark:bg-[#1E1C1A] flex items-center justify-center cursor-pointer selection-none overflow-hidden transition-colors duration-500">
                      {lessonData.visualUrls && lessonData.visualUrls.length > 0 ? (
                        <>
                          <motion.img animate={visualControls} src={lessonData.visualUrls[0]} alt="Illustration" className="absolute inset-0 w-[110%] h-[110%] -left-[5%] -top-[5%] object-cover opacity-95 dark:opacity-80" />
                          <div className="absolute inset-0 bg-black/5 dark:bg-black/30 pointer-events-none transition-colors duration-500"></div>
                        </>
                      ) : (
                        <div className="text-[var(--color-secondary)] font-bold">مساحة عرض الرسم التوضيحي الثابت</div>
                      )}
                      
                      <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} bg-[var(--color-card)]/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold text-[var(--color-dark)] border border-[var(--color-border)] shadow-sm`}>
                        {t('learn.illustration')}
                      </div>
                   </div>
                 )}
              </motion.div>

              {/* Content Tabs / Sections */}
              <div className="space-y-12">
                
                {/* Summary / Notes */}
                <section className="bg-transparent relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-accent)]/5 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-[3s]" />
                  <h2 className="text-2xl font-bold font-heading mb-6 flex items-center gap-3 pb-2 text-[var(--color-dark)] relative z-10">
                    <Star className="w-6 h-6 text-[var(--color-primary)]" />
                    {t('learn.summary')}
                  </h2>
                  <div className="flex flex-col gap-3">
                    {(isRTL ? lessonData.summary : (lessonData.summaryEN || lessonData.summary)).map((point, idx) => (
                         <motion.div 
                           initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
                           key={idx} 
                           className="flex items-center gap-4 bg-[var(--color-card)] p-4 md:p-5 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/40 hover:shadow-[0_8px_30px_rgba(198,123,75,0.08)] dark:shadow-[0_2px_10px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_8px_30px_rgba(212,147,106,0.15)] transition-all duration-300 relative overflow-hidden group/item cursor-default"
                         >
                          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/0 via-[var(--color-primary)]/5 to-[var(--color-primary)]/0 translate-x-[-100%] group-hover/item:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                          <div className="bg-[#C67B4B]/10 dark:bg-[#D4936A]/10 text-[#C67B4B] dark:text-[#D4936A] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold border border-[#C67B4B]/20 dark:border-[#D4936A]/20 transition-transform group-hover/item:scale-110 duration-300">
                            {idx + 1}
                          </div>
                          <span className="text-[var(--color-dark)] font-medium leading-relaxed relative z-10">{point}</span>
                        </motion.div>
                    ))}
                  </div>
                </section>

                {/* Practical Task */}
                {lessonData.task && (
                  <motion.section 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-transparent rounded-3xl p-8 md:p-10 border-2 border-dashed border-[#C67B4B]/40 dark:border-[#D4936A]/40 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-[#C67B4B]/5 dark:bg-[#D4936A]/5 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
                        
                    <div className="flex items-start md:items-center gap-8 flex-col md:flex-row relative z-10">
                      <div className="flex-grow">
                        <h2 className="text-2xl font-bold font-heading mb-2 flex items-center gap-3 text-[var(--color-dark)]">
                          <Target className="w-6 h-6 text-[var(--color-primary)]" />
                          {t('learn.try_yourself')}
                        </h2>
                        <h3 className="font-bold text-lg mb-2 text-[var(--color-dark)]">
                          {isRTL ? lessonData.task.title : (lessonData.task.titleEN || lessonData.task.title)}
                        </h3>
                        <p className="text-[var(--color-secondary)] leading-relaxed">
                          {isRTL ? lessonData.task.description : (lessonData.task.descriptionEN || lessonData.task.description)}
                        </p>
                      </div>
                      
                      <button 
                        onClick={handleTaskComplete}
                        disabled={taskDone}
                        className={`group relative flex-shrink-0 flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold transition-all overflow-hidden w-full md:w-auto shadow-sm ${taskDone ? 'bg-[#6B705C]/10 text-[#6B705C] dark:text-[#8B9472] border-2 border-[#6B705C]/30' : 'bg-[var(--color-card)] border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:border-[#3A7B85] hover:text-[#3A7B85] dark:hover:border-[#6BB5C1] dark:hover:text-[#6BB5C1]'}`}
                      >
                        <div 
                          className="absolute inset-0 bg-[#6B705C]/20 transition-all duration-500 ease-out z-0"
                          style={{ width: `${taskProgress}%` }}
                        />
                        <div className="relative z-10 flex items-center gap-3">
                            <div className={`w-6 h-6 rounded flex items-center justify-center border-2 transition-colors ${taskDone ? 'bg-[#6B705C] border-[#6B705C] dark:bg-[#8B9472] dark:border-[#8B9472] text-[var(--color-bg-sand)]' : 'border-current'}`}>
                              {taskDone && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}><CheckCircle2 className="w-4 h-4" /></motion.div>}
                            </div>
                            {taskDone ? t('learn.task_done') : t('learn.click_when_done')}
                        </div>
                      </button>
                    </div>
                  </motion.section>
                )}

                {/* Quick Quiz */}
                {lessonData.quiz && lessonData.quiz.length > 0 && taskDone && (
                  <motion.section 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-transparent"
                  >
                    <h2 className="text-2xl font-bold font-heading mb-6 flex items-center gap-3 border-b border-[var(--color-border)] pb-4 text-[var(--color-dark)]">
                      <Star className="w-6 h-6 text-[var(--color-accent)]" />
                      {t('learn.quick_quiz')}
                    </h2>

                    {currentQuestionIndex < lessonData.quiz.length ? (
                      <div className="space-y-8">
                        {(() => {
                          const q = lessonData.quiz![currentQuestionIndex];
                          const userAnswer = quizAnswers[q.id];
                          const isSubmitted = quizSubmitted[q.id];
                          
                          return (
                            <motion.div 
                                key={q.id}
                                initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
                                animate={shakeQuestion ? { x: [-10, 10, -10, 10, 0] } : { opacity: 1, x: 0 }}
                                transition={shakeQuestion ? { duration: 0.4 } : { duration: 0.3 }}
                                className="bg-[var(--color-card)] rounded-3xl p-6 md:p-8 shadow-sm border border-[var(--color-border)]"
                            >
                              <div className="text-sm font-bold text-[var(--color-secondary)] mb-4 flex items-center justify-between">
                                <span>{t('learn.question')} {currentQuestionIndex + 1} / {lessonData.quiz!.length}</span>
                                <div className="flex gap-1">
                                  {lessonData.quiz!.map((_, i) => (
                                    <div key={i} className={`w-2 h-2 rounded-full ${i === currentQuestionIndex ? 'bg-[var(--color-primary)]' : i < currentQuestionIndex ? 'bg-green-500' : 'bg-[var(--color-border)]'}`}></div>
                                  ))}
                                </div>
                              </div>
                              <h3 className="font-bold text-xl text-[var(--color-dark)] mb-6 leading-relaxed">
                                {isRTL ? q.question : (q.questionEN || q.question)}
                              </h3>
                              <div className="space-y-3">
                                {q.options.map(opt => {
                                  const isSelected = userAnswer === opt.id;
                                  let btnClass = 'bg-transparent border-[var(--color-border)] text-[var(--color-dark)] hover:border-[var(--color-primary)]';
                                  let icon = <div className="w-5 h-5 rounded-full border-2 border-[var(--color-border)] group-hover:border-[var(--color-primary)] transition-colors"></div>;

                                  if (isSubmitted) {
                                    if (opt.isCorrect) {
                                      btnClass = 'bg-[#3A7B85]/10 border-[#3A7B85] text-[#3A7B85] dark:bg-[#6BB5C1]/10 dark:border-[#6BB5C1] dark:text-[#6BB5C1] scale-[1.02] transform transition-transform';
                                      icon = <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }}><CheckCircle2 className="w-5 h-5 text-current" /></motion.div>;
                                    } else if (isSelected && !opt.isCorrect) {
                                      btnClass = 'bg-[#C67B4B]/10 border-[#C67B4B] text-[#C67B4B] dark:bg-[#D4936A]/10 dark:border-[#D4936A] dark:text-[#D4936A] opacity-90'; 
                                      icon = <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-5 h-5 rounded-full bg-current flex items-center justify-center text-white"><span className="w-2.5 h-0.5 bg-white rotate-45 absolute"></span><span className="w-2.5 h-0.5 bg-white -rotate-45 absolute"></span></motion.div>;
                                    } else {
                                      btnClass = 'bg-transparent border-[var(--color-border)] text-[var(--color-secondary)] opacity-50';
                                    }
                                  }

                                  return (
                                    <button
                                      key={opt.id}
                                      disabled={isSubmitted}
                                      onClick={() => handleAnswerSelect(q.id, opt.id, opt.isCorrect)}
                                      className={`group w-full ${isRTL ? 'text-right' : 'text-left'} px-6 py-4 rounded-xl border-2 font-medium transition-all flex items-center justify-between ${btnClass}`}
                                    >
                                      <span>{isRTL ? opt.text : (opt.textEN || opt.text)}</span>
                                      {icon}
                                    </button>
                                  )
                                })}
                              </div>

                              {isSubmitted && (
                                 <motion.div 
                                   initial={{ opacity: 0, height: 0, y: -10 }}
                                   animate={{ opacity: 1, height: 'auto', y: 0 }}
                                   className={`mt-6 p-5 rounded-2xl border relative overflow-hidden ${q.options.find(o => o.id === userAnswer)?.isCorrect ? 'bg-[#3A7B85]/10 border-[#3A7B85]/30' : 'bg-[#C67B4B]/10 border-[#C67B4B]/30'}`}
                                 >
                                   <div className={`absolute -right-4 -top-4 w-16 h-16 rounded-full blur-xl opacity-50 ${q.options.find(o => o.id === userAnswer)?.isCorrect ? 'bg-[#3A7B85]' : 'bg-[#C67B4B]'}`}></div>
                                   <strong className={`block mb-2 font-bold relative z-10 ${q.options.find(o => o.id === userAnswer)?.isCorrect ? 'text-[#3A7B85] dark:text-[#6BB5C1]' : 'text-[#C67B4B] dark:text-[#D4936A]'}`}>
                                      {q.options.find(o => o.id === userAnswer)?.isCorrect ? t('learn.correct') : t('learn.incorrect')}
                                   </strong>
                                   <span className={`text-sm leading-relaxed relative z-10 ${q.options.find(o => o.id === userAnswer)?.isCorrect ? 'text-black dark:text-white' : 'text-black dark:text-white'}`}>
                                     {isRTL ? q.explanation : (q.explanationEN || q.explanation)}
                                   </span>
                                   
                                   {!q.options.find(o => o.id === userAnswer)?.isCorrect && (
                                     <button 
                                       onClick={handleNextQuestion}
                                       className="mt-4 px-4 py-2 bg-[var(--color-card)] text-[var(--color-dark)] rounded-lg text-sm font-bold border border-[var(--color-border)] hover:bg-[var(--color-bg-sand)] transition-colors"
                                     >
                                        {t('learn.continue')}
                                     </button>
                                   )}
                                 </motion.div>
                              )}
                            </motion.div>
                          )
                        })()}
                      </div>
                    ) : (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-[var(--color-card)] rounded-3xl p-8 shadow-sm border border-[var(--color-border)] text-center"
                      >
                         <div className="w-20 h-20 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-6">
                           <Trophy className="w-10 h-10" />
                         </div>
                         <h3 className="text-2xl font-bold font-heading text-[var(--color-dark)] mb-2">
                           {t('learn.quiz_completed')}
                         </h3>
                         <p className="text-lg text-[var(--color-secondary)] mb-6">
                           {t('learn.score_msg', { score: getScore(), total: lessonData.quiz.length })}
                         </p>
                         
                         <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            {nxtId ? (
                              <button 
                                onClick={() => navigate(`/learn/${craftId}/lesson/${nxtId}`)}
                                className="px-8 py-4 bg-[var(--color-dark)] text-white hover:bg-black rounded-xl font-bold transition-all shadow-sm flex items-center gap-2"
                              >
                                {t('learn.next_lesson')}
                                {isRTL ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                              </button>
                            ) : (
                              <Link 
                                to={`/learn/${craftId}/finished`} 
                                className="px-8 py-4 bg-[var(--color-dark)] text-white hover:bg-black rounded-xl font-bold transition-all shadow-sm flex items-center gap-2"
                              >
                                {t('learn.finish_path')}
                                <Trophy className="w-5 h-5" />
                              </Link>
                            )}
                         </div>
                      </motion.div>
                    )}
                  </motion.section>
                )}

              </div>

              {/* Navigation Arrows */}
              <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[var(--color-border)] pt-10">
                 {prId ? (
                   <Link 
                    to={`/learn/${craftId}/lesson/${prId}`} 
                    className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-secondary)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/40 transition-all group shadow-sm"
                   >
                     <div className={`transition-transform ${isRTL ? 'group-hover:translate-x-1' : 'group-hover:-translate-x-1'}`}>
                       {isRTL ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
                     </div>
                     <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                       <div className="text-[10px] uppercase tracking-wider opacity-50 mb-0.5">{t('learn.prev_lesson')}</div>
                       <div className="font-bold text-sm">
                          {(() => {
                            let pL;
                            if (lessonIndex > 0) pL = course.levels[levelIndex].lessons[lessonIndex-1];
                            else if (levelIndex > 0) pL = course.levels[levelIndex-1].lessons[course.levels[levelIndex-1].lessons.length-1];
                            return pL ? (isRTL ? pL.title : (pL.titleEN || pL.title)) : t('learn.prev_lesson');
                          })()}
                       </div>
                     </div>
                   </Link>
                 ) : <div className="hidden sm:block" />}

                 {nxtId ? (
                   <button 
                     disabled={!lessonCompleted}
                     onClick={() => navigate(`/learn/${craftId}/lesson/${nxtId}`)}
                     className={`w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl transition-all shadow-lg ${lessonCompleted ? 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] hover:shadow-[var(--color-primary)]/20' : 'bg-gray-200 dark:bg-gray-800 text-gray-400 dark:text-gray-600 border border-transparent cursor-not-allowed'}`}
                   >
                     <div className={`${isRTL ? 'text-left' : 'text-right'}`}>
                       <div className="text-[10px] uppercase tracking-wider opacity-70 mb-0.5">{t('learn.next_lesson')}</div>
                       <div className="font-bold text-sm">
                          {(() => {
                            let nL;
                            if (lessonIndex < course.levels[levelIndex].lessons.length - 1) nL = course.levels[levelIndex].lessons[lessonIndex+1];
                            else if (levelIndex < course.levels.length - 1) nL = course.levels[levelIndex+1].lessons[0];
                            return nL ? (isRTL ? nL.title : (nL.titleEN || nL.title)) : t('learn.next_lesson');
                          })()}
                       </div>
                     </div>
                     {!lessonCompleted ? (
                       <Lock className="w-5 h-5 opacity-40" />
                     ) : (
                       <div className={`transition-transform ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}>
                          {isRTL ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                       </div>
                     )}
                   </button>
                 ) : (
                    lessonCompleted ? (
                      <Link to={`/learn/${craftId}`} className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-[var(--color-dark)] text-white hover:bg-black rounded-2xl font-bold transition-all shadow-xl shadow-black/10 overflow-hidden group">
                        <span className="relative z-10">{t('learn.finish_path')}</span>
                        <Trophy className="w-5 h-5 group-hover:scale-125 transition-transform relative z-10" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                      </Link>
                    ) : <div className="hidden sm:block" />
                 )}
              </div>

              {/* Completion Toast */}
              <AnimatePresence>
                {lessonCompleted && (
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[var(--color-dark)] text-white rounded-2xl px-6 py-4 shadow-2xl flex items-center gap-4 z-50 border border-gray-800"
                  >
                    <div className="bg-green-500/20 p-2 rounded-full border border-green-500/30">
                      <Trophy className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{t('learn.lesson_completed')}</h4>
                      <p className="text-xs text-gray-400 mt-0.5">+{xpEarned} {t('learn.xp')}</p>
                      <p className="text-[10px] text-green-400 mt-1 italic max-w-[180px]">
                        {craftId === 'sewing' ? t('sewing.lesson_done') : ''}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
         </div>
      </div>
    </div>
  )
}
