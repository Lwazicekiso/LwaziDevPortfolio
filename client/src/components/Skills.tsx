import React from "react";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const skillCategories = [
  {
    title: "Programming",
    skills: ["C#", "ASP.NET", "React", "Python", "SQL", "R"]
  },
  {
    title: "Competencies",
    skills: ["Contionous Development", "System analysis", "UML diagrams", "UI/UX design", "SDLC"]
  },
  {
    title: "Data Analysis",
    skills: ["R", "Excel", "tidyverse", "ggplot2", "Data visualization"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Microsoft Office","Linux","Figma", "API Integration", "Git/GitHub", "Visual Paradigm"]
  }
];

const technologies = ["React", "C#", "ASP.NET", "SQL", "Python", "R"];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

// Container variants for staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Item variants for staggered animation
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-900/50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-40 right-20 w-64 h-64 rounded-full bg-indigo-500/5 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Skills & Technologies</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-6 rounded-full border-glow"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, i) => (
            <motion.div 
              key={i}
              className="backdrop-blur-md bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 shadow-lg hover:border-blue-500/30 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)" }}
            >
              <h3 className="text-xl font-bold mb-4 text-blue-400">{category.title}</h3>
              <motion.ul 
                className="space-y-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {category.skills.map((skill, j) => (
                  <motion.li 
                    key={j} 
                    className="flex items-center"
                    variants={itemVariants}
                    transition={{ delay: 0.1 * j }}
                  >
                    <motion.span 
                      className="bg-blue-500/20 text-blue-300 rounded-md px-2 py-1 text-sm mr-2"
                      whileHover={{ 
                        backgroundColor: "rgba(59, 130, 246, 0.3)", 
                        color: "#bfdbfe",
                        scale: 1.05
                      }}
                    >
                      {skill}
                    </motion.span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="py-8 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Technologies I Work With</h3>
          
          {/* Subtle animated hints to indicate carousel interaction */}
          <motion.div 
            className="absolute -left-8 top-1/2 transform -translate-y-1/2 text-blue-400/40 hidden md:block"
            animate={{ x: [-5, 5, -5], opacity: [0.4, 0.8, 0.4] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </motion.div>
          <motion.div 
            className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-blue-400/40 hidden md:block"
            animate={{ x: [5, -5, 5], opacity: [0.4, 0.8, 0.4] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </motion.div>
          
          <Carousel 
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={3000}
            keyBoardControl
            customTransition="transform 500ms ease-in-out"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            itemClass="carousel-item px-2"
          >
            {technologies.map((tech, i) => (
              <motion.div 
                key={i} 
                className="flex items-center justify-center h-16 backdrop-blur-md bg-gray-800/50 border border-gray-700/50 rounded-lg"
                whileHover={{ 
                  scale: 1.1, 
                  borderColor: "rgba(59, 130, 246, 0.5)",
                  boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)"
                }}
              >
                <span className="font-medium text-lg">{tech}</span>
              </motion.div>
            ))}
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
