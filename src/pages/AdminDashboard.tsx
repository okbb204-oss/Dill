import React, { useState, useEffect } from 'react';
import { Settings, Plus, Sparkles, FileJson, CheckCircle2, AlertCircle, Loader2, HelpCircle, ChevronLeft, ChevronRight, BookOpen, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { generateLearningPath, generateQuizFromSummary, GeminiError } from '../services/geminiService';

interface GeneratedItem {
  id: string;
  type: 'path' | 'quiz';
  title: string;
  summary: string;
  json: string;
  timestamp: Date;
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'path' | 'quiz'>('path');

  // Path Generator State
  const [craftName, setCraftName] = useState('');
  const [craftDesc, setCraftDesc] = useState('');
  
  // Quiz Generator State
  const [summaryText, setSummaryText] = useState('');

  // Shared state
  const [generatedPrompt, setGeneratedPrompt] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<GeneratedItem[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const addToHistory = (type: 'path' | 'quiz', title: string, summary: string, json: string) => {
    const newItem: GeneratedItem = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      title,
      summary,
      json,
      timestamp: new Date(),
    };
    setHistory(prev => [newItem, ...prev]);
    setCurrentSlide(0); // Reset to latest
  };

  const handleGeneratePath = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setGeneratedPrompt(null);
    
    if (!craftName.trim()) {
      setError(isRTL ? 'الرجاء إدخال اسم الحرفة' : 'Please enter the craft name');
      return;
    }
    if (!craftDesc.trim()) {
      setError(isRTL ? 'الرجاء إدخال وصف مبسط للحرفة' : 'Please enter a brief description');
      return;
    }

    setIsLoading(true);

    try {
      const result = await generateLearningPath(craftName, craftDesc);
      const parsed = JSON.parse(result);
      const jsonStr = JSON.stringify(parsed, null, 2);
      setGeneratedPrompt(jsonStr);
      addToHistory('path', craftName, craftDesc, jsonStr);
    } catch (err: any) {
      handleError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateQuiz = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setGeneratedPrompt(null);
    
    if (!summaryText.trim()) {
      setError(isRTL ? 'الرجاء إدخال ملخص الدرس' : 'Please enter the lesson summary');
      return;
    }

    setIsLoading(true);

    try {
      const result = await generateQuizFromSummary(summaryText);
      const parsed = JSON.parse(result);
      const jsonStr = JSON.stringify(parsed, null, 2);
      setGeneratedPrompt(jsonStr);
      addToHistory('quiz', isRTL ? 'اختبار مولد' : 'Generated Quiz', summaryText.length > 60 ? summaryText.substring(0, 60) + '...' : summaryText, jsonStr);
    } catch (err: any) {
      handleError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleError = (err: any) => {
    console.error(err);
    if (err instanceof GeminiError) {
      if (err.code === 'MISSING_KEY') {
        setError(isRTL ? 'مفتاح API مفقود. يرجى تهيئته في الإعدادات.' : 'API Key missing. Please configure it in settings.');
      } else {
        setError((isRTL ? 'خطأ في توليد المحتوى: ' : 'Content generation error: ') + err.message);
      }
    } else if (err instanceof SyntaxError) {
       setError(isRTL ? 'خطأ في صياغة البيانات المستلمة من الذكاء الاصطناعي.' : 'Received corrupted data from AI.');
    } else {
      setError(isRTL ? 'حدث خطأ غير متوقع في الشبكة.' : 'An unexpected network error occurred.');
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg-sand)] pb-24">
      <div className="bg-[var(--color-dark)] text-white pt-24 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white/10 p-2 rounded-lg">
               <Settings className="w-8 h-8 text-[var(--color-primary)]" />
            </div>
            <h1 className="text-3xl font-heading font-bold">{isRTL ? 'لوحة تحكم النظام' : 'System Dashboard'}</h1>
          </div>
          <p className="text-gray-300">{isRTL ? 'أدوات إضافة مسارات تعليمية جديدة وتوليد المحتوى بذكاء.' : 'Tools to add new learning paths and dynamically generate content.'}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-8">
         <div className="flex bg-[var(--color-card)] p-1 rounded-xl w-fit mb-6 border border-[var(--color-border)]">
           <button 
             onClick={() => { setActiveTab('path'); setGeneratedPrompt(null); setError(null); }}
             className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-colors flex items-center gap-2 ${activeTab === 'path' ? 'bg-[var(--color-primary)] text-white' : 'text-[var(--color-secondary)] hover:bg-[var(--color-bg-sand)]'}`}
           >
             <Plus className="w-4 h-4" />
             {isRTL ? 'توليد مسار حرفة' : 'Generate Path'}
           </button>
           <button 
             onClick={() => { setActiveTab('quiz'); setGeneratedPrompt(null); setError(null); }}
             className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-colors flex items-center gap-2 ${activeTab === 'quiz' ? 'bg-[var(--color-primary)] text-white' : 'text-[var(--color-secondary)] hover:bg-[var(--color-bg-sand)]'}`}
           >
             <HelpCircle className="w-4 h-4" />
             {isRTL ? 'توليد اختبار (Quiz)' : 'Generate Quiz'}
           </button>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Form */}
            <div className="bg-[var(--color-card)] p-8 rounded-3xl shadow-sm border border-[var(--color-border)]">
               <h2 className="text-xl font-bold font-heading mb-6 flex items-center gap-2 text-[var(--color-dark)]">
                 <Sparkles className="w-5 h-5 text-[var(--color-primary)]" />
                 {activeTab === 'path' 
                    ? (isRTL ? 'إضافة مسار تعليمي جديد' : 'Add New Learning Path')
                    : (isRTL ? 'توليد اختبار من ملخص' : 'Generate Quiz from Summary')}
               </h2>

               <form onSubmit={activeTab === 'path' ? handleGeneratePath : handleGenerateQuiz} className="space-y-5">
                 <AnimatePresence mode="wait">
                   {error && (
                     <motion.div 
                       initial={{ opacity: 0, y: -10 }} 
                       animate={{ opacity: 1, y: 0 }} 
                       exit={{ opacity: 0, height: 0 }}
                       className="bg-red-50 text-red-600 p-4 rounded-xl flex items-start gap-3 border border-red-100"
                     >
                       <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                       <p className="font-medium text-sm leading-snug">{error}</p>
                     </motion.div>
                   )}
                 </AnimatePresence>

                 {activeTab === 'path' ? (
                   <>
                     <div>
                       <label className="block text-sm font-bold text-[var(--color-secondary)] mb-2">{isRTL ? 'اسم الحرفة' : 'Craft Name'}</label>
                       <input 
                         type="text" 
                         value={craftName}
                         onChange={e => {
                           setCraftName(e.target.value);
                           if (error) setError(null);
                         }}
                         placeholder={isRTL ? 'مثال: الخزف الفني، ميكانيك السيارات...' : 'E.g., Artisan Pottery, Auto Mechanics...'}
                         className={`w-full border-2 ${error && !craftName.trim() ? 'border-red-300 focus:border-red-500' : 'border-[var(--color-border)] focus:border-[var(--color-primary)]'} rounded-xl px-4 py-3 focus:outline-none transition-colors bg-[var(--color-bg-sand)] text-[var(--color-dark)] ${isRTL ? 'text-right' : 'text-left'}`}
                         disabled={isLoading}
                       />
                     </div>
                     
                     <div>
                       <label className="block text-sm font-bold text-[var(--color-secondary)] mb-2">{isRTL ? 'وصف مختصر' : 'Brief Description'}</label>
                       <textarea 
                         value={craftDesc}
                         onChange={e => {
                           setCraftDesc(e.target.value);
                           if (error) setError(null);
                         }}
                         placeholder={isRTL ? 'اشرح طبيعة الحرفة والمهارات الأساسية...' : 'Explain the craft specifics and basic skills...'}
                         rows={4}
                         className={`w-full border-2 ${error && !craftDesc.trim() ? 'border-red-300 focus:border-red-500' : 'border-[var(--color-border)] focus:border-[var(--color-primary)]'} rounded-xl px-4 py-3 focus:outline-none transition-colors bg-[var(--color-bg-sand)] text-[var(--color-dark)] ${isRTL ? 'text-right' : 'text-left'}`}
                         disabled={isLoading}
                       />
                     </div>
                   </>
                 ) : (
                   <div>
                     <label className="block text-sm font-bold text-[var(--color-secondary)] mb-2">{isRTL ? 'ملخص الدرس (أو النص الكامل)' : 'Lesson Summary (or Text)'}</label>
                     <textarea 
                       value={summaryText}
                       onChange={e => {
                         setSummaryText(e.target.value);
                         if (error) setError(null);
                       }}
                       placeholder={isRTL ? 'أدخل نقاط الدرس هنا لتوليد 3 أسئلة بناءً عليها...' : 'Enter lesson points here to generate 3 questions based on them...'}
                       rows={6}
                       className={`w-full border-2 ${error && !summaryText.trim() ? 'border-red-300 focus:border-red-500' : 'border-[var(--color-border)] focus:border-[var(--color-primary)]'} rounded-xl px-4 py-3 focus:outline-none transition-colors bg-[var(--color-bg-sand)] text-[var(--color-dark)] ${isRTL ? 'text-right' : 'text-left'} resize-none`}
                       disabled={isLoading}
                     />
                   </div>
                 )}

                 <button 
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-[var(--color-dark)] text-[var(--color-bg-sand)] font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-black transition-colors disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                 >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        {isRTL ? 'جاري التوليد...' : 'Generating...'}
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5 text-[var(--color-primary)]" />
                        {isRTL ? 'توليد المحتوى' : 'Generate Content'}
                      </>
                    )}
                 </button>
               </form>
            </div>

            {/* Prompt output */}
            <div className="bg-[#1A1816] rounded-3xl p-8 text-white flex flex-col relative overflow-hidden ring-1 ring-white/10 shadow-xl min-h-[400px]">
               <div className={`absolute top-0 ${isRTL ? 'left-0' : 'right-0'} p-4 opacity-10 pointer-events-none`}>
                 <FileJson className="w-32 h-32" />
               </div>
               
               <h2 className="text-xl font-bold font-heading mb-4 text-[#c67b4b] relative z-10">
                 {isRTL ? 'المحتوى المُوَلّد (JSON)' : 'Generated Content (JSON)'}
               </h2>
               <p className="text-sm text-gray-400 mb-6 relative z-10">
                 {isRTL ? 'جاهز للاستخدام المباشر في المنصة.' : 'Ready to be imported directly into the platform.'}
               </p>
               
               {isLoading ? (
                 <div className="flex-grow flex flex-col items-center justify-center text-gray-400 relative z-10 space-y-4">
                   <div className="relative">
                     <div className="w-12 h-12 border-4 border-gray-700 border-t-[var(--color-primary)] rounded-full animate-spin"></div>
                     <Sparkles className="w-4 h-4 text-[var(--color-primary)] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                   </div>
                   <p className="animate-pulse">{isRTL ? 'يُرجى الانتظار، جاري معالجة البيانات بواسطة الذكاء الاصطناعي...' : 'Please wait, processing data with AI...'}</p>
                 </div>
               ) : (
                 <div className="flex-grow bg-black/60 rounded-xl p-4 border border-white/10 font-mono text-sm text-gray-300 whitespace-pre-wrap overflow-y-auto relative z-10 select-all custom-scrollbar flex flex-col" dir="ltr" style={{ textAlign: 'left' }}>
                    {generatedPrompt ? (
                      <>{generatedPrompt}</>
                    ) : (
                      <span className="text-gray-600 m-auto">
                        {isRTL ? '// أدخل البيانات واضغط توليد...' : '// Fill details and generate...'}
                      </span>
                    )}
                 </div>
               )}

               {generatedPrompt && !isLoading && (
                 <button 
                   onClick={() => navigator.clipboard.writeText(generatedPrompt)}
                   className="mt-4 bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors relative z-10 cursor-pointer"
                 >
                   <CheckCircle2 className="w-5 h-5" />
                   {isRTL ? 'نسخ الكود' : 'Copy Code'}
                 </button>
               )}
            </div>
           {/* Recently Generated Carousel */}
          {history.length > 0 && (
            <div className="mt-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold font-heading text-[var(--color-dark)] flex items-center gap-3">
                  <Clock className="w-6 h-6 text-[var(--color-primary)]" />
                  {isRTL ? 'المحتوى المُولّد حديثاً' : 'Recently Generated'}
                </h2>
                <div className="flex items-center gap-2">
                  <button 
                    type="button"
                    onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
                    disabled={currentSlide === 0}
                    className="p-2 rounded-full bg-white border border-[var(--color-border)] text-[var(--color-secondary)] hover:text-[var(--color-primary)] disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm cursor-pointer"
                  >
                    {isRTL ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
                  </button>
                  <button 
                    type="button"
                    onClick={() => setCurrentSlide(prev => Math.min(history.length - 1, prev + 1))}
                    disabled={currentSlide === history.length - 1}
                    className="p-2 rounded-full bg-white border border-[var(--color-border)] text-[var(--color-secondary)] hover:text-[var(--color-primary)] disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm cursor-pointer"
                  >
                    {isRTL ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="relative overflow-hidden px-4 -mx-4 min-h-[220px]">
                <motion.div 
                  className="flex gap-6"
                  animate={{ x: isRTL ? (currentSlide * (320 + 24)) : -(currentSlide * (320 + 24)) }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {history.map((item) => (
                    <motion.div 
                      key={item.id}
                      className="flex-shrink-0 w-[320px] bg-white border border-[var(--color-border)] rounded-2xl p-6 shadow-md hover:shadow-lg transition-all cursor-pointer group"
                      onClick={() => {
                        setGeneratedPrompt(item.json);
                        setActiveTab(item.type);
                        window.scrollTo({ top: 400, behavior: 'smooth' });
                      }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-2 rounded-lg ${item.type === 'path' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'}`}>
                          {item.type === 'path' ? <BookOpen className="w-5 h-5" /> : <HelpCircle className="w-5 h-5" />}
                        </div>
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                          {item.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                      <h3 className="font-bold text-[var(--color-dark)] group-hover:text-[var(--color-primary)] transition-colors mb-2 line-clamp-1">{item.title}</h3>
                      <p className="text-xs text-[var(--color-secondary)] line-clamp-3 leading-relaxed">{item.summary}</p>
                      
                      <div className="mt-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                         <span className="text-[10px] text-[var(--color-primary)] font-bold">{isRTL ? 'عرض الكود' : 'View Code'}</span>
                         <Plus className={`w-4 h-4 text-[var(--color-primary)] ${isRTL ? 'rotate-180' : ''}`} />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
