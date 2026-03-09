import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import ruTranslations from "./ru.json";
import enTranslations from "./en.json";
import plTranslations from "./pl.json";

export type Language = "ru" | "en" | "pl";

type Translations = Record<string, string>;

const defaultTranslations: Record<Language, Translations> = {
  ru: ruTranslations,
  en: enTranslations,
  pl: plTranslations,
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  translations: Record<Language, Translations>;
  setTranslations: (lang: Language, translations: Translations) => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("zdrofit-lang");
    return (saved as Language) || "ru";
  });

  const [translations, setTranslationsState] = useState<Record<Language, Translations>>(defaultTranslations);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("zdrofit-lang", lang);
  }, []);

  const setTranslations = useCallback((lang: Language, newTranslations: Translations) => {
    setTranslationsState((prev) => ({ ...prev, [lang]: newTranslations }));
  }, []);

  const t = useCallback(
    (key: string) => {
      const value = translations[language]?.[key];
      if (!value) return key;
      return value.replace("{year}", new Date().getFullYear().toString());
    },
    [language, translations]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, translations, setTranslations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
