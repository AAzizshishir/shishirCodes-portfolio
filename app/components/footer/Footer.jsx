"use client";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-6 mt-10 bg-gray-900 text-gray-300 shadow-[0_-2px_10px_rgba(0,0,0,0.3)]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left - Text */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Abdul Aziz Shishir. All rights reserved.
        </p>

        {/* Right - Social Links */}
        <div className="flex items-center gap-4">
          <Link href="https://github.com/AAzizshishir" target="_blank">
            <FaGithub
              size={20}
              className="hover:text-white transition-colors"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/aashishir/" target="_blank">
            <FaLinkedin
              size={20}
              className="hover:text-white transition-colors"
            />
          </Link>
          <Link
            href="https://www.facebook.com/abdul.aziz.shishir.2025"
            target="_blank"
          >
            <FaFacebook
              size={20}
              className="hover:text-white transition-colors"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
