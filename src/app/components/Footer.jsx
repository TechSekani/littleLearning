import { Icon } from "@iconify/react";
import Image from "next/image";
import Logo from "../img/logo.png";

const footerLinks = [
  { title: "Home", links: ["Features", "Our Testimonials", "FAQ"] },
  {
    title: "About Us",
    links: [
      "Our Mission",
      "Our Vision",
      "Awards and Recognitions",
      "History",
      "Teachers",
    ],
  },
  { title: "Academics", links: ["Special Features", "Gallery"] },
  { title: "Contact Us", links: ["Information", "Map & Direction"] },
];

const Footer = () => {
  return (
    <footer className=" border border-black rounded-lg shadow-[8px_8px_0_#000] px-8 md:px-12 py-8 my-4 mt:12 md:mt-20 bg-white ">
      <div className=" flex flex-col md:flex-row justify-around gap-4">
        <div className=" text-center md:text-start md:w-[35%]">
          <div className="[&>h3]:font-semibold flex justify-center md:justify-start items-center gap-1 mb-3">
            <Image src={Logo} alt="logo" width={26} height={26} />
            <h3>Little Learners</h3>
          </div>
          <p>
            We believe in the power of play to foster creativity,
            problem-solving skills, and imagination.
          </p>
          <div className=" flex flex-col gap-3 mt-10">
            <p className=" flex gap-1">
              <span className=" bg-[#FFDECC] p-1 border border-black rounded">
                <Icon icon="ic:baseline-mail" width="16" height="16" />
              </span>
              hello@littlelearners.com
            </p>
            <p className=" flex gap-1">
              <span className=" bg-[#FFDECC] p-1 border border-black rounded">
                <Icon icon="ic:round-phone" width="16" height="16" />
              </span>
              +9191813232309
            </p>
            <p className=" flex gap-1">
              <span className=" bg-[#FFDECC] p-1 border border-black rounded">
                <Icon icon="mdi:location" width="16" height="16" />
              </span>
              Somewhere in the World
            </p>
          </div>
        </div>
        <div className=" flex flex-wrap justify-between gap-6 md:gap-0">
          {footerLinks.map((footerlink) => (
            <div className=" w-[45%] flex flex-col gap-2" key={footerlink.title}>
              <h3 className=" font-semibold">{footerlink.title}</h3>
              {footerlink.links.map((link) => (
                <p key={link} className=" ">
                  {link}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className=" my-5 md:mx-5 py-5 flex flex-col md:flex-row justify-between border-y border-black">
        <div className="md:[&>*]:px-3 flex flex-col md:flex-row">
          <p>Terms of Service</p>
          <p className=" md:border-x border-black">Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
        <div className=" flex justify-center mt-3 md:mt-0 gap-3">
          <span className=" bg-[#FFDECC] p-1 border border-black rounded">
            <Icon icon="ic:sharp-facebook" width="24" height="24" />{" "}
          </span>
          <span className=" bg-[#FFDECC] p-1 border border-black rounded">
            <Icon icon="prime:twitter" width="24" height="24" />{" "}
          </span>
          <span className=" bg-[#FFDECC] p-1 border border-black rounded">
            <Icon icon="mdi:linkedin" width="24" height="24" />{" "}
          </span>
        </div>
      </div>
      <p className=" text-center w-full text-sm">
        Copyright © [2023] Little Learners Academy. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
