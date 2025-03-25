import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Student Administration System",
    description: "A system to manage student applications and records, enhancing administrative efficiency.",
    image: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tags: ["React", "SQL", "PocketBase"],
    link: "#"
  },
  {
    title: "Exploratory Data Analysis",
    description: "Data visualization and insights using R, analyzing customer purchase trends and Olympic data.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tags: ["R", "ggplot2", "tidyverse"],
    link: "https://github.com/Lwazicekiso/Exploraratory-Data-Analysis"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React and Tailwind CSS, featuring animations and responsive design.",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Featured Projects</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills and expertise in full-stack development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              className="backdrop-blur-md bg-gray-800/50 border border-gray-700/50 rounded-xl overflow-hidden shadow-lg group transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{ y: -8 }}
            >
              <div className="h-48 bg-gradient-to-br from-blue-700 to-indigo-900 relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-xl font-bold">{project.title}</h3>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <div className="flex items-center justify-between">
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Details
                  </a>
                  <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                  </Button>
                </div>
              </CardContent>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
