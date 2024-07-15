import Image from "next/image";
import heroImg from "../img/heroImg.png";

const Hero = () => {
  return (
    <div className=" mt-24 md:mt-0 my-10 md:flex gap-6">
      <Image src={heroImg} alt="Little Learners" className=" md:w-[40%]" />
      <article className=" mt-5 md:mt-0 md:w-[60%] flex flex-col justify-center text-center md:text-start">
        <p className=" mx-auto md:mx-0 w-fit mb-2 border-b border-black">Welcome to Little Learners Academy</p>
        <h2 className="[&>span]:text-[#FF8D4D] mb-4 leading-tight font-raleway font-bold text-3xl md:text-5xl">
          Where Young Minds Blossom and <span>Dreams Take Flight.</span>
        </h2>
        <p>
          Our kinder garden school provides a nurturing and stimulating
          environment, fostering a love for learning that lasts a lifetime. Join
          us as we embark on an exciting educational journey together!
        </p>
      <div className="[&>div]:p-4 [&>div>h3]:font-bold [&>div>h3]:text-2xl mt-8 p-8 flex flex-col md:flex-row justify-between border border-black rounded-lg bg-[#FFDECC] shadow-[4px_4px_0_#FFBE99]">
        <div className="">
            <h3>+7000</h3>
            <p>Students Passed Out</p>
        </div>
        <div className=" md:border-none border-y border-black">
            <h3>+37</h3>
            <p>Awards & Recognitions</p>
        </div>
        <div className="">
            <h3>+15</h3>
            <p>Experience Educators</p>
        </div>
      </div>
      </article>
    </div>
  );
};

export default Hero;
