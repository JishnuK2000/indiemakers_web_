import { Lightbulb, Rocket, Target } from 'lucide-react';

export default function HowWeWork() {
  const steps = [
    {
      icon: Lightbulb,
      title: 'Discover & Strategize',
      description: 'We begin by understanding your vision, goals, and challenges. Through collaborative workshops, we define a clear strategy that aligns with your business objectives.',
    },
    {
      icon: Rocket,
      title: 'Design & Build',
      description: 'Our team crafts beautiful, functional solutions with precision. We iterate rapidly, keeping you involved at every stage to ensure the end result exceeds expectations.',
    },
    {
      icon: Target,
      title: 'Launch & Optimize',
      description: 'We deliver a polished product and stay with you beyond launch. Continuous optimization ensures your solution adapts and thrives in the real world.',
    },
  ];

  return (
    <div className="h-screen w-screen overflow-hidden pt-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="h-full flex flex-col justify-center px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto py-8">
        <div className="text-center mb-8 lg:mb-12 animate-slideUp">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4">
            How We Work
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven three-phase approach ensures every project delivers exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="group bg-white border-2 border-gray-300 rounded-2xl p-6 lg:p-8 hover:border-gray-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-staggerFadeIn"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 border-2 border-gray-800 rounded-full flex items-center justify-center group-hover:bg-gray-800 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-gray-800 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
