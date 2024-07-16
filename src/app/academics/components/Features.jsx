import React from "react";
import { Icon } from "@iconify/react";
import { FeaturesData } from "../data";

const Card = (feature) => (
  <div className=" bg-white relative lg:w-[30%] p-8 pt-12 border border-black rounded-lg shadow-[4px_4px_0_#000]">
    <span className="bg-[#FFDECC] absolute -top-5 border border-black rounded-lg p-2">
      <Icon icon={feature.icon} width="28" height="28" />
    </span>
    <h4 className=" font-bold text-lg">{feature.title}</h4>
    <p>{feature.text}</p>
  </div>
);

const Features = () => {
  return (
    <section className="md:px-20 my-12 md:my-16 flex flex-col items-center">
      <p className=" mb-4 py-1 px-3 text-xs rounded-lg border border-black bg-white">
        Our Features
      </p>
      <h2 className=" font-bold text-center md:text-start text-3xl md:text-4xl font-raleway">
        Our Special Features
      </h2>
      <p className=" md:w-[68%] text-center">
        Our kinder garden school provides a nurturing and stimulating
        environment, fostering a love for learning that lasts a lifetime. Join
        us as we embark on an exciting educational journey together!
      </p>
      <div className=" mt-14 flex flex-wrap justify-between gap-y-16 ">
        {FeaturesData.map((feature) => (
          <Card key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
