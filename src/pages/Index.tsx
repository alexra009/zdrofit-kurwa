import { ArrowRight, ShoppingCart, Tag, Search, MessageCircle, Users, Smile, Zap, Send } from "lucide-react";
import heroImage from "@/assets/hero-illustration.png";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageContext";

const TELEGRAM_LINK = "https://t.me/ZdrofitBuddyBot";

const Index = () => {
  const { t } = useLanguage();

  const painPoints = [
    { emoji: "📄", key: "pain.1" },
    { emoji: "🚫", key: "pain.2" },
    { emoji: "💸", key: "pain.3" },
    { emoji: "🏃", key: "pain.4" },
  ];

  const steps = [
    { step: "1", icon: <Search className="h-8 w-8" />, titleKey: "steps.1.title", textKey: "steps.1.text" },
    { step: "2", icon: <MessageCircle className="h-8 w-8" />, titleKey: "steps.2.title", textKey: "steps.2.text" },
    { step: "3", icon: <Zap className="h-8 w-8" />, titleKey: "steps.3.title", textKey: "steps.3.text" },
  ];

  const beyondItems = [
    { icon: <Users className="h-8 w-8" />, key: "beyond.1" },
    { icon: <Zap className="h-8 w-8" />, key: "beyond.2" },
    { icon: <Smile className="h-8 w-8" />, key: "beyond.3" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <LanguageSwitcher />

      {/* Hero */}
      <section className="relative overflow-hidden bg-dark-surface py-16 md:py-24">
        <div className="container mx-auto flex flex-col-reverse items-center gap-8 px-4 md:flex-row md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {t("hero.title.part1")}
              <span className="text-gradient-primary">{t("hero.title.highlight")}</span>
              {t("hero.title.part2")}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">{t("hero.subtitle")}</p>
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-lg font-semibold text-foreground shadow-lg transition-transform hover:scale-105"
            >
              <Send className="h-5 w-5" />
              {t("hero.cta")}
            </a>
          </div>
          <div className="w-64 flex-shrink-0 md:w-80 lg:w-96">
            <img src={heroImage} alt={t("hero.imgAlt")} className="w-full drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Pain Point */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold md:text-4xl">{t("pain.title")}</h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {painPoints.map((item) => (
              <div key={item.key} className="rounded-2xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <span className="text-4xl">{item.emoji}</span>
                <p className="mt-3 font-medium text-card-foreground">{t(item.key)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-dark-surface py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold md:text-4xl">
            {t("solution.title.part1")}
            <span className="text-gradient-primary">{t("solution.title.highlight")}</span>
            {t("solution.title.part2")}
          </h2>
          <div className="mx-auto mt-10 grid max-w-3xl gap-8 sm:grid-cols-2">
            <SolutionCard icon={<Tag className="h-8 w-8" />} title={t("solution.sell.title")} text={t("solution.sell.text")} />
            <SolutionCard icon={<ShoppingCart className="h-8 w-8" />} title={t("solution.buy.title")} text={t("solution.buy.text")} />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold md:text-4xl">{t("steps.title")}</h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-8 md:grid-cols-3">
            {steps.map((item) => (
              <div key={item.step} className="relative rounded-2xl border bg-card p-8 shadow-sm">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-4 py-1 text-sm font-bold">
                  {t("steps.step")} {item.step}
                </span>
                <div className="mt-2 flex justify-center text-primary">{item.icon}</div>
                <h3 className="mt-4 text-lg font-semibold">{t(item.titleKey)}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t(item.textKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond Basics */}
      <section className="bg-dark-surface py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold md:text-4xl">{t("beyond.title")}</h2>
          <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-3">
            {beyondItems.map((item) => (
              <div key={item.key} className="flex flex-col items-center gap-3 rounded-2xl border border-border/20 p-6">
                <div className="text-primary">{item.icon}</div>
                <p className="text-sm font-medium">{t(item.key)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold md:text-4xl">
            {t("cta.title.part1")}
            <span className="text-gradient-primary">{t("cta.title.highlight")}</span>
            {t("cta.title.part2")}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">{t("cta.subtitle")}</p>
          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-10 py-5 text-xl font-bold shadow-xl transition-transform hover:scale-105"
          >
            <Send className="h-6 w-6" />
            {t("cta.button")}
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card py-8">
        <div className="container mx-auto flex flex-col items-center gap-4 px-4 text-center text-sm text-muted-foreground md:flex-row md:justify-between">
          <p>{t("footer.copyright")}</p>
          <div className="flex gap-4">
            <a href="#" className="underline-offset-2 hover:underline">{t("footer.privacy")}</a>
            <a href="#" className="underline-offset-2 hover:underline">{t("footer.terms")}</a>
            <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:underline">
              {t("footer.telegram")}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const SolutionCard = ({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) => (
  <div className="rounded-2xl border border-border/20 p-8 text-left transition-shadow hover:shadow-lg">
    <div className="text-primary">{icon}</div>
    <h3 className="mt-4 text-xl font-semibold">{title}</h3>
    <p className="mt-2 text-muted-foreground">{text}</p>
  </div>
);

export default Index;
