import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import NPMPackages from './components/NPMPackages';
import MobileWork from './components/MobileWork';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-white">
      <Header />
      <main>
        <Hero />
        <About />
        <NPMPackages />

      </main>
      <Footer />
    </div>
  );
}

         //     <MobileWork />
        // <Contact /> 
        // <Projects />   
export default App;