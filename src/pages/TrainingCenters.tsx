import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { 
  MapPin, 
  Search, 
  Filter,
  Phone,
  Mail,
  ExternalLink,
  ChevronDown,
  Building2,
  Map as MapIcon
} from 'lucide-react';

import { wilayas } from '../data/wilayas';
import { trainingCenters, CenterType } from '../data/trainingCenters';
import { crafts } from '../data/crafts';

export default function TrainingCenters() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  const [selectedWilaya, setSelectedWilaya] = useState<number | 'all'>('all');
  const [selectedCraft, setSelectedCraft] = useState<string | 'all'>('all');
  const [selectedType, setSelectedType] = useState<CenterType | 'all'>('all');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Filter logic
  const filteredCenters = useMemo(() => {
    return trainingCenters.filter(center => {
      const matchWilaya = selectedWilaya === 'all' || center.wilayaId === selectedWilaya;
      const matchCraft = selectedCraft === 'all' || center.specialties.includes(selectedCraft);
      const matchType = selectedType === 'all' || center.type === selectedType;
      return matchWilaya && matchCraft && matchType && center.isActive;
    });
  }, [selectedWilaya, selectedCraft, selectedType]);

  const currentWilayaName = useMemo(() => {
    if (selectedWilaya === 'all') return null;
    const w = wilayas.find(w => w.id === selectedWilaya);
    return isRTL ? w?.nameAR : w?.nameEN;
  }, [selectedWilaya, isRTL]);

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  const getMapLink = (address: string, commune: string) => {
    const query = encodeURIComponent(`${address}, ${commune}, Algeria`);
    return `https://www.google.com/maps/search/?api=1&query=${query}`;
  };

  return (
      <div className="pt-24 pb-20 min-h-screen bg-[#F9F6F0] dark:bg-[var(--color-dark)] relative overflow-hidden transition-colors duration-300">
        
        {/* Background Elements */}
        <div className="absolute top-0 right-0 p-32 opacity-5 pointer-events-none">
          <MapIcon className="w-96 h-96" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="mb-12 text-center md:text-start">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-[#C67B4B] dark:text-[#C9A96E]">
              {t('training_centers.title')}
            </h1>
            <p className="text-lg opacity-80 max-w-2xl">
              {t('training_centers.subtitle')}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar Filters */}
            <div className="w-full lg:w-80 flex-shrink-0">
              
              {/* Mobile Filter Toggle */}
              <button 
                onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                className="w-full lg:hidden flex items-center justify-between p-4 bg-white dark:bg-[#2A2724] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 mb-4"
              >
                <div className="flex items-center gap-2 font-bold">
                  <Filter className="w-5 h-5 text-[#C67B4B]" />
                  <span>{t('training_centers.filter_type')}</span>
                </div>
                <ChevronDown className={`w-5 h-5 transition-transform ${isMobileFilterOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {(isMobileFilterOpen || (typeof window !== 'undefined' && window.innerWidth >= 1024)) && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-white dark:bg-[#2A2724] p-6 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800 lg:sticky lg:top-32 overflow-hidden"
                  >
                    
                    {/* Wilaya Filter */}
                    <div className="mb-6">
                      <label className="block text-sm font-bold mb-2 opacity-80 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {t('training_centers.filter_wilaya')}
                      </label>
                      <select 
                        value={selectedWilaya}
                        onChange={(e) => setSelectedWilaya(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                        className="w-full p-3 bg-[#F9F6F0] dark:bg-[#1E1C1A] rounded-xl border-none outline-none focus:ring-2 focus:ring-[#C67B4B] dark:focus:ring-[#C9A96E] transition-all"
                        dir={isRTL ? 'rtl' : 'ltr'}
                      >
                        <option value="all">{isRTL ? 'جميع الولايات' : 'All Wilayas'}</option>
                        {wilayas.map(w => (
                          <option key={w.id} value={w.id}>
                            {w.id} - {isRTL ? w.nameAR : (w.nameEN || w.nameFR)}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Craft Filter */}
                    <div className="mb-6">
                      <label className="block text-sm font-bold mb-2 opacity-80 flex items-center gap-2">
                        <Search className="w-4 h-4" />
                        {t('training_centers.filter_craft')}
                      </label>
                      <select 
                        value={selectedCraft}
                        onChange={(e) => setSelectedCraft(e.target.value)}
                        className="w-full p-3 bg-[#F9F6F0] dark:bg-[#1E1C1A] rounded-xl border-none outline-none focus:ring-2 focus:ring-[#C67B4B] dark:focus:ring-[#C9A96E] transition-all"
                      >
                        <option value="all">{isRTL ? 'جميع التخصصات' : 'All Crafts'}</option>
                        {crafts.map(c => (
                          <option key={c.id} value={c.id}>
                            {isRTL ? c.nameAR : c.nameEN}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Type Filter */}
                    <div className="mb-6">
                      <label className="block text-sm font-bold mb-2 opacity-80 flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        {t('training_centers.filter_type')}
                      </label>
                      <div className="space-y-2">
                        {['all', 'CFPA', 'INSFP', 'IFG', 'Private'].map((type) => (
                          <label key={type} className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-[#F9F6F0] dark:hover:bg-[#1E1C1A] transition-colors">
                            <div className="relative flex items-center justify-center">
                              <input 
                                type="radio" 
                                name="centerType" 
                                value={type} 
                                checked={selectedType === type}
                                onChange={() => setSelectedType(type as any)}
                                className="peer sr-only"
                              />
                              <div className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600 peer-checked:border-[#C67B4B] dark:peer-checked:border-[#C9A96E] transition-colors"></div>
                              <div className="absolute w-2.5 h-2.5 rounded-full bg-[#C67B4B] dark:bg-[#C9A96E] scale-0 peer-checked:scale-100 transition-transform"></div>
                            </div>
                            <span className="font-medium text-sm">
                              {type === 'all' ? t('training_centers.all_types') : type}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Results Area */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold font-heading mb-8">
                {currentWilayaName 
                  ? t('training_centers.results_title_wilaya', { wilaya: currentWilayaName }) 
                  : t('training_centers.results_title_all')
                }
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AnimatePresence mode="popLayout">
                  {filteredCenters.map((center, index) => (
                    <motion.div
                      key={center.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="bg-white dark:bg-[#2A2724] rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#C67B4B]/30 transition-all duration-300 group flex flex-col"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold font-heading text-[#C67B4B] dark:text-[#C9A96E] leading-tight">
                          {isRTL ? center.nameAR : center.nameFR}
                        </h3>
                        <span className="px-3 py-1 bg-[#F9F6F0] dark:bg-[#1E1C1A] text-xs font-bold rounded-full text-[#3A7B85] opacity-80 whitespace-nowrap ml-2">
                          {center.type}
                        </span>
                      </div>
                      
                      <div className="space-y-3 mb-6 flex-1 text-sm opacity-80">
                        <p className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                          <span>{center.address}</span>
                        </p>
                        {center.phone && (
                          <p className="flex items-center gap-2" dir="ltr">
                            <Phone className="w-4 h-4 shrink-0" />
                            <span className="text-right w-full">{center.phone}</span>
                          </p>
                        )}
                        {center.email && (
                          <p className="flex items-center gap-2">
                            <Mail className="w-4 h-4 shrink-0" />
                            <span>{center.email}</span>
                          </p>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                        <a 
                          href={getMapLink(center.address, center.commune)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-[#F9F6F0] dark:bg-[#1E1C1A] hover:bg-[#C67B4B] hover:text-white dark:hover:bg-[#C9A96E] dark:hover:text-black rounded-xl text-sm font-bold transition-colors"
                        >
                          <MapIcon className="w-4 h-4" />
                          {t('training_centers.map_btn')}
                        </a>
                        <a 
                          href={center.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-2 px-4 border border-[#C67B4B]/30 hover:border-[#C67B4B] rounded-xl text-sm font-bold text-[#C67B4B] dark:text-[#C9A96E] transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          {t('training_centers.details_btn')}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {filteredCenters.length === 0 && (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    className="col-span-full py-16 text-center bg-white dark:bg-[#2A2724] rounded-3xl border border-dashed border-gray-300 dark:border-gray-700"
                  >
                    <Building2 className="w-16 h-16 mx-auto mb-4 text-gray-400 opacity-50" />
                    <p className="text-lg opacity-70 font-medium max-w-md mx-auto">
                      {t('training_centers.results_empty')}
                    </p>
                  </motion.div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
  );
}
