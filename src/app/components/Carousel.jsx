"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Card = ({ img, name, text }) => (
  <div className="flex-shrink-0 text-center w-full lg:w-1/3 p-4">
    <div className=" p-4 flex flex-col justify-center items-center bg-white rounded-lg shadow-lg overflow-hidden">
      <Image
        src={img}
        alt={name}
        className=" "
        width={60}
        height={30}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  </div>
);
const Carousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length / 3 - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length / 3 - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full">
      {/* Carousel Wrapper */}
      <div className="relative w-[80%] md:w-[90%] mx-auto overflow-hidden">
        {/* Carousel Inner */}
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100)}%)` }}
        >
          {cards.map((card) => (
            <Card
              key={card.id}
              img={card.img}
              name={card.name}
              text={card.text}
            />
          ))}
        </div>
      </div>
      {/* Carousel Controls */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-lg border border-black focus:outline-none"
      >
        <Icon icon="majesticons:arrow-left-line" width="24" height="24" />{" "}
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 font-bold text-2xl rounded-lg border border-black focus:outline-none"
      >
        <Icon icon="majesticons:arrow-right-line" width="24" height="24" />{" "}
      </button>
    </div>
  );
};

export default Carousel;
