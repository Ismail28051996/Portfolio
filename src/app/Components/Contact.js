"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_zaxcdnr", // EmailJS service ID
        "template_kcf3nzo", // EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "LPOkPTZpld8zYGvKp" // EmailJS public key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setLoading(false);
          setFormData({ name: "", email: "", message: "" });
            setTimeout(() => {
            setStatus("");
            }, 3000);
        },
        () => {
            setStatus("❌ Failed to send. Try again.");
            setLoading(false);

            // Error message भी 3 seconds बाद हटाओ
            setTimeout(() => {
            setStatus("");
            }, 3000);
        }
      );
  };

  return (
    <section id="contact" className="w-full py-12 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-8"
        >
          Contact Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Form */}
          <motion.form
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mb-3 px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mb-3 px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full mb-3 px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-300"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {status && <p className="mt-3 text-sm">{status}</p>}
          </motion.form>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col justify-center"
          >
            <p className="flex items-center gap-3 mb-3">
              <FaEnvelope className="text-blue-400" /> ismail28051996@gmail.com
            </p>
            <p className="flex items-center gap-3 mb-3">
              <FaPhoneAlt className="text-green-400" /> +91 8104946773
            </p>
            <p className="flex items-center gap-3 mb-3">
              <FaMapMarkerAlt className="text-red-400" /> Mumbai, India
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://github.com/ismail28051996" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaGithub size={22} />
              </a>
              <a href="https://linkedin.com/in/ismail-shaikh-2011" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaLinkedin size={22} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
