import React from 'react';
import { Package, Download, Star, ExternalLink } from 'lucide-react';

const NPMPackages = () => {
  const packages = [
    {
      name: 'react-native-styled-FlatLists',
      description: 'A simple, animated React Native FlatList wrapper library offering plug-and-play animation effects for your lists. ',
      version: '0.1.2',
      downloads: '15.2k',
      stars: 234,
      npmUrl: 'https://www.npmjs.com/package/react-native-styled-flatlists',
      githubUrl: 'https://github.com/InDataStar/react-native-styled-flatlists#readme'
    },
    {
      name: 'React Native Styled Toggle Switches',
      description: 'A customizable, animated slide switch (toggle) component built with React Native and Reanimated v2.',
      version: '0.1.2',
      downloads: '8.7k',
      stars: 156,
      npmUrl: 'https://www.npmjs.com/package/react-native-styled-toggle-switches',
      githubUrl: 'https://github.com/InDataStar/react-native-styled-toggle-switches#readme'
    },
    {
      name: 'React Native Badges',
      description: 'BadgeStack is a customizable React Native component that allows you to stack multiple badges in any corner of a child view. It supports animation and styling options.',
      version: '0.1.0',
      downloads: '22.1k',
      stars: 412,
      npmUrl: 'https://www.npmjs.com/package/react-native-styled-badges',
      githubUrl: 'https://github.com/InDataStar/react-native-badges#readme'
    }
  ];

  return (
    <section id="npm-packages" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Package className="h-12 w-12 text-primary-600 mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900">
              NPM Packages
            </h2>
          </div>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Open-source packages I've created and maintain to help developers 
            build better applications faster and more efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className="card p-6 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="bg-primary-100 p-2 rounded-lg mr-3">
                    <Package className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-900 font-mono">
                      {pkg.name}
                    </h3>
                    <span className="text-sm text-secondary-500">v{pkg.version}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-secondary-600 mb-6">
                {pkg.description}
              </p>
              {/* 
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4 text-sm text-secondary-500">
                  <div className="flex items-center">
                    <Download className="h-4 w-4 mr-1" />
                    {pkg.downloads}/week
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    {pkg.stars}
                  </div>
                </div>
              </div>
               */}
              <div className="flex space-x-3">
                <a 
                  href={pkg.npmUrl}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium text-center transition-colors duration-200"
                >
                  View on NPM
                </a>
                <a 
                  href={pkg.githubUrl}
                  className="bg-secondary-100 hover:bg-secondary-200 text-secondary-700 p-2 rounded-lg transition-colors duration-200"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://www.npmjs.com/~lockstockcrawford" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View All Packages
          </a>
        </div>
      </div>
    </section>
  );
};

export default NPMPackages;