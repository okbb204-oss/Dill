import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { crafts } from '../data/crafts';
import { coursesData } from '../data/courses';
import { officialDocs, getGenericOfficialDoc } from '../data/officialDocs';
import { 
  ArrowRight, ArrowLeft, Clock, Banknote, Briefcase, MapPin, 
  Wrench, PlayCircle, Star, BookOpen, Layers, Target, GraduationCap,
  ShieldCheck, Scale, Monitor, ExternalLink, FileText, Download
} from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import CraftIllustration from '../components/illustrations/CraftIllustration';
import CraftReviews from '../components/reviews/CraftReviews';

export default function CraftSingle() {
  const { id } = useParams<{ id: string }>();
  const craft = crafts.find(c => c.id === id);
  const course = id ? coursesData[id as keyof typeof coursesData] : null;
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  if (!craft) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[var(--color-bg-sand)]">
        <h2 className="text-3xl font-bold font-heading mb-4 text-[var(--color-dark)]">{isRTL ? 'الحرفة غير موجودة' : 'Craft not found'}</h2>
        <Link to="/crafts" className="text-[var(--color-primary)] font-bold hover:underline">{isRTL ? 'العودة لدليل الحرف' : 'Back to Crafts Directory'}</Link>
      </div>
    );
  }

  let totalLessons = 0;
  if (course) {
    totalLessons = course.levels.reduce((acc: number, level: any) => acc + level.lessons.length, 0);
  }

  return (
    <div className="bg-[#F9F6F0] dark:bg-[#1E1C1A] min-h-screen pb-24 transition-colors duration-300">
      {/* Hero */}
      <div className="relative h-[50vh] md:h-[60vh] bg-[#1E1C1A] overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5 }}
          className="w-full h-full mix-blend-overlay"
        >
           <CraftIllustration craftId={craft.id} className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1C1A] via-[#1E1C1A]/40 to-transparent" />
        
        {/* Decorative Zellige Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L100 50L50 100L0 50Z' fill='%23C67B4B' fill-rule='evenodd'/%3E%3C/svg%3E")`, backgroundSize: '60px 60px' }} />

        <div className="absolute inset-0 flex items-end pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
            <Link to="/crafts" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-all font-bold group">
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#C67B4B] transition-colors">
                {isRTL ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
              </div>
              <span>{t('crafts.back_to_dir')}</span>
            </Link>
            
            <div className="flex flex-wrap gap-4 mb-6">
               <span className="bg-[#3A7B85] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl shadow-[#3A7B85]/20">
                 {(!isRTL && craft.categoryEN) ? craft.categoryEN : craft.category}
               </span>
               <div className="bg-white/10 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2">
                 <GraduationCap className="w-4 h-4 text-[#C67B4B]" />
                 <span>CFPA Jdiouia – زغيش</span>
               </div>
            </div>
            
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-4 leading-tight"
            >
              {(!isRTL && craft.nameEN) ? craft.nameEN : craft.nameAR}
            </motion.h1>
            <p className="text-2xl text-[#C67B4B] font-medium tracking-wide flex items-center gap-3" dir="ltr">
              <span className="w-12 h-0.5 bg-[#C67B4B] opacity-50" />
              {craft.nameFR}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          <section className="bg-white dark:bg-[#2A2724] rounded-[2.5rem] p-10 md:p-14 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-[#E5DDD3] dark:border-[#3D3935] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-[#C67B4B]/10 select-none">
              <Star className="w-32 h-32 rotate-12" />
            </div>
            <h2 className="text-3xl font-bold font-heading mb-10 flex items-center gap-4 text-[#1E1C1A] dark:text-[#E8E2D7] relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#C67B4B]/10 flex items-center justify-center text-[#C67B4B]">
                <Star className="w-6 h-6" />
              </div>
              {t('crafts.about_craft')}
              <div className="h-0.5 flex-grow bg-[#E5DDD3] dark:bg-[#3D3935] opacity-50 ml-4" />
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none relative z-10 leading-relaxed text-[#1E1C1A]/80 dark:text-[#E8E2D7]/80 italic border-l-4 border-[#C67B4B] pl-8">
              {(!isRTL && craft.fullDescriptionEN) ? craft.fullDescriptionEN : craft.fullDescription}
            </div>
          </section>

          <section className="bg-white dark:bg-[#2A2724] rounded-[2.5rem] p-10 md:p-14 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-[#E5DDD3] dark:border-[#3D3935]">
            <h2 className="text-3xl font-bold font-heading mb-12 flex items-center gap-4 text-[#1E1C1A] dark:text-[#E8E2D7]">
              <div className="w-12 h-12 rounded-2xl bg-[#3A7B85]/10 flex items-center justify-center text-[#3A7B85]">
                <Wrench className="w-6 h-6" />
              </div>
              {t('crafts.skills')}
              <div className="h-0.5 flex-grow bg-[#E5DDD3] dark:bg-[#3D3935] opacity-50 ml-4" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-6">
              <div className="bg-[#F9F6F0] dark:bg-[#1E1C1A] p-8 rounded-3xl border border-[#E5DDD3] dark:border-[#3D3935]">
                <h3 className="font-bold text-[#1E1C1A] dark:text-[#E8E2D7] mb-6 flex items-center gap-3 text-lg">
                  <div className="w-2 h-2 rounded-full bg-[#C67B4B]" />
                  {isRTL ? 'الأدوات الأساسية:' : 'Basic Tools:'}
                </h3>
                <ul className="space-y-4">
                  {((!isRTL && craft.toolsEN) ? craft.toolsEN : craft.tools).map((tool, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#1E1C1A]/70 dark:text-[#E8E2D7]/70 font-medium group">
                      <span className="w-6 h-6 rounded-lg bg-white dark:bg-[#2A2724] flex items-center justify-center text-[10px] border border-[#E5DDD3] dark:border-[#3D3935] group-hover:bg-[#C67B4B] group-hover:text-white transition-colors">{i + 1}</span>
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#F9F6F0] dark:bg-[#1E1C1A] p-8 rounded-3xl border border-[#E5DDD3] dark:border-[#3D3935]">
                <h3 className="font-bold text-[#1E1C1A] dark:text-[#E8E2D7] mb-6 flex items-center gap-3 text-lg">
                  <div className="w-2 h-2 rounded-full bg-[#3A7B85]" />
                  {isRTL ? 'المهارات المطلوبة:' : 'Required Skills:'}
                </h3>
                <ul className="space-y-4">
                  {((!isRTL && craft.skillsEN) ? craft.skillsEN : craft.skills).map((skill, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#1E1C1A]/70 dark:text-[#E8E2D7]/70 font-medium group">
                      <div className="w-2 h-2 rounded-full bg-[#3A7B85] opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-[var(--color-card)] rounded-3xl p-8 md:p-10 shadow-sm border border-[var(--color-border)]">
            <h2 className="text-2xl font-bold font-heading mb-6 flex items-center gap-3 border-b border-[var(--color-border)] pb-4 text-[var(--color-dark)]">
              <Briefcase className="w-6 h-6 text-[var(--color-primary)]" />
              {isRTL ? 'فرص العمل والدخل المتوقع' : 'Career Opportunities & Expected Income'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div className="bg-[var(--color-bg-sand)] p-6 rounded-2xl border border-[var(--color-border)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)]/5 rounded-full -translate-y-16 translate-x-16" />
                <h3 className="font-bold text-[var(--color-dark)] mb-4 flex items-center gap-2 text-lg relative z-10">
                  <Banknote className="w-5 h-5 text-green-600" />
                  {t('crafts.income')}
                </h3>
                <p className="text-[var(--color-secondary)] leading-relaxed text-lg relative z-10 font-medium">
                  {(!isRTL && craft.averageIncomeEN) ? craft.averageIncomeEN : craft.averageIncome}
                </p>
              </div>
              <div className="bg-[var(--color-bg-sand)] p-6 rounded-2xl border border-[var(--color-border)] relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[var(--color-accent)]/5 rounded-full translate-y-16 -translate-x-16" />
                <h3 className="font-bold text-[var(--color-dark)] mb-4 flex items-center gap-2 text-lg relative z-10">
                  <Briefcase className="w-5 h-5 text-orange-600" />
                  {t('crafts.career')}
                </h3>
                <div className="flex flex-col gap-3 relative z-10">
                  {((!isRTL && craft.careerOpportunitiesEN) ? craft.careerOpportunitiesEN : craft.careerOpportunities).map((op, i) => (
                    <div key={i} className="flex items-start gap-3 bg-[var(--color-card)] p-3 rounded-xl border border-[var(--color-border)] shadow-sm">
                      <span className="w-2 h-2 mt-2 rounded-full bg-[var(--color-primary)] flex-shrink-0" />
                      <span className="text-[var(--color-dark)] font-medium text-base">{op}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Official Documents Section */}
          <section className="bg-white dark:bg-[#2A2724] rounded-[2.5rem] p-10 md:p-14 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-[#E5DDD3] dark:border-[#3D3935]">
            <h2 className="text-3xl font-bold font-heading mb-10 flex items-center gap-4 text-[#1E1C1A] dark:text-[#E8E2D7]">
              <div className="w-12 h-12 rounded-2xl bg-[#6B705C]/10 flex items-center justify-center text-[#6B705C]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              {isRTL ? 'الوثائق والمراجع الرسمية' : 'Official Documents & References'}
              <div className="h-0.5 flex-grow bg-[#E5DDD3] dark:bg-[#3D3935] opacity-50 ml-4" />
            </h2>
            
            <p className="text-gray-500 dark:text-gray-400 mb-10 text-lg">
              {isRTL ? 'مراجع حكومية موثقة من وزارة التكوين والتعليم المهنيين الجزائرية' : 'Verified government references from the Algerian Ministry of Vocational Training'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Diploma Card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-[#F9F6F0] dark:bg-[#1E1C1A] p-8 rounded-3xl border border-[#3A7B85]/20 flex flex-col h-full group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#3A7B85] text-white flex items-center justify-center mb-6 shadow-lg shadow-[#3A7B85]/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#1E1C1A] dark:text-[#E8E2D7]">
                  {isRTL ? 'الشهادة الرسمية' : 'Official Diploma'}
                </h3>
                <div className="space-y-4 flex-grow">
                  <div>
                    <span className="text-xs font-bold text-[#3A7B85] uppercase tracking-wider block mb-1">
                      {isRTL ? 'نوع الشهادة' : 'Certificate Type'}
                    </span>
                    <p className="text-sm font-medium text-[#1E1C1A]/80 dark:text-[#E8E2D7]/80 leading-relaxed">
                      {isRTL ? (officialDocs[craft.id]?.diploma.titleAR || getGenericOfficialDoc(craft.id, craft.nameAR, craft.nameEN || '').diploma.titleAR) : (officialDocs[craft.id]?.diploma.titleEN || getGenericOfficialDoc(craft.id, craft.nameAR, craft.nameEN || '').diploma.titleEN)}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#3A7B85] uppercase tracking-wider block mb-1">
                      {isRTL ? 'شروط الالتحاق' : 'Admission'}
                    </span>
                    <p className="text-sm font-medium text-[#1E1C1A]/80 dark:text-[#E8E2D7]/80">
                      {isRTL ? (officialDocs[craft.id]?.diploma.requirementsAR || getGenericOfficialDoc(craft.id, craft.nameAR, craft.nameEN || '').diploma.requirementsAR) : (officialDocs[craft.id]?.diploma.requirementsEN || getGenericOfficialDoc(craft.id, craft.nameAR, craft.nameEN || '').diploma.requirementsEN)}
                    </p>
                  </div>
                </div>
                <a 
                  href="https://www.mvet.gov.dz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-8 flex items-center gap-2 text-[#3A7B85] font-bold text-sm hover:underline"
                >
                  {isRTL ? 'مدونة الشعب المهنية' : 'Specialties Directory'}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </motion.div>

              {/* Law Card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-[#F9F6F0] dark:bg-[#1E1C1A] p-8 rounded-3xl border border-[#6B705C]/20 flex flex-col h-full group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#6B705C] text-white flex items-center justify-center mb-6 shadow-lg shadow-[#6B705C]/20">
                  <Scale className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#1E1C1A] dark:text-[#E8E2D7]">
                  {isRTL ? 'القانون والتنظيم' : 'Law & Regulation'}
                </h3>
                <div className="space-y-4 flex-grow">
                   <p className="text-sm italic text-[#1E1C1A]/60 dark:text-[#E8E2D7]/60 mb-2">
                     {isRTL ? `القانون رقم ${officialDocs[craft.id]?.regulation.lawNumber || '08-07'}` : `Law No. ${officialDocs[craft.id]?.regulation.lawNumber || '08-07'}`}
                   </p>
                   <p className="text-sm font-medium text-[#1E1C1A]/80 dark:text-[#E8E2D7]/80 leading-relaxed">
                     {isRTL ? (officialDocs[craft.id]?.regulation.contentAR || getGenericOfficialDoc(craft.id, craft.nameAR, craft.nameEN || '').regulation.contentAR) : (officialDocs[craft.id]?.regulation.contentEN || getGenericOfficialDoc(craft.id, craft.nameAR, craft.nameEN || '').regulation.contentEN)}
                   </p>
                </div>
                <a 
                  href={officialDocs[craft.id]?.regulation.sourceUrl || "https://www.joradp.dz"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-8 flex items-center gap-2 text-[#6B705C] font-bold text-sm hover:underline"
                >
                   {isRTL ? 'الجريدة الرسمية' : 'Official Gazette'}
                   <FileText className="w-3 h-3" />
                </a>
              </motion.div>

              {/* Register Card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-[#F9F6F0] dark:bg-[#1E1C1A] p-8 rounded-3xl border border-[#C67B4B]/20 flex flex-col h-full group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#C67B4B] text-white flex items-center justify-center mb-6 shadow-lg shadow-[#C67B4B]/20">
                  <Monitor className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#1E1C1A] dark:text-[#E8E2D7]">
                  {isRTL ? 'كيفية التسجيل' : 'How to Register'}
                </h3>
                <div className="space-y-4 flex-grow">
                  <div className="space-y-2">
                    {(isRTL ? (officialDocs[craft.id]?.registration.requiredDocsAR || getGenericOfficialDoc(craft.id, craft.nameAR, craft.nameEN || '').registration.requiredDocsAR) : (officialDocs[craft.id]?.registration.requiredDocsEN || getGenericOfficialDoc(craft.id, craft.nameAR, craft.nameEN || '').registration.requiredDocsEN)).slice(0, 3).map((doc, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#1E1C1A]/70 dark:text-[#E8E2D7]/70">
                        <div className="w-1 h-1 rounded-full bg-[#C67B4B]" />
                        {doc}
                      </div>
                    ))}
                    <span className="text-[10px] text-gray-400 italic">{isRTL ? '...والمزيد من الوثائق الرسمية' : '...and more required documents'}</span>
                  </div>
                </div>
                <a 
                  href={officialDocs[craft.id]?.registration.url || "https://www.takwin.dz"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-8 flex items-center justify-center gap-2 bg-[#C67B4B] text-white py-3 rounded-2xl font-bold text-sm hover:bg-[#A3592F] transition-all shadow-md shadow-[#C67B4B]/20"
                >
                   {isRTL ? 'سجّل الآن في "تكوين"' : 'Register on Takwin'}
                   <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                </a>
              </motion.div>
            </div>

            <p className="mt-8 text-center text-xs text-[#1E1C1A]/50 dark:text-[#E8E2D7]/50 italic">
               {t('disclaimer.craft')}
            </p>
          </section>

          <section className="bg-white dark:bg-[#2A2724] rounded-[2.5rem] p-10 md:p-14 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-[#E5DDD3] dark:border-[#3D3935] pb-12">
             {/* Fake video placeholder */}
             <div className="aspect-video bg-[var(--color-dark)] rounded-2xl overflow-hidden relative group cursor-pointer border-4 border-[var(--color-bg-sand)] shadow-lg">
                <div className="w-full h-full opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-700">
                   <CraftIllustration craftId={craft.id} className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-20 h-20 bg-[var(--color-primary)]/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-[var(--color-primary)] transition-colors shadow-[0_0_30px_rgba(198,123,75,0.4)]">
                     <PlayCircle className="w-10 h-10 text-[var(--color-bg-sand)] translate-x-0.5" />
                   </div>
                </div>
                <div className="absolute bottom-4 right-4 text-[var(--color-bg-sand)] font-bold bg-black/60 px-3 py-1 rounded-md text-sm">
                   {isRTL ? 'مقدمة عن المهنة' : 'Introduction video'} (2:30)
                </div>
             </div>
          </section>

          {/* Related Courses Section */}
          <section className="bg-[var(--color-card)] rounded-3xl p-8 md:p-10 shadow-sm border border-[var(--color-border)]">
             <h2 className="text-2xl font-bold font-heading mb-8 flex items-center gap-3 border-b border-[var(--color-border)] pb-4 text-[var(--color-dark)]">
               <BookOpen className="w-6 h-6 text-[var(--color-primary)]" />
               {isRTL ? 'المسارات التعليمية المتاحة' : 'Available Learning Paths'}
             </h2>
             
             {course ? (
                <div className="grid grid-cols-1 gap-6">
                   <motion.div 
                     whileHover={{ y: -5 }}
                     className="bg-[var(--color-bg-sand)] p-6 rounded-2xl border border-[var(--color-border)] group"
                   >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                         <div className="flex gap-4">
                            <div className="w-16 h-16 bg-white rounded-xl shadow-sm border border-[var(--color-border)] flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                              🛠️
                            </div>
                            <div>
                               <h3 className="font-bold text-xl mb-1 text-[var(--color-dark)]">{course.title}</h3>
                               <p className="text-[var(--color-secondary)] text-sm mb-2">{course.description}</p>
                               <div className="flex flex-wrap gap-3">
                                  <span className="flex items-center gap-1 text-xs font-bold text-[var(--color-primary)] bg-[var(--color-primary)]/10 px-2 py-1 rounded-md">
                                     <Layers className="w-3 h-3" /> {course.levels.length} {isRTL ? 'مراحل' : 'Levels'}
                                  </span>
                                  <span className="flex items-center gap-1 text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded-md">
                                     <Star className="w-3 h-3" /> {isRTL ? 'شهادة معتمدة' : 'Certified'}
                                  </span>
                               </div>
                            </div>
                         </div>
                         <Link 
                           to={`/learn/${craft.id}`}
                           className="bg-[var(--color-primary)] text-white px-8 py-3 rounded-xl font-bold text-center hover:bg-[var(--color-primary-hover)] transition-all shadow-md group-hover:shadow-lg flex items-center justify-center gap-2"
                         >
                            <span>{isRTL ? 'عرض تفاصيل الدورة' : 'View Course details'}</span>
                            <ArrowRight className={`w-5 h-5 transition-transform ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                         </Link>
                      </div>
                   </motion.div>
                </div>
             ) : (
                <div className="text-center py-12 bg-[var(--color-bg-sand)] rounded-2xl border border-dashed border-[var(--color-border)]">
                   <p className="text-[var(--color-dark)]/50 mb-4">{isRTL ? 'لا توجد دورات مباشرة متاحة حالياً لهذه الحرفة، لكن فريقنا يعمل على إضافتها قريباً!' : 'No direct courses available for this craft yet, but our team is working on adding them soon!'}</p>
                   <Link to="/learn" className="text-[var(--color-primary)] font-bold border-b-2 border-[var(--color-primary)] pb-0.5 hover:opacity-70 transition-opacity">
                      {isRTL ? 'استكشف كافة الحرف المتاحة' : 'Explore all available crafts'}
                   </Link>
                </div>
             )}
          </section>
        </div>

        {/* Sidebar Info Card */}
        <div className="lg:col-span-1">
          <div className="bg-[var(--color-card)] rounded-3xl p-8 shadow-sm border border-[var(--color-border)] sticky top-24">
            <h3 className="font-heading font-bold text-xl mb-6 border-b border-[var(--color-border)] pb-4 text-[var(--color-dark)]">{isRTL ? 'بطاقة المعلومات المرجعية' : 'Reference Info Card'}</h3>
            
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-bg-sand)] flex items-center justify-center flex-shrink-0 text-blue-500 border border-[var(--color-border)]">
                   <Clock className="w-6 h-6" />
                </div>
                <div>
                   <h4 className="font-bold text-[var(--color-dark)] mb-1">{t('crafts.duration')}</h4>
                   <p className="text-[var(--color-secondary)] text-sm">{(!isRTL && craft.durationEN) ? craft.durationEN : craft.duration}</p>
                </div>
              </div>

              {course && (
                <>
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-bg-sand)] flex items-center justify-center flex-shrink-0 text-purple-500 border border-[var(--color-border)]">
                      <Layers className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--color-dark)] mb-1">{isRTL ? 'المستويات' : 'Levels'}</h4>
                      <p className="text-[var(--color-secondary)] text-sm">{course.levels.length} {isRTL ? 'مراحل تعليمية' : 'Learning stages'}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-bg-sand)] flex items-center justify-center flex-shrink-0 text-teal-500 border border-[var(--color-border)]">
                      <Target className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--color-dark)] mb-1">{isRTL ? 'الدروس المتاحة' : 'Available Lessons'}</h4>
                      <p className="text-[var(--color-secondary)] text-sm">{totalLessons} {isRTL ? 'دروس تفاعلية' : 'Interactive lessons'}</p>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--color-border)] flex flex-col gap-4">
               <Link to={`/learn/${craft.id}`} className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-[var(--color-bg-sand)] py-4 rounded-xl transition-all shadow-md flex flex-col items-center justify-center gap-1 group">
                 <div className="flex items-center gap-2 font-bold text-lg">
                   <BookOpen className={`w-5 h-5 transition-transform ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                   {t('crafts.start_learning')} {(!isRTL && craft.nameEN) ? craft.nameEN : craft.nameAR}
                 </div>
                 <span className="text-sm font-normal text-[var(--color-bg-sand)]/80 text-center">{t('crafts.interactive_lessons')}</span>
               </Link>
               
               <button className="w-full bg-[var(--color-bg-sand)] hover:bg-[var(--color-border)] text-[var(--color-dark)] py-4 rounded-xl font-bold transition-all border border-[var(--color-border)] flex items-center justify-center gap-2">
                 <MapPin className="w-5 h-5 text-[var(--color-secondary)]" />
                 {t('crafts.search_centers')}
               </button>
            </div>
          </div>
        </div>

        {/* Course Reviews */}
        <CraftReviews craftId={craft.id} />

      </div>
    </div>
  );
}
