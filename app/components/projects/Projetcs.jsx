"use client";
import { projects } from "@/app/projectsData";
import { motion } from "motion/react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Projects() {
  return (
    <section
      className="mt-20 px-4 lg:px-10 scroll-mt-36 md:scroll-mt-32"
      id="projects"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-[#38BDF8]">
        My Projects
      </h2>
      <p className="mb-6 text-[#f8fafc] text-center max-w-[420px] mx-auto">
        Showcasing practical solutions built with modern web technologies.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
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
            <div className="p-3">
              <h3 className="text-3xl font-semibold mb-1">{project.name}</h3>
              <p>{project.subtitle}</p>
              {/* Details বাটন */}
              <Link
                href={`/projectsDetails/${project.id}`}
                className=" mt-4 px-4 py-2 bg-[#38BDF8] text-black font-medium rounded hover:bg-transparent border border-[#38BDF8] hover:text-white transition duration-300 inline-block"
              >
                Project Details{" "}
                <FaArrowRight className="inline ml-1 mb-[2px]" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
