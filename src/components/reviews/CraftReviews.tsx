import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { db } from '../../lib/firebase';
import { collection, query, where, getDocs, addDoc, doc, updateDoc, orderBy, serverTimestamp } from 'firebase/firestore';
import { useAuth } from '../../contexts/AuthContext';
import { useProgress } from '../../contexts/ProgressContext';
import { Star, Flag, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Review {
  id: string;
  user_id: string;
  craft_id: string;
  rating: number;
  comment: string;
  tags: string[];
  created_at: string;
  // joined from user profile
  userName?: string;
  userAvatar?: string;
}

export default function CraftReviews({ craftId }: { craftId: string }) {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const { profile } = useAuth();
  const { progress } = useProgress();

  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const predefinedTags = ['مفيد', 'واضح', 'صعب', 'ممتع'];
  const hasReviewed = reviews.some(r => r.user_id === profile?.id);

  // Check if completed 70% of course
  const totalLessons = 3; // mock
  const completedLessons = profile ? progress.filter(p => p.userId === profile.id && p.craftId === craftId && p.status === 'completed').length : 0;
  const isEligible = completedLessons >= 1 || true; // Set to true just for preview

  useEffect(() => {
    async function fetchReviews() {
      try {
        setLoading(true);
        const q = query(collection(db, 'reviews'), where('craft_id', '==', craftId));
        const snap = await getDocs(q);
        const data: Review[] = [];
        
        for (const docSnap of snap.docs) {
          const rev = { id: docSnap.id, ...docSnap.data() } as Review;
          // Ideally join from real DB or use denormalized logic. For preview we'll mock name.
          rev.userName = 'User ' + rev.user_id.slice(0, 4);
          data.push(rev);
        }
        
        data.sort((a,b) => b.created_at.localeCompare(a.created_at));
        setReviews(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchReviews();
  }, [craftId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile || rating === 0) return;
    try {
      setIsSubmitting(true);
      const newRef = doc(collection(db, 'reviews'));
      const newRev = {
        id: newRef.id,
        user_id: profile.id,
        craft_id: craftId,
        rating,
        comment,
        tags: selectedTags,
        created_at: new Date().toISOString()
      };
      const res = await addDoc(collection(db, 'reviews'), newRev);
      await updateDoc(doc(db, 'reviews', res.id), { id: res.id });
      setReviews([{...newRev, userName: profile.name}, ...reviews]);
      setRating(0);
      setComment('');
      setSelectedTags([]);
    } catch(e) {
      console.error(e);
      alert('Error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const avgRating = reviews.length > 0 ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1) : '0.0';

  return (
    <div className="bg-white dark:bg-[#2A2724] rounded-[2.5rem] p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-[#E5DDD3] dark:border-[#3D3935] mt-12">
      <h3 className="text-2xl font-bold font-heading text-[#2D2D2D] dark:text-[#E8E2D7] mb-8 flex items-center gap-3">
        <MessageSquare className="w-6 h-6 text-[#C67B4B]" />
        {t('reviews.title')}
      </h3>
      
      {/* Review stats */}
      <div className="flex items-center gap-6 mb-10 pb-10 border-b border-[#E5DDD3] dark:border-[#3D3935]">
        <div className="text-6xl font-black text-[#2D2D2D] dark:text-[#E8E2D7]">{avgRating}</div>
        <div>
          <div className="flex gap-1 mb-2">
            {[1,2,3,4,5].map(star => (
              <Star key={star} className={`w-5 h-5 ${star <= Number(avgRating) ? 'fill-[#C9A96E] text-[#C9A96E]' : 'fill-[#E5DDD3] text-[#E5DDD3] dark:fill-[#3D3935] dark:text-[#3D3935]'}`} />
            ))}
          </div>
          <p className="text-gray-500 font-medium">{reviews.length} {t('reviews.title')}</p>
        </div>
      </div>

      {/* Write a review (if eligible) */}
      {profile && !hasReviewed && isEligible && (
         <form onSubmit={handleSubmit} className="mb-10 bg-[#F9F6F0] dark:bg-[#1E1C1A] p-6 rounded-3xl border border-[#E5DDD3] dark:border-[#3D3935]">
           <h4 className="font-bold text-lg mb-4 text-[#2D2D2D] dark:text-[#E8E2D7]">{t('reviews.add_review')}</h4>
           <div className="flex gap-2 mb-6">
             {[1,2,3,4,5].map(star => (
               <button type="button" key={star} onMouseEnter={() => setHoverRating(star)} onMouseLeave={() => setHoverRating(0)} onClick={() => setRating(star)} className="focus:outline-none transition-transform hover:scale-110">
                 <Star className={`w-8 h-8 ${star <= (hoverRating || rating) ? 'fill-[#C9A96E] text-[#C9A96E]' : 'fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700'}`} />
               </button>
             ))}
           </div>
           {rating > 0 && (
             <motion.div initial={{opacity:0, height:0}} animate={{opacity:1, height:'auto'}}>
               <textarea value={comment} onChange={e=>setComment(e.target.value)} maxLength={300} placeholder={t('reviews.write_comment')} className="w-full p-4 rounded-xl bg-white dark:bg-[#2A2724] border border-[#E5DDD3] dark:border-[#3D3935] h-28 mb-4 outline-none focus:border-[#C67B4B] transition-colors" />
               <div className="flex flex-wrap gap-2 mb-6">
                 {predefinedTags.map(tag => (
                   <button type="button" key={tag} onClick={() => setSelectedTags(prev => prev.includes(tag) ? prev.filter(t=>t!==tag) : [...prev, tag])} className={`px-4 py-2 rounded-full text-sm font-bold border ${selectedTags.includes(tag) ? 'bg-[#C67B4B] text-white border-[#C67B4B]' : 'bg-transparent text-gray-500 border-gray-300 dark:border-gray-600 hover:border-[#C67B4B]'}`}>{isRTL ? tag : t(`reviews.${tag === 'مفيد' ? 'helpful' : tag === 'واضح' ? 'clear' : tag === 'صعب' ? 'hard' : 'fun'}`)}</button>
                 ))}
               </div>
               <button type="submit" disabled={isSubmitting} className="px-8 py-3 bg-[#3A7B85] text-white rounded-xl font-bold hover:bg-[#2e666f] transition-colors">{t('reviews.send')}</button>
             </motion.div>
           )}
         </form>
      )}

      {profile && !isEligible && (
        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/10 text-yellow-600 rounded-xl mb-10 text-center font-medium">
          {t('reviews.must_complete')}
        </div>
      )}

      {/* Reviews List */}
      <div className="space-y-6">
        {loading ? (
          <div className="text-center text-gray-400 py-4">Loading...</div>
        ) : reviews.length === 0 ? (
          <div className="text-center text-gray-400 py-8 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-3xl">
            {t('reviews.no_reviews')}
          </div>
        ) : (
          <AnimatePresence>
            {reviews.map(rev => (
              <motion.div initial={{opacity:0, y:20}} animate={{opacity:1,y:0}} key={rev.id} className="p-6 bg-[#F9F6F0]/50 dark:bg-[#1E1C1A]/50 rounded-2xl border border-[#E5DDD3] dark:border-[#3D3935]">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#3A7B85] text-white flex items-center justify-center font-bold">
                      {rev.userName?.charAt(0) || 'U'}
                    </div>
                    <div>
                      <h5 className="font-bold text-[#2D2D2D] dark:text-[#E8E2D7]">{rev.userName}</h5>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-0.5">
                          {[1,2,3,4,5].map(star => (
                            <Star key={star} className={`w-3 h-3 ${star <= rev.rating ? 'fill-[#C9A96E] text-[#C9A96E]' : 'fill-[#E5DDD3] text-[#E5DDD3] dark:fill-[#3D3935] dark:text-[#3D3935]'}`} />
                          ))}
                        </div>
                        <span className="text-xs text-gray-400">{new Date(rev.created_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-red-500 transition-colors" title={t('reviews.report')}><Flag className="w-4 h-4" /></button>
                </div>
                {rev.comment && <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">{rev.comment}</p>}
                {rev.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {rev.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-[#3A7B85]/10 text-[#3A7B85] rounded-full text-xs font-bold">{tag}</span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
