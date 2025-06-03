import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "Pickaxe",
      title: "Добыча ресурсов",
      description: "Стандартная генерация руд и ресурсов без изменений",
    },
    {
      icon: "Home",
      title: "Строительство",
      description: "Создавайте удивительные постройки в безопасной среде",
    },
    {
      icon: "Sword",
      title: "PvP зоны",
      description: "Сражайтесь с другими игроками в специальных областях",
    },
    {
      icon: "TreePine",
      title: "Природа",
      description: "Неизменная красота мира Minecraft во всей красе",
    },
    {
      icon: "Gem",
      title: "Достижения",
      description: "Система наград за различные игровые активности",
    },
    {
      icon: "Map",
      title: "Исследования",
      description: "Огромный мир для открытий и приключений",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-rubik">
            Игровые возможности
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Все то, что вы любите в Minecraft, но с комфортом
            многопользовательской игры
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon
                    name={feature.icon}
                    size={24}
                    className="text-green-600"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-rubik">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
