"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white px-8">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-white/20 px-4 py-1 rounded-full text-sm backdrop-blur-sm">
            Open to Opportunities
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mt-4">
            Hi, I'm <span className="text-yellow-300">Ismail</span> <br /> 
            Frontend Developer
          </h1>
          <p className="mt-4 text-lg max-w-md">
            I build clean, fast and accessible web/mobile apps using React, React-Native, Next.js, and Tailwind, HTML5, CSS3.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="#projects"
              className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold hover:bg-purple-200 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-700 transition"
            >
              Contact
            </a>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <Image
            src="/second.jpg"
            alt="Ismail Shaikh"
            width={350}
            height={350}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
