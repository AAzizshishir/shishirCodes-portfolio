import React from "react";
import logo from "@/public/logo/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      {/* Logo */}
      <div>
        <Image src={logo} alt="Logo" />
      </div>
      {/* Links */}
      <div></div>
    </nav>
  );
};

export default Navbar;
