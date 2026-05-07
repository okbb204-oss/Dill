import React, { createContext, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

type ThemeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  language: string;
  toggleLanguage: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleDarkMode: () => {},
  language: 'ar',
  toggleLanguage: () => {},
});

export const useThemeSettings = () => useContext(ThemeContext);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState(i18n.language || 'ar');

  useEffect(() => {
    // Check initial preference for dark mode
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newMode;
    });
  };

  const toggleLanguage = () => {
    const newLang = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
    localStorage.setItem('language', newLang);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode, language, toggleLanguage }}>
      {children}
    </ThemeContext.Provider>
  );
}
