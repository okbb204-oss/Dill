import React from 'react';
import { Hammer, Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BrandLogo } from './BrandLogo';

export default function Footer() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <footer className="bg-[var(--color-dark)] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 group mb-4">
              <div className="bg-[var(--color-card)] p-2 rounded-lg transition-transform group-hover:scale-105">
                <BrandLogo className="w-10 h-10 text-[var(--color-primary)]" />
              </div>
              <span className="font-heading font-bold text-3xl text-white">حرفتي</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t('home.subtitle')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors">
                <Facebook className="w-5 h-5 text-gray-300" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors">
                <Instagram className="w-5 h-5 text-gray-300" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors">
                <Twitter className="w-5 h-5 text-gray-300" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold text-xl mb-6 border-b border-white/10 pb-3 inline-block">{t('footer.quick_links')}</h3>
            <ul className="space-y-4">
              <li><Link to="/test" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><span>-</span> {t('nav.test')}</Link></li>
              <li><Link to="/crafts" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><span>-</span> {t('nav.crafts')}</Link></li>
              <li><Link to="/centers" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><span>-</span> {t('footer.centers')}</Link></li>
              <li><Link to="/training-modes" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><span>-</span> {t('training_modes.title')}</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><span>-</span> {t('footer.about')}</Link></li>
              <li><Link to="/learn" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><span>-</span> {t('nav.learn')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-xl mb-6 border-b border-white/10 pb-3 inline-block">{t('footer.popular_crafts')}</h3>
            <ul className="space-y-4">
              <li><Link to="/craft/carpentry" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><span>-</span> {isRTL ? 'النجارة والأثاث' : 'Carpentry & Furniture'}</Link></li>
              <li><Link to="/craft/electrical_building" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><span>-</span> {isRTL ? 'كهرباء معمارية' : 'Building Electricity'}</Link></li>
              <li><Link to="/craft/mechanics" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><span>-</span> {isRTL ? 'ميكانيك السيارات' : 'Auto Mechanics'}</Link></li>
              <li><Link to="/craft/agriculture" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><span>-</span> {isRTL ? 'الزراعة المحمية' : 'Protected Agriculture'}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-xl mb-6 border-b border-white/10 pb-3 inline-block">{t('footer.contact_us')}</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-[var(--color-primary)]" />
                <span>contact@hirfati.dz</span>
              </li>
              <li className="text-sm text-gray-500 mt-6 p-4 bg-white/5 rounded-lg border border-white/10 text-center">
                {t('footer.expert_msg')}
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4">
          <p>
            {isRTL ? 'حرفتي – منصة جزائرية مفتوحة للتعلم. لا تحتاج حساباً لتبدأ.' : 'Hirfati – An open Algerian learning platform. No account needed to start.'}
            <br className="md:hidden" />
            <span className="md:hidden">&copy; {new Date().getFullYear()} {t('footer.rights')}</span>
          </p>
          <p className="hidden md:block">© {new Date().getFullYear()} {t('footer.rights')}</p>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-4 md:mt-0 font-medium">
            <button 
               onClick={() => document.getElementById('login-btn')?.click()}
               className="text-[var(--color-primary)] hover:text-white transition-colors"
            >
              {isRTL ? 'تسجيل الدخول (اختياري)' : 'Login (Optional)'}
            </button>
            <Link to="/privacy" className="hover:text-white transition-colors">{t('footer.privacy')}</Link>
            <Link to="/terms" className="hover:text-white transition-colors">{t('footer.terms')}</Link>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col items-center justify-center text-center gap-2">
          <p className="text-[13px] text-[#8A8A8A] dark:text-[#B0A99A] font-sans" style={{ fontFamily: 'Tajawal, system-ui, sans-serif' }}>
            ℹ️ {t('disclaimer.short', { lng: 'ar' })}
          </p>
          <p className="text-[13px] text-[#8A8A8A] dark:text-[#B0A99A] font-sans" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            ℹ️ {t('disclaimer.short', { lng: 'en' })}
          </p>
        </div>
      </div>
    </footer>
  );
}
