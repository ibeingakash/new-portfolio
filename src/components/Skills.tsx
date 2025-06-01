
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 92 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Python', level: 82 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'GraphQL', level: 78 }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 92 },
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'Figma', level: 88 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800/30 to-gray-900/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 animate-fade-in">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            A comprehensive toolkit of modern technologies and frameworks
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-purple-500/50 hover:bg-gray-800/70 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 animate-fade-in"
              style={{ animationDelay: `${0.4 + categoryIndex * 0.2}s` }}
            >
              <h3 className="text-3xl font-semibold mb-8 text-center text-purple-400 group-hover:text-pink-400 transition-colors duration-300">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-semibold text-lg group-hover:text-white transition-colors duration-300">{skill.name}</span>
                      <span className="text-purple-400 font-bold text-lg group-hover:text-pink-400 transition-colors duration-300">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 h-3 rounded-full transition-all duration-1500 ease-out transform origin-left hover:shadow-lg hover:shadow-purple-500/50"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${1 + categoryIndex * 0.2 + skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
