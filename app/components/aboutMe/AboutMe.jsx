"use client";
import { motion } from "motion/react";
import Image from "next/image";
import aboutMe from "@/public/about/aboutMe.jpg";

export default function AboutMe() {
  return (
    <section id="about" className="py-16 px-4 md:px-10 scroll-mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg border-4 border-cyan-500">
            <Image
              src={aboutMe}
              alt="Abdul Aziz Shishir"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400">
            About Me
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            I’m{" "}
            <span className="font-semibold text-white">Abdul Aziz Shishir</span>
            , a passionate Frontend & MERN Stack Developer who started my
            programming journey in{" "}
            <span className="text-cyan-400">March 2024</span>. In December, I
            joined <span className="text-cyan-400">Programming Hero</span> to
            sharpen my skills. Since then, I’ve built multiple projects,
            mastered core web technologies, and developed a love for creating
            clean, functional, and visually appealing web applications.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            I enjoy working on{" "}
            <span className="text-cyan-400">
              responsive, user-friendly websites
            </span>
            where performance, design, and functionality meet. Whether it’s
            designing pixel-perfect interfaces or bringing ideas to life with
            JavaScript, I aim to make every project shine.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Outside of coding, I’m active in sports — especially running — which
            keeps me focused and energized. With curiosity as my guide and code
            as my tool, I’m always ready to take on new challenges and create
            meaningful digital experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
