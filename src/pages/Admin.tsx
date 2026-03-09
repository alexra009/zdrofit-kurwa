import { useState, useCallback } from "react";
import { useLanguage, Language } from "@/i18n/LanguageContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Lock, Save, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ADMIN_PASSWORD = "zdrofitbuddy2024";

const LANG_LABELS: Record<Language, string> = {
  ru: "🇷🇺 Русский",
  en: "🇬🇧 English",
  pl: "🇵🇱 Polski",
};

const Admin = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  if (!authenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-4">
        <div className="w-full max-w-sm space-y-4 rounded-2xl border bg-card p-8">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <Lock className="h-5 w-5 text-primary" />
            Админ-панель переводов
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (password === ADMIN_PASSWORD) {
                setAuthenticated(true);
              } else {
                toast({ title: "Неверный пароль", variant: "destructive" });
              }
            }}
            className="space-y-3"
          >
            <Input
              type="password"
              placeholder="Введите пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" className="w-full">
              Войти
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return <TranslationEditor />;
};

const TranslationEditor = () => {
  const { translations, setTranslations } = useLanguage();
  const [activeLang, setActiveLang] = useState<Language>("ru");
  const [editedValues, setEditedValues] = useState<Record<string, string>>(() => ({
    ...translations[activeLang],
  }));

  const switchLang = useCallback(
    (lang: Language) => {
      setActiveLang(lang);
      setEditedValues({ ...translations[lang] });
    },
    [translations]
  );

  const handleChange = (key: string, value: string) => {
    setEditedValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    setTranslations(activeLang, editedValues);
    toast({ title: `Переводы для ${activeLang.toUpperCase()} сохранены ✅` });
  };

  const keys = Object.keys(translations.ru);

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-10 border-b bg-card/90 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-lg font-bold">Управление переводами</h1>
          </div>
          <div className="flex items-center gap-2">
            {(Object.keys(LANG_LABELS) as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => switchLang(lang)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeLang === lang
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {LANG_LABELS[lang]}
              </button>
            ))}
          </div>
          <Button onClick={handleSave} size="sm" className="gap-1">
            <Save className="h-4 w-4" />
            Сохранить
          </Button>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 py-6">
        <div className="space-y-3">
          {keys.map((key) => (
            <div key={key} className="rounded-lg border bg-card p-4">
              <label className="mb-1 block text-xs font-mono text-muted-foreground">{key}</label>
              <div className="flex gap-3">
                <div className="flex-1">
                  <p className="mb-1 text-xs text-muted-foreground/60">RU (оригинал)</p>
                  <p className="rounded bg-muted/30 px-3 py-2 text-sm">{translations.ru[key]}</p>
                </div>
                <div className="flex-1">
                  <p className="mb-1 text-xs text-muted-foreground/60">{activeLang.toUpperCase()}</p>
                  <Input
                    value={editedValues[key] || ""}
                    onChange={(e) => handleChange(key, e.target.value)}
                    className="text-sm"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
