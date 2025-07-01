import React from 'react';
import { Code2, Smartphone, Globe, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: 'Full-Stack Development',
      description: 'Expert in modern web technologies including React, Node.js, TypeScript, and cloud platforms.'
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Mobile Development',
      description: 'Creating native and cross-platform mobile applications with React Native and Flutter.'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'NPM Packages',
      description: 'Publishing and maintaining open-source packages that help developers build better software.'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Performance Optimization',
      description: 'Optimizing applications for speed, scalability, and exceptional user experience.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            I'm a passionate developer with expertise in creating scalable web applications, 
            mobile solutions, and reusable code packages. I believe in writing clean, 
            maintainable code that solves real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="card p-6 text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary-600 mb-4 flex justify-center">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                {skill.title}
              </h3>
              <p className="text-secondary-600">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;