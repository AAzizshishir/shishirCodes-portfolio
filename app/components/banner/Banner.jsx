"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import profilePic from "@/public/profile/profile.jpg";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Banner() {
  return (
    <section className="flex items-center justify-between py-16 gap-16 px-4 lg:px-10">
      {/* Left side - Text */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl font-bold">Hi, I am ABDUL AZIZ SHISHIR</h1>
        <h2 className="text-5xl text-[#38BDF8] font-bold my-4 uppercase">
          <Typewriter
            words={["Frontend Developer", "MERN STACK Developer"]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
        <p>
          Passionate Frontend & MERN Stack Developer crafting visually stunning
          and high-performance web applications. Always eager to learn,
          innovate, and deliver clean, scalable solutions.
        </p>

        {/* Links */}
        <div className="flex gap-4 mt-4">
          <Link href={"https://github.com/AAzizshishir"}>
            <FaGithub size={24} />
          </Link>
          <Link href={"https://www.linkedin.com/in/aashishir/"}>
            <FaLinkedin size={24} />
          </Link>
          <Link href={"https://www.facebook.com/abdul.aziz.shishir.2025"}>
            <FaFacebook size={24} />
          </Link>
        </div>
      </motion.div>
      {/* Right side - Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src={profilePic}
          width={320}
          height={300}
          className="p-2 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 shadow-lg shadow-blue-500/50"
          alt="Abdul Aziz Shishir Profile Pic"
        />
      </motion.div>
    </section>
  );
}
