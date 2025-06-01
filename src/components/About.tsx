
import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-800/30"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 animate-fade-in">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            I'm a passionate full-stack developer with 5+ years of experience creating 
            beautiful, functional, and user-centered digital experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-gray-300 text-xl leading-relaxed">
              My journey in web development began with a curiosity about how things work. 
              This curiosity led me to master various technologies and frameworks, 
              always staying updated with the latest trends in the industry.
            </p>
            
            <p className="text-gray-300 text-xl leading-relaxed">
              I believe in creating solutions that not only look great but also provide 
              exceptional user experiences. Every project is an opportunity to learn 
              something new and push the boundaries of what's possible.
            </p>
            
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { value: '50+', label: 'Projects' },
                { value: '5+', label: 'Years' },
                { value: '30+', label: 'Clients' }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent transform group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-lg mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {[
              {
                icon: Code,
                title: 'Development',
                description: 'Building robust applications with clean, efficient code'
              },
              {
                icon: Palette,
                title: 'Design',
                description: 'Creating beautiful interfaces with attention to detail'
              },
              {
                icon: Zap,
                title: 'Performance',
                description: 'Optimizing for speed and exceptional user experience'
              }
            ].map((feature, index) => (
              <div key={index} className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-purple-500/50 hover:bg-gray-800/70 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                <feature.icon className="text-purple-400 mb-6 group-hover:text-pink-400 transition-colors duration-300 group-hover:scale-110 transform" size={40} />
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-white transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-400 text-lg group-hover:text-gray-300 transition-colors duration-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
