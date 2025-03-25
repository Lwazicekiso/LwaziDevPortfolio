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
    title: "Software Development",
    skills: ["Full-stack development", "System analysis", "UML diagrams", "UI/UX design", "SDLC"]
  },
  {
    title: "Data Analysis",
    skills: ["R", "Excel", "tidyverse", "ggplot2", "Data visualization"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Microsoft Office", "PocketBase", "Figma", "API Integration", "Git/GitHub"]
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

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Skills & Technologies</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, i) => (
            <motion.div 
              key={i}
              className="backdrop-blur-md bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <h3 className="text-xl font-bold mb-4 text-blue-400">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, j) => (
                  <li key={j} className="flex items-center">
                    <span className="bg-blue-500/20 text-blue-300 rounded-md px-2 py-1 text-sm mr-2">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Technologies I Work With</h3>
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
              <div key={i} className="flex items-center justify-center h-16 backdrop-blur-md bg-gray-800/50 border border-gray-700/50 rounded-lg">
                <span className="font-medium text-lg">{tech}</span>
              </div>
            ))}
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
