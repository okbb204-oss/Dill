import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ar from './locales/ar.json';
import en from './locales/en.json';

// Initialize i18n
const resources = {
  ar: { translation: ar },
  en: { translation: en },
};

const savedLanguage = localStorage.getItem('language') || 'ar';
document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
document.documentElement.lang = savedLanguage;

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
