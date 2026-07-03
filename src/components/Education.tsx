import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Educational <span className="text-blue-600 dark:text-blue-400">Background</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              My academic journey and qualifications
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

            {/* Education Card */}
            <div className="relative flex items-center mb-8">
              <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
              
              <div className="ml-20 w-full">
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                        <GraduationCap className="text-blue-600 dark:text-blue-400" size={32} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                          Master of Science (M.Sc.)
                        </h3>
                        <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                          Information technology
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-gray-600 dark:text-gray-400 mb-1">
                        <Calendar size={16} className="mr-2" />
                        <span className="font-medium">2025 - 2027</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <MapPin size={16} className="mr-2" />
                        <span>Annamalai University</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                        <Award className="text-yellow-500 mr-2" size={20} />
                        Key Subjects
                      </h4>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          Data Structures & Algorithms
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          Database Management Systems
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            Advance Java
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          Web Technologies
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          Python Programming
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          Computer Networks
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                        Academic Highlights
                      </h4>
                      <div className="space-y-4">
                        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <h5 className="font-semibold text-gray-700 dark:text-gray-300">Current Status</h5>
                          <p className="text-gray-600 dark:text-gray-400">Final Year (2026-2027)</p>
                        </div>
                        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <h5 className="font-semibold text-gray-700 dark:text-gray-300">Focus Areas</h5>
                          <p className="text-gray-600 dark:text-gray-400">Backend Development, Data Analysis</p>
                        </div>
                        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <h5 className="font-semibold text-gray-700 dark:text-gray-300">Practical Projects</h5>
                          <p className="text-gray-600 dark:text-gray-400">5+ completed projects</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      <strong>Academic Excellence:</strong> Maintaining strong academic performance while 
                      actively engaging in practical projects and skill development. Focused on bridging 
                      theoretical knowledge with real-world application through hands-on coding and 
                      project development.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Future Goals */}
            <div className="relative flex items-center">
              <div className="absolute left-6 w-4 h-4 bg-purple-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
              
              <div className="ml-20 w-full">
                <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 text-white">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                      <Award className="text-white" size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Future Goals</h3>
                      <p className="text-purple-100">Post-Graduation Plans</p>
                    </div>
                  </div>
                  <p className="text-purple-100 leading-relaxed">
                    I aim to join a dynamic organization where I can contribute 
                    to innovative projects while continuing to grow professionally. My goal is to 
                    specialize in backend development and data analytics, eventually leading 
                    cross-functional teams in building scalable solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;