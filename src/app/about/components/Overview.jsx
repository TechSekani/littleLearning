import React from "react";

const Overview = () => {
  return (
    <section className=" mt-24 lg:mt-10 my-10 px-8 py-12 flex flex-col lg:flex-row justify-around items-center gap-2 p-4 text-center border border-black rounded-lg shadow-[4px_4px_0_#000]">
      <div className=" lg:w-[45%] flex flex-col items-center lg:items-start gap-2">
        <p className=" mb-2 py-2 px-3 text-xs rounded-lg border border-black bg-white">
          Overview
        </p>
        <h3 className=" font-bold text-center lg:text-start text-3xl md:text-4xl font-raleway">
          Welcome to Little Learners Academy
        </h3>
      </div>
      <p className=" lg:w-[46%] text-base">
        A leading kinder garden school dedicated to providing a nurturing and
        stimulating environment for young learners. With a commitment to
        excellence in early education, we believe in shaping curious minds and
        building a strong foundation for a lifelong love of learning. Our
        holistic approach fosters intellectual, social, emotional, and physical
        development, ensuring that each child reaches their full potential.
      </p>
    </section>
  );
};

export default Overview;
