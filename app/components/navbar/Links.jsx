import Link from "next/link";
import React from "react";

const Links = () => {
  return (
    <ul className="flex items-center gap-4">
      <li>
        <Link href={"#about"}>About</Link>
      </li>
      <li>
        <Link href={"#projects"}>Projects</Link>
      </li>
      <li>
        <Link href={"#contacts"}>Contacts</Link>
      </li>
    </ul>
  );
};

export default Links;
