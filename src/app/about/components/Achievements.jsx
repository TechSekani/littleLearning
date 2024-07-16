import React from "react";

const Achievements = () => {
  return (
    <section className="md:px-20 my-12 md:my-16 flex flex-col items-center">
      <p className=" mb-4 py-1 px-3 text-xs rounded-lg border border-black bg-white">
        Our Achievements
      </p>
      <h2 className=" font-bold text-center md:text-start text-3xl md:text-4xl font-raleway">
        Our Awards and Recognitions
      </h2>
      <p className=" md:w-[68%] text-center">
        Little Learners Academy takes pride in our commitment to delivering
        high-quality education and outstanding student experiences. We are
        honored to have received various awards and recognitions for our
        dedication to early childhood education. These accolades reflect our
        team's relentless efforts in creating an exceptional learning
        environment for our students.
      </p>
      <div className=" h-40 border mt-14 flex flex-wrap justify-between gap-10 "></div>
    </section>
  );
};

export default Achievements;
