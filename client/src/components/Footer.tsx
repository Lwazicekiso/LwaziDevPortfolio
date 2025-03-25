import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 py-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-6">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Lwazi Cekiso</h2>
          <p className="text-gray-400 mt-2">Full Stack Developer</p>
        </div>
        
        <div className="flex justify-center gap-4 mb-6">
          <a href="https://www.linkedin.com/in/lwazi-cekiso" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="LinkedIn">
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a href="https://github.com/Lwazicekiso" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="GitHub">
            <FaGithub className="h-6 w-6" />
          </a>
          <a href="mailto:lwazicekiso112@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="Email">
            <FaEnvelope className="h-6 w-6" />
          </a>
        </div>
        
        <div className="text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Lwazi Cekiso. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
