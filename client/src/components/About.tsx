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
            <h3 className="text-2xl font-bold mb-6">Profile & Competencies</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              An Informatics Honours student at Stellenbosch University, with a background in full‑stack development and Cyber Security. My interdisciplinary skill set enables me to design and deliver secure, scalable solutions while ensuring robust controls and compliance.
            </p>

            <h4 className="text-xl font-semibold text-blue-400 mb-4">Core Competencies</h4>
            <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
              <li>
                <strong>Software Development:</strong> Proficient in C#, ASP .NET Core, React, JavaScript and SQL. Experienced in full SDLC from UML and wireframing to optimization.
              </li>
              <li>
                <strong>Cybersecurity:</strong> Skilled in threat modeling, detection, and ethical info gathering using Kali Linux, Nmap, Netcat, and related tooling.
              </li>
              <li>
                <strong>Data Analysis & Visualization:</strong> Python (Pandas, NumPy) and R (tidyverse, ggplot2) for extracting insights and communicating results.
              </li>
              <li>
                <strong>Analytical Problem‑Solving:</strong> Able to evaluate trade-offs and implement pragmatic solutions under tight deadlines.
              </li>
              <li>
                <strong>Collaboration & Communication:</strong> Experienced in bridging technical and non-technical teams and fostering continuous learning.
              </li>
            </ul>

            <h4 className="text-xl font-semibold text-blue-400 mb-4">Notable Projects</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>Student Administration System:</strong> Architected a full‑stack React + PocketBase platform for efficient application processing and record management.
              </li>
              <li>
                <strong>Network Reconnaissance Tool:</strong> Built a Python toolkit integrating WHOIS, DNS enumeration, Nmap, and CVE lookups to aid pentesting.
              </li>
              <li>
                <strong>Network Security Simulation:</strong> Created a simulated enterprise network (GNS3) with pfSense/OPNsense firewall and tested it using tools like Ettercap, hping3, and Wireshark.
              </li>
            </ul>
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
