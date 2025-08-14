"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
//   {
//     role: "Frontend Developer",
//     company: "ABC Technologies",
//     period: "Jan 2023 - Present",
//     description:
//       "Developed and maintained responsive web applications using Next.js, React, and TailwindCSS with focus on performance and SEO.",
//   },
  {
    role: "Frontend Developer",
    company: "Ptolemy Technology Pvt Ltd - Daqi Platform",
    period: "March 2024 - April 2025",
    description:
      "Worked on building custom UI components on web & mobile and integrating REST APIs for client projects.",
  },
  {
    role: "Full-Stack Developer",
    company: "Technoserve software solutions",
    period: "Sep 2022 - Feb 2024",
    description:
      "Worked on Charity management system software, making UI Compnents and handling database.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.h2
          className="text-3xl font-bold mb-12 flex items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Briefcase className="w-8 h-8 text-blue-500" />
          Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l border-gray-600 dark:border-gray-400">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-10 ml-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Circle */}
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full -left-3 ring-4 ring-zinc-900">
                <Briefcase className="w-3 h-3 text-white" />
              </span>

              {/* Card */}
              <div className="bg-zinc-800 text-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-blue-400">{exp.company}</p>
                <span className="text-sm text-gray-400">{exp.period}</span>
                <p className="mt-3 text-gray-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
