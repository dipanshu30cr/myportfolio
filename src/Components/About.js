
// import React, { useState } from 'react';
// import logos from '../Assets/logos.jpg'; // Adjust the path if necessary

// function About() {
//   const [isReadMore, setIsReadMore] = useState(false);

//   const handleReadMore = () => {
//     setIsReadMore(!isReadMore);
//   };

//   const initialText = "I am a dedicated professional with a passion for technology and innovation. Over the years, I have gained valuable experience in various aspects of software development, including frontend and backend technologies. My journey has been driven by a continuous desire to learn and grow, taking on challenges that push my limits and contribute meaningfully to projects.";
  
//   const additionalText = "Throughout my career, I have worked on a wide range of projects, from small-scale applications to large enterprise solutions. I believe in the importance of collaboration and teamwork, and I am always eager to share knowledge and support my colleagues. My goal is to create impactful solutions that solve real-world problems and improve user experiences. I am also committed to staying up-to-date with the latest industry trends and technologies to ensure that my skills remain relevant and cutting-edge. In my previous roles, I have successfully led and contributed to several projects.";
  
//   return (
//     <div className="flex flex-col min-h-screen p-4 md:p-8 bg-gradient-to-r from-blue-100 to-purple-100">
//       {/* Heading Section */}
//       <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 text-center mx-auto relative z-10">
//         About Me
//       </h1>

//       {/* Main Content Section */}
//       <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
//         {/* Image Section */}
//         <div className="w-full md:w-1/3 flex items-center justify-center">
//           <img
//             className="w-48 h-48 md:w-64 md:h-64 max-w-full rounded-full border-4 border-red-500 shadow-lg"
//             src={logos}
//             alt="Logos"
//           />
//         </div>

//         {/* Text Section */}
//         <div className="w-full md:w-2/3 flex flex-col justify-center items-center md:items-start">
//           <div className="text-center md:text-left">
//             <p className="text-gray-800 leading-relaxed max-w-md mx-auto mb-4 text-base md:text-lg font-light">
//               {isReadMore ? initialText + ' ' + additionalText : initialText}
//             </p>
//             <button
//               onClick={handleReadMore}
//               className="py-2 px-4 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors"
//             >
//               {isReadMore ? 'Read Less' : 'Read More'}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;


import React, { useState } from 'react';
import logos from '../Assets/logos.jpg'; // Adjust the path if necessary

function About() {
  const [isReadMore, setIsReadMore] = useState(false);

  const handleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const initialText = "I am a dedicated professional with a passion for technology and innovation. Over the years, I have gained valuable experience in various aspects of software development, including frontend and backend technologies. My journey has been driven by a continuous desire to learn and grow, taking on challenges that push my limits and contribute meaningfully to projects.";
  
  const additionalText = "Throughout my career, I have worked on a wide range of projects, from small-scale applications to large enterprise solutions. I believe in the importance of collaboration and teamwork, and I am always eager to share knowledge and support my colleagues. My goal is to create impactful solutions that solve real-world problems and improve user experiences. I am also committed to staying up-to-date with the latest industry trends and technologies to ensure that my skills remain relevant and cutting-edge. In my previous roles, I have successfully led and contributed to several projects.";
  
  return (
    <div className="flex flex-col min-h-screen p-4 md:p-8 bg-gradient-to-r from-blue-100 to-purple-100">
      {/* Heading Section */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 text-center relative z-10">
        About Me
      </h1>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Image Section */}
        <div className="w-full md:w-1/3 flex items-center justify-center">
          <img
            className="w-48 h-48 md:w-64 md:h-64 max-w-full rounded-full border-4 border-red-500 shadow-lg transform transition-transform duration-500 hover:scale-105"
            src={logos}
            alt="Logos"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-2/3 flex flex-col justify-center items-center md:items-start">
          <div className="text-center md:text-left">
            <p className="text-gray-800 leading-relaxed max-w-md mx-auto mb-4 text-base md:text-lg font-light">
              {isReadMore ? initialText + ' ' + additionalText : initialText}
            </p>
            <button
              onClick={handleReadMore}
              className="py-2 px-4 bg-red-500 text-white text-sm rounded-full hover:bg-red-600 transition-transform transform hover:scale-105"
            >
              {isReadMore ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
