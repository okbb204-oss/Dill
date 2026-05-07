import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { db } from '../lib/firebase';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { motion, AnimatePresence } from 'motion/react';
import { Share2, X, AlertCircle } from 'lucide-react';
import { crafts } from '../data/crafts';

interface PortfolioItem {
  id: string;
  user_id: string;
  craft_id: string;
  title: string;
  description: string;
  images: string[];
  is_public: boolean;
  created_at: string;
}

interface UserProfile {
  id: string;
  name: string;
  avatarUrl?: string;
  xp?: number;
}

export default function UserPortfolio() {
  const { userId } = useParams<{ userId: string }>();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [projects, setProjects] = useState<PortfolioItem[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      if (!userId) return;
      try {
        setLoading(true);
        setError(null);

        // Fetch user profile
        const userRef = doc(db, 'users', userId);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setProfile(userSnap.data() as UserProfile);
        } else {
          setError('User not found.');
          return;
        }

        // Fetch portfolios
        const q = query(collection(db, 'portfolios'), where('user_id', '==', userId), where('is_public', '==', true));
        const querySnapshot = await getDocs(q);
        const fetchedProjects: PortfolioItem[] = [];
        querySnapshot.forEach((doc) => {
          fetchedProjects.push({ id: doc.id, ...doc.data() } as PortfolioItem);
        });
        
        // Sort by created_at descending (string sort works for ISO dates)
        fetchedProjects.sort((a, b) => b.created_at.localeCompare(a.created_at));
        
        setProjects(fetchedProjects);

      } catch (err) {
        console.error(err);
        setError('Could not load portfolio.');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [userId]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${profile?.name}'s Portfolio`,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-[#F9F6F0] dark:bg-[#1E1C1A] text-[#C67B4B] font-bold">Loading...</div>;
  }

  if (error || !profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9F6F0] dark:bg-[#1E1C1A]">
        <div className="text-center p-8 bg-white dark:bg-[#2A2724] rounded-2xl shadow-sm border border-red-100">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-[#2D2D2D] dark:text-[#E8E2D7] mb-2">{error || 'Profile Not Found'}</h2>
        </div>
      </div>
    );
  }

  const uniqueCraftsCount = new Set(projects.map(p => p.craft_id)).size;

  return (
    <div className="bg-[#F9F6F0] dark:bg-[#1E1C1A] min-h-screen pt-24 pb-20 transition-colors duration-300">
      
      {/* Header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 mb-12">
        <div className="bg-white dark:bg-[#2A2724] rounded-3xl p-8 shadow-sm border border-[#E5DDD3] dark:border-[#3D3935] flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
          {/* Subtle Zellige Overlay */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C67B4B] opacity-5 dark:opacity-10 rounded-full blur-3xl" />
          
          <img 
            src={profile.avatarUrl || `https://api.dicebear.com/7.x/avataaars/svg?seed=${profile.id}`}
            loading="lazy"
            alt={profile.name}
            className="w-32 h-32 rounded-full border-4 border-[#F9F6F0] dark:border-[#1E1C1A] shadow-md object-cover relative z-10"
          />
          
          <div className="flex-grow text-center md:text-start relative z-10">
            <h1 className="text-3xl font-bold font-heading text-[#2D2D2D] dark:text-[#E8E2D7] mb-2">
              {profile.name}
            </h1>
            <p className="text-[#6B705C] dark:text-[#B0A99A] mb-6">
              {t('portfolio.title')}
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <div className="px-4 py-2 bg-[#F9F6F0] dark:bg-[#1E1C1A] rounded-xl border border-[#E5DDD3] dark:border-[#3D3935]">
                <span className="block text-xl font-bold text-[#3A7B85]">{projects.length}</span>
                <span className="text-xs text-gray-500">{t('portfolio.total_projects')}</span>
              </div>
              <div className="px-4 py-2 bg-[#F9F6F0] dark:bg-[#1E1C1A] rounded-xl border border-[#E5DDD3] dark:border-[#3D3935]">
                <span className="block text-xl font-bold text-[#C67B4B]">{uniqueCraftsCount}</span>
                <span className="text-xs text-gray-500">{t('portfolio.completed_crafts')}</span>
              </div>
               <div className="px-4 py-2 bg-[#F9F6F0] dark:bg-[#1E1C1A] rounded-xl border border-[#E5DDD3] dark:border-[#3D3935]">
                <span className="block text-xl font-bold text-[#6B705C]">{profile.xp || 0}</span>
                <span className="text-xs text-gray-500">{t('learn.xp_points')}</span>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <button 
              onClick={handleShare}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#3A7B85]/10 text-[#3A7B85] hover:bg-[#3A7B85] hover:text-white font-bold transition-colors"
            >
              <Share2 className="w-5 h-5" />
              {t('portfolio.share')}
            </button>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {projects.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">{t('portfolio.no_projects')}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => {
              const craft = crafts.find(c => c.id === project.craft_id);
              const craftName = craft ? ((!isRTL && craft.nameEN) ? craft.nameEN : craft.nameAR) : project.craft_id;
              
              return (
                <motion.div 
                  key={project.id}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-[#2A2724] rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_10px_25px_rgba(58,123,133,0.15)] transition-all border border-[#E5DDD3] dark:border-[#3D3935] hover:border-[#3A7B85] cursor-pointer"
                  onClick={() => {
                    if (project.images.length > 0) setSelectedImage(project.images[0]);
                  }}
                >
                  <div className="h-48 bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
                    {project.images.length > 0 ? (
                      <img src={project.images[0]} loading="lazy" alt={project.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                    )}
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white">
                      {craftName}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#2D2D2D] dark:text-[#E8E2D7] mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-4">{project.description}</p>
                    <div className="text-xs text-gray-400">
                      {new Date(project.created_at).toLocaleDateString(isRTL ? 'ar-SA' : 'en-US')}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <X className="w-8 h-8" />
            </button>
            <img 
              src={selectedImage} 
              loading="lazy"
              className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain border-4 border-white/10" 
              alt="Lightbox"
              onClick={e => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
