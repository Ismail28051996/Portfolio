"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Weather App",
    description: "A real-time weather forecast app using React Native & OpenWeather API.",
    image: "/expoApp.png",
    link: "https://expo.dev/accounts/ismail280596/projects/WeatherApp/fingerprints/b45b5338af47835198f177fb2200f9eca910bd97",
  },
  {
    title: "Password Generator",
    description: "A modern Password Generator built with React.js, Tailwind CSS & Framer Motion.",
    image: "/passwordGen.png",
    link: "https://password-generator-beige-nine-88.vercel.app/",
  },
  {
    title: "Currency Convertor",
    description: "Currecny Convertor with multiple currency feature using React Hooks,Tailwind CSS",
    image: "/CurrencyConvertor.png",
    link: "https://currencyconvertor-zeta.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-50 to-white" id="projects">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900 mb-12 text-center"
        >
          My Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
