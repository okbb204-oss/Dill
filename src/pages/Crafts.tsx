import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ArrowLeft, ArrowRight, Clock, Briefcase, GraduationCap } from 'lucide-react';
import { crafts } from '../data/crafts';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import CraftIllustration from '../components/illustrations/CraftIllustration';

export default function CraftsDir() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const categories = useMemo(() => {
    return Array.from(new Set(crafts.map(c => (!isRTL && c.categoryEN) ? c.categoryEN : c.category)));
  }, [isRTL]);

  const filteredCrafts = crafts.filter(c => {
    // Advanced Search logic
    const searchWords = searchTerm.toLowerCase().split(/\s+/).filter(Boolean);
    
    const fieldsToSearch = [
      c.nameAR,
      c.nameEN || '',
      c.nameFR,
      c.shortDescription,
      c.shortDescriptionEN || '',
      c.fullDescription || '',
      c.fullDescriptionEN || '',
      c.category,
      c.categoryEN || '',
      ...(c.tools || []),
      ...(c.toolsEN || []),
      ...(c.skills || []),
      ...(c.skillsEN || []),
      ...(c.careerOpportunities || []),
      ...(c.careerOpportunitiesEN || [])
    ].map(f => f.toLowerCase());

    const matchSearch = searchWords.length === 0 || searchWords.every(word => 
      fieldsToSearch.some(field => field.includes(word))
    );
    
    // Category match
    const catToMatch = (!isRTL && c.categoryEN) ? c.categoryEN : c.category;
    const matchCat = selectedCategory ? catToMatch === selectedCategory : true;
    
    return matchSearch && matchCat;
  }).sort((a, b) => {
    if (!searchTerm) return 0;
    const searchWords = searchTerm.toLowerCase().split(/\s+/).filter(Boolean);
    
    const getRelevance = (c: any) => {
      let score = 0;
      const term = searchTerm.toLowerCase();
      // Exact name match gives highest score
      if (c.nameAR.toLowerCase() === term || c.nameEN?.toLowerCase() === term || c.nameFR.toLowerCase() === term) {
        score += 100;
      }
      // Partial name match gives high score
      if (c.nameAR.toLowerCase().includes(term) || c.nameEN?.toLowerCase().includes(term) || c.nameFR.toLowerCase().includes(term)) {
        score += 50;
      }
      
      // Word matches in short description
      searchWords.forEach(word => {
        if (c.shortDescription.toLowerCase().includes(word) || c.shortDescriptionEN?.toLowerCase().includes(word)) {
          score += 5;
        }
        if (c.category.toLowerCase().includes(word) || c.categoryEN?.toLowerCase().includes(word)) {
          score += 10;
        }
      });
      return score;
    };

    return getRelevance(b) - getRelevance(a);
  });

  return (
    <div className="bg-[#F9F6F0] dark:bg-[#1E1C1A] min-h-screen pb-24 transition-colors duration-300">
      {/* Header Section */}
      <div className="bg-[#3A7B85] dark:bg-[#2D5A61] text-white pt-24 pb-20 px-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`, backgroundSize: '40px 40px' }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white leading-tight">
              {t('crafts.directory_title')}
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10">
              {t('crafts.directory_subtitle')}
            </p>
          </motion.div>

          {/* Search Box */}
          <div className="max-w-2xl mx-auto relative">
             <div className={`absolute inset-y-0 ${isRTL ? 'left-4' : 'right-4'} flex items-center pointer-events-none`}>
                <Search className="text-[#3A7B85] w-6 h-6" />
             </div>
             <input 
               type="text" 
               placeholder={isRTL ? "ابحث بالاسم، الأداة، المهارة..." : "Search by name, tool, skill..."} 
               value={searchTerm}
               onChange={e => setSearchTerm(e.target.value)}
               className={`w-full bg-white dark:bg-[#2A2724] border-2 border-transparent text-[#1E1C1A] dark:text-white rounded-2xl py-5 shadow-2xl ${isRTL ? 'pl-14 pr-6' : 'pr-14 pl-6'} outline-none focus:border-[#C67B4B] transition-all font-medium text-lg placeholder-gray-400`}
             />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Filters Pills */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Filter className="w-5 h-5 text-[#C67B4B]" />
            <h2 className="text-xl font-bold font-heading text-[#1E1C1A] dark:text-[#E8E2D7]">
              {isRTL ? 'تصفح حسب التصنيف' : 'Browse by Category'}
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <button 
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2.5 rounded-full font-bold transition-all duration-300 border-2 ${
                selectedCategory === null 
                ? 'bg-[#C67B4B] border-[#C67B4B] text-white shadow-lg shadow-[#C67B4B]/20' 
                : 'bg-white dark:bg-[#2A2724] border-[#C67B4B]/20 text-[#C67B4B] hover:border-[#C67B4B]'
              }`}
            >
              {isRTL ? 'الكل' : 'All'}
            </button>
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full font-bold transition-all duration-300 border-2 ${
                  selectedCategory === cat 
                  ? 'bg-[#C67B4B] border-[#C67B4B] text-white shadow-lg shadow-[#C67B4B]/20' 
                  : 'bg-white dark:bg-[#2A2724] border-[#C67B4B]/20 text-[#C67B4B] hover:border-[#C67B4B]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Status */}
        <div className="mb-8 flex items-center justify-between">
           <div className="text-gray-500 dark:text-gray-400 font-medium">
              {isRTL ? 'وجدنا' : 'Found'} <span className="text-[#C67B4B] font-bold">{filteredCrafts.length}</span> {isRTL ? 'حرفة تناسب تطلعاتك' : 'crafts matching your aspirations'}
           </div>
        </div>

        {/* Grid Layout: 3 cols Desktop, 2 cols Tablet, 1 col Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCrafts.map((craft) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                key={craft.id}
                className="group bg-white dark:bg-[#2A2724] rounded-3xl overflow-hidden border-2 border-transparent hover:border-[#3A7B85] shadow-sm hover:shadow-[0_10px_25px_rgba(198,123,75,0.15)] transition-all duration-500 flex flex-col transform hover:-translate-y-[5px]"
              >
                {/* Image Section */}
                <div className="h-56 relative overflow-hidden">
                  <CraftIllustration craftId={craft.id} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-105" />
                  
                  {/* Category Badge */}
                  <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'}`}>
                    <span className="bg-[#3A7B85]/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                      {(!isRTL && craft.categoryEN) ? craft.categoryEN : craft.category}
                    </span>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className={`absolute bottom-4 ${isRTL ? 'left-4' : 'right-4'}`}>
                    <div className="bg-white/90 backdrop-blur-md dark:bg-[#1E1C1A]/90 px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#C67B4B]" />
                      <span className="text-xs font-bold text-[#1E1C1A] dark:text-[#E8E2D7]">
                        {(!isRTL && craft.durationEN) ? craft.durationEN : craft.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold font-heading text-[#1E1C1A] dark:text-[#E8E2D7] group-hover:text-[#3A7B85] transition-colors">
                        {(!isRTL && craft.nameEN) ? craft.nameEN : craft.nameAR}
                      </h3>
                      <p className="text-[#3A7B85] text-sm font-medium italic mt-1" dir="ltr">
                        {craft.nameFR}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8 flex-grow line-clamp-2">
                    {(!isRTL && craft.shortDescriptionEN) ? craft.shortDescriptionEN : craft.shortDescription}
                  </p>

                  <Link 
                    to={`/craft/${craft.id}`} 
                    className="group/btn relative mt-auto inline-flex items-center justify-between w-full p-4 rounded-2xl bg-[#F9F6F0] dark:bg-[#34302C] hover:bg-[#C67B4B] transition-all duration-300 overflow-hidden"
                  >
                    <span className="font-bold text-[#1E1C1A] dark:text-[#E8E2D7] group-hover/btn:text-white transition-colors relative z-10">
                      {t('crafts.about_craft')}
                    </span>
                    <div className="relative z-10 w-8 h-8 rounded-full bg-white dark:bg-[#1E1C1A] flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                      {isRTL ? (
                        <ArrowLeft className="w-4 h-4 text-[#C67B4B] group-hover/btn:text-[#C67B4B]" />
                      ) : (
                        <ArrowRight className="w-4 h-4 text-[#C67B4B] group-hover/btn:text-[#C67B4B]" />
                      )}
                    </div>
                  </Link>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      const rawStored = localStorage.getItem('compare_crafts');
                      let stored: string[] = [];
                      if (rawStored) try { stored = JSON.parse(rawStored); } catch(e){}
                      if (stored.length >= 2) stored.shift();
                      if (!stored.includes(craft.id)) stored.push(craft.id);
                      localStorage.setItem('compare_crafts', JSON.stringify(stored));
                      window.location.href = '/crafts/compare?ids=' + stored.join(',');
                    }}
                    className="mt-3 w-full p-3 rounded-2xl border border-[#3A7B85] text-[#3A7B85] hover:bg-[#3A7B85] hover:text-white font-bold transition-colors text-center text-sm"
                  >
                    {t('comparator.compare')}
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {filteredCrafts.length === 0 && (
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-24 bg-white dark:bg-[#2A2724] rounded-3xl border-2 border-dashed border-[#C67B4B]/20 shadow-sm flex flex-col items-center"
             >
                <div className="w-20 h-20 bg-[#F9F6F0] dark:bg-[#1E1C1A] rounded-full flex items-center justify-center mb-6">
                   <Search className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-[#1E1C1A] dark:text-[#E8E2D7] mb-3">
                  {isRTL ? 'لم نجد أي حرفة مطابقة' : 'No matching crafts found'}
                </h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  {isRTL ? 'جرب البحث بكلمات أخرى أو تغيير الفئة لتوسيع النتائج.' : 'Try searching with different keywords or changing the category.'}
                </p>
                <button 
                  onClick={() => {setSearchTerm(''); setSelectedCategory(null);}}
                  className="mt-8 text-[#3A7B85] font-bold hover:underline"
                >
                  {isRTL ? 'إعادة ضبط البحث' : 'Reset search filters'}
                </button>
             </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

