// import React from 'react';
// import Navbar from './Components/Navbar';
// import Banner from './Components/Banner';
// import About from './Components/About';
// import Services from './Components/Services';
// import Contact from './Components/Contact';
// import Projects from './Components/Projects';
// import Skills from './Components/Skills';
// import { Element } from 'react-scroll';

// function App() {
//   return (
//     <div >
//       <Navbar />
      
//       <div className="py-15  bg-gradient-to-r from-blue-100 to-purple-100">
//         <Element name="banner">
//           <Banner />
//         </Element>
//       </div>
      
//       <div className="py-5 bg-gradient-to-r from-blue-100 to-purple-100">
//         <Element name="about">
//           <About />
//         </Element>
//       </div>
      
//       <div className="py-5 bg-gradient-to-r from-blue-100 to-purple-100">
//         <Element name="skills">
//           <Skills />
//         </Element>
//       </div>
      
//       <div className="py-5 bg-gradient-to-r from-blue-100 to-purple-100">
//         <Element name="services">
//           <Services />
//         </Element>
//       </div>
      
//       <div className=" py-5  bg-gradient-to-r from-blue-100 to-purple-100">
//         <Element name="projects">
//           <Projects />
//         </Element>
//       </div>
      
//       <div className="bg-gradient-to-r from-blue-100 to-purple-100">
//         <Element name="contact">
//           <Contact />
//         </Element>
//       </div>
//     </div>
//   );
// }

// export default App;





// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './Components/Navbar';
// import Banner from './Components/Banner';
// import About from './Components/About';
// import Services from './Components/Services';
// import Contact from './Components/Contact';
// import Projects from './Components/Projects';
// import Skills from './Components/Skills';
// import { Element } from 'react-scroll';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />

//         <Routes>
//           <Route
//             path="/"
//             element={
//               <div className="py-15 bg-gradient-to-r from-blue-100 to-purple-100">
//                 <Element name="banner">
//                   <Banner />
//                 </Element>
//               </div>
//             }
//           />
//           <Route
//             path="/about"
//             element={
//               <div className="py-5 bg-gradient-to-r from-blue-100 to-purple-100">
//                 <Element name="about">
//                   <About />
//                 </Element>
//               </div>
//             }
//           />
//           <Route
//             path="/skills"
//             element={
//               <div className="py-5 bg-gradient-to-r from-blue-100 to-purple-100">
//                 <Element name="skills">
//                   <Skills />
//                 </Element>
//               </div>
//             }
//           />
//           <Route
//             path="/services"
//             element={
//               <div className="py-5 bg-gradient-to-r from-blue-100 to-purple-100">
//                 <Element name="services">
//                   <Services />
//                 </Element>
//               </div>
//             }
//           />
//           <Route
//             path="/projects"
//             element={
//               <div className="py-5 bg-gradient-to-r from-blue-100 to-purple-100">
//                 <Element name="projects">
//                   <Projects />
//                 </Element>
//               </div>
//             }
//           />
//           <Route
//             path="/contact"
//             element={
//               <div className="py-5 bg-gradient-to-r from-blue-100 to-purple-100">
//                 <Element name="contact">
//                   <Contact />
//                 </Element>
//               </div>
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;





// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './Components/Navbar';
// import Banner from './Components/Banner';
// import About from './Components/About';
// import Services from './Components/Services';
// import Contact from './Components/Contact';
// import Projects from './Components/Projects';
// import Skills from './Components/Skills';
// import { Element, scroller } from 'react-scroll';

// function App() {
//   const scrollToSection = (section) => {
//     scroller.scrollTo(section, {
//       duration: 500,
//       smooth: 'easeInOutQuart',
//     });
//   };

//   return (
//     <Router>
//       <div>
//         <Navbar scrollToSection={scrollToSection} />

//         <Routes>
//           <Route
//             path="/"
//             element={
//               <div>
//                 <Element name="banner">
//                   <Banner />
//                 </Element>
//                 <Element name="about">
//                   <About />
//                 </Element>
//                 <Element name="skills">
//                   <Skills />
//                 </Element>
//                 <Element name="services">
//                   <Services />
//                 </Element>
//                 <Element name="projects">
//                   <Projects />
//                 </Element>
//                 <Element name="contact">
//                   <Contact />
//                 </Element>
//               </div>
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;



import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import { Element, scroller } from 'react-scroll';

function App() {
  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 500,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <Router>
      <div>
        <Navbar scrollToSection={scrollToSection} />

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Element name="banner">
                  <Banner />
                </Element>
                <Element name="about">
                  <About />
                </Element>
                <Element name="skills">
                  <Skills />
                </Element>
                <Element name="services">
                  <Services />
                </Element>
                <Element name="projects">
                  <Projects />
                </Element>
                <Element name="contact">
                  <Contact />
                </Element>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
