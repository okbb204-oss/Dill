import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Hammer, User, Menu, X, Compass, Search, BookOpen, Sun, Moon, LogIn, Building2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useThemeSettings } from '../../contexts/ThemeContext';
import { BrandLogo } from './BrandLogo';
import { useAuth } from '../../contexts/AuthContext';
import AuthModal from '../auth/AuthModal';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { isDarkMode, toggleDarkMode, language, toggleLanguage } = useThemeSettings();
  const { user, profile } = useAuth();

  const navLinks = [
    { name: t('nav.home'), path: '/', icon: <Hammer className="w-4 h-4 rtl:ml-2 ltr:mr-2" /> },
    { name: t('nav.test'), path: '/test', icon: <Compass className="w-4 h-4 rtl:ml-2 ltr:mr-2" /> },
    { name: t('nav.crafts'), path: '/crafts', icon: <Search className="w-4 h-4 rtl:ml-2 ltr:mr-2" /> },
    { name: t('training_modes.title', 'Training Modes'), path: '/training-modes', icon: <BookOpen className="w-4 h-4 rtl:ml-2 ltr:mr-2" /> },
    { name: t('training_centers.title', 'Centers'), path: '/centers', icon: <Building2 className="w-4 h-4 rtl:ml-2 ltr:mr-2" /> },
    { name: t('nav.learn'), path: '/learn', icon: <BookOpen className="w-4 h-4 rtl:ml-2 ltr:mr-2" /> },
  ];

  return (
    <>
      <nav className="bg-[var(--color-card)] shadow-sm border-b border-[var(--color-border)] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="w-14 h-14 sm:w-16 sm:h-16 transition-transform group-hover:scale-110">
                  <BrandLogo className="w-full h-full" />
                </div>
                <div className="flex flex-col rtl:items-end ltr:items-start group-hover:opacity-80 transition-opacity">
                  <span className="font-heading font-bold text-2xl text-[var(--color-primary)] leading-none">حرفتي</span>
                  <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[var(--color-secondary)] uppercase leading-none mt-1">Hirfati</span>
                </div>
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center text-lg font-medium transition-colors ${isActive ? 'text-[var(--color-primary)] border-b-2 border-[var(--color-primary)] py-2' : 'text-[var(--color-secondary)] hover:text-[var(--color-primary)]'}`}
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="hidden md:flex items-center gap-4">
               <button 
                  onClick={toggleDarkMode} 
                  className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors relative"
                  title={t(isDarkMode ? 'common.light_mode' : 'common.dark_mode')}
               >
                  <div className={`transition-transform duration-500 ${isDarkMode ? 'rotate-[360deg]' : 'rotate-0'}`}>
                    {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
                  </div>
               </button>
               
               <button 
                  onClick={toggleLanguage}
                  className="text-sm font-bold bg-[var(--color-bg-sand)] text-[var(--color-dark)] border border-[var(--color-border)] px-3 py-1.5 rounded-lg hover:border-[var(--color-primary)] transition-colors"
                  title={language === 'ar' ? 'Switch to English' : 'التبديل للعربية'}
               >
                 {language === 'ar' ? 'EN' : 'AR'}
               </button>

               {user ? (
                 <Link 
                   to="/profile" 
                   className="flex items-center gap-2 p-1 pl-4 rtl:pl-1 rtl:pr-4 rounded-full border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all group bg-white dark:bg-[#2A2724]"
                 >
                   <span className="text-sm font-bold hidden lg:block group-hover:text-[var(--color-primary)]">
                     {profile?.name?.split(' ')[0] || (language === 'ar' ? 'تقدمي' : 'Progress')}
                   </span>
                   <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white text-lg font-bold overflow-hidden shadow-sm">
                     {profile?.avatarUrl ? (
                       <img src={profile.avatarUrl} loading="lazy" alt={profile.name} className="w-full h-full object-cover" />
                     ) : (
                       <User className="w-5 h-5" />
                     )}
                   </div>
                 </Link>
               ) : (
                 <button 
                   onClick={() => setIsAuthModalOpen(true)}
                   className="bg-white dark:bg-[#2A2724] hover:bg-[var(--color-bg-sand)] dark:hover:bg-[#1E1C1A] text-[var(--color-dark)] dark:text-white border border-[var(--color-border)] px-6 py-2.5 rounded-full font-bold transition-all flex items-center gap-2 shadow-sm hover:shadow-md"
                 >
                   <LogIn className="w-5 h-5 opacity-40" />
                   <span>{t('nav.login', 'تسجيل الدخول')}</span>
                 </button>
               )}
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden gap-3">
               <button onClick={toggleDarkMode} className="text-[var(--color-secondary)]">
                  {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
               </button>
               {user ? (
                 <Link 
                   to="/profile" 
                   className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white font-bold overflow-hidden"
                 >
                   {profile?.avatarUrl ? (
                     <img src={profile.avatarUrl} loading="lazy" alt={profile.name} className="w-full h-full object-cover" />
                   ) : (
                     <User className="w-5 h-5" />
                   )}
                 </Link>
               ) : (
                 <button onClick={() => setIsAuthModalOpen(true)} className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] p-2">
                   <LogIn className="w-6 h-6" />
                 </button>
               )}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] p-2"
              >
                {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[var(--color-card)] border-t border-[var(--color-border)] pb-4 px-4 shadow-lg absolute w-full z-50">
            <div className="flex flex-col space-y-3 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center px-3 py-3 rounded-md text-lg font-medium ${location.pathname === link.path ? 'bg-[var(--color-bg-sand)] text-[var(--color-primary)]' : 'text-[var(--color-secondary)] hover:bg-[var(--color-bg-sand)]'}`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
              {!user && (
                <button
                  onClick={() => { setIsMenuOpen(false); setIsAuthModalOpen(true); }}
                  className="bg-[var(--color-primary)] text-[var(--color-bg-sand)] px-4 py-3 rounded-lg font-bold text-center mt-4 flex items-center justify-center gap-2"
                >
                  <LogIn className="w-5 h-5" />
                  <span>{t('nav.login', 'تسجيل الدخول')}</span>
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      <button id="login-btn" onClick={() => setIsAuthModalOpen(true)} className="hidden" aria-hidden="true"></button>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </>
  );
}
