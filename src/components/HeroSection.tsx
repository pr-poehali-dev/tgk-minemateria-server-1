import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-600 text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://cdn.poehali.dev/files/6e06e1cf-f701-4af2-a065-8121da78ba65.jpg"
          alt="Minecraft background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating elements inspired by image */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-16 h-16 bg-orange-400/30 rounded-lg rotate-12 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-yellow-400/40 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-cyan-300/20 rounded-xl rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-8 h-8 bg-orange-500/50 transform rotate-12"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Server badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/30">
            <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Сервер онлайн</span>
          </div>

          {/* Main title with gradient */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-rubik bg-gradient-to-r from-orange-300 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
            ТГК <span className="text-cyan-200">MineMateria</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Лучший сервер для ванильного выживания в Minecraft
          </p>

          {/* Version info */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
              <span className="text-sm text-cyan-200">Версии</span>
              <div className="font-bold text-white">1.16.5+</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
              <span className="text-sm text-cyan-200">Режим</span>
              <div className="font-bold text-white">Vanilla Survival</div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white border-0 text-lg px-8 py-3 shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <Icon name="Play" className="mr-2" />
              Начать играть
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/20 text-lg px-8 py-3 backdrop-blur-sm"
            >
              <Icon name="Users" className="mr-2" />
              Наше сообщество
            </Button>
          </div>

          {/* Server IP */}
          <div className="mt-12 p-6 bg-black/30 backdrop-blur-sm rounded-2xl max-w-md mx-auto border border-white/20">
            <p className="text-sm text-cyan-200 mb-2">IP сервера:</p>
            <code className="text-xl font-mono text-orange-300 font-bold">
              minemateria.ru
            </code>
            <Button
              size="sm"
              variant="ghost"
              className="ml-2 text-orange-300 hover:text-white hover:bg-orange-500/20"
            >
              <Icon name="Copy" size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
