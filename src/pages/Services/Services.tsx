import { Palette, Code, Smartphone, Globe, Database, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love',
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, scalable web applications built with cutting-edge tech',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile experiences',
    },
    {
      icon: Globe,
      title: 'Digital Strategy',
      description: 'Comprehensive planning for digital transformation',
    },
    {
      icon: Database,
      title: 'Backend Systems',
      description: 'Robust infrastructure and data management solutions',
    },
    {
      icon: Zap,
      title: 'Optimization',
      description: 'Performance tuning and continuous improvement',
    },
  ];

  return (
    <div className="h-screen w-screen overflow-hidden pt-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="h-full flex flex-col justify-center px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto py-8">
        <div className="text-center mb-8 lg:mb-12 animate-slideUp">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4">
            What We Do
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white border-2 border-gray-300 rounded-xl p-6 hover:border-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-staggerFadeIn"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 border-2 border-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-800 transition-all duration-300">
                      <Icon className="w-5 h-5 text-gray-800 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
