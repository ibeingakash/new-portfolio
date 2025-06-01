
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative project management tool with real-time updates and team features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'WebSocket'],
      github: '#',
      live: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website with modern design and smooth animations.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      github: '#',
      live: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather application with location-based forecasts and data visualization.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
      technologies: ['Vue.js', 'Chart.js', 'Weather API'],
      github: '#',
      live: '#'
    },
    {
      title: 'Social Media App',
      description: 'A social networking platform with real-time messaging and content sharing.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop',
      technologies: ['React Native', 'Firebase', 'Redux'],
      github: '#',
      live: '#'
    },
    {
      title: 'Learning Platform',
      description: 'An online learning management system with video streaming and progress tracking.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&h=300&fit=crop',
      technologies: ['Angular', 'NestJS', 'PostgreSQL'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of my recent work showcasing different technologies and approaches
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                    <a href={project.github} className="bg-gray-900/80 p-2 rounded-full text-white hover:bg-purple-500 transition-colors duration-200">
                      <Github size={20} />
                    </a>
                    <a href={project.live} className="bg-gray-900/80 p-2 rounded-full text-white hover:bg-purple-500 transition-colors duration-200">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
