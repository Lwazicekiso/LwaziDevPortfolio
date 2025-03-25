import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900 to-gray-900 -z-10"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 -z-5">
        <div className="absolute h-1 w-1 rounded-full bg-blue-400/30 animate-float top-[20%] left-[10%]" style={{ animationDelay: "0s" }}></div>
        <div className="absolute h-2 w-2 rounded-full bg-blue-400/20 animate-float top-[40%] left-[25%]" style={{ animationDelay: "1s" }}></div>
        <div className="absolute h-1 w-1 rounded-full bg-indigo-400/30 animate-float top-[65%] left-[70%]" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute h-2 w-2 rounded-full bg-indigo-400/20 animate-float top-[85%] left-[85%]" style={{ animationDelay: "1.5s" }}></div>
        <div className="absolute h-1 w-1 rounded-full bg-blue-400/30 animate-float top-[15%] left-[80%]" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl text-blue-400 font-medium mb-2">Hello, I'm</h2>
          <div className="h-24 md:h-24 w-full">
            <TypeAnimation
              sequence={[
                'Lwazi Cekiso',
                2000,
                'a Fullstack Developer',
                2000,
                'a UX Designer',
                2000,
                'a Software Engineer',
                2000,
                'a Tech Enthusiast',
                2000,
              ]}
              wrapper="h1"
              speed={50}
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500"
              repeat={Infinity}
              cursor={true}
            />
          </div>
          <div className="h-1 w-20 bg-blue-500 mb-6 rounded-full hidden md:block"></div>
          <p className="text-gray-400 max-w-xl mb-8 leading-relaxed">
            Honours student in Informatics with a strong background in full-stack development, system analysis, and data-driven decision-making. Passionate about leveraging technology to solve real-world problems, optimizing processes, and ensuring operational efficiency.
          </p>
          <div className="flex gap-4">
            <Button asChild className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all shadow-lg">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="outline" className="px-6 py-3 border border-gray-700 hover:border-blue-500 rounded-lg transition-all">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          
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
              href="/resume.pdf" 
              download
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <FaFileDownload size={24} />
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 p-1 shadow-lg shadow-blue-500/20">
            <img 
              src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80" 
              alt="Lwazi Cekiso" 
              className="rounded-full w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
