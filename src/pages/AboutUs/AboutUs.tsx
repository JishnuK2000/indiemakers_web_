import { Users, Award, Heart } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="h-screen w-screen overflow-hidden pt-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="h-full flex flex-col justify-center px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto">
        <div className="text-center animate-slideUp">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
            About Us
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-12 lg:mb-16">
            We're a team of passionate creators, strategists, and innovators dedicated to transforming ideas into exceptional digital experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="flex flex-col items-center space-y-4 animate-staggerFadeIn">
              <div className="w-16 h-16 border-2 border-gray-800 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Expert Team</h3>
              <p className="text-sm text-gray-600 text-center">
                Talented professionals with diverse backgrounds and specialized skills
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4 animate-staggerFadeIn" style={{ animationDelay: '150ms' }}>
              <div className="w-16 h-16 border-2 border-gray-800 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Proven Excellence</h3>
              <p className="text-sm text-gray-600 text-center">
                Award-winning projects and satisfied clients across multiple industries
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4 animate-staggerFadeIn" style={{ animationDelay: '300ms' }}>
              <div className="w-16 h-16 border-2 border-gray-800 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Client Focus</h3>
              <p className="text-sm text-gray-600 text-center">
                Your success is our mission, and we're committed to long-term partnerships
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
