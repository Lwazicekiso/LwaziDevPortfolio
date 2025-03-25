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
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">About Me</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="backdrop-blur-md bg-gray-800/50 border border-gray-700/50 rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              I thrive in dynamic environments that promote analytical thinking, technical expertise, and continuous learning. Eager to contribute to challenging projects where I can apply my skills and expand my knowledge in IT systems and infrastructure.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Currently pursuing a Bachelor of Informatics Honours at Stellenbosch University, building on my BA Humanities with an Informatics Major. My journey combines technological expertise with a strong foundation in critical thinking and communication skills.
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
