import React from 'react';
import { Github, ExternalLink, Play, Palette, TrendingUp } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'YouTube Downloader',
      description: 'A powerful Python-based tool that allows users to download YouTube videos in various formats and qualities. Built using the pytube library with a user-friendly interface.',
      tech: ['Python', 'pytube', 'GUI', 'Video Processing'],
      icon: Play,
      color: 'red',
      features: [
        'Multiple format support',
        'Quality selection',
        'Batch downloads',
        'Progress tracking'
      ]
    },
    {
      title: 'Font Maker',
      description: 'An innovative GUI application that enables users to create, customize, and export their own custom fonts. Features real-time preview and various export options.',
      tech: ['Python', 'Tkinter', 'Font Design', 'Graphics'],
      icon: Palette,
      color: 'purple',
      features: [
        'Custom font creation',
        'Real-time preview',
        'Multiple export formats',
        'Character customization'
      ]
    },
    {
      title: 'Stock Market Analysis',
      description: 'Comprehensive data analysis project using Python libraries to analyze stock market trends, generate insights, and create interactive visualizations for better decision making.',
      tech: ['Python', 'Pandas', 'Matplotlib', 'Data Analysis'],
      icon: TrendingUp,
      color: 'green',
      features: [
        'Market trend analysis',
        'Interactive charts',
        'Statistical insights',
        'Predictive modeling'
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      red: 'from-red-500 to-red-600 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
      purple: 'from-purple-500 to-purple-600 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
      green: 'from-green-500 to-green-600 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Showcasing my technical skills through practical applications
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Project Header */}
                <div className={`relative h-48 bg-gradient-to-br ${getColorClasses(project.color).split(' ').slice(0, 2).join(' ')} overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-6 bg-white/20 backdrop-blur-sm rounded-full">
                      <project.icon size={48} className="text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300">
                      <Github size={16} className="text-white" />
                    </button>
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300">
                      <ExternalLink size={16} className="text-white" />
                    </button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:to-transparent transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/Ragupathi-vglug"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Github size={20} />
              <span>View All Projects on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;