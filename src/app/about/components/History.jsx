import React from "react";

const History = () => {
  return (
    <section className=" my-12 md:my-16 flex flex-col items-center">
      <p className=" mb-4 py-1 px-3 text-xs rounded-lg border border-black bg-white">
        Our Progressive Journey
      </p>
      <h2 className=" font-bold text-center md:text-start text-3xl md:text-4xl font-raleway">
        Our History
      </h2>
      <p className=" md:w-[68%] text-center">
        Founded with a passion for early education in 2005, our kindergarten
        school boasts a rich history of empowering young learners to reach their
        potential through innovative teaching methods and a supportive learning
        environment
      </p>
      <div className=" h-40 border mt-14 flex flex-wrap justify-between gap-10 "></div>
    </section>
  );
};

export default History;
