import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ServerStats = () => {
  const stats = [
    { label: "Игроков онлайн", value: "127", icon: "Users" },
    { label: "Дней работы", value: "365", icon: "Calendar" },
    { label: "Построек создано", value: "2.1K", icon: "Building" },
    { label: "Активных городов", value: "48", icon: "MapPin" },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={stat.icon} size={28} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-green-400 mb-2 font-rubik">
                {stat.value}
              </div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Connection info */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 font-rubik">
            Готовы начать приключение?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Присоединяйтесь к нашему серверу и станьте частью дружного
            сообщества
          </p>

          <div className="bg-gray-800 rounded-xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-green-400 font-rubik">
                  Как подключиться:
                </h3>
                <ol className="text-left space-y-3 text-gray-300">
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </span>
                    Запустите Minecraft версии 1.16.5 или выше
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </span>
                    Выберите "Сетевая игра"
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </span>
                    Введите IP: minemateria.ru
                  </li>
                </ol>
              </div>

              <div className="bg-black/30 rounded-lg p-6">
                <p className="text-sm text-gray-400 mb-2">IP адрес сервера:</p>
                <div className="flex items-center justify-between bg-gray-700 rounded-lg p-4">
                  <code className="text-2xl font-mono text-green-400 font-bold">
                    minemateria.ru
                  </code>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-green-400 hover:text-white hover:bg-green-600"
                  >
                    <Icon name="Copy" size={16} />
                  </Button>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  Поддерживаемые версии: 1.16.5 — 1.21.x
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Icon name="MessageCircle" className="mr-2" />
              Присоединиться к Discord
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              <Icon name="Book" className="mr-2" />
              Правила сервера
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServerStats;
