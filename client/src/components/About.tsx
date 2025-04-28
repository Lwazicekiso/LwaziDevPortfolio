import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
            About Me
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div 
            className="backdrop-blur-md bg-gray-800/50 border border-gray-700/50 rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
            With a passion for problem solving I’ve always been the sort of person who sees a manual process or a pile of data and thinks, “There’s got to be a way to automate this.” What started with building static web apps during my BA in Humanities (Informatics Major) has evolved into a full-blown passion for designing and shipping tools that make teams more efficient and decisions more data driven.

</p>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              <li>
                <strong>Architected &amp; Deployed</strong> a Student Administration System (React, PocketBase, SQL) that <strong>cut record-keeping time by 50%</strong>, driving every phase of the SDLC from UML/BRDs through to secure React Admin back-ends.
              </li>
              <li>
                <strong>Built</strong> a Python-based Network Reconnaissance Tool—integrating WHOIS lookups, DNS enumeration, Nmap scans, and JSON/.txt reporting—to <strong>automate critical information gathering</strong> for security assessments.
              </li>
              <li>
                <strong>Turned</strong> raw datasets into compelling visual stories in R (tidyverse/ggplot2), uncovering customer and Olympic Games trends that informed stakeholder strategy.
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              With hands-on expertise in <strong>C#</strong>, <strong>Python</strong>, <strong>JavaScript</strong>, <strong>SQL</strong>, <strong>R</strong>, and <strong>Git</strong>, 
              plus exposure to light penetration-testing labs, I thrive in fast-paced, collaborative environments that demand rapid prototyping, continuous learning, and robust problem-solving. 
              I’m excited to bring my toolkit and my drive to learn even more to a software engineering team where building impactful, efficient solutions is the daily norm.
            </p>
          </motion.div>

          <motion.div 
            className="backdrop-blur-md bg-gray-800/50 border border-gray-700/50 rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Experience & Education</h3>
            
            <div className="mb-6">
              <div className="flex items-start mb-2">
                <div className="bg-blue-500 rounded-full w-3 h-3 mt-1.5 mr-3"></div>
                <div>
                  <h4 className="font-semibold text-lg">Sanipippe Engineering Services</h4>
                  <p className="text-gray-400">General Assistant | Nov 2024 - Feb 2025</p>
                </div>
              </div>
              <p className="text-gray-300 pl-6">Assisted in risk mitigation, invoice processing, and contributed to project planning and cost control.</p>
            </div>
            
            <div className="mb-6">
              <div className="flex items-start mb-2">
                <div className="bg-blue-500 rounded-full w-3 h-3 mt-1.5 mr-3"></div>
                <div>
                  <h4 className="font-semibold text-lg">Bachelor of Informatics Honours</h4>
                  <p className="text-gray-400">Stellenbosch University | 2025 (In Progress)</p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-start mb-2">
                <div className="bg-blue-500 rounded-full w-3 h-3 mt-1.5 mr-3"></div>
                <div>
                  <h4 className="font-semibold text-lg">BA Humanities (Informatics Major)</h4>
                  <p className="text-gray-400">Stellenbosch University | 2022-2024</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
