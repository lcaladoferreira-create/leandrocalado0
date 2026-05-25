import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, TranslationKey, LanguageCode } from '../i18n/translations';

type PreferencesContextType = {
  lang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  t: (key: TranslationKey) => string;
};

const defaultLang = 'en';

export const PreferencesContext = createContext<PreferencesContextType | null>(null);

export function PreferencesProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<LanguageCode>(
    (localStorage.getItem('lang') as LanguageCode) || defaultLang
  );
  const [theme, setTheme] = useState<'light' | 'dark'>(
    (localStorage.getItem('theme') as 'light' | 'dark') || 'dark'
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  const t = (key: TranslationKey): string => {
    const translation = translations[lang]?.[key];
    if (translation) return translation;
    return translations[defaultLang][key] || key;
  };

  return (
    <PreferencesContext.Provider value={{ lang, setLang, theme, toggleTheme, t }}>
      {children}
    </PreferencesContext.Provider>
  );
}

export const usePreferences = () => {
  const context = useContext(PreferencesContext);
  if (!context) throw new Error('usePreferences must be used within PreferencesProvider');
  return context;
};
