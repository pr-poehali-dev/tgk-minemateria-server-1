import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] bg-repeat"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Server badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Сервер онлайн</span>
          </div>

          {/* Main title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-rubik">
            ТГК <span className="text-green-300">MineMateria</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-2xl mx-auto">
            Лучший сервер для ванильного выживания в Minecraft
          </p>

          {/* Version info */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-sm text-green-200">Версии</span>
              <div className="font-bold text-white">1.16.5+</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-sm text-green-200">Режим</span>
              <div className="font-bold text-white">Vanilla Survival</div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white border-0 text-lg px-8 py-3"
            >
              <Icon name="Play" className="mr-2" />
              Начать играть
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-3"
            >
              <Icon name="Users" className="mr-2" />
              Наше сообщество
            </Button>
          </div>

          {/* Server IP */}
          <div className="mt-12 p-4 bg-black/20 backdrop-blur-sm rounded-lg max-w-md mx-auto">
            <p className="text-sm text-green-200 mb-2">IP сервера:</p>
            <code className="text-xl font-mono text-white font-bold">
              minemateria.ru
            </code>
            <Button
              size="sm"
              variant="ghost"
              className="ml-2 text-green-300 hover:text-white hover:bg-white/10"
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
