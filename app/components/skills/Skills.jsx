"use client";
import { motion } from "motion/react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiAxios,
  SiReacthookform,
  SiGit,
  SiDaisyui,
  SiShadcnui,
} from "react-icons/si";

export default function Skills() {
  const frontend = [
    { icon: <FaHtml5 style={{ color: "#E34F26" }} />, label: "HTML" },
    { icon: <FaCss3Alt style={{ color: "#1572B6" }} />, label: "CSS" },
    {
      icon: <SiTailwindcss style={{ color: "#06B6D4" }} />,
      label: "Tailwind CSS",
    },
    { icon: <SiShadcnui style={{ color: "#000000" }} />, label: "Shadcn UI" },
    { icon: <SiDaisyui style={{ color: "#5A0EF0" }} />, label: "DaisyUI" },
    {
      icon: <SiJavascript style={{ color: "#F7DF1E" }} />,
      label: "JavaScript",
    },
    { icon: <FaReact style={{ color: "#61DAFB" }} />, label: "React" },
  ];

  const backend = [
    { icon: <FaNodeJs style={{ color: "#339933" }} />, label: "Node.js" },
    { icon: <SiExpress style={{ color: "#000000" }} />, label: "Express.js" },
    { icon: <SiMongodb style={{ color: "#47A248" }} />, label: "MongoDB" },
    { icon: <SiFirebase style={{ color: "#FFCA28" }} />, label: "Firebase" },
  ];

  const tools = [
    { icon: <SiAxios style={{ color: "#5A29E4" }} />, label: "Axios" },
    {
      icon: <SiReacthookform style={{ color: "#EC5990" }} />,
      label: "React Hook Form",
    },
    { icon: <SiGit style={{ color: "#F05032" }} />, label: "Git" },
    { icon: <FaGithub style={{ color: "#ffffff" }} />, label: "GitHub" },
  ];

  const renderCategory = (title, skills) => (
    <div>
      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-left text-[#38BDF8]">
        {title}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center justify-center gap-4 bg-[#122041] text-center py-2.5 rounded-md"
          >
            <div className="text-4xl">{skill.icon}</div>
            <p className="mt-2 text-white text-lg font-semibold">
              {skill.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      id="skills"
      className="mt-20 px-4 lg:px-10 scroll-mt-48 md:scroll-mt-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#38BDF8] text-center">
        Technical Proficiency
      </h2>
      <p className="mb-6 text-[#f8fafc] text-center w-[420px] mx-auto">
        Building seamless web experiences with modern tools and frameworks.
      </p>
      <div className="space-y-6">
        {renderCategory("Frontend", frontend)}
        {renderCategory("Backend", backend)}
        {renderCategory("Tools & Others", tools)}
      </div>
    </motion.section>
  );
}
