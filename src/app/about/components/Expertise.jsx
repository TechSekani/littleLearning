import React from "react";
import { Icon } from "@iconify/react";
import { Teachers } from "../data";

const Card = (teacher) => (
  <div className="lg:w-[47%] p-8 border border-black rounded-lg shadow-[4px_4px_0_#000]">
    <div className=" flex justify-between items-center">
      <div className=" flex items-center">
        <span>
          <Icon icon="ic:baseline-account-box" width="54" height="54" />
        </span>
        <h4 className=" font-bold text-lg">{teacher.name}</h4>
      </div>
      <span className=" rounded-md border border-black p-2">
        <Icon icon="ic:sharp-email" width="20" height="20" />
      </span>
    </div>
    <div className=" flex flex-col gap-2 rounded-lg border border-black p-4 mt-3">
      <p className=" font-bold text-lg">Qualification: {teacher.qualification}</p>
      <p>{teacher.desr}</p>
    </div>
  </div>
);

const Expertise = () => {
  return (
    <section className="md:px-20 my-12 md:my-16 flex flex-col items-center">
      <p className=" mb-4 py-1 px-3 text-xs rounded-lg border border-black bg-white">
        Our Teachers With Expertise
      </p>
      <h2 className=" font-bold text-center md:text-start text-3xl md:text-4xl font-raleway">
        Our Team Members
      </h2>
      <p className=" md:w-[68%] text-center">
        At Little Learners Academy, our teaching team is the heart of our
        educational journey. We take great pride in employing highly qualified
        and passionate educators who possess a deep understanding of early
        childhood development. Our teachers create a warm and engaging
        atmosphere, encouraging curiosity, instilling confidence, and fostering
        a love for learning.
      </p>
      <div className=" border mt-14 flex flex-wrap justify-between gap-10 ">
        {Teachers.map((teacher) => (
          <Card key={teacher.id} {...teacher} />
        ))}
      </div>
    </section>
  );
};

export default Expertise;
