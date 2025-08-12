"use client";
import { projects } from "@/app/projectsData";
import Link from "next/link";
import { use } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function ProjectDetail({ params }) {
  const { id } = use(params);

  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    return <p className="text-center text-white">Project not found.</p>;
  }

  return (
    <section className="py-12 bg-gray-900 text-white max-w-4xl mx-auto p-6 rounded shadow-lg">
      <Link
        href={"/"}
        className="flex items-center gap-2 text-[#38BDF8] mb-4 hover:underline"
      >
        <FaArrowLeftLong />
        Back Home
      </Link>
      <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-64 object-cover rounded mb-6"
      />

      <h2 className="text-2xl font-semibold mb-2">Technology Stack</h2>
      <ul className="list-disc list-inside mb-6">
        {project.tech.map((tech, i) => (
          <li key={i}>{tech}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Brief Description</h2>
      <p className="mb-6">{project.description}</p>

      <h2 className="text-2xl font-semibold mb-2">Live Project Link</h2>
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline mb-6 inline-block"
      >
        {project.live}
      </a>

      <h2 className="text-2xl font-semibold mb-2">GitHub Repository</h2>
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline mb-6 inline-block"
      >
        {project.github}
      </a>

      <h2 className="text-2xl font-semibold mb-2">Challenges Faced</h2>
      <p className="mb-6">{project.challenges}</p>

      <h2 className="text-2xl font-semibold mb-2">
        Potential Improvements & Future Plans
      </h2>
      <p>{project.futurePlans}</p>
    </section>
  );
}
