

import React from 'react';
import bannerImage from "../Assets/DP.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Banner() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between h-screen p-4 md:p-8 bg-gradient-to-r from-blue-100 to-purple-100">
      {/* Text Section */}
      <div
        className="w-full md:w-1/2 flex flex-col items-start justify-center p-4 md:p-8 bg-gradient-to-r from-blue-100 to-purple-200 relative transition-transform duration-500 hover:scale-105 hover:bg-opacity-95"
        style={{
          clipPath: 'polygon(0 0, 90% 0, 100% 100%, 0% 100%)',
          border: '3px solid #ef4444',
          borderRadius: '15px',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        }}
      >
        <div className="text-left">
          <h5 className="text-2xl md:text-4xl font-semibold text-red-600 font-serif">Solutions for You</h5>
          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold text-gray-900 font-sans tracking-wide leading-tight">Full Stack Developer at Your Service</h1>
          <p className="mt-4 text-gray-700 leading-relaxed text-sm md:text-base font-light">
            As an experienced IT professional, I excel in developing scalable projects and delivering cutting-edge solutions. Let's build something extraordinary together.
          </p>
        </div>
        <div className="mt-6 flex space-x-6 flex-wrap justify-center md:justify-start">
          <a href="https://www.instagram.com/dipanshu_30cr?igsh=M2pxdTAyOXkxc3dn" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="text-2xl md:text-3xl text-gray-800 hover:text-red-500 transition-colors duration-200" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100015708817180" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="text-2xl md:text-3xl text-gray-800 hover:text-red-500 transition-colors duration-200" />
          </a>
          <a href="https://www.linkedin.com/in/dipanshu-r-6201041b4/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl md:text-3xl text-gray-800 hover:text-red-500 transition-colors duration-200" />
          </a>
          <a href="https://github.com/dipanshu30cr" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="text-2xl md:text-3xl text-gray-800 hover:text-red-500 transition-colors duration-200" />
          </a>
          <a href="https://wa.me/9536628738" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} className="text-2xl md:text-3xl text-gray-800 hover:text-red-500 transition-colors duration-200" />
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/3 flex items-center justify-center md:justify-start h-1/3  ">
        <img
          className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-red-500 transform transition-transform duration-500 hover:scale-110 hover:brightness-90 hover:rotate-3  "
          src={bannerImage}
          alt="Banner"
        />
      </div>
    </div>
  );
}

export default Banner;
