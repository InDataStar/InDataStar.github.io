import React from 'react';
import { Smartphone, Apple, PlayCircle, Star } from 'lucide-react';

const MobileWork = () => {
  const mobileApps = [
    {
      name: 'Mobile App 1',
      description: 'A productivity app that helps users manage their daily tasks with intuitive gestures and smart notifications.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      platform: 'iOS & Android',
      rating: 4.8,
      downloads: '50k+',
      technologies: ['React Native', 'Firebase', 'Redux'],
      appStoreUrl: '#',
      playStoreUrl: '#'
    },
    {
      name: 'Mobile App 2',
      description: 'Social networking platform focused on connecting local communities with real-time chat and event planning.',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      platform: 'iOS & Android',
      rating: 4.6,
      downloads: '25k+',
      technologies: ['Flutter', 'Node.js', 'MongoDB'],
      appStoreUrl: '#',
      playStoreUrl: '#'
    },
    {
      name: 'Mobile App 3',
      description: 'E-commerce mobile app with AR try-on features, personalized recommendations, and seamless checkout.',
      image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      platform: 'iOS & Android',
      rating: 4.9,
      downloads: '100k+',
      technologies: ['React Native', 'ARKit', 'Stripe'],
      appStoreUrl: '#',
      playStoreUrl: '#'
    }
  ];

  return (
    <section id="mobile-work" className="section-padding bg-secondary-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Smartphone className="h-12 w-12 text-primary-600 mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900">
              Mobile Applications
            </h2>
          </div>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Native and cross-platform mobile applications that deliver exceptional 
            user experiences across iOS and Android platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {mobileApps.map((app, index) => (
            <div 
              key={index} 
              className="card overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={app.image} 
                  alt={app.name}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-secondary-700">{app.platform}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {app.name}
                </h3>
                <p className="text-secondary-600 mb-4">
                  {app.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-secondary-500">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-500" />
                      {app.rating}
                    </div>
                    <div>{app.downloads} downloads</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {app.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <a 
                    href={app.appStoreUrl}
                    className="flex-1 bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-medium text-center transition-colors duration-200 flex items-center justify-center"
                  >
                    <Apple className="h-4 w-4 mr-2" />
                    App Store
                  </a>
                  <a 
                    href={app.playStoreUrl}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium text-center transition-colors duration-200 flex items-center justify-center"
                  >
                    <PlayCircle className="h-4 w-4 mr-2" />
                    Play Store
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileWork;