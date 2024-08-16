// import React, { useState } from 'react';
// import { Link } from 'react-scroll';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <div
//       className="fixed top-0 left-0 w-full h-16 sm:h-20 flex items-center justify-between px-4 sm:px-8 py-2 bg-gradient-to-r from-blue-100 to-purple-100 border-b shadow-lg z-50"
//     >
//       {/* Logo */}
//       <div className="flex items-center">
//         <h1 className="text-3xl font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-700">
//           Dipanshu Raj
//         </h1>
//       </div>

//       {/* Navigation Links for Desktop */}
//       <div className="hidden sm:flex space-x-8">
//         <Link
//           to="banner"
//           smooth={true}
//           duration={500}
//           className="text-lg font-medium tracking-wide text-gray-800 hover:text-red-500 hover:underline hover:scale-110 transform transition-transform duration-200 ease-out"
//         >
//           Home
//         </Link>
//         <Link
//           to="about"
//           smooth={true}
//           duration={500}
//           className="text-lg font-medium tracking-wide text-gray-800 hover:text-red-500 hover:underline hover:scale-110 transform transition-transform duration-200 ease-out"
//         >
//           About
//         </Link>
//         <Link
//           to="skills"
//           smooth={true}
//           duration={500}
//           className="text-lg font-medium tracking-wide text-gray-800 hover:text-red-500 hover:underline hover:scale-110 transform transition-transform duration-200 ease-out"
//         >
//           Skills
//         </Link>
//         <Link
//           to="services"
//           smooth={true}
//           duration={500}
//           className="text-lg font-medium tracking-wide text-gray-800 hover:text-red-500 hover:underline hover:scale-110 transform transition-transform duration-200 ease-out"
//         >
//           Services
//         </Link>
//         <Link
//           to="projects"
//           smooth={true}
//           duration={500}
//           className="text-lg font-medium tracking-wide text-gray-800 hover:text-red-500 hover:underline hover:scale-110 transform transition-transform duration-200 ease-out"
//         >
//           Projects
//         </Link>
//         <Link
//           to="contact"
//           smooth={true}
//           duration={500}
//           className="text-lg font-medium tracking-wide text-gray-800 hover:text-red-500 hover:underline hover:scale-110 transform transition-transform duration-200 ease-out"
//         >
//           Contact
//         </Link>
//       </div>

//       {/* Resume Button */}
//       <div className="hidden sm:flex items-center">
//         <a
//           href="https://drive.google.com/file/d/11Mq-rkA3Cvv3DhvlZ9KRXRxgUVQHpLtR/view?usp=drive_link"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <button className="px-5 py-2 rounded-full bg-red-500 text-white font-semibold text-lg tracking-wide shadow-md hover:bg-red-400 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300">
//             Resume
//           </button>
//         </a>
//       </div>

//       {/* Mobile Menu Button */}
//       <div className="sm:hidden flex items-center">
//         <button
//           onClick={toggleMenu}
//           className="text-red-500 hover:bg-gray-200 p-2 rounded-lg focus:outline-none transition-all duration-200"
//         >
//           <svg
//             className="w-7 h-7"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16m-7 6h7"
//             ></path>
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`fixed inset-0 bg-white z-40 transition-transform transform ${
//           isOpen ? 'translate-x-0' : 'translate-x-full'
//         } sm:hidden`}
//       >
//         <div className="flex flex-col items-center py-8 space-y-6">
//           <button onClick={toggleMenu} className="self-end p-4">
//             <svg
//               className="w-7 h-7"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               ></path>
//             </svg>
//           </button>
//           <Link
//             to="banner"
//             smooth={true}
//             duration={500}
//             className="py-2 text-xl font-bold text-gray-800 hover:text-red-500 transition-colors duration-200"
//             onClick={toggleMenu}
//           >
//             Home
//           </Link>
//           <Link
//             to="about"
//             smooth={true}
//             duration={500}
//             className="py-2 text-xl font-bold text-gray-800 hover:text-red-500 transition-colors duration-200"
//             onClick={toggleMenu}
//           >
//             About
//           </Link>
//           <Link
//             to="skills"
//             smooth={true}
//             duration={500}
//             className="py-2 text-xl font-bold text-gray-800 hover:text-red-500 transition-colors duration-200"
//             onClick={toggleMenu}
//           >
//             Skills
//           </Link>
//           <Link
//             to="services"
//             smooth={true}
//             duration={500}
//             className="py-2 text-xl font-bold text-gray-800 hover:text-red-500 transition-colors duration-200"
//             onClick={toggleMenu}
//           >
//             Services
//           </Link>
//           <Link
//             to="projects"
//             smooth={true}
//             duration={500}
//             className="py-2 text-xl font-bold text-gray-800 hover:text-red-500 transition-colors duration-200"
//             onClick={toggleMenu}
//           >
//             Projects
//           </Link>
//           <Link
//             to="contact"
//             smooth={true}
//             duration={500}
//             className="py-2 text-xl font-semibold text-gray-800 hover:text-red-500 transition-colors duration-200"
//             onClick={toggleMenu}
//           >
//             Contact
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;









import React, { useState } from 'react';
//import { Link } from 'react-scroll';

function Navbar({ scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div
      className="fixed top-0 left-0 w-full h-16 sm:h-20 flex items-center justify-between px-4 sm:px-8 py-2 bg-gradient-to-r from-blue-100 to-purple-100 border-b shadow-lg z-50"
    >
      <div className="flex items-center">
        <h1 className="text-3xl font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-700">
          Dipanshu Raj
        </h1>
      </div>

      <div className="hidden sm:flex space-x-8">
        <button
          onClick={() => scrollToSection('banner')}
          className="text-lg font-medium tracking-wide text-gray-800 hover:text-red-500"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection('about')}
          className="text-lg font-medium tracking-wide text-gray-800 hover:text-red-500"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection('skills')}
          className="text-lg font-medium tracking-wide text-gray-800 hover:text-red-500"
        >
          Skills
        </button>
        <button
          onClick={() => scrollToSection('services')}
          className="text-lg font-medium tracking-wide text-gray-800 hover:text-red-500"
        >
          Services
        </button>
        <button
          onClick={() => scrollToSection('projects')}
          className="text-lg font-medium tracking-wide text-gray-800 hover:text-red-500"
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="text-lg font-medium tracking-wide text-gray-800 hover:text-red-500"
        >
          Contact
        </button>
      </div>

      <div className="hidden sm:flex items-center">
        <a
          href="https://drive.google.com/file/d/11Mq-rkA3Cvv3DhvlZ9KRXRxgUVQHpLtR/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-5 py-2 rounded-full bg-red-500 text-white font-semibold text-lg tracking-wide shadow-md hover:bg-red-400 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300">
            Resume
          </button>
        </a>
      </div>

      <div className="sm:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-red-500 hover:bg-gray-200 p-2 rounded-lg focus:outline-none transition-all duration-200"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-white z-40 transition-transform transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } sm:hidden`}
      >
        <div className="flex flex-col items-center py-8 space-y-6">
          <button
            onClick={() => {
              scrollToSection('banner');
              toggleMenu();
            }}
            className="py-2 text-xl font-bold text-gray-800 hover:text-red-500"
          >
            Home
          </button>
          <button
            onClick={() => {
              scrollToSection('about');
              toggleMenu();
            }}
            className="py-2 text-xl font-bold text-gray-800 hover:text-red-500"
          >
            About
          </button>
          <button
            onClick={() => {
              scrollToSection('skills');
              toggleMenu();
            }}
            className="py-2 text-xl font-bold text-gray-800 hover:text-red-500"
          >
            Skills
          </button>
          <button
            onClick={() => {
              scrollToSection('services');
              toggleMenu();
            }}
            className="py-2 text-xl font-bold text-gray-800 hover:text-red-500"
          >
            Services
          </button>
          <button
            onClick={() => {
              scrollToSection('projects');
              toggleMenu();
            }}
            className="py-2 text-xl font-bold text-gray-800 hover:text-red-500"
          >
            Projects
          </button>
          <button
            onClick={() => {
              scrollToSection('contact');
              toggleMenu();
            }}
            className="py-2 text-xl font-bold text-gray-800 hover:text-red-500"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
