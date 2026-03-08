import { ArrowRight, ShoppingCart, Tag, Search, MessageCircle, Users, Smile, Zap, Send } from "lucide-react";
import heroImage from "@/assets/hero-illustration.png";

const TELEGRAM_LINK = "https://t.me/ZdrofitBuddyBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-dark-surface py-16 md:py-24">
        <div className="container mx-auto flex flex-col-reverse items-center gap-8 px-4 md:flex-row md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Zdrofit достал? 🤔{" "}
              <span className="text-gradient-primary">Переуступи или Купи</span>{" "}
              Абонемент Без Головной Боли!
            </h1>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              Твоё комьюнити для Zdrofit: продавай, покупай, ищи напарников и тренируйся в кайф! 💪
            </p>
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-lg font-semibold text-foreground shadow-lg transition-transform hover:scale-105"
            >
              <Send className="h-5 w-5" />
              Я хочу к вам в Telegram!
            </a>
          </div>
          <div className="w-64 flex-shrink-0 md:w-80 lg:w-96">
            <img src={heroImage} alt="Человек, освобождающийся от контрактных цепей" className="w-full drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Pain Point */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold md:text-4xl">Знакомая картина? 😩</h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { emoji: "📄", text: "Застрял с 12-месячным контрактом" },
              { emoji: "🚫", text: "Не можешь расторгнуть без штрафов" },
              { emoji: "💸", text: "Платишь за зал, в который не ходишь" },
              { emoji: "🏃", text: "Переехал, перегорел, нашел другой зал" },
            ].map((item) => (
              <div key={item.text} className="rounded-2xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <span className="text-4xl">{item.emoji}</span>
                <p className="mt-3 font-medium text-card-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-dark-surface py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold md:text-4xl">
            Есть выход! Знакомьтесь,{" "}
            <span className="text-gradient-primary">ZdrofitBuddy</span>! 🎉
          </h2>
          <div className="mx-auto mt-10 grid max-w-3xl gap-8 sm:grid-cols-2">
            <SolutionCard
              icon={<Tag className="h-8 w-8" />}
              title="Переуступай легко"
              text="Выстави абонемент на продажу, найди покупателя и забудь о платежах."
            />
            <SolutionCard
              icon={<ShoppingCart className="h-8 w-8" />}
              title="Покупай гибко"
              text="Нужен абонемент на пару месяцев? У нас найдутся варианты без долгих обязательств."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold md:text-4xl">Всего 3 шага! 🚀</h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-8 md:grid-cols-3">
            {[
              { step: "1", icon: <Search className="h-8 w-8" />, title: "Заходи в Telegram", text: "Найди ZdrofitBuddy или переходи по кнопке." },
              { step: "2", icon: <MessageCircle className="h-8 w-8" />, title: "Размещай / Ищи", text: "Добавь свой абонемент или просматривай доступные." },
              { step: "3", icon: <Zap className="h-8 w-8" />, title: "Договаривайся и Вперед", text: "Связывайся, переоформляй и наслаждайся свободой!" },
            ].map((item) => (
              <div key={item.step} className="relative rounded-2xl border bg-card p-8 shadow-sm">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-4 py-1 text-sm font-bold">
                  Шаг {item.step}
                </span>
                <div className="mt-2 flex justify-center text-primary">{item.icon}</div>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond Basics */}
      <section className="bg-dark-surface py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold md:text-4xl">Но это не все! С нами ты... 🔥</h2>
          <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-3">
            {[
              { icon: <Users className="h-8 w-8" />, text: "Найдёшь фитнес-бадди прямо из твоего зала!" },
              { icon: <Zap className="h-8 w-8" />, text: "Будешь мотивирован на тренировки с нашей поддержкой!" },
              { icon: <Smile className="h-8 w-8" />, text: "Всегда будешь в курсе свежих мемчиков и лайфхаков!" },
            ].map((item) => (
              <div key={item.text} className="flex flex-col items-center gap-3 rounded-2xl border border-border/20 p-6">
                <div className="text-primary">{item.icon}</div>
                <p className="text-sm font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold md:text-4xl">
            Хватит терпеть! 💥 Присоединяйся к{" "}
            <span className="text-gradient-primary">ZdrofitBuddy</span>!
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Это быстро, бесплатно и избавит тебя от лишних проблем!
          </p>
          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-10 py-5 text-xl font-bold shadow-xl transition-transform hover:scale-105"
          >
            <Send className="h-6 w-6" />
            Открыть ZdrofitBuddy в Telegram
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card py-8">
        <div className="container mx-auto flex flex-col items-center gap-4 px-4 text-center text-sm text-muted-foreground md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} ZdrofitBuddy. Все права защищены.</p>
          <div className="flex gap-4">
            <a href="#" className="underline-offset-2 hover:underline">Политика конфиденциальности</a>
            <a href="#" className="underline-offset-2 hover:underline">Условия использования</a>
            <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:underline">
              Telegram
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
