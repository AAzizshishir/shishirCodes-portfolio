"use client";
import { projects } from "@/app/projectsData";
import { motion } from "motion/react";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <section className="py-16 px-4 lg:px-10 scroll-mt-16" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">
          My <span className="text-blue-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                <p className="mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 text-xl"
                  >
                    <FaGithub />
                  </Link>
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-green-400 text-xl"
                  >
                    <FaExternalLinkAlt />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
