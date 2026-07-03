import React, { useEffect, useRef, useState } from 'react';
import { Server, Globe, BarChart3, Database, Languages } from 'lucide-react';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Backend Development',
      icon: Server,
      color: 'blue',
      skills: [
        { name: 'API Development', level: 85 },
        { name: 'Server-side Programming', level: 80 },
        { name: 'Python', level: 90 },
      ]
    },
    {
      title: 'Frontend Development',
      icon: Globe,
      color: 'green',
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
      ]
    },
    {
      title: 'Data Analysis',
      icon: BarChart3,
      color: 'purple',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Pandas', level: 85 },
        { name: 'NumPy', level: 80 },
        { name: 'Data Visualization', level: 75 },
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'orange',
      skills: [
        { name: 'SQL', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'MongoDB', level: 75 },
      ]
    },
    {
      title: 'Languages',
      icon: Languages,
      color: 'teal',
      skills: [
        { name: 'English', level: 90 },
        { name: 'Tamil', level: 100 },
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 from-blue-500 to-blue-600',
      green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 from-green-500 to-green-600',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 from-purple-500 to-purple-600',
      orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 from-orange-500 to-orange-600',
      teal: 'bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 from-teal-500 to-teal-600',
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Technical <span className="text-blue-600 dark:text-blue-400">Skills</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              A comprehensive overview of my technical expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{
                  animationDelay: `${categoryIndex * 0.1}s`,
                  animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none',
                  opacity: isVisible ? 1 : 0,
                }}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg ${getColorClasses(category.color).split(' ').slice(0, 3).join(' ')}`}>
                    <category.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white ml-4">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r ${getColorClasses(category.color).split(' ').slice(-2).join(' ')} transition-all duration-1000 ease-out`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.1)}s`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;