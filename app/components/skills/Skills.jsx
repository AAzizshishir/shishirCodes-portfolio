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

const iconVariants = {
  animate: {
    x: [0, 30, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

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
  ];

  const others = [
    { icon: <SiMongodb style={{ color: "#47A248" }} />, label: "MongoDB" },
    { icon: <SiFirebase style={{ color: "#FFCA28" }} />, label: "Firebase" },
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
      <motion.h2
        variants={iconVariants}
        animate="animate"
        className="text-2xl font-bold mb-4"
      >
        {title}
      </motion.h2>
      <div className="flex flex-wrap gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={iconVariants}
            animate="animate"
            className="flex flex-col items-center text-center"
          >
            <div className="text-6xl">{skill.icon}</div>
            <p className="mt-2 text-white">{skill.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      className="py-16 px-4 lg:px-10 scroll-mt-36 md:scroll-mt-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#38BDF8] text-center">
        Skills
      </h2>
      <div className="max-w-5xl mx-auto space-y-10">
        {renderCategory("Frontend", frontend)}
        {renderCategory("Backend", backend)}
        {renderCategory("Others", others)}
      </div>
    </section>
  );
}
