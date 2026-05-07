import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Award, 
  Settings, 
  LogOut, 
  Flame, 
  Zap, 
  Star,
  ChevronRight,
  Download,
  CheckCircle2,
  Clock,
  Layers,
  ArrowRight,
  Bell,
  Trash2,
  Globe,
  Moon,
  Sun,
  Shield,
  Trophy,
  User,
  Lock,
  Gift
} from 'lucide-react';
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { jsPDF } from 'jspdf';
import { useAuth } from '../contexts/AuthContext';
import { useProgress } from '../contexts/ProgressContext';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { crafts } from '../data/crafts';

import PortfolioManager from './PortfolioManager';

// Mock data for the activity chart
const activityData = [
  { name: 'Sat', lessons: 2 },
  { name: 'Sun', lessons: 5 },
  { name: 'Mon', lessons: 3 },
  { name: 'Tue', lessons: 8 },
  { name: 'Wed', lessons: 4 },
  { name: 'Thu', lessons: 6 },
  { name: 'Fri', lessons: 1 },
];

type TabType = 'overview' | 'my-crafts' | 'achievements' | 'portfolio' | 'settings';

export default function Profile() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  const { user, profile: authProfile, loading, logout } = useAuth();
  const { progress } = useProgress();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/');
      // Give time for home page to render before opening modal
      setTimeout(() => {
        document.getElementById('login-btn')?.click();
      }, 100);
    }
  }, [user, loading, navigate]);

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg-sand)] dark:bg-[var(--color-dark)]">
        <div className="w-12 h-12 border-4 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const profile = authProfile || {
    id: 'local',
    name: isRtl ? 'المتعلم' : 'Learner',
    username: 'learner',
    email: '',
    role: 'user',
    streak: progress?.streak || 0,
    friends_invited: 0,
  };

  const navItems = [
    { id: 'overview' as const, label: isRtl ? 'نظرة عامة' : 'Overview', icon: LayoutDashboard },
    { id: 'my-crafts' as const, label: isRtl ? 'حرفي' : 'My Crafts', icon: BookOpen },
    { id: 'achievements' as const, label: isRtl ? 'إنجازاتي' : 'Achievements', icon: Award },
    ...(user ? [{ id: 'portfolio' as const, label: isRtl ? 'معرض أعمالي' : 'Portfolio', icon: Globe }] : []),
    { id: 'settings' as const, label: isRtl ? 'الإعدادات' : 'Settings', icon: Settings },
  ];

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  // Animation variants
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVars = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  // Sections
  const renderOverview = () => (
    <motion.div variants={containerVars} initial="hidden" animate="show" className="space-y-8">
      {!user && (
        <motion.div variants={itemVars} className="bg-[#3A7B85]/10 border-2 border-[#3A7B85]/20 p-6 rounded-3xl flex flex-col md:flex-row items-center gap-6 shadow-sm">
          <div className="w-16 h-16 bg-[#3A7B85] rounded-full flex items-center justify-center text-white flex-shrink-0">
            <Lock className="w-8 h-8" />
          </div>
          <div className="flex-grow text-center md:text-start">
            <h3 className="text-xl font-bold text-[#3A7B85] mb-2">{isRtl ? 'احفظ تقدمك للأبد' : 'Save your progress forever'}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {isRtl ? 'أنت تلعب الآن كزائر. أنشئ حساباً مجانياً لمزامنة تقدمك عبر جميع الأجهزة واستعادة شهاداتك في أي وقت.' : 'You are currently playing as a guest. Create a free account to sync your progress across all devices and retrieve your certificates at any time.'}
            </p>
          </div>
          <button 
            onClick={() => document.getElementById('login-btn')?.click()} // We'll add this ID to AuthModal trigger in Navbar or just link to it
            className="w-full md:w-auto px-8 py-3 bg-[#3A7B85] text-white font-bold rounded-xl shadow-md hover:bg-[#2D5A61] transition-all whitespace-nowrap"
          >
            {isRtl ? 'أنشئ حساباً' : 'Create Account'}
          </button>
        </motion.div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {[
          { label: isRtl ? 'حرف نشطة' : 'Active Crafts', value: 3, icon: BookOpen, color: 'bg-blue-100 dark:bg-blue-900/20 text-blue-600' },
          { label: isRtl ? 'نقاط الخبرة' : 'Experience Points', value: progress.xp, icon: Zap, color: 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600' },
          { label: isRtl ? 'الشارات' : 'Badges', value: progress.badges.length, icon: Award, color: 'bg-purple-100 dark:bg-purple-900/20 text-purple-600' },
          { label: isRtl ? 'سلسلة أيام' : 'Streak Days', value: profile.streak, icon: Flame, color: 'bg-orange-100 dark:bg-orange-900/20 text-orange-600' },
        ].map((stat, idx) => (
          <motion.div 
            key={idx}
            variants={itemVars}
            className="bg-white dark:bg-[#2A2724] p-5 rounded-3xl border border-[#E5DDD3] dark:border-[#3D3935] flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className={`w-12 h-12 rounded-2xl ${stat.color} flex items-center justify-center`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-bold font-heading dark:text-white">{stat.value}</div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Weekly Activity Line Chart */}
        <motion.div variants={itemVars} className="lg:col-span-2 bg-white dark:bg-[#2A2724] p-8 rounded-[2.5rem] border border-[#E5DDD3] dark:border-[#3D3935] shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold font-heading flex items-center gap-3 dark:text-white">
              <div className="w-10 h-10 rounded-xl bg-[#3A7B85]/10 flex items-center justify-center text-[#3A7B85]">
                <Zap className="w-5 h-5" />
              </div>
              {isRtl ? 'نشاطك في الأسبوع الأخير' : 'Weekly Activity'}
            </h3>
            <div className="flex items-center gap-2 text-xs font-bold text-[#3A7B85] bg-[#3A7B85]/10 px-3 py-1.5 rounded-full">
              <CheckCircle2 className="w-4 h-4" />
              {isRtl ? '15 درساً مكتملاً' : '15 Lessons Completed'}
            </div>
          </div>
          <div className="h-64 mt-4" dir="ltr">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={activityData}>
                <defs>
                  <linearGradient id="colorLessons" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3A7B85" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3A7B85" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#999', fontSize: 12}} dy={10} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', background: i18n.dir() === 'rtl' ? '#2A2724' : '#fff', color: '#3A7B85' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="lessons" 
                  stroke="#3A7B85" 
                  strokeWidth={4} 
                  fillOpacity={1} 
                  fill="url(#colorLessons)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Global Progress */}
        <motion.div variants={itemVars} className="bg-white dark:bg-[#2A2724] p-8 rounded-[2.5rem] border border-[#E5DDD3] dark:border-[#3D3935] shadow-sm flex flex-col">
          <h3 className="text-xl font-bold font-heading mb-8 flex items-center gap-3 dark:text-white">
            <div className="w-10 h-10 rounded-xl bg-[#C67B4B]/10 flex items-center justify-center text-[#C67B4B]">
              <Trophy className="w-5 h-5" />
            </div>
            {isRtl ? 'تقدمك العام' : 'Overall Progress'}
          </h3>
          
          <div className="flex-grow flex flex-col justify-center text-center">
            <div className="relative inline-flex items-center justify-center mb-6">
              <svg className="w-32 h-32 transform -rotate-90">
                <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-gray-100 dark:text-gray-800" />
                <motion.circle 
                  cx="64" cy="64" r="58" 
                  stroke="currentColor" strokeWidth="12" 
                  fill="transparent" 
                  strokeDasharray={364.4}
                  strokeDashoffset={364.4 * (1 - 0.45)}
                  strokeLinecap="round"
                  className="text-[#C67B4B]" 
                />
              </svg>
              <span className="absolute text-3xl font-bold font-heading dark:text-white">45%</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              {isRtl 
                ? 'أنت على بعد خطوات قليلة من الحصول على لقب "حرفي متمكن". استمر في التقدم!' 
                : 'You are just a few steps away from the "Master Craftsman" title. Keep going!'}
            </p>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Resume Learning Card */}
        <motion.div 
          variants={itemVars}
          className="relative overflow-hidden bg-[#1E1C1A] text-white p-8 rounded-[2.5rem] shadow-xl group border-2 border-transparent hover:border-[#3A7B85] transition-all cursor-pointer"
          onClick={() => navigate('/learn/accounting')}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#3A7B85]/20 rounded-full -translate-y-16 translate-x-16 blur-3xl" />
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex justify-between items-start mb-12">
               <div className="bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2">
                 <Clock className="w-4 h-4 text-[#C67B4B]" />
                 {isRtl ? 'آخر ما تعلمت' : 'Last activity'}
               </div>
               <div className="bg-[#3A7B85] p-3 rounded-2xl group-hover:scale-110 transition-transform">
                 <ArrowRight className={`w-6 h-6 ${isRtl ? 'rotate-180' : ''}`} />
               </div>
            </div>
            <div className="mt-auto">
              <h4 className="text-gray-400 text-sm font-bold opacity-60 mb-2">{isRtl ? 'محاسبة' : 'Accounting'}</h4>
              <h3 className="text-2xl font-bold font-heading mb-4">{isRtl ? 'تسيير المخازن والجرد' : 'Inventory Management & Stocktaking'}</h3>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden w-full max-w-sm">
                <div className="h-full bg-[#3A7B85] w-2/3" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Suggestion Card */}
        <motion.div 
          variants={itemVars}
          className="bg-white dark:bg-[#2A2724] p-8 rounded-[2.5rem] border border-[#E5DDD3] dark:border-[#3D3935] flex items-center gap-8 shadow-sm group hover:border-[#C67B4B] transition-all"
        >
          <div className="w-32 h-32 rounded-3xl bg-[#F9F6F0] dark:bg-[#1E1C1A] overflow-hidden flex-shrink-0">
            <img src={crafts[4].image} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="flex-grow">
            <h4 className="text-[#C67B4B] text-xs font-bold uppercase tracking-widest mb-2">{isRtl ? 'تحدي جديد؟' : 'Next Challenge?'}</h4>
            <h3 className="text-xl font-bold font-heading mb-4 dark:text-white">{isRtl ? crafts[4].nameAR : crafts[4].nameEN}</h3>
            <button 
              onClick={() => navigate(`/craft/${crafts[4].id}`)}
              className="text-[#3A7B85] font-bold text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform"
            >
              {isRtl ? 'اكتشف الحرفة' : 'Explore Craft'} <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );

  const renderMyCrafts = () => {
    const [filter, setFilter] = useState<'active' | 'completed'>('active');
    
    return (
      <motion.div variants={containerVars} initial="hidden" animate="show" className="space-y-8">
        <div className="flex gap-4 p-1 bg-[#F9F6F0] dark:bg-[#1E1C1A] rounded-2xl w-fit border border-[#E5DDD3] dark:border-[#3D3935]">
          <button 
            onClick={() => setFilter('active')}
            className={`px-8 py-2.5 rounded-xl font-bold transition-all ${filter === 'active' ? 'bg-[#C67B4B] text-white shadow-lg' : 'text-gray-500 hover:bg-black/5'}`}
          >
            {isRtl ? 'جاري التعلم' : 'Active'}
          </button>
          <button 
            onClick={() => setFilter('completed')}
            className={`px-8 py-2.5 rounded-xl font-bold transition-all ${filter === 'completed' ? 'bg-[#C67B4B] text-white shadow-lg' : 'text-gray-500 hover:bg-black/5'}`}
          >
            {isRtl ? 'مكتملة' : 'Completed'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filter === 'active' ? (
            crafts.slice(0, 3).map((craft, idx) => (
              <motion.div 
                key={craft.id}
                variants={itemVars}
                className="bg-white dark:bg-[#2A2724] rounded-3xl overflow-hidden border border-[#E5DDD3] dark:border-[#3D3935] group flex flex-col h-full shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-40 relative">
                  <img src={craft.image} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={craft.nameAR} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className={`absolute bottom-4 ${isRtl ? 'right-4' : 'left-4'} text-white font-bold`}>
                    {idx + 1} / 4 {isRtl ? 'مستويات' : 'Levels'}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold font-heading mb-4 dark:text-white">{isRtl ? craft.nameAR : (craft.nameEN || craft.nameAR)}</h3>
                  <div className="space-y-2 mb-8">
                    <div className="flex justify-between text-xs font-bold text-gray-400">
                      <span>{isRtl ? 'التقدم' : 'Progress'}</span>
                      <span>{idx === 0 ? '75%' : idx === 1 ? '45%' : '15%'}</span>
                    </div>
                    <div className="h-2 bg-[#F9F6F0] dark:bg-[#1E1C1A] rounded-full overflow-hidden">
                      <div className="h-full bg-[#C67B4B]" style={{ width: idx === 0 ? '75%' : idx === 1 ? '45%' : '15%' }} />
                    </div>
                  </div>
                  <button 
                    onClick={() => navigate(`/learn/${craft.id}`)}
                    className="mt-auto w-full py-4 bg-[#3A7B85] text-white font-bold rounded-2xl hover:bg-[#2D5A61] transition-all shadow-lg shadow-[#3A7B85]/20 flex items-center justify-center gap-2"
                  >
                    {isRtl ? 'استكمل التعلم' : 'Resume Learning'}
                    <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-[#F9F6F0] dark:bg-[#1E1C1A] rounded-full flex items-center justify-center text-gray-300 mb-6">
                <BookOpen className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-3 dark:text-white">{isRtl ? 'لم تكمل أي حرفة بعد' : 'No completed crafts yet'}</h3>
              <button 
                 onClick={() => setFilter('active')}
                 className="text-[#3A7B85] font-bold hover:underline"
              >
                {isRtl ? 'عد إلى التعلم النشط' : 'Go back to active learning'}
              </button>
            </div>
          )}
        </div>
      </motion.div>
    );
  };

  const downloadCertificate = (title: string, name: string) => {
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'in',
      format: [11, 8.5]
    });
    
    doc.setFillColor(249, 246, 240); // bg-sand
    doc.rect(0, 0, 11, 8.5, 'F');
    
    // Border
    doc.setDrawColor(198, 123, 75); // primary color
    doc.setLineWidth(0.1);
    doc.rect(0.5, 0.5, 10, 7.5);

    doc.setFont("helvetica", "bold");
    doc.setTextColor(45, 45, 45);
    doc.setFontSize(40);
    doc.text("Certificate of Completion", 5.5, 2.5, { align: 'center' });
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(20);
    doc.text("This is to certify that", 5.5, 3.5, { align: 'center' });
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(30);
    doc.setTextColor(58, 123, 133); // secondary color
    doc.text(name, 5.5, 4.5, { align: 'center' });
    
    doc.setFont("helvetica", "normal");
    doc.setTextColor(45, 45, 45);
    doc.setFontSize(20);
    doc.text(`has successfully completed the course:`, 5.5, 5.5, { align: 'center' });
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.text(title, 5.5, 6.2, { align: 'center' });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(14);
    doc.setTextColor(150, 150, 150);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 5.5, 7.5, { align: 'center' });
    
    doc.save(`${title.replace(/\s+/g, '_')}_Certificate.pdf`);
  };

  const renderAchievements = () => (
    <motion.div variants={containerVars} initial="hidden" animate="show" className="space-y-12">
      {/* Badges */}
      <section>
        <h3 className="text-2xl font-bold font-heading mb-8 flex items-center gap-4 dark:text-white">
          <div className="w-12 h-12 rounded-2xl bg-[#3A7B85]/10 flex items-center justify-center text-[#3A7B85]">
            <Globe className="w-6 h-6" />
          </div>
          {t('referral.title')}
          <div className="h-0.5 flex-grow bg-[#E5DDD3] dark:bg-[#3D3935] opacity-50" />
        </h3>
        <div className="bg-[#3A7B85]/5 dark:bg-[#3A7B85]/10 p-8 rounded-[2.5rem] border border-[#3A7B85]/20 flex flex-col md:flex-row items-center gap-8 shadow-sm">
           <div className="w-24 h-24 bg-white dark:bg-[#1E1C1A] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg text-[#3A7B85]">
             <Gift className="w-10 h-10" />
           </div>
           <div className="flex-grow text-center md:text-start">
             <h4 className="font-bold text-2xl dark:text-white mb-2">{t('referral.title')}</h4>
             <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto md:mx-0">{t('referral.desc')}</p>
             <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
               <div className="flex bg-white dark:bg-[#1E1C1A] border border-[#E5DDD3] dark:border-[#3D3935] rounded-xl overflow-hidden w-full sm:w-auto">
                 <input type="text" readOnly value={`${window.location.origin}/register?ref=${profile.id}`} className="px-4 py-2 bg-transparent text-gray-500 text-sm outline-none w-full sm:w-64" dir="ltr" />
                 <button onClick={() => {
                   navigator.clipboard.writeText(`${window.location.origin}/register?ref=${profile.id}`);
                   alert('Copied!');
                 }} className="px-4 py-2 bg-[#F9F6F0] dark:bg-[#2A2724] font-bold text-[#3A7B85] hover:bg-[#3A7B85] hover:text-white transition-colors">{t('referral.copy_link')}</button>
               </div>
               <button onClick={() => {
                   const url = encodeURIComponent(`${window.location.origin}/register?ref=${profile.id}`);
                   window.open(`https://wa.me/?text=${url}`, '_blank');
               }} className="px-6 py-2 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#128C7E] transition-colors">{t('referral.share_wa')}</button>
             </div>
           </div>
           <div className="flex gap-4 md:flex-col md:w-32">
              <div className="bg-white dark:bg-[#1E1C1A] p-4 rounded-2xl text-center border border-[#E5DDD3] dark:border-[#3D3935]">
                 <span className="block text-2xl font-black text-[#3A7B85]">{profile.friends_invited > 0 ? profile.friends_invited : 0}</span>
                 <span className="text-[10px] text-gray-500 font-bold uppercase">{t('referral.friends_invited')}</span>
              </div>
               <div className="bg-white dark:bg-[#1E1C1A] p-4 rounded-2xl text-center border border-[#3A7B85]/30">
                 <span className="block text-2xl font-black text-[#C67B4B]">{profile.friends_invited > 0 ? profile.friends_invited * 100 : 0}</span>
                 <span className="text-[10px] text-[#C67B4B] font-bold uppercase">{t('referral.points_earned')}</span>
              </div>
           </div>
        </div>
        {profile.friends_invited > 0 && (
           <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 bg-[#C9A96E]/10 p-4 rounded-2xl border border-[#C9A96E]/30 flex items-center gap-4">
             <div className="w-12 h-12 bg-[#C9A96E] text-white rounded-full flex items-center justify-center">
               <Trophy className="w-6 h-6" />
             </div>
             <div>
               <h5 className="font-bold text-[#C9A96E]">{isRtl ? 'شارة صديق المنصة' : 'Platform Friend Badge'}</h5>
               <p className="text-sm text-gray-600 dark:text-gray-400">{isRtl ? 'شكراً لمساهمتك في نشر الوعي الحرفي!' : 'Thank you for contributing to craft awareness!'}</p>
             </div>
           </motion.div>
        )}
      </section>

      {/* Badges */}
      <section>
        <h3 className="text-2xl font-bold font-heading mb-8 flex items-center gap-4 dark:text-white">
          <div className="w-12 h-12 rounded-2xl bg-yellow-100 dark:bg-yellow-900/20 flex items-center justify-center text-yellow-600">
            <Award className="w-6 h-6" />
          </div>
          {isRtl ? 'شاراتي' : 'My Badges'}
          <div className="h-0.5 flex-grow bg-[#E5DDD3] dark:bg-[#3D3935] opacity-50" />
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
          {['البداية القوية', 'عاشق النجارة', 'دقة الحساب', 'المثابر الأسبوعي'].map((badge, idx) => (
            <motion.div 
              key={idx}
              variants={itemVars}
              className="bg-white dark:bg-[#2A2724] p-6 rounded-3xl border-2 border-[#E5DDD3] dark:border-[#3D3935] flex flex-col items-center text-center group hover:border-[#C67B4B] transition-all"
            >
              <div className="w-20 h-20 rounded-full bg-yellow-100 dark:bg-yellow-900/20 flex items-center justify-center text-yellow-600 mb-4 group-hover:scale-110 transition-transform">
                <Star className="w-10 h-10" />
              </div>
              <span className="text-sm font-bold dark:text-white">{badge}</span>
              <span className="text-[10px] text-gray-400 mt-2 uppercase tracking-widest">{isRtl ? '7 مايو 2024' : 'May 7, 2024'}</span>
            </motion.div>
          ))}
          {/* Locked */}
          {[1, 2, 3, 4].map(i => (
             <div key={i} className="p-6 rounded-3xl border-2 border-dashed border-[#E5DDD3] dark:border-[#3D3935] flex flex-col items-center text-center opacity-30">
               <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 mb-4">
                 <Shield className="w-10 h-10" />
               </div>
               <span className="text-sm font-bold text-gray-500">???</span>
             </div>
          ))}
        </div>
      </section>

      {/* Certificates */}
      <section>
        <h3 className="text-2xl font-bold font-heading mb-8 flex items-center gap-4 dark:text-white">
          <div className="w-12 h-12 rounded-2xl bg-[#3A7B85]/10 flex items-center justify-center text-[#3A7B85]">
            <Layers className="w-6 h-6" />
          </div>
          {isRtl ? 'الشهادات' : 'Certificates'}
          <div className="h-0.5 flex-grow bg-[#E5DDD3] dark:bg-[#3D3935] opacity-50" />
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="bg-white dark:bg-[#2A2724] p-8 rounded-[2.5rem] border border-[#E5DDD3] dark:border-[#3D3935] flex items-center gap-6 shadow-sm">
             <div className="w-16 h-20 bg-[#F9F6F0] dark:bg-[#1E1C1A] rounded-lg border border-[#3A7B85]/30 flex flex-col items-center justify-center p-2">
               <Trophy className="w-6 h-6 text-[#C67B4B]" />
             </div>
             <div className="flex-grow">
               <h4 className="font-bold text-lg dark:text-white">{isRtl ? 'أساسيات المحاسبة الجزائرية' : 'Algerian Accounting Basics'}</h4>
               <p className="text-sm text-[#3A7B85] font-medium mt-1">{isRtl ? 'تم التحقق' : 'Verified'}</p>
             </div>
             <button
               onClick={() => downloadCertificate('Algerian Accounting Basics', profile.name)}
               className="w-12 h-12 rounded-2xl bg-[#C67B4B] text-white flex items-center justify-center hover:bg-[#A3592F] transition-colors shadow-lg shadow-[#C67B4B]/20"
             >
               <Download className="w-5 h-5" />
             </button>
           </div>
        </div>
      </section>
    </motion.div>
  );

  const renderSettings = () => {
    const [confirmDelete, setConfirmDelete] = useState(false);

    return (
      <motion.div variants={containerVars} initial="hidden" animate="show" className="max-w-3xl space-y-12 pb-20">
        {/* Profile Info */}
        <section className="bg-white dark:bg-[#2A2724] p-8 md:p-12 rounded-[2.5rem] border border-[#E5DDD3] dark:border-[#3D3935] shadow-sm">
          <h3 className="text-2xl font-bold font-heading mb-10 dark:text-white flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-[#C67B4B]/10 flex items-center justify-center text-[#C67B4B]">
               <User className="w-5 h-5" />
             </div>
             {isRtl ? 'الملف الشخصي' : 'Profile Settings'}
          </h3>
          
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center gap-8 pb-10 border-b border-[#E5DDD3] dark:border-[#3D3935]">
              <div className="relative group">
                <div className="w-32 h-32 rounded-[2.5rem] bg-[#3A7B85] flex items-center justify-center text-white text-4xl font-bold border-4 border-white dark:border-[#2A2724] shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  {profile.name.charAt(0)}
                </div>
                <label className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#C67B4B] text-white rounded-2xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg">
                  <Settings className="w-5 h-5" />
                  <input type="file" className="hidden" />
                </label>
              </div>
              <div className="text-center md:text-start">
                 <h4 className="font-bold text-2xl dark:text-white mb-2">{profile.name}</h4>
                 <div className="flex items-center gap-2 text-[#3A7B85] bg-[#3A7B85]/10 px-4 py-1.5 rounded-full text-sm font-bold w-fit mx-auto md:mx-0">
                    <Star className="w-4 h-4" />
                    @{profile.username}
                 </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="space-y-3">
                 <label className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">{isRtl ? 'الاسم بالكامل' : 'Full Name'}</label>
                 <input type="text" defaultValue={profile.name} className="w-full px-6 py-4 rounded-2xl bg-[#F9F6F0] dark:bg-[#1E1C1A] border-2 border-transparent focus:border-[#C67B4B] outline-none transition-all dark:text-white font-medium" />
               </div>
               <div className="space-y-3">
                 <label className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">{isRtl ? 'اسم المستخدم' : 'Username'}</label>
                 <div className="relative">
                   <input type="text" defaultValue={profile.username} className="w-full px-6 py-4 rounded-2xl bg-[#F9F6F0] dark:bg-[#1E1C1A] border-2 border-transparent focus:border-[#C67B4B] outline-none transition-all dark:text-white font-medium" />
                   <div className="mt-2 text-[10px] text-gray-400 italic">
                     {isRtl ? '* يمكنك تغيير اسم المستخدم مرة كل 30 يوماً.' : '* You can change your username once every 30 days.'}
                   </div>
                 </div>
               </div>
               <div className="space-y-3 md:col-span-2">
                 <label className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">{isRtl ? 'البريد الإلكتروني (اختياري)' : 'Email (Optional)'}</label>
                 <input type="email" defaultValue={profile.email} className="w-full px-6 py-4 rounded-2xl bg-[#F9F6F0] dark:bg-[#1E1C1A] border-2 border-transparent focus:border-[#C67B4B] outline-none transition-all dark:text-white font-medium" placeholder="your@email.com" />
               </div>
            </div>

            <div className="pt-6">
              <button className="w-full md:w-fit px-12 py-4 bg-[#C67B4B] text-white font-bold rounded-2xl shadow-xl shadow-[#C67B4B]/20 hover:bg-[#A3592F] transition-all flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                {isRtl ? 'حفظ التعديلات' : 'Save Changes'}
              </button>
            </div>
          </div>
        </section>

        {/* Change Password */}
        {user && (
          <section className="bg-white dark:bg-[#2A2724] p-8 md:p-12 rounded-[2.5rem] border border-[#E5DDD3] dark:border-[#3D3935] shadow-sm">
            <h3 className="text-2xl font-bold font-heading mb-10 dark:text-white flex items-center gap-3">
               <div className="w-10 h-10 rounded-xl bg-[#3A7B85]/10 flex items-center justify-center text-[#3A7B85]">
                 <Lock className="w-5 h-5" />
               </div>
               {isRtl ? 'كلمة المرور' : 'Security'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="space-y-3 md:col-span-2">
                 <label className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">{isRtl ? 'كلمة المرور الحالية' : 'Current Password'}</label>
                 <input type="password" underline-none className="w-full px-6 py-4 rounded-2xl bg-[#F9F6F0] dark:bg-[#1E1C1A] border-2 border-transparent focus:border-[#3A7B85] outline-none transition-all dark:text-white" />
               </div>
               <div className="space-y-3">
                 <label className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">{isRtl ? 'كلمة المرور الجديدة' : 'New Password'}</label>
                 <input type="password" underline-none className="w-full px-6 py-4 rounded-2xl bg-[#F9F6F0] dark:bg-[#1E1C1A] border-2 border-transparent focus:border-[#3A7B85] outline-none transition-all dark:text-white" />
               </div>
               <div className="space-y-3">
                 <label className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">{isRtl ? 'تأكيد كلمة المرور' : 'Confirm New Password'}</label>
                 <input type="password" underline-none className="w-full px-6 py-4 rounded-2xl bg-[#F9F6F0] dark:bg-[#1E1C1A] border-2 border-transparent focus:border-[#3A7B85] outline-none transition-all dark:text-white" />
               </div>
               <div className="pt-4 md:col-span-2">
                 <button className="w-full md:w-fit px-12 py-4 bg-[#3A7B85] text-white font-bold rounded-2xl shadow-xl shadow-[#3A7B85]/20 hover:bg-[#2D5A61] transition-all">
                   {isRtl ? 'تحديث كلمة المرور' : 'Update Password'}
                 </button>
               </div>
            </div>
          </section>
        )}

        {/* Preferences */}
        <section className="bg-white dark:bg-[#2A2724] p-8 md:p-12 rounded-[2.5rem] border border-[#E5DDD3] dark:border-[#3D3935] shadow-sm">
          <h3 className="text-2xl font-bold font-heading mb-10 dark:text-white flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center text-purple-600">
               <Star className="w-5 h-5" />
             </div>
             {isRtl ? 'التفضيلات' : 'Preferences'}
          </h3>
          <div className="space-y-4">
             <div className="flex items-center justify-between p-6 rounded-3xl bg-[#F9F6F0] dark:bg-[#1E1C1A] border border-[#E5DDD3] dark:border-[#3D3935] hover:border-[#3A7B85] transition-colors group">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#2A2724] flex items-center justify-center text-[#3A7B85] border border-[#E5DDD3] dark:border-[#3D3935] group-hover:scale-110 transition-transform">
                   <Globe className="w-6 h-6" />
                 </div>
                 <div>
                    <h4 className="font-bold dark:text-white">{isRtl ? 'لغة المنصة' : 'App Language'}</h4>
                    <p className="text-xs text-gray-400 font-medium">{i18n.language === 'ar' ? 'العربية' : 'English'}</p>
                 </div>
               </div>
               <button 
                  onClick={() => i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')}
                  className="font-bold text-[#3A7B85] hover:underline bg-[#3A7B85]/10 px-4 py-2 rounded-xl"
                >
                 {isRtl ? 'English' : 'العربية'}
               </button>
             </div>

             <div className="flex items-center justify-between p-6 rounded-3xl bg-[#F9F6F0] dark:bg-[#1E1C1A] border border-[#E5DDD3] dark:border-[#3D3935] hover:border-[#C67B4B] transition-colors group">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#2A2724] flex items-center justify-center text-[#C67B4B] border border-[#E5DDD3] dark:border-[#3D3935] group-hover:scale-110 transition-transform">
                   <Moon className="w-6 h-6" />
                 </div>
                 <div>
                    <h4 className="font-bold dark:text-white">{isRtl ? 'الوضع الليلي' : 'Dark Mode'}</h4>
                    <p className="text-xs text-gray-400 font-medium">{isRtl ? 'تفعيل الوضع المريح للعين' : 'Enable eye-friendly mode'}</p>
                 </div>
               </div>
               <button 
                 onClick={() => setIsDarkMode(!isDarkMode)}
                 className={`w-14 h-8 rounded-full transition-all flex items-center px-1 ${isDarkMode ? 'bg-[#C67B4B]' : 'bg-gray-300'}`}
               >
                 <motion.div 
                   animate={{ x: isDarkMode ? 24 : 0 }}
                   className="w-6 h-6 bg-white rounded-full shadow-md" 
                 />
               </button>
             </div>
          </div>
        </section>

        {/* Danger Zone */}
        {user && (
          <section className="bg-red-50 dark:bg-red-950/10 p-8 md:p-12 rounded-[2.5rem] border-2 border-dashed border-red-200 dark:border-red-900/30">
             <h3 className="text-2xl font-bold font-heading mb-6 text-red-600 flex items-center gap-3">
               <Trash2 className="w-6 h-6" />
               {isRtl ? 'منطقة الخطر' : 'Danger Zone'}
             </h3>
             
             <div className="flex flex-col gap-6">
               <p className="text-red-700 dark:text-red-300 font-medium text-sm leading-relaxed max-w-2xl">
                 {isRtl 
                   ? 'حذف الحساب سيؤدي لمسح جميع ملفاتك وتقدمك المهني وشهاداتك بشكل نهائي ولا يمكن التراجع عن هذا الإجراء.' 
                   : 'Deleting your account will permanently remove your profile, professional progress, and certificates. This action cannot be undone.'}
               </p>
               
               {!confirmDelete ? (
                 <button 
                   onClick={() => setConfirmDelete(true)}
                   className="w-full md:w-fit px-8 py-4 bg-white dark:bg-red-950/30 text-red-600 border-2 border-red-100 dark:border-red-900/20 font-bold rounded-2xl hover:bg-red-600 hover:text-white transition-all shadow-sm"
                 >
                   {isRtl ? 'حذف حسابي' : 'Delete My Account'}
                 </button>
               ) : (
                 <div className="flex flex-col md:flex-row items-center gap-4 animate-in fade-in slide-in-from-top-2 duration-300">
                   <button 
                     className="w-full md:w-fit px-12 py-4 bg-red-600 text-white font-bold rounded-2xl shadow-xl shadow-red-600/20 hover:bg-red-700 transition-all"
                   >
                     {isRtl ? 'تأكيد الحذف النهائي' : 'Confirm Permanent Deletion'}
                   </button>
                   <button 
                     onClick={() => setConfirmDelete(false)}
                     className="w-full md:w-fit px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-500 font-bold rounded-2xl hover:bg-gray-200 transition-colors"
                   >
                     {isRtl ? 'إلغاء' : 'Cancel'}
                   </button>
                 </div>
               )}
             </div>
          </section>
        )}
      </motion.div>
    );
  };

  return (
    <div className={`min-h-screen bg-[#F9F6F0] dark:bg-[#1E1C1A] flex flex-col md:flex-row transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      {/* Sidebar - Desktop Only */}
      <aside className={`hidden md:flex flex-col w-72 bg-white dark:bg-[#2A2724] border-${isRtl ? 'l' : 'r'} border-[#E5DDD3] dark:border-[#3D3935] h-screen sticky top-0 px-8 py-10 overflow-y-auto`}>
        <div className="flex items-center gap-3 mb-16 px-4">
          <div className="bg-[#C67B4B] w-10 h-10 rounded-xl flex items-center justify-center text-white" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
            <span className="font-bold">H</span>
          </div>
          <span className="text-2xl font-bold font-heading text-[#1E1C1A] dark:text-white uppercase tracking-tighter">
            {isRtl ? 'حرفتي' : 'Hirfati'}
          </span>
        </div>

        <nav className="flex-grow space-y-2">
          {navItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${
                activeTab === item.id 
                  ? 'bg-[#3A7B85] text-white shadow-lg shadow-[#3A7B85]/20' 
                  : 'text-gray-400 hover:bg-[#F9F6F0] dark:hover:bg-[#1E1C1A] hover:text-[#3A7B85]'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {user && (
          <button 
            onClick={handleLogout}
            className="flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-all mt-auto"
          >
            <LogOut className="w-5 h-5" />
            <span>{isRtl ? 'تسجيل الخروج' : 'Log out'}</span>
          </button>
        )}
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow p-4 md:p-12 pb-32 md:pb-12 max-w-7xl mx-auto w-full relative">
        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L100 50L50 100L0 50Z' fill='%23C67B4B' fill-rule='evenodd'/%3E%3C/svg%3E")`, backgroundSize: '120px 120px' }} />

        {/* Welcome Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6 relative z-10">
          <div className="pt-20 md:pt-0">
            <h1 className="text-3xl md:text-4xl font-bold font-heading dark:text-white">
              {isRtl ? `أهلاً بك، ${profile.name}!` : `Welcome back, ${profile.name}!`}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 font-medium mt-1">
              {isRtl ? 'واصل رحلتك نحو الاحتراف المهني اليوم.' : 'Continue your journey towards professional mastery today.'}
            </p>
          </div>
          
          <div className="flex items-center gap-4">
             <button className="w-12 h-12 rounded-2xl bg-white dark:bg-[#2A2724] border border-[#E5DDD3] dark:border-[#3D3935] flex items-center justify-center text-gray-400 hover:text-[#C67B4B] transition-colors relative shadow-sm">
               <Bell className="w-5 h-5" />
               <span className="absolute top-3.5 right-3.5 w-2 h-2 bg-[#C67B4B] rounded-full border-2 border-white dark:border-[#2A2724]" />
             </button>
             <div className="w-12 h-12 rounded-2xl bg-[#C67B4B] text-white flex items-center justify-center text-xl font-bold shadow-lg shadow-[#C67B4B]/20">
               {profile.name.charAt(0)}
             </div>
          </div>
        </header>

        <div className="relative z-10">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === 'overview' && renderOverview()}
              {activeTab === 'my-crafts' && renderMyCrafts()}
              {activeTab === 'achievements' && renderAchievements()}
              {activeTab === 'portfolio' && <PortfolioManager />}
              {activeTab === 'settings' && renderSettings()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Bottom Nav - Mobile Only */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 z-50">
        <nav className="bg-white/90 dark:bg-[#2A2724]/90 backdrop-blur-xl border border-[#E5DDD3] dark:border-[#3D3935] rounded-[2.5rem] p-2 flex justify-between gap-1 shadow-2xl">
          {navItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex-grow flex flex-col items-center gap-1 py-3 rounded-[2rem] transition-all ${
                activeTab === item.id 
                  ? 'bg-[#3A7B85] text-white shadow-xl' 
                  : 'text-gray-400'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-[10px] font-bold">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
