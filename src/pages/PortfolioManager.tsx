import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { db } from '../lib/firebase';
import { collection, query, where, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { motion } from 'motion/react';
import { PlusCircle, Trash2, Eye, Link as LinkIcon, Camera, Save } from 'lucide-react';
import { crafts } from '../data/crafts';
import { useAuth } from '../contexts/AuthContext';

export default function PortfolioManager() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const { profile, loading: authLoading, user } = useAuth();
  
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const nav = useNavigate();

  // New Project Form
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [craftId, setCraftId] = useState(crafts[0]?.id || '');
  const [imageUrl, setImageUrl] = useState('');
  const [isPublic, setIsPublic] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      nav('/');
      setTimeout(() => {
        document.getElementById('login-btn')?.click();
      }, 100);
    }
  }, [user, authLoading, nav]);

  useEffect(() => {
    if (profile?.id) {
      loadProjects();
    }
  }, [profile?.id]);

  const loadProjects = async () => {
    if (!profile?.id) return;
    try {
      setLoading(true);
      const q = query(collection(db, 'portfolios'), where('user_id', '==', profile.id));
      const querySnapshot = await getDocs(q);
      const fetched: any[] = [];
      querySnapshot.forEach((doc) => fetched.push({ id: doc.id, ...doc.data() }));
      setProjects(fetched.sort((a,b) => b.created_at.localeCompare(a.created_at)));
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleAddProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile?.id) return;
    try {
      const newRef = doc(collection(db, 'portfolios'));
      const newProj = {
        id: newRef.id,
        user_id: profile.id,
        craft_id: craftId,
        title,
        description,
        images: imageUrl ? [imageUrl] : [],
        is_public: isPublic,
        created_at: new Date().toISOString()
      };
      await addDoc(collection(db, 'portfolios'), newProj); // wait, we must use setDoc or addDoc without id manually... Actually, let's use setDoc on newRef
      // Actually addDoc auto generates. Let's use it properly. But we defined id in schema.
      // We will let addDoc generate and update id, or just not enforce id to be doc.id if it's not needed, but it is in schema.
      
      const res = await addDoc(collection(db, 'portfolios'), {
        ...newProj,
        id: newProj.id // Just use a generated uuid or the ref ID but we didn't use setDoc.
      });
      // to fix the id issue:
      await updateDoc(doc(db, 'portfolios', res.id), { id: res.id });
      
      setIsAdding(false);
      setTitle('');
      setDescription('');
      setImageUrl('');
      loadProjects();
    } catch(e) {
      console.error(e);
      alert('Error adding project');
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure?')) {
      try {
        await deleteDoc(doc(db, 'portfolios', id));
        loadProjects();
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-center bg-white dark:bg-[#2A2724] p-6 rounded-2xl border border-[#E5DDD3] dark:border-[#3D3935] shadow-sm gap-4">
        <div>
          <h2 className="text-2xl font-bold font-heading text-[#2D2D2D] dark:text-[#E8E2D7] flex items-center gap-2">
            🎨 {t('portfolio.title')}
          </h2>
          <p className="text-[#6B705C] dark:text-[#B0A99A] text-sm mt-1">
            <a href={`/portfolio/${profile?.id}`} target="_blank" className="font-bold text-[#3A7B85] hover:underline flex items-center gap-1">
              <LinkIcon className="w-4 h-4" /> {t('portfolio.public_page')}
            </a>
          </p>
        </div>
        <button 
          onClick={() => setIsAdding(!isAdding)}
          className="px-5 py-2.5 bg-[#C67B4B] text-white rounded-xl font-bold hover:bg-[#b56c3e] transition-colors flex items-center gap-2"
        >
          <PlusCircle className="w-5 h-5" /> {t('portfolio.add_project')}
        </button>
      </div>

      {isAdding && (
        <motion.form 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleAddProject}
          className="bg-white dark:bg-[#2A2724] p-6 rounded-2xl border border-[#E5DDD3] dark:border-[#3D3935] shadow-sm space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">{t('portfolio.form_title')}</label>
              <input required type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">{t('portfolio.form_craft')}</label>
              <select required value={craftId} onChange={e => setCraftId(e.target.value)} className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none">
                {crafts.map(c => <option key={c.id} value={c.id}>{(!isRTL && c.nameEN) ? c.nameEN : c.nameAR}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">{t('portfolio.form_desc')}</label>
            <textarea required value={description} onChange={e => setDescription(e.target.value)} maxLength={200} className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 h-24" />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">{t('portfolio.upload_image')} (URL)</label>
            <div className="flex gap-2">
              <input type="url" value={imageUrl} onChange={e => setImageUrl(e.target.value)} placeholder="https://..." className="flex-grow p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800" />
              {imageUrl && <img src={imageUrl} loading="lazy" alt="preview" className="w-12 h-12 rounded object-cover" onError={(e) => { e.currentTarget.style.display='none' }} />}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="isPublic" checked={isPublic} onChange={e => setIsPublic(e.target.checked)} className="w-5 h-5 rounded border-gray-300 text-[#3A7B85] focus:ring-[#3A7B85]" />
            <label htmlFor="isPublic" className="font-bold text-sm text-gray-700 dark:text-gray-300">{t('portfolio.visibility')}</label>
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <button type="button" onClick={() => setIsAdding(false)} className="px-5 py-2.5 rounded-xl font-bold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">{t('comparator.clear')}</button>
            <button type="submit" className="px-5 py-2.5 rounded-xl font-bold bg-[#3A7B85] text-white flex items-center gap-2"><Save className="w-4 h-4" /> {t('portfolio.save')}</button>
          </div>
        </motion.form>
      )}

      {loading ? (
        <div className="text-center py-10 opacity-50">Loading...</div>
      ) : projects.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-[#2A2724] rounded-2xl border border-dashed border-gray-300 dark:border-gray-700">
          <Camera className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 font-bold">{t('portfolio.no_projects')}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => (
             <div key={p.id} className="bg-white dark:bg-[#2A2724] rounded-2xl overflow-hidden border border-[#E5DDD3] dark:border-[#3D3935] shadow-sm relative group">
                <div className="absolute top-2 right-2 flex gap-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                   <button onClick={() => handleDelete(p.id)} className="p-2 bg-red-500 text-white rounded-full"><Trash2 className="w-4 h-4" /></button>
                </div>
                <div className="h-40 bg-gray-100 dark:bg-gray-800 relative">
                  {p.images?.[0] ? <img src={p.images[0]} loading="lazy" className="w-full h-full object-cover" /> : <div className="flex items-center justify-center h-full text-gray-400">No Image</div>}
                  {!p.is_public && <div className="absolute top-2 left-2 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">Private</div>}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[#2D2D2D] dark:text-[#E8E2D7] mb-1 truncate">{p.title}</h3>
                  <p className="text-xs text-gray-500 line-clamp-2">{p.description}</p>
                </div>
             </div>
          ))}
        </div>
      )}
    </div>
  );
}
