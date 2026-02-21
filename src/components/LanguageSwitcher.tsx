import React from 'react';
import { Languages } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLang: 'en' | 'zh';
}

export const LanguageSwitcher = ({ currentLang }: LanguageSwitcherProps) => {
  const toggleLang = () => {
    // If we are currently on 'en', switch to 'zh'
    // If we are currently on 'zh', switch to 'en'
    const newLang = currentLang === 'en' ? 'zh' : 'en';
    
    // Get current path segments
    const path = window.location.pathname;
    const segments = path.split('/').filter(Boolean);
    
    // If the first segment is a language code, replace it
    if (segments.length > 0 && (segments[0] === 'en' || segments[0] === 'zh')) {
        segments[0] = newLang;
    } else {
        // If no language code (e.g. root), prepend new language
        // Note: With our strict routing, we should always be at /en or /zh
        // But for safety:
        segments.unshift(newLang);
    }
    
    window.location.href = `/${segments.join('/')}`;
  };

  return (
    <button
      onClick={toggleLang}
      className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors flex items-center gap-2"
      aria-label={`Switch to ${currentLang === 'en' ? 'Chinese' : 'English'}`}
      title={`Switch to ${currentLang === 'en' ? '中文' : 'English'}`}
    >
      <Languages className="h-5 w-5" />
      <span className="sr-only">{currentLang === 'en' ? 'ZH' : 'EN'}</span>
      <span className="text-xs font-bold uppercase hidden sm:inline-block">{currentLang === 'en' ? 'EN' : 'ZH'}</span>
    </button>
  );
};
