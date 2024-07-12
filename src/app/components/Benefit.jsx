import { Icon } from "@iconify/react";
import { BENEFITS } from "../data";

const Card = ({ icon, title, text }) => (
  <div className=" bg-white relative flex flex-col mt-14 md:mt-0 py-10 px-5 md:pl-9 md:w-[31%] border border-black rounded-lg shadow-[4px_4px_0_#000]">
    <span className=" absolute -top-6 left-5 bg-[#FFDECC] border border-black w-fit p-3 rounded-lg">
      <Icon icon={icon} width="24" height="24" />
    </span>
    <h4 className=" text-lg font-semibold">{title}</h4>
    <p>{text}</p>
  </div>
);

const Benefit = () => {
  return (
    <section className=" my-12 md:my-16 flex flex-col items-center">
      <p className=" mb-4 py-1 px-3 text-xs rounded-lg border border-black bg-white">Children Deserve Bright Future</p>
      <h2 className=" font-bold text-3xl md:text-4xl font-raleway">Our Benefits</h2>
      <p className=" md:w-[68%] text-center">
        With a dedicated team of experienced educators, state-of-the-art
        facilities, and a comprehensive curriculum, we aim to lay a strong
        foundation for your child's future.
      </p>
      <div className=" mt-5 md:mt-14 md:flex flex-wrap gap-10 gap-y-12">
        {BENEFITS.map((benefit) => (
          <Card key={benefit.id} {...benefit} />
        ))}
      </div>
    </section>
  );
};

export default Benefit;
