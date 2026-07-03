import React from 'react';
import { User, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              About <span className="text-blue-600 dark:text-blue-400">Me</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Get to know the person behind the code
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <User className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                      Who I Am
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      I'm a dedicated Information Technology postgraduate from Annamalai University, 
                      currently in my final year (2026-2027). Based in Panruti, Cuddalore, 
                      I'm passionate about technology and its potential to solve real-world problems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Target className="text-purple-600 dark:text-purple-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                      My Goal
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Motivated Information Technology postgraduate with strong skills in Backend Development, 
                      Data Analysis, and Frontend technologies. Seeking a role to apply and enhance 
                      my technical expertise in a professional setting.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Heart className="text-green-600 dark:text-green-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                      What I Love
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      I'm passionate about building efficient backend systems, analyzing complex datasets 
                      to derive meaningful insights, and creating intuitive user interfaces. 
                      I enjoy learning new technologies and staying updated with industry trends.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-2xl transform rotate-3 hover:rotate-6 transition-transform duration-300"></div>
                <div className="absolute inset-0 w-full h-96 transform -rotate-1 hover:rotate-1 transition-transform duration-300 rounded-2xl overflow-hidden">
                  <img
                    src="/Ragu.jpg"
                    alt="Ragupathi J"
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">3+</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Years of Study</h4>
              <p className="text-gray-600 dark:text-gray-400">Continuous learning and skill development</p>
            </div>

            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">10+</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Technologies</h4>
              <p className="text-gray-600 dark:text-gray-400">Proficient in various programming languages</p>
            </div>

            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">5+</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Projects</h4>
              <p className="text-gray-600 dark:text-gray-400">Hands-on experience with real applications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;