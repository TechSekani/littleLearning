import Image from "next/image";
import { PAGES } from "../data";
import { Icon } from "@iconify/react";
import line from "../img/dottedline.png";
import Link from "next/link";

const Card = ({ title, text, link }) => (
  <div className=" bg-white relative [&>p]:text-sm flex flex-col p-12 lg:h-[380px] md:w-[46%] text-center border border-black rounded-lg shadow-[4px_4px_0_#000]">
    <h3 className=" font-raleway font-bold text-2xl">{title}</h3>
    <Image src={line} className=" my-5" />
    <p>{text}</p>
    <Link href={link}>
      <button className=" lg:absolute lg:bottom-10 bg-[#FFDECC] p-2 lg:px-14 mt-10 lg:mt-20 w-full lg:w-[81%] flex justify-center gap-2 border border-black rounded-lg shadow-[4px_4px_0_#000]">
        Learn More{" "}
        <Icon icon="hugeicons:arrow-right-02" width="24" height="24" />
      </button>
    </Link>
  </div>
);

const Explore = () => {
  return (
    <section className=" my-12 md:my-16 flex flex-col items-center">
      <p className=" mb-4 py-1 px-3 text-xs rounded-lg border border-black bg-white">
        Explore More
      </p>
      <h2 className=" font-bold text-center md:text-start text-3xl md:text-4xl font-raleway">
        Navigate through our Pages
      </h2>
      <p className=" md:w-[68%] text-center">
        Your gateway to discovering a wealth of valuable information about our
        kindergarten school, Feel free to explore and learn more about the
        enriching experiences that await your child at our kindergarten school
      </p>
      <div className=" mt-14 flex flex-wrap justify-between gap-10 ">
        {PAGES.map((page) => (
          <Card key={page.title} {...page} />
        ))}
      </div>
    </section>
  );
};

export default Explore;
