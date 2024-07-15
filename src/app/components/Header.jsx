"use client";

import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../img/logo.png";
import MobileNav from "./MobileNav";

const navLinks = [
  { title: "Home", link: "/", style: "" },
  { title: "About Us", link: "/about", style: "" },
  { title: "Academics", link: "", style: "" },
  { title: "Admissions", link: "", style: "" },
  { title: "Student Life", link: "", style: "" },
  { title: "Contact", link: "", style: "" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className=" relative flex flex-col gap-4">
      <div className=" w-full bg-[#FFDECC] rounded-lg border border-black p-2 flex items-center justify-center gap-1">
        <h3>Admission is Open, Grab your seat now</h3>
        <Icon
          icon="hugeicons:arrow-right-02"
          width="24"
          height="24"
          className=" cursor-pointer hover:text-[#FF8D4D]"
        />
      </div>
      <nav className=" hidden font-medium md:flex justify-between rounded-lg border border-black">
        <div className=" flex items-center gap-1 p-3 bg-[#FF8D4D] rounded-l-lg border-r border-black">
          <Image src={Logo} alt="logo" width={20} height={20} />
          <h3>Little Learners</h3>
        </div>
        <ul className=" hidden md:flex">
          {navLinks.map((navlink) => (
            <li key={navlink.title}>
              <Link
                href={navlink.link}
                className={`${
                  navlink.title == "Contact" ? "rounded-r-lg" : ""
                } ${
                  pathname === navlink.link
                    ? "bg-[#FFDECC]"
                    : "hover:bg-[#FFDECC]"
                } p-3 px-4 flex justify-center items-center border-l border-black`}
              >
                {navlink.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <MobileNav />

    </header>
  );
};

export default Header;
