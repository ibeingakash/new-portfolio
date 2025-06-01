
import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-blue-900/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-white mb-2">Hello, I'm</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Alex Johnson
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Creative Developer & Designer crafting exceptional digital experiences 
            with modern technologies and innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="border border-gray-600 hover:border-purple-400 text-white px-8 py-3 rounded-full transition-all duration-300 hover:bg-purple-500/10">
              Download CV
            </button>
          </div>
          
          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: '#' },
              { icon: Linkedin, href: '#' },
              { icon: Mail, href: '#contact' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
