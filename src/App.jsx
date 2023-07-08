import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
  
  return (
      <div className='bg-gray-700'>
        <Navbar />
        <div className='flex flex-col'>
          <Home />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>
  )
}

export default App
