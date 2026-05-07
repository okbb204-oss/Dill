import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { crafts, Craft } from '../data/crafts';
import { ArrowRight, ArrowLeft, X, PlusCircle, CheckCircle, Info } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function CompareCrafts() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const navigate = useNavigate();
  const location = useLocation();
  
  const [selectedCrafts, setSelectedCrafts] = useState<Craft[]>([]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const ids = params.get('ids')?.split(',') || [];
    
    // Load from URL or local storage
    if (ids.length > 0) {
      const loaded = ids.map(id => crafts.find(c => c.id === id)).filter(Boolean) as Craft[];
      setSelectedCrafts(loaded.slice(0, 2));
    } else {
      const stored = localStorage.getItem('compare_crafts');
      if (stored) {
        try {
          const storedIds = JSON.parse(stored);
          const loaded = storedIds.map((id: string) => crafts.find(c => c.id === id)).filter(Boolean) as Craft[];
          setSelectedCrafts(loaded.slice(0, 2));
        } catch (e) {
          console.error(e);
        }
      }
    }
  }, [location.search]);

  useEffect(() => {
    if (selectedCrafts.length > 0) {
      localStorage.setItem('compare_crafts', JSON.stringify(selectedCrafts.map(c => c.id)));
      
      const newIds = selectedCrafts.map(c => c.id).join(',');
      const params = new URLSearchParams(location.search);
      if (params.get('ids') !== newIds) {
        navigate(`/crafts/compare?ids=${newIds}`, { replace: true });
      }
    } else {
      localStorage.removeItem('compare_crafts');
      navigate('/crafts/compare', { replace: true });
    }
  }, [selectedCrafts, navigate, location.search]);

  const removeCraft = (id: string) => {
    setSelectedCrafts(prev => prev.filter(c => c.id !== id));
  };

  const c1 = selectedCrafts[0];
  const c2 = selectedCrafts[1];

  const renderField = (c: Craft | undefined, field: keyof Craft | string, enField?: keyof Craft) => {
    if (!c) return <span className="text-gray-400">-</span>;
    const val = (!isRTL && enField && c[enField]) ? c[enField] : c[field as keyof Craft];
    if (Array.isArray(val)) {
      return (
        <ul className={`list-disc ${isRTL ? 'pr-4' : 'pl-4'} text-sm space-y-1`}>
          {val.map((item, i) => <li key={i}>{item as string}</li>)}
        </ul>
      );
    }
    return <span className="text-sm">{val as string}</span>;
  };

  return (
    <div className="bg-[#F9F6F0] dark:bg-[#1E1C1A] min-h-screen pt-24 pb-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold font-heading text-[#2D2D2D] dark:text-[#E8E2D7] mb-2">
              {t('comparator.title')}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {t('comparator.select_two')}
            </p>
          </div>
          <div className="flex gap-4">
            {selectedCrafts.length > 0 && (
              <button 
                onClick={() => setSelectedCrafts([])}
                className="px-4 py-2 rounded-full border border-[#C67B4B] text-[#C67B4B] hover:bg-[#C67B4B] hover:text-white transition-colors"
              >
                {t('comparator.clear')}
              </button>
            )}
            <Link to="/crafts" className="flex items-center gap-2 px-6 py-2 rounded-full bg-[#3A7B85] text-white hover:bg-[#2e666f] transition-colors font-medium">
              {isRTL ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
              {t('crafts.back_to_dir')}
            </Link>
          </div>
        </div>

        {selectedCrafts.length === 0 ? (
          <div className="bg-white dark:bg-[#2A2724] rounded-3xl p-12 text-center shadow-sm border border-[#E5DDD3] dark:border-[#3D3935]">
            <Info className="w-16 h-16 text-[#C67B4B] mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-bold text-[#2D2D2D] dark:text-[#E8E2D7] mb-4">{t('comparator.select_two')}</h3>
            <Link to="/crafts" className="inline-block px-8 py-3 rounded-xl bg-[#C67B4B] text-white font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              {t('hero.browse_crafts')}
            </Link>
          </div>
        ) : (
          <div className="bg-white dark:bg-[#2A2724] rounded-3xl overflow-hidden shadow-xl border border-[#E5DDD3] dark:border-[#3D3935]">
            {/* Table Header / Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-[#E5DDD3] dark:border-[#3D3935]">
              <div className="hidden md:block p-6 bg-[#F9F6F0] dark:bg-[#1E1C1A]">
                 {/* Empty corner */}
              </div>
              
              {[0, 1].map((index) => {
                const c = selectedCrafts[index];
                if (!c) {
                  return (
                    <div key={index} className="p-6 flex flex-col items-center justify-center min-h-[250px] border-l border-[#E5DDD3] dark:border-[#3D3935] border-t md:border-t-0">
                      <Link to="/crafts" className="flex flex-col items-center gap-3 text-[#3A7B85] hover:text-[#C67B4B] transition-colors group">
                        <PlusCircle className="w-12 h-12 group-hover:scale-110 transition-transform" />
                        <span className="font-bold">{t('comparator.add_another')}</span>
                      </Link>
                    </div>
                  );
                }
                
                return (
                  <div key={c.id} className="relative p-6 border-t md:border-t-0 md:border-l border-[#E5DDD3] dark:border-[#3D3935]">
                    <button 
                      onClick={() => removeCraft(c.id)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors p-1"
                      title={t('comparator.remove')}
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <div className="mt-4">
                      <span className="inline-block px-3 py-1 bg-[#3A7B85]/10 text-[#3A7B85] rounded-full text-xs font-bold mb-3">
                        {(!isRTL && c.categoryEN) ? c.categoryEN : c.category}
                      </span>
                      <h3 className="text-xl font-bold font-heading text-[#2D2D2D] dark:text-[#E8E2D7] mb-2">
                        {(!isRTL && c.nameEN) ? c.nameEN : c.nameAR}
                      </h3>
                      <p className="text-[#C67B4B] text-sm mb-4 line-clamp-2">
                        {(!isRTL && c.shortDescriptionEN) ? c.shortDescriptionEN : c.shortDescription}
                      </p>
                      <Link to={`/craft/${c.id}`} className="text-sm font-bold text-[#3A7B85] hover:underline flex items-center gap-1">
                        {t('crafts.about_craft')} {isRTL ? <ArrowLeft className="w-3 h-3" /> : <ArrowRight className="w-3 h-3" />}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Table Body */}
            <div className="divide-y divide-[#E5DDD3] dark:divide-[#3D3935]">
              {/* Duration */}
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="p-4 bg-[#F9F6F0] dark:bg-[#1E1C1A] font-bold text-[#2D2D2D] dark:text-[#E8E2D7] flex items-center">
                  {t('comparator.duration')}
                </div>
                <div className="p-4 md:border-l border-[#E5DDD3] dark:border-[#3D3935] text-[#6B705C] dark:text-[#B0A99A]">
                  {renderField(c1, 'duration', 'durationEN')}
                </div>
                <div className="p-4 border-t md:border-t-0 md:border-l border-[#E5DDD3] dark:border-[#3D3935] text-[#6B705C] dark:text-[#B0A99A]">
                  {renderField(c2, 'duration', 'durationEN')}
                </div>
              </div>

              {/* Requirements/Tools */}
              <div className="grid grid-cols-1 md:grid-cols-3 bg-white/50 dark:bg-[#2A2724]/50">
                <div className="p-4 bg-[#F9F6F0]/80 dark:bg-[#1E1C1A]/80 font-bold text-[#2D2D2D] dark:text-[#E8E2D7] flex items-center">
                  {t('crafts.tools')}
                </div>
                <div className="p-4 md:border-l border-[#E5DDD3] dark:border-[#3D3935] text-[#6B705C] dark:text-[#B0A99A]">
                  {renderField(c1, 'tools', 'toolsEN')}
                </div>
                <div className="p-4 border-t md:border-t-0 md:border-l border-[#E5DDD3] dark:border-[#3D3935] text-[#6B705C] dark:text-[#B0A99A]">
                  {renderField(c2, 'tools', 'toolsEN')}
                </div>
              </div>

               {/* Skills */}
               <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="p-4 bg-[#F9F6F0] dark:bg-[#1E1C1A] font-bold text-[#2D2D2D] dark:text-[#E8E2D7] flex items-center">
                  {t('comparator.skills')}
                </div>
                <div className="p-4 md:border-l border-[#E5DDD3] dark:border-[#3D3935] text-[#6B705C] dark:text-[#B0A99A] text-sm">
                   {renderField(c1, 'skills', 'skillsEN')}
                </div>
                <div className="p-4 border-t md:border-t-0 md:border-l border-[#E5DDD3] dark:border-[#3D3935] text-[#6B705C] dark:text-[#B0A99A] text-sm">
                   {renderField(c2, 'skills', 'skillsEN')}
                </div>
              </div>

              {/* Career */}
              <div className="grid grid-cols-1 md:grid-cols-3 bg-white/50 dark:bg-[#2A2724]/50">
                <div className="p-4 bg-[#F9F6F0]/80 dark:bg-[#1E1C1A]/80 font-bold text-[#2D2D2D] dark:text-[#E8E2D7] flex items-center">
                  {t('crafts.career')}
                </div>
                <div className="p-4 md:border-l border-[#E5DDD3] dark:border-[#3D3935] text-[#6B705C] dark:text-[#B0A99A]">
                   {renderField(c1, 'careerOpportunities', 'careerOpportunitiesEN')}
                </div>
                <div className="p-4 border-t md:border-t-0 md:border-l border-[#E5DDD3] dark:border-[#3D3935] text-[#6B705C] dark:text-[#B0A99A]">
                   {renderField(c2, 'careerOpportunities', 'careerOpportunitiesEN')}
                </div>
              </div>

            </div>

             {/* Conclusion / Suggestion */}
             {selectedCrafts.length === 2 && (
              <div className="p-8 bg-[#3A7B85]/5 dark:bg-[#3A7B85]/10 border-t border-[#E5DDD3] dark:border-[#3D3935]">
                <h4 className="text-lg font-bold text-[#3A7B85] mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" /> 
                  {t('comparator.conclusion')}
                </h4>
                <p className="text-[#2D2D2D] dark:text-[#E8E2D7] leading-relaxed">
                  {/* Dynamic suggestion based on traits or generic message */}
                  {isRTL 
                    ? `كلا الحرفتين تمتلكان آفاق عمل جيدة. إذا كنت تفضل العمل الدقيق والتقني، فقد تميل إلى "${c1?.nameAR}". أما إذا كنت تحب العمل الميداني والتنوع المباشر في المهام، فإن "${c2?.nameAR}" خيار ممتاز.`
                    : `Both crafts have good career prospects. If you prefer technical, precise work, you might lean towards "${c1?.nameEN}". If you enjoy field work and task variety, "${c2?.nameEN}" is an excellent choice.`}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
