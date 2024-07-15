"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../img/logo.png";

const navLinks = [
  { title: "Home", link: "/", style: "" },
  { title: "About Us", link: "/about", style: "" },
  { title: "Academics", link: "", style: "" },
  { title: "Admissions", link: "", style: "" },
  { title: "Student Life", link: "", style: "" },
  { title: "Contact", link: "", style: "" },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=" absolute top-[150%] w-full lg:hidden font-medium flex flex-col justify-between rounded-lg border border-black">
      <div className=" flex justify-between items-center">
        <div className=" flex items-center gap-1 p-3 bg-[#FF8D4D] rounded-l-md border-r border-black">
          <Image src={Logo} alt="logo" width={20} height={20} />
          <h3>Little Learners</h3>
        </div>

        <span
          className=" flex justify-center items-center border-l border-black p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon icon="ic:round-menu" width="35" height="35" />
        </span>
      </div>

      {menuOpen && (
        <ul className=" w-full bg-[#FFF5F0] rounded-b-lg">
          {navLinks.map((navlink) => (
            <li key={navlink.title}>
              <Link
                href={navlink.link}
                onClick={() => setMenuOpen(false)}
                className={`${
                  navlink.title == "Contact" ? "rounded-b-lg" : ""
                } ${
                  pathname === navlink.link
                    ? "bg-[#FFDECC]"
                    : "hover:bg-[#FFDECC]"
                } p-3 px-4 flex justify-center items-center`}
              >
                {navlink.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default MobileNav;
