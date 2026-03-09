import { useLanguage, Language } from "@/i18n/LanguageContext";

const flags: Record<Language, string> = {
  pl: "🇵🇱",
  ru: "🇷🇺",
  en: "🇬🇧",
};

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-1 rounded-full border bg-card/80 p-1 backdrop-blur-sm shadow-md">
      {(Object.keys(flags) as Language[]).map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          className={`rounded-full px-3 py-1.5 text-sm font-medium uppercase transition-colors ${
            language === lang
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {flags[lang]} {lang}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
