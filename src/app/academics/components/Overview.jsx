import React from "react";

const Overview = () => {
  return (
    <section className=" bg-white mt-24 lg:mt-10 my-10 px-8 py-12 flex flex-col lg:flex-row justify-around items-center gap-2 p-4 text-center border border-black rounded-lg shadow-[4px_4px_0_#000]">
      <div className=" lg:w-[45%] flex flex-col items-center lg:items-start gap-2">
        <p className=" mb-2 py-2 px-3 text-xs rounded-lg border border-black bg-white">
          Academics
        </p>
        <h3 className=" font-bold text-center lg:text-start text-3xl md:text-4xl font-raleway">
          Nuturing Young Minds for Success
        </h3>
      </div>
      <p className=" lg:w-[46%] text-base">
        Welcome to our Academics page, where we take pride in providing a
        comprehensive and stimulating educational experience for your child. Our
        kindergarten school's academic program is thoughtfully designed to
        foster a love for learning while building a strong foundation of
        essential skills and knowledge. From language arts and mathematics to
        science and social studies, our curriculum is carefully crafted to spark
        curiosity and encourage active exploration.
      </p>
    </section>
  );
};

export default Overview;
