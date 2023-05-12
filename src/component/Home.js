import React from 'react';
import About from './About';
import Contact from './Contact';
import Skills from './Skills';
import Projects from './Projects';
function Home() {
  return (
    <div>
        <About />
        <Projects />
        <Skills />
        <Contact />
    </div>
  )
}

export default Home