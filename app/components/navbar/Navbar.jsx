"use client";
import React, { useState } from "react";
import logo from "@/public/logo/logo.png";
import Image from "next/image";
import Links from "./Links";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-4 lg:px-10 py-4 flex items-center justify-between sticky top-0 left-0 w-full bg-[#0F172A]/90 backdrop-blur-md shadow-md z-50">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src={logo}
          alt="Logo"
          width={62}
          height={62}
          className="rounded-full"
        />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6">
        <Links />
      </div>

      {/* Resume Button (Desktop) */}
      <div className="hidden md:block">
        <Link
          href="/resume.pdf"
          download
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Download Resume
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[72px] left-0 w-full bg-[#0F172A]/95 backdrop-blur-md flex flex-col items-center gap-4 py-6 md:hidden">
          <Links />
          <Link
            href="/resume.pdf"
            download
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Download Resume
          </Link>
        </div>
      )}
    </nav>
  );
}
