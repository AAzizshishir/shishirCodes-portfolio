"use client";
import { projects } from "@/app/projectsData";
import { motion } from "motion/react";
import Link from "next/link";
// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <section className="py-16 px-4 lg:px-10 scroll-mt-16" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#38BDF8]">
          My Projects
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

                {/* Details বাটন */}
                <Link
                  href={`/projectsDetails/${project.id}`}
                  className="inline-block mt-4 px-4 py-2 bg-[#38BDF8] text-black font-medium rounded hover:bg-transparent border border-[#38BDF8] hover:text-white transition duration-300"
                >
                  Project Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
