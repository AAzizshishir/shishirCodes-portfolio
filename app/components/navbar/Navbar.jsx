import React from "react";
import logo from "@/public/logo/logo.png";
import Image from "next/image";
import Links from "./Links";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-4 lg:px-10 py-4 flex items-center justify-between">
      {/* Logo */}
      <div>
        <Image
          src={logo}
          alt="Logo"
          width={62}
          height={62}
          className="rounded-full"
        />
      </div>
      {/* Links */}
      <div className="flex items-center gap-4">
        <Links />
        <button className="px-4 py-2 border">Download Resume</button>
      </div>
    </nav>
  );
};

export default Navbar;
