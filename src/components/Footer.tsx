import React from 'react';
import { Code, Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code className="h-8 w-8 text-primary-400" />
              <span className="text-2xl font-bold">InDataStar</span>
            </div>
            <p className="text-secondary-300 mb-6 max-w-md">
              Building innovative web and mobile solutions that make a difference. 
              Specializing in NPM packages, full-stack development, and mobile applications.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary-400 hover:text-primary-400 transition-colors duration-200"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary-400 hover:text-primary-400 transition-colors duration-200"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:contact@indatastar.com"
                className="text-secondary-400 hover:text-primary-400 transition-colors duration-200"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-secondary-300 hover:text-primary-400 transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-secondary-300 hover:text-primary-400 transition-colors duration-200">
                  Projects
                </a>
              </li>
              <li>
                <a href="#npm-packages" className="text-secondary-300 hover:text-primary-400 transition-colors duration-200">
                  NPM Packages
                </a>
              </li>
              <li>
                <a href="#mobile-work" className="text-secondary-300 hover:text-primary-400 transition-colors duration-200">
                  Mobile Work
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-secondary-300">
              <li>contact@indatastar.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Available worldwide</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-400 text-sm">
            © {currentYear} InDataStar Group. All rights reserved.
          </p>
          <p className="text-secondary-400 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;