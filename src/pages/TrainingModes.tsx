import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ExternalLink, ArrowRight, ArrowLeft, Star } from 'lucide-react';
import { trainingModesList } from '../data/trainingModes';
import { Link } from 'react-router-dom';

export default function TrainingModes() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const scrollToModes = () => {
    document.getElementById('modes-grid')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
      <div className="pt-24 pb-20 min-h-screen bg-[#F9F6F0] dark:bg-[var(--color-dark)] relative overflow-hidden transition-colors duration-300">
        
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-full h-96 bg-gradient-to-b from-[#C67B4B]/10 to-transparent pointer-events-none" />
        <div className="absolute top-20 -left-64 w-[500px] h-[500px] bg-[#3A7B85]/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-20 pt-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-gray-900 dark:text-white leading-tight"
            >
              {t('training_modes.title')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 font-medium leading-relaxed mb-10"
            >
              {t('training_modes.subtitle')}
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onClick={scrollToModes}
              className="inline-flex items-center gap-2 bg-[#C67B4B] hover:bg-[#A9633A] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              {t('training_modes.explore_btn')}
              <ChevronDown className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Modes Grid */}
          <div id="modes-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {trainingModesList.map((mode, index) => (
              <TrainingModeCard key={mode.id} mode={mode} index={index} />
            ))}
          </div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#3A7B85]/5 dark:bg-[#3A7B85]/10 border border-[#3A7B85]/20 rounded-3xl p-10 md:p-14 text-center max-w-4xl mx-auto relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#3A7B85]/10 rounded-full blur-[80px]" />
            <h2 className="text-3xl font-bold font-heading mb-4 relative z-10 text-gray-900 dark:text-white">
              {t('training_modes.cta_title')}
            </h2>
            <p className="text-lg opacity-80 mb-8 max-w-xl mx-auto relative z-10">
              {t('training_modes.cta_desc')}
            </p>
            <Link 
              to="/test"
              className="inline-flex items-center gap-2 bg-[#3A7B85] hover:bg-[#2A5C64] text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 relative z-10"
            >
              {t('training_modes.cta_btn')}
              {isRTL ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
            </Link>
          </motion.div>

        </div>
      </div>
  );
}

function TrainingModeCard({ mode, index }: { mode: typeof trainingModesList[0], index: number }) {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = mode.icon;

  const getDetails = (modeId: string) => {
    switch(modeId) {
      case 'apprenticeship':
        return [
          { label: t('training_modes.target_audience'), value: t(`training_modes.modes.${modeId}.target`) },
          { label: t('training_modes.law'), value: t(`training_modes.modes.${modeId}.law_val`) },
          { label: t('training_modes.benefits'), value: t(`training_modes.modes.${modeId}.benefits_val`) },
          { label: t('training_modes.contract'), value: t(`training_modes.modes.${modeId}.contract_val`) },
        ];
      case 'presentiel':
        return [
          { label: t('training_modes.target_audience'), value: t(`training_modes.modes.${modeId}.target`) },
          { label: t('training_modes.certificate'), value: t(`training_modes.modes.${modeId}.certificate_val`) },
          { label: t('training_modes.duration'), value: t(`training_modes.modes.${modeId}.duration_val`) },
        ];
      case 'continue':
        return [
          { label: t('training_modes.target_audience'), value: t(`training_modes.modes.${modeId}.target`) },
          { label: t('training_modes.fields'), value: t(`training_modes.modes.${modeId}.fields_val`) },
          { label: t('training_modes.benefits'), value: t(`training_modes.modes.${modeId}.benefits_val`) },
        ];
      case 'evening':
        return [
          { label: t('training_modes.timing'), value: t(`training_modes.modes.${modeId}.timing_val`) },
          { label: t('training_modes.certificate'), value: t(`training_modes.modes.${modeId}.certificate_val`) },
        ];
      case 'distance':
        return [
          { label: t('training_modes.fields'), value: t(`training_modes.modes.${modeId}.fields_val`) },
          { label: t('training_modes.features'), value: t(`training_modes.modes.${modeId}.features_val`) },
        ];
      default:
        return [];
    }
  };

  const details = getDetails(mode.id);
  const isExternal = mode.link.startsWith('http');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onHoverStart={() => !isExpanded && setIsExpanded(true)}
      onHoverEnd={() => isExpanded && setIsExpanded(false)}
      className={`
        bg-white dark:bg-[#2A2724] rounded-2xl flex flex-col overflow-hidden relative transition-all duration-300
        ${mode.isFeatured 
          ? 'border-2 border-[#C9A96E] shadow-[0_10px_30px_rgba(201,169,110,0.15)] hover:shadow-[0_15px_40px_rgba(201,169,110,0.25)]' 
          : 'border border-[#E5DDD3] dark:border-[#3D3935] shadow-sm hover:border-[#3A7B85] hover:shadow-xl hover:-translate-y-2'
        }
      `}
    >
      {mode.isFeatured && (
        <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} bg-[#C9A96E]/10 text-[#C9A96E] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1`}>
          <Star className="w-3 h-3 fill-current" />
          {t('training_modes.recommended')}
        </div>
      )}

      <div className="p-8 flex-1 flex flex-col">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 
          ${mode.isFeatured ? 'bg-[#C9A96E]/10 text-[#C9A96E]' : 'bg-[#E5DDD3] dark:bg-[#3D3935] text-gray-700 dark:text-gray-300'}
        `}>
          <Icon className="w-8 h-8" />
        </div>
        
        <h3 className="text-2xl font-bold font-heading mb-4 text-gray-900 dark:text-white">
          {t(`training_modes.modes.${mode.id}.title`)}
        </h3>
        
        <p className="text-[#6B705C] dark:text-[#B0A99A] font-medium leading-relaxed mb-6">
          {t(`training_modes.modes.${mode.id}.desc`)}
        </p>

        <div className="mt-auto">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-sm font-bold opacity-70 hover:opacity-100 transition-opacity mb-4 lg:hidden"
          >
            {isExpanded ? t('training_modes.less_details') : t('training_modes.more_details')}
            <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {(isExpanded || (typeof window !== 'undefined' && window.innerWidth >= 1024)) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden lg:!h-auto lg:!opacity-100"
              >
                <div className="space-y-3 pb-6 mb-6 border-b border-gray-100 dark:border-gray-800">
                  {details.map((detail, i) => (
                    <div key={i} className="text-sm">
                      <span className="font-bold text-gray-900 dark:text-gray-100">{detail.label}</span>{' '}
                      <span className="text-gray-600 dark:text-gray-400">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {isExternal ? (
            <a 
              href={mode.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold transition-colors
                ${mode.isFeatured 
                  ? 'bg-[#C9A96E] hover:bg-[#B3935B] text-white' 
                  : 'bg-[#F9F6F0] dark:bg-[#1E1C1A] hover:bg-[#C67B4B] dark:hover:bg-[#C9A96E] hover:text-white dark:hover:text-black text-gray-900 dark:text-white'
                }
              `}
            >
              {t(`training_modes.modes.${mode.id}.link_text`)}
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <Link 
              to={mode.link}
              className={`
                w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold transition-colors
                ${mode.isFeatured 
                  ? 'bg-[#C9A96E] hover:bg-[#B3935B] text-white' 
                  : 'bg-[#F9F6F0] dark:bg-[#1E1C1A] hover:bg-[#3A7B85] hover:text-white text-gray-900 dark:text-white'
                }
              `}
            >
              {t(`training_modes.modes.${mode.id}.link_text`)}
              {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
