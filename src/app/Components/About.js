"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="w-full py-10 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          About Me
        </motion.h2>

        {/* Glassmorphism Card with Animated BG */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-10 grid md:grid-cols-2 gap-12 items-center shadow-xl border border-white/30 overflow-hidden bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg"
        >
          {/* Animated Background Layer */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-gradient bg-[length:200%_200%] opacity-40 z-0"></div>

          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center relative z-10"
          >
            <img
              src="/second.jpg"
              alt="Ismail Shaikh"
              className="rounded-2xl shadow-lg w-72 h-auto object-cover border-4 border-white"
            />
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <p className="text-lg text-gray-900 dark:text-gray-100 leading-relaxed mb-6">
              Hello! I’m <span className="font-semibold">Ismail Shaikh</span>, a passionate
              <span className="font-semibold"> Frontend Developer</span> who loves crafting
              modern, responsive, and user-friendly websites. I focus on creating designs
              that are not only visually appealing but also deliver a seamless user
              experience.
            </p>
            <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
              I specialize in <span className="font-semibold">React.js, Next.js, and Tailwind CSS</span>.
              I believe in clean, maintainable code and bringing ideas to life with a blend
              of creativity and logic.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
