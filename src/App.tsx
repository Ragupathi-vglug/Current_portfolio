import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
        <footer className="bg-gray-900 dark:bg-black text-white py-8">
          <div className="container mx-auto px-6 text-center">
            <p className="text-gray-400">
              © 2024 Ragupathi J. All rights reserved. Built with React & TypeScript.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;