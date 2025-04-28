import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Background overlay (non-interactive) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900 to-gray-900 pointer-events-none -z-10"></div>

      {/* Animated particles (also non-interactive) */}
      <div className="absolute inset-0 pointer-events-none -z-20">
        <div className="absolute h-1 w-1 rounded-full bg-blue-400/30 animate-float top-[20%] left-[10%]" style={{ animationDelay: "0s" }} />
        <div className="absolute h-2 w-2 rounded-full bg-blue-400/20 animate-float top-[40%] left-[25%]" style={{ animationDelay: "1s" }} />
        <div className="absolute h-1 w-1 rounded-full bg-indigo-400/30 animate-float top-[65%] left-[70%]" style={{ animationDelay: "0.5s" }} />
        <div className="absolute h-2 w-2 rounded-full bg-indigo-400/20 animate-float top-[85%] left-[85%]" style={{ animationDelay: "1.5s" }} />
        <div className="absolute h-1 w-1 rounded-full bg-blue-400/30 animate-float top-[15%] left-[80%]" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content wrapper */}
      <motion.div
        className="relative z-10 max-w-6xl w-full px-4 flex flex-col md:flex-row items-center gap-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Text Section */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl text-blue-400 font-medium mb-2">Hello, I&apos;m <span className="hidden">a</span></h2>
          <div className="h-24 w-full">
            <TypeAnimation
              sequence={[
                "Lwazi Cekiso", 2000,
                "A Tech Enthusiast", 2000,
                "A Fullstack Developer", 2000,
                "An Aspiring SAP Technical Consultant ", 2000,
              ]}
              wrapper="h1"
              speed={50}
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500"
              repeat={Infinity}
              cursor
            />
          </div>
          <div className="h-1 w-20 bg-blue-500 mb-6 rounded-full hidden md:block" />
          <p className="text-gray-300 max-w-xl mb-8 leading-relaxed">
            Honours student in Informatics with a strong background in full-stack development, system analysis, and data-driven decision-making. Passionate about leveraging technology to solve real-world problems, optimizing processes, and ensuring operational efficiency.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 transition-all duration-300">
              <a href="#projects" className="block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-center transition-all shadow-lg">
                View Projects
              </a>
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto">
            <a href="#contact" className="bg-gray-800 hover:bg-blue-700 transition-all duration-300">
            Contact Me
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-8">
            <motion.a
              href="https://www.linkedin.com/in/lwazi-cekiso"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              href="https://github.com/Lwazicekiso"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              href="mailto:lwazicekiso112@gmail.com"
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <FaEnvelope size={24} />
            </motion.a>
            <motion.a
              href="/InternshipCV.pdf"
              download
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <FaFileDownload size={24} />
            </motion.a>
          </div>
        </div>

        {/* Image Section */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 p-1 shadow-lg shadow-blue-500/20">
            <img
              src="/lwazi-profile.jpg"
              alt="Lwazi Cekiso"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
