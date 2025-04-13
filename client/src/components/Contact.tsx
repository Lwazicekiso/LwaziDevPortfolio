import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaEnvelope, FaPhone, FaLink, FaLinkedin, FaGithub, FaFileDownload, FaPaperPlane } from "react-icons/fa";
import emailjs from "emailjs-com";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
};

const Contact = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;
    const formData = new FormData(form.current);
    formData.append("to_email", "lwazicekiso112@gmail.com");

   
  emailjs
  .sendForm(
    "service_tr69zr8",        
    "template_29r4l2l",       
    form.current,              
    "E5ATm0HZnnFKyP7u4"        //
  )

  .then(
    (result) => {
      console.log(result.text);
      setSuccessMessage("Your message has been sent!");
      setErrorMessage("");
      form.current?.reset();
    },
    (error) => {
      console.log(error.text);
      setSuccessMessage("");
      setErrorMessage("Something went wrong. Please try again later.");
    }
  );
};

  return (
    <section id="contact" className="py-20 px-4 bg-gray-950 relative overflow-hidden">

      <div className="max-w-6xl mx-auto relative z-10">

        <motion.div 
          className="backdrop-blur-md bg-gray-800/50 border border-gray-700/50 rounded-xl p-8 shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
          
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
              <Input type="text" id="name" name="name" placeholder="Your Name" required />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <Input type="email" id="email" name="user_email" placeholder="your.email@example.com" required />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
              <Input type="text" id="subject" name="subject" placeholder="What is this about?" required />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <Textarea id="message" name="message" rows={4} placeholder="Your message here..." required />
            </motion.div>

            {successMessage && (
              <p className="text-green-400">{successMessage}</p>
            )}
            {errorMessage && (
              <p className="text-red-400">{errorMessage}</p>
            )}

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
    </section>
  );
};

export default Contact;
