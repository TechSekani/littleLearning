import React from "react";
import { Icon } from "@iconify/react";

const datas = [
  {
    title: "Mission",
    text: "At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey.",
    icon: "material-symbols:mountain-flag"
  },
  {
    title: "Vision",
    text: "Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity.",
    icon: "ion:binoculars-sharp"
  }
];

const MissionVision = () => {
  return (
    <section className="md:px-20 my-12 md:my-16 flex flex-col items-center">
      <p className=" mb-4 py-1 px-3 text-xs rounded-lg border border-black bg-white">
        Mission & Visions
      </p>
      <h2 className=" font-bold text-center md:text-start text-3xl md:text-4xl font-raleway">
        Our Mission & Visions
      </h2>
      <p className=" md:w-[68%] text-center">
        We are here to provide a nurturing and inclusive environment where young
        minds can thrive, fostering a love for learning and personal growth.
      </p>
      <div className=" mt-14 flex flex-wrap justify-between gap-10 ">
        {datas.map(data => (
            <div key={data.title} className=" bg-white lg:w-[48%] p-8 border border-black rounded-lg shadow-[4px_4px_0_#000]">
                <div className=" flex justify-between items-center mb-4">
                    <h3 className=" font-raleway font-bold text-2xl">{data.title}</h3>
                    <span><Icon icon={data.icon} width="42" height="42" /></span>
                </div>
                <p>{data.text}</p>
            </div>
        ))}
      </div>
    </section>
  );
};

export default MissionVision;
