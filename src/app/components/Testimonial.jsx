import React from "react";
import { TESTIMONIAL } from "../data";
import Carousel from "./Carousel";

const Testimonial = () => {
  return (
    <section className=" w-full my-12 md:my-16 flex flex-col items-center">
      <p className=" mb-4 py-1 px-3 text-xs rounded-lg border border-black bg-white">
        Their Happy Words 🤗
      </p>
      <h2 className=" font-bold text-3xl md:text-4xl font-raleway">Our Testimonials</h2>
      <p className=" md:w-[68%] text-center">
        Our testimonials are heartfelt reflections of the nurturing environment
        we provide, where children flourish both academically and emotionally.
      </p>
      
      <Carousel cards={TESTIMONIAL} />
    </section>
  );
};

export default Testimonial;
