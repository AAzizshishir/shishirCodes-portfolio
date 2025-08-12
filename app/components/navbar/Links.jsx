import Link from "next/link";
import React from "react";

const Links = () => {
  return (
    <ul className="flex items-center gap-4">
      <li>
        <Link href={"#about"} className="hover:text-[#38BDF8]">
          About
        </Link>
      </li>
      <li>
        <Link href={"#skills"} className="hover:text-[#38BDF8]">
          Skills
        </Link>
      </li>
      <li>
        <Link href={"#projects"} className="hover:text-[#38BDF8]">
          Projects
        </Link>
      </li>
      <li>
        <Link href={"#contact"} className="hover:text-[#38BDF8]">
          Contacts
        </Link>
      </li>
    </ul>
  );
};

export default Links;
