import React from 'react';
import { motion } from 'motion/react';
import { CFPALogo } from '../components/CFPALogo';
import { 
  Users, 
  MapPin, 
  GraduationCap, 
  Award,
  Quote,
  Briefcase,
  Wrench,
  ChevronDown,
  Instagram,
  Facebook,
  Mail
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F6F0] dark:bg-[#1E1C1A] text-[#2D2D2D] dark:text-[#E8E2D7]">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Zellij Pattern (Watermark) */}
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none overflow-hidden text-[#C67B4B] dark:text-[#E8E2D7]">
           <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="zellij" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                 <path d="M10 0 L20 10 L10 20 L0 10 Z" fill="currentColor" />
                 <circle cx="10" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#zellij)" />
           </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
             <div className="w-24 h-24 bg-[#C67B4B] rounded-3xl flex items-center justify-center text-white mb-8 shadow-xl rotate-3">
                <Wrench className="w-12 h-12" />
             </div>
             <h1 className="text-4xl md:text-7xl font-bold font-heading mb-6 leading-tight max-w-4xl">
               {t('about.hero_title')}
             </h1>
             <p className="text-xl md:text-2xl text-[#2D2D2D]/70 dark:text-[#E8E2D7]/70 font-medium max-w-2xl mx-auto mb-10">
               {t('about.hero_subtitle')}
             </p>
             <div className="flex flex-wrap justify-center gap-4">
               <motion.a 
                 href="#team"
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="px-8 py-4 bg-[#C67B4B] text-white font-bold rounded-2xl shadow-lg shadow-[#C67B4B]/20 transition-all flex items-center gap-2"
               >
                 <Users className="w-5 h-5" />
                 {isRTL ? 'تعرّف على الفريق' : 'Meet the Team'}
               </motion.a>
               <motion.a 
                 href="#supervision"
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="px-8 py-4 bg-white dark:bg-[#2A2724] border border-[#C67B4B]/30 text-[#C67B4B] font-bold rounded-2xl shadow-md transition-all flex items-center gap-2"
               >
                 <GraduationCap className="w-5 h-5" />
                 {isRTL ? 'المركز المشرف' : 'Supervising Center'}
               </motion.a>
             </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-30"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Founder's Word Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-32 relative"
        >
          <div className="bg-white dark:bg-[#2A2724] p-8 md:p-16 rounded-[3rem] shadow-2xl relative z-10 border border-[#C9A96E]/20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="flex flex-col items-center">
                 <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-[#C67B4B] border-8 border-[#F9F6F0] dark:border-[#1E1C1A] shadow-xl flex items-center justify-center text-white text-4xl md:text-6xl font-bold font-heading">
                    TA
                 </div>
                 <h3 className="mt-6 text-2xl font-bold text-[#C67B4B]">Terki Abdelhak</h3>
                 <p className="text-gray-500 font-medium">{isRTL ? 'المؤسس' : 'Founder'}</p>
              </div>
              <div className="lg:col-span-2 relative">
                <Quote className={`absolute -top-10 -right-4 w-16 h-16 text-[#C67B4B]/10 ${isRTL ? '' : 'rotate-180'}`} />
                <h4 className="text-3xl font-bold font-heading mb-6 text-[#C9A96E]">
                  {t('about.founder_title')}
                </h4>
                <p className="text-2xl md:text-3xl font-medium leading-relaxed italic text-[#2D2D2D]/90 dark:text-[#E8E2D7]/90">
                  "{t('about.founder_quote')}"
                </p>
                <div className="mt-8 w-16 h-1 bg-[#C9A96E] rounded-full"></div>
              </div>
            </div>
          </div>
          {/* Decorative Gold Elements */}
          <div className="absolute -top-8 -left-8 w-32 h-32 border-t-4 border-l-4 border-[#C9A96E]/30 rounded-tl-[3rem] -z-0"></div>
          <div className="absolute -bottom-8 -right-8 w-32 h-32 border-b-4 border-r-4 border-[#C9A96E]/30 rounded-br-[3rem] -z-0"></div>
        </motion.section>

        {/* Team Section */}
        <section id="team" className="mb-32 scroll-mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              {t('about.team_title')}
            </h2>
            <div className="w-24 h-1.5 bg-[#C67B4B] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Terki Abdelhak */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-[#2A2724] p-10 rounded-[3rem] shadow-xl border border-gray-100 dark:border-gray-800 text-center group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#C67B4B]/5 to-transparent pointer-events-none" />
              <div className="w-32 h-32 rounded-[1.5rem] bg-[#C67B4B]/10 mx-auto mb-8 relative border-4 border-[#C67B4B]/20 overflow-hidden shadow-lg flex items-center justify-center">
                <span className="text-4xl text-[#C67B4B] font-bold">TA</span>
              </div>
              <h3 className="text-3xl font-bold mb-2 relative z-10">Terki Abdelhak</h3>
              <p className="text-[#C67B4B] font-bold text-sm mb-6 uppercase tracking-widest px-4 py-1.5 bg-[#C67B4B]/10 inline-block rounded-full">
                {t('about.terki_role')}
              </p>
              <p className="text-lg opacity-70 leading-relaxed mb-6">
                {t('about.terki_desc')}
              </p>
              
              <div className="flex justify-center gap-4 mt-4">
                <a 
                  href="https://www.instagram.com/terki.abdelhak" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[#C67B4B] dark:text-[#D4936A] hover:bg-[#C67B4B] dark:hover:bg-[#C67B4B] hover:text-white dark:hover:text-[#1E1C1A] transition-all duration-300 border border-[#C67B4B]/20"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.facebook.com/terki.abdelhak.2025" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[#C67B4B] dark:text-[#D4936A] hover:bg-[#C67B4B] dark:hover:bg-[#C67B4B] hover:text-white dark:hover:text-[#1E1C1A] transition-all duration-300 border border-[#C67B4B]/20"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:monka.dwc@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Email"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[#C67B4B] dark:text-[#D4936A] hover:bg-[#C67B4B] dark:hover:bg-[#C67B4B] hover:text-white dark:hover:text-[#1E1C1A] transition-all duration-300 border border-[#C67B4B]/20"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Djamel Boudehedje */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-[#2A2724] p-10 rounded-[3rem] shadow-xl border border-gray-100 dark:border-gray-800 text-center group"
            >
              <div className="w-24 h-24 rounded-2xl bg-[#3A7B85]/10 mx-auto mb-8 flex items-center justify-center text-[#3A7B85]">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold mb-2">Djamel Boudehedje</h3>
              <p className="text-[#3A7B85] font-bold text-sm mb-6 uppercase tracking-widest px-4 py-1.5 bg-[#3A7B85]/10 inline-block rounded-full">
                {t('about.djamel_role')}
              </p>
              <p className="text-lg opacity-70 leading-relaxed mb-6">
                {t('about.djamel_desc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Supervision Section */}
        <motion.section 
          id="supervision"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 scroll-mt-24"
        >
          <div className="bg-[#3A7B85]/5 dark:bg-[#3A7B85]/10 p-12 md:p-20 rounded-[4rem] border-2 border-dashed border-[#3A7B85]/30 relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">
               <div className="flex-shrink-0">
                  <div className="w-48 h-48 rounded-full bg-white dark:bg-[#2A2724] flex items-center justify-center shadow-xl border-4 border-[#3A7B85] overflow-hidden">
                    <CFPALogo className="w-full h-full object-contain p-2" />
                  </div>
               </div>

               <div className="flex-1 text-center md:text-right rtl:md:text-right ltr:md:text-left">
                  <span className="text-[#3A7B85] font-bold text-sm uppercase tracking-widest mb-4 block">
                    {t('about.supervision_label')}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-bold font-heading mb-6 tracking-tight">
                    {t('about.supervision_title')}
                  </h3>
                  <p className="text-xl md:text-2xl opacity-80 leading-relaxed">
                    {t('about.supervision_desc')}
                  </p>
                  
                  <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-8 grayscale opacity-70">
                    <div className="flex items-center gap-2 font-bold text-sm">
                       <MapPin className="w-6 h-6 text-[#3A7B85]" />
                       {isRTL ? 'زغيش، بجديوية - ولاية غليزان' : 'Zeghiche, Jdiouia - Relizane'}
                    </div>
                    <div className="flex items-center gap-3 font-bold text-sm px-6 py-2 bg-white dark:bg-black/20 rounded-full border border-black/5">
                       CFPA Zeghiche – Jdiouia
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </motion.section>

        {/* Story Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold font-heading text-[#C9A96E] inline-flex items-center gap-4">
                <div className="w-12 h-0.5 bg-[#C9A96E]"></div>
                {t('about.story_title')}
                <div className="w-12 h-0.5 bg-[#C9A96E]"></div>
              </h2>
            </div>
            <div className={`space-y-8 text-2xl leading-[1.8] text-[#2D2D2D]/80 dark:text-[#E8E2D7]/80 ${isRTL ? 'text-right' : 'text-left'}`}>
              <p>{t('about.story_p1')}</p>
              <p>{t('about.story_p2')}</p>
            </div>
          </div>
        </motion.div>

        {/* Legal Disclaimer */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="bg-[#EDE8D9]/50 dark:bg-[#151413]/50 border border-[#6B705C] p-8 md:p-12 rounded-[2rem] shadow-sm relative overflow-hidden backdrop-blur-sm">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 flex-shrink-0 bg-[#6B705C]/10 rounded-full flex items-center justify-center text-[#6B705C]">
                <span className="text-2xl">ℹ️</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold font-heading mb-4 text-[#6B705C]">
                  {t('disclaimer.title')}
                </h2>
                <p className="text-lg leading-relaxed text-[#2D2D2D]/80 dark:text-[#E8E2D7]/80">
                  {t('disclaimer.full')}
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Special Acknowledgements */}
        <section className="mb-32 text-center py-20 px-8 bg-white dark:bg-[#2A2724] rounded-[3.5rem] shadow-sm border border-gray-100 dark:border-gray-800">
          <Award className="w-16 h-16 text-[#C9A96E] mx-auto mb-8" />
          <h2 className="text-3xl font-bold font-heading mb-6">{t('about.ack_title')}</h2>
          <p className="max-w-3xl mx-auto text-xl opacity-70 leading-relaxed font-medium">
            {t('about.ack_msg')}
          </p>
        </section>

        {/* Legal Disclaimer */}
        <section className="mb-32">
          <div className="bg-[#FAF3E8]/50 dark:bg-[#1A1816]/50 p-8 md:p-12 rounded-[2rem] border border-[#6B705C] relative">
            <h2 className="text-2xl font-bold font-heading mb-6 flex items-center gap-3">
              <span>ℹ️</span> {t('disclaimer.title')}
            </h2>
            <div className="space-y-6">
              <p className="text-lg opacity-80 leading-relaxed font-medium" style={{ fontFamily: 'Tajawal, system-ui, sans-serif' }} dir="rtl">
                {t('disclaimer.full', { lng: 'ar' })}
              </p>
              <p className="text-lg opacity-80 leading-relaxed font-medium font-sans" style={{ fontFamily: 'Inter, system-ui, sans-serif' }} dir="ltr">
                {t('disclaimer.full', { lng: 'en' })}
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Algerian Heritage Banner */}
      <section className="bg-[#C67B4B] text-white py-24 relative overflow-hidden">
         <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            {/* Repeated Zellij Grid */}
            <svg width="100%" height="100%" fill="currentColor">
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
         </div>
         
         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h3 className="text-4xl md:text-5xl font-bold font-heading mb-8 leading-tight">
              {isRTL ? 'صنع في الجزائر، لخدمة الجزائر 🇩🇿' : 'Made in Algeria, for Algeria 🇩🇿'}
            </h3>
            <p className="text-2xl text-white/80 mb-12 italic max-w-2xl mx-auto font-medium">
              {isRTL 
                ? 'نتشرف بأن نكون أول منصة تقنية شاملة مخصصة للتكوين المهني في بلادنا.' 
                : 'We are honored to be the first comprehensive tech platform dedicated to vocational training in our country.'}
            </p>
         </div>
      </section>
    </div>
  );
}
