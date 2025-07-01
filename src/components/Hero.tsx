import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-pattern relative overflow-hidden">
      <div className="container-max text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-secondary-900 mb-6">
            Building the
            <span className="text-gradient block">Future of Code</span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary-600 mb-8 max-w-2xl mx-auto">
            Full-stack developer specializing in NPM packages, mobile applications, 
            and innovative web solutions that make a difference.
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <ArrowDown className="h-6 w-6 text-secondary-400" />
      </div>
    </section>
  );
};

export default Hero;