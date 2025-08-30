"use client";
import React from "react";
import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Banner() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between py-12 lg:py-16 gap-10 lg:gap-16 px-4 lg:px-10">
      {/* Left side - Text */}
      <motion.div
        className="text-center lg:text-left max-w-[700px]"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          HI, I AM ABDUL AZIZ SHISHIR
        </h1>
        <h2 className="text-2xl sm:text-3xl lg:text-5xl text-[#38BDF8] font-bold my-3 lg:my-4 uppercase">
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
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          Passionate Frontend & MERN Stack Developer crafting visually stunning
          and high-performance web applications. Always eager to learn,
          innovate, and deliver clean, scalable solutions.
        </p>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-5">
          <Link href="https://github.com/AAzizshishir" target="_blank">
            <FaGithub size={24} className="hover:text-[#38BDF8] transition" />
          </Link>
          <Link href="https://www.linkedin.com/in/aashishir/" target="_blank">
            <FaLinkedin size={24} className="hover:text-[#38BDF8] transition" />
          </Link>
          <Link
            href="https://www.facebook.com/abdul.aziz.shishir.2025"
            target="_blank"
          >
            <FaFacebook size={24} className="hover:text-[#38BDF8] transition" />
          </Link>
          <Link
            href="https://drive.google.com/file/d/1wZli7yEYVrak9fKxMeyGJj-bPtWf7LOe/view?usp=sharing"
            download
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Download Resume
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
        <img
          src="https://i.ibb.co.com/rRV1RqVQ/myImage.jpg"
          alt="Abdul Aziz Shishir Profile Pic"
          className="p-2 w-[300px] h-[300px] object-cover rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 shadow-lg shadow-blue-500/50"
        />
      </motion.div>
    </section>
  );
}
