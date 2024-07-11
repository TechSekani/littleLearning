import { Icon } from "@iconify/react";

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
    <footer className=" border border-black rounded-lg shadow-[8px_8px_0_#000] px-12 py-8 bg-white ">
      <div className=" flex justify-around gap-4">
        <div className=" w-[30%]">
          <div className=" p-2 ">
            <h3>Little Learners</h3>
          </div>
          <p>
            We believe in the power of play to foster creativity,
            problem-solving skills, and imagination.
          </p>
          <div className=" flex flex-col gap-3 mt-14">
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
        {footerLinks.map((footerlink) => (
          <div className=" flex flex-col gap-2" key={footerlink.title}>
            <h3 className=" font-semibold">{footerlink.title}</h3>
            {footerlink.links.map((link) => (
              <p key={link} className=" ">
                {link}
              </p>
            ))}
          </div>
        ))}
      </div>
      <div className=" my-5 mx-5 py-5 flex justify-between border-y border-black">
        <div className="[&>*]:px-3 flex">
          <p>Terms of Service</p>
          <p className=" border-x border-black">Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
        <div className=" flex gap-3">
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
      <p className=" text-center w-full text-sm">Copyright © [2023] Little Learners Academy. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
