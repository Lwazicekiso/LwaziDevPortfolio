import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  FaEnvelope,
  FaPhone,
  FaLink,
  FaLinkedin,
  FaGithub,
  FaFileDownload,
  FaPaperPlane,
} from "react-icons/fa";
import emailjs from "emailjs-com";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
};

const Contact = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_tr69zr8",
        "template_29r4l2l",
        form.current,
        "E5ATm0HZnnFKyP7u4"
      )
      .then(
        (result) => {
          setSuccessMessage("Your message has been sent!");
          setErrorMessage("");
          form.current?.reset();
        },
        (error) => {
          setSuccessMessage("");
          setErrorMessage("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-950 relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/10 via-gray-950 to-gray-950 pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Contact Info & Connect */}
        <motion.div
          className="backdrop-blur-md bg-gray-800/50 border border-gray-700/50 rounded-xl p-8 shadow-lg"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-2xl font-bold mb-6"
            variants={itemVariants}
          >
            Contact Information
          </motion.h3>

          {/* Info List */}
          <div className="space-y-6">
            {[
              {
                icon: FaEnvelope,
                label: "Email",
                link: "mailto:lwazicekiso112@gmail.com",
                text: "lwazicekiso112@gmail.com",
              },
              {
                icon: FaPhone,
                label: "Phone",
                link: "tel:+27681221850",
                text: "+27 68 122 1850",
              },
              {
                icon: FaLink,
                label: "Website",
                link: "https://lwazidevportfolio.onrender.com",
                text: "shorturl.at/0YNvT",
              },
            ].map(({ icon: Icon, label, link, text }) => (
              <motion.div
                key={label}
                className="flex items-start"
                variants={itemVariants}
              >
                <motion.div
                  className="bg-blue-500/20 p-3 rounded-lg mr-4"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
                >
                  <Icon className="h-6 w-6 text-blue-400" />
                </motion.div>
                <div>
                  <h4 className="font-medium text-lg">{label}</h4>
                  <a
                    href={link}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    {text}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.h3
            className="text-2xl font-bold mb-4 mt-8"
            variants={itemVariants}
          >
            Connect With Me
          </motion.h3>
          <motion.div className="flex gap-4" variants={itemVariants}>
            {[
              {
                icon: FaLinkedin,
                link: "https://www.linkedin.com/in/lwazi-cekiso",
                label: "LinkedIn",
              },
              { icon: FaGithub, link: "https://github.com/Lwazicekiso", label: "GitHub" },
              {
                icon: FaEnvelope,
                link: "mailto:lwazicekiso112@gmail.com",
                label: "Email",
              },
              {
                icon: FaFileDownload,
                link: "/MasterCV.pdf",
                label: "Resume",
                download: true,
              },
            ].map(({ icon: Icon, link, label, download }) => (
              <motion.a
                key={label}
                href={link}
                download={download}
                className="bg-blue-500/20 p-3 rounded-lg text-blue-400 hover:bg-blue-500/30 transition-all"
                whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon className="h-6 w-6" />
                <span className="text-xs mt-2">{label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Contact Form */}
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
            {/* Name */}
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <Input className="text-gray-600 text-lg placeholder-gray-400 tracking-wide border border-gray-300 p-2 rounded"
              type="text" id="name" name="name" required />
            </motion.div>
            {/* Email */}
            <motion.div variants={itemVariants}>
              <label htmlFor="user_email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <Input className="text-gray-600 text-lg placeholder-gray-400 tracking-wide border border-gray-300 p-2 rounded"
               type="email" id="user_email" name="user_email" required />
            </motion.div>
            {/* Subject */}
            <motion.div variants={itemVariants}>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                Subject
              </label>
              <Input className="text-gray-600 text-lg placeholder-gray-400 tracking-wide border border-gray-300 p-2 rounded"
 type="text" id="subject" name="subject" required />
            </motion.div>
            {/* Message */}
            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <Textarea className="text-gray-600 text-lg placeholder-gray-400 tracking-wide border border-gray-300 p-2 rounded"
 id="message" name="message" rows={4} required />
            </motion.div>

            {/* Feedback */}
            {successMessage && <p className="text-green-400">{successMessage}</p>}
            {errorMessage && <p className="text-red-400">{errorMessage}</p>}

            {/* Submit */}
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
