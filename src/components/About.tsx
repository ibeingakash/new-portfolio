
import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with 5+ years of experience creating 
            beautiful, functional, and user-centered digital experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              My journey in web development began with a curiosity about how things work. 
              This curiosity led me to master various technologies and frameworks, 
              always staying updated with the latest trends in the industry.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I believe in creating solutions that not only look great but also provide 
              exceptional user experiences. Every project is an opportunity to learn 
              something new and push the boundaries of what's possible.
            </p>
            
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { value: '50+', label: 'Projects' },
                { value: '5+', label: 'Years' },
                { value: '30+', label: 'Clients' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
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
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
                <feature.icon className="text-purple-400 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
