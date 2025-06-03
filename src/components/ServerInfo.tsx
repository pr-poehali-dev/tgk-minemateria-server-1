import Icon from "@/components/ui/icon";

const ServerInfo = () => {
  const infoItems = [
    {
      icon: "Gamepad2",
      title: "Ванильное выживание",
      description:
        "Классический Minecraft без модификаций — только вы, мир и ваши навыки",
    },
    {
      icon: "Shield",
      title: "Защита территорий",
      description: "Система приватов для защиты ваших построек от грифинга",
    },
    {
      icon: "Users",
      title: "Дружное сообщество",
      description: "Активные игроки, события и помощь новичкам",
    },
    {
      icon: "Clock",
      title: "Стабильная работа",
      description: "Сервер работает 24/7 с минимальными лагами",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-rubik">
            Почему выбирают нас?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы создали идеальную среду для любителей классического Minecraft
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {infoItems.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gray-50 hover:bg-green-50 transition-colors duration-300 hover:scale-105 transform transition-transform"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={item.icon} size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-rubik">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServerInfo;
