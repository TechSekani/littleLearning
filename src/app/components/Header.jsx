import { Icon } from "@iconify/react";
import Link from "next/link";

const navLinks = [
  { title: "Home", link: "", style: "" },
  { title: "About Us", link: "", style: "" },
  { title: "Academics", link: "", style: "" },
  { title: "Admissions", link: "", style: "" },
  { title: "Student Life", link: "", style: "" },
  { title: "Contact", link: "", style: "" },
];

const Header = () => {
  return (
    <header className="flex flex-col gap-4">
      <div className=" w-full bg-[#FFDECC] rounded-lg border border-black p-2 flex items-center justify-center gap-1">
        <h3>Admission is Open, Grab your seat now</h3>
        <Icon
          icon="hugeicons:arrow-right-02"
          width="24"
          height="24"
          className=" cursor-pointer hover:text-[#FF8D4D]"
        />
      </div>
      <nav className=" font-medium flex justify-between rounded-lg border border-black">
        <div className=" p-3 bg-[#FF8D4D] rounded-l-lg border-r border-black">
            {/* <img src="/public/vercel.svg" alt="" srcset="" /> */}
          <h3>Little Learners</h3>
        </div>
        <ul className=" flex">
          {navLinks.map((navlink) => (
            <li key={navlink.title}>
              <Link href={navlink.link} className={`${navlink.title == "Contact" ? "rounded-r-lg" : ""} hover:bg-[#FFDECC] p-3 px-4 flex justify-center items-center border-l border-black`}>{navlink.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
