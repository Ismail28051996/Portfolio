"use client";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML5", level: 90, icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", level: 85, icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", level: 80, icon: <FaJs className="text-yellow-400" /> },
  { name: "React.js", level: 85, icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", level: 75, icon: <FaNodeJs className="text-green-600" /> },
  { name: "Tailwind CSS", level: 80, icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "React Native", level: 70, icon: <FaReact className="text-green-500" /> },
];

export default function Skills() {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Skills
        </motion.h2>

        {/* Skills List */}
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icon + Name */}
              <div className="flex items-center gap-4 mb-3">
                <div className="text-3xl">{skill.icon}</div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                />
              </div>
              <p className="text-sm mt-2 text-gray-600">{skill.level}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
