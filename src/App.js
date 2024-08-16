import React from 'react';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import { Element } from 'react-scroll';

function App() {
  return (
    <div >
      <Navbar />
      
      <div className="py-15  bg-gradient-to-r from-blue-100 to-purple-100">
        <Element name="banner">
          <Banner />
        </Element>
      </div>
      
      <div className="py-5 bg-gradient-to-r from-blue-100 to-purple-100">
        <Element name="about">
          <About />
        </Element>
      </div>
      
      <div className="py-5 bg-gradient-to-r from-blue-100 to-purple-100">
        <Element name="skills">
          <Skills />
        </Element>
      </div>
      
      <div className="py-5 bg-gradient-to-r from-blue-100 to-purple-100">
        <Element name="services">
          <Services />
        </Element>
      </div>
      
      <div className=" py-5  bg-gradient-to-r from-blue-100 to-purple-100">
        <Element name="projects">
          <Projects />
        </Element>
      </div>
      
      <div className="bg-gradient-to-r from-blue-100 to-purple-100">
        <Element name="contact">
          <Contact />
        </Element>
      </div>
    </div>
  );
}

export default App;
