import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Compass, Hammer, BookOpen, ArrowLeft, CheckCircle2, Search, MoveRight, MoveLeft } from 'lucide-react';
import { crafts } from '../data/crafts';
import { useTranslation } from 'react-i18next';
import { BrandLogo } from '../components/layout/BrandLogo';
import CraftIllustration from '../components/illustrations/CraftIllustration';

export default function Home() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Decorative */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-primary) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 pt-8 lg:pt-0"
            >
              <span className="inline-block py-1.5 px-4 mb-6 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold text-sm tracking-wide">
                {t('hero.tag1')} 🚀
              </span>
              <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight mb-6 text-[var(--color-dark)]">
                {t('hero.title').split(' ').slice(0, Math.floor(t('hero.title').split(' ').length / 2)).join(' ')}<br/>
                <span className="text-[var(--color-primary)]">{t('hero.title').split(' ').slice(Math.floor(t('hero.title').split(' ').length / 2)).join(' ')}</span>
              </h1>
              <p className="text-xl text-[var(--color-secondary)] mb-10 leading-relaxed max-w-lg">
                {t('hero.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/test" className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-[var(--color-bg-sand)] px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
                  <Compass className="w-6 h-6 group-hover:rotate-45 transition-transform" />
                  {t('hero.start_test')}
                </Link>
                <Link to="/crafts" className="bg-[var(--color-card)] hover:bg-[var(--color-bg-sand)] border-2 border-[var(--color-border)] text-[var(--color-dark)] px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                  <Search className="w-5 h-5" />
                  {t('hero.browse_crafts')}
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl relative z-10 border-4 border-[var(--color-card)] flex items-center justify-center bg-[var(--color-bg-sand)]">
                <BrandLogo className="w-1/2 h-1/2" />
              </div>
              <div className={`absolute -bottom-8 ${isRTL ? '-right-8' : '-left-8'} w-48 h-48 bg-[var(--color-accent)] rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-0`}></div>
              <div className={`absolute -top-8 ${isRTL ? '-left-8' : '-right-8'} w-48 h-48 bg-[var(--color-primary)] rounded-full mix-blend-multiply filter blur-3xl opacity-30 z-0`}></div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-[var(--color-card)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center md:mb-20 mb-12">
            <h2 className="text-4xl font-heading font-bold text-[var(--color-dark)] mb-4">{t('home.how_it_works')}</h2>
            <p className="text-[var(--color-secondary)] text-lg max-w-2xl mx-auto">{t('home.how_it_works_desc')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-[var(--color-border)] border-t-2 border-dashed border-[var(--color-border)] z-0"></div>

            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-[var(--color-bg-sand)] rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                <Compass className="w-12 h-12 text-[var(--color-secondary)] group-hover:text-[var(--color-bg-sand)] transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-3 text-[var(--color-dark)]">{t('home.step1_title')}</h3>
              <p className="text-[var(--color-secondary)] leading-relaxed">{t('home.step1_desc')}</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-[var(--color-bg-sand)] rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                <Hammer className="w-12 h-12 text-[var(--color-secondary)] group-hover:text-[var(--color-bg-sand)] transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-3 text-[var(--color-dark)]">{t('home.step2_title')}</h3>
              <p className="text-[var(--color-secondary)] leading-relaxed">{t('home.step2_desc')}</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-[var(--color-bg-sand)] rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                <BookOpen className="w-12 h-12 text-[var(--color-secondary)] group-hover:text-[var(--color-bg-sand)] transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-3 text-[var(--color-dark)]">{t('home.step3_title')}</h3>
              <p className="text-[var(--color-secondary)] leading-relaxed">{t('home.step3_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Crafts */}
      <section className="py-24 bg-[var(--color-bg-sand)] relative z-10 border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between md:mb-16 mb-10 gap-6">
            <div>
              <h2 className="text-4xl font-heading font-bold text-[var(--color-dark)] mb-4">{t('crafts.directory_title')}</h2>
              <p className="text-[var(--color-secondary)] text-lg max-w-2xl">{t('crafts.directory_subtitle')}</p>
            </div>
            <Link to="/crafts" className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] font-bold flex items-center gap-2 group">
               {t('crafts.back_to_dir')} 
               {isRTL ? <MoveLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> : <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-8 lg:grid-cols-3 gap-8">
            {crafts.slice(0, 3).map((craft, idx) => (
              <motion.div 
                key={craft.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[var(--color-card)] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-[var(--color-border)] hover:border-[var(--color-primary)]/50"
              >
                <div className="h-56 relative overflow-hidden group">
                  <div className="w-full h-full group-hover:scale-105 transition-transform duration-500">
                    <CraftIllustration craftId={craft.id} className="w-full h-full object-cover" />
                  </div>
                  <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} bg-[var(--color-card)]/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-[var(--color-dark)] shadow-sm`}>
                    {(!isRTL && craft.categoryEN) ? craft.categoryEN : craft.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold font-heading mb-2 text-[var(--color-dark)]">{(!isRTL && craft.nameEN) ? craft.nameEN : craft.nameAR}</h3>
                  <p className="text-[var(--color-secondary)] text-sm mb-4 font-sans dir-ltr h-5 truncate" dir="ltr">{craft.nameFR}</p>
                  <p className="text-[var(--color-secondary)] mb-6 line-clamp-2 leading-relaxed">{(!isRTL && craft.shortDescriptionEN) ? craft.shortDescriptionEN : craft.shortDescription}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-[var(--color-secondary)] mb-6">
                    <div className="flex items-center gap-1.5 bg-[var(--color-bg-sand)] px-3 py-1.5 rounded-lg border border-[var(--color-border)]">
                      <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></span>
                      {t('crafts.duration')}: {isRTL ? craft.duration : (craft.durationEN || craft.duration)}
                    </div>
                  </div>

                  <Link to={`/craft/${craft.id}`} className="block text-center w-full bg-[var(--color-bg-sand)] hover:bg-[var(--color-primary)] hover:text-[var(--color-bg-sand)] text-[var(--color-dark)] py-3 rounded-xl font-bold transition-colors border border-[var(--color-border)] hover:border-[var(--color-primary)]">
                    {t('crafts.start_learning')}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits CTA */}
      <section className="py-24 bg-[var(--color-card)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[var(--color-header)] border border-[var(--color-border)] rounded-3xl overflow-hidden flex flex-col md:flex-row">
            
            <div className="p-12 md:p-16 flex-1 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--color-dark)] mb-6 leading-tight">
                {t('home.cta_title')}
              </h2>
              <ul className="space-y-4 mb-10 text-[var(--color-secondary)] text-lg">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0" />
                  <span>{t('home.cta_point1')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0" />
                  <span>{t('home.cta_point2')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0" />
                  <span>{t('home.cta_point3')}</span>
                </li>
              </ul>
              <div>
                 <Link to="/test" className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-[var(--color-bg-sand)] px-8 py-4 rounded-xl font-bold text-lg transition-all">
                    {t('hero.start_test')}
                 </Link>
              </div>
            </div>

            <div className="md:w-[45%] relative min-h-[300px] md:min-h-full">
               <img 
                 src="https://images.unsplash.com/photo-1542848972-e6e737cbe1eb?auto=format&fit=crop&w=800&q=80" 
                 loading="lazy"
                 alt="العمل الحرفي" 
                 className={`absolute inset-0 w-full h-full object-cover ${isRTL ? 'clip-path-slant' : 'clip-path-slant-rtl'}`}
               />
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
}