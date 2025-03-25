import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaEnvelope, FaPhone, FaLink, FaLinkedin, FaGithub, FaFileDownload, FaPaperPlane } from "react-icons/fa";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      type: "spring",
      stiffness: 100
    }
  }
};

const Contact = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <section id="contact" className="py-20 px-4 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/10 via-gray-950 to-gray-950 -z-10"></div>
      
      {/* Animated particles */}
      <div className="absolute h-2 w-2 rounded-full bg-blue-400/30 animate-float bottom-[10%] right-[20%]" style={{ animationDelay: "0s" }}></div>
      <div className="absolute h-1 w-1 rounded-full bg-blue-400/20 animate-float bottom-[30%] right-[10%]" style={{ animationDelay: "1s" }}></div>
      <div className="absolute h-1 w-1 rounded-full bg-indigo-400/30 animate-float top-[15%] right-[30%]" style={{ animationDelay: "0.5s" }}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Get In Touch</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-6 rounded-full border-glow"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out if you want to collaborate on a project, have a job opportunity, or just want to say hello!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            className="backdrop-blur-md bg-gray-800/50 border border-gray-700/50 rounded-xl p-8 shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div className="flex items-start" variants={itemVariants}>
                <motion.div 
                  className="bg-blue-500/20 p-3 rounded-lg mr-4"
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "rgba(59, 130, 246, 0.3)" 
                  }}
                >
                  <FaEnvelope className="h-6 w-6 text-blue-400" />
                </motion.div>
                <div>
                  <h4 className="font-medium text-lg">Email</h4>
                  <a 
                    href="mailto:lwazicekiso112@gmail.com" 
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    lwazicekiso112@gmail.com
                  </a>
                </div>
              </motion.div>
              
              <motion.div className="flex items-start" variants={itemVariants}>
                <motion.div 
                  className="bg-blue-500/20 p-3 rounded-lg mr-4"
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "rgba(59, 130, 246, 0.3)" 
                  }}
                >
                  <FaPhone className="h-6 w-6 text-blue-400" />
                </motion.div>
                <div>
                  <h4 className="font-medium text-lg">Phone</h4>
                  <a 
                    href="tel:+27661221850" 
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    +27 66 122 1850
                  </a>
                </div>
              </motion.div>
              
              <motion.div className="flex items-start" variants={itemVariants}>
                <motion.div 
                  className="bg-blue-500/20 p-3 rounded-lg mr-4"
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "rgba(59, 130, 246, 0.3)" 
                  }}
                >
                  <FaLink className="h-6 w-6 text-blue-400" />
                </motion.div>
                <div>
                  <h4 className="font-medium text-lg">Website</h4>
                  <a 
                    href="https://shorturl.at/0YNvT" 
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    https://shorturl.at/0YNvT
                  </a>
                </div>
              </motion.div>
            </motion.div>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">Connect With Me</h3>
            <div className="flex gap-4">
              <motion.a 
                href="https://www.linkedin.com/in/lwazi-cekiso" 
                className="bg-blue-500/20 p-3 rounded-lg text-blue-400 hover:bg-blue-500/30 transition-all"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-6 w-6" />
              </motion.a>
              <motion.a 
                href="https://github.com/Lwazicekiso" 
                className="bg-blue-500/20 p-3 rounded-lg text-blue-400 hover:bg-blue-500/30 transition-all"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub"
              >
                <FaGithub className="h-6 w-6" />
              </motion.a>
              <motion.a 
                href="mailto:lwazicekiso112@gmail.com" 
                className="bg-blue-500/20 p-3 rounded-lg text-blue-400 hover:bg-blue-500/30 transition-all"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                aria-label="Email"
              >
                <FaEnvelope className="h-6 w-6" />
              </motion.a>
              <motion.a 
                href="/resume.pdf" 
                download
                className="bg-blue-500/20 p-3 rounded-lg text-blue-400 hover:bg-blue-500/30 transition-all"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                aria-label="Download Resume"
              >
                <FaFileDownload className="h-6 w-6" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            className="backdrop-blur-md bg-gray-800/50 border border-gray-700/50 rounded-xl p-8 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <motion.form 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <Input 
                  type="text" 
                  id="name" 
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
                  placeholder="Your Name"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <Input 
                  type="email" 
                  id="email" 
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
                  placeholder="your.email@example.com"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                <Input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
                  placeholder="What is this about?"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <Textarea 
                  id="message" 
                  rows={4} 
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
                  placeholder="Your message here..."
                />
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                onHoverStart={() => setIsHovering(true)}
                onHoverEnd={() => setIsHovering(false)}
              >
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <motion.div
                    animate={isHovering ? { x: [0, 5, 0] } : {}}
                    transition={{ repeat: Infinity, duration: 1 }}
                  >
                    <FaPaperPlane />
                  </motion.div>
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
