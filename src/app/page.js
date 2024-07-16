import Image from "next/image";
import Benefit from "./components/Benefit";
import Explore from "./components/Explore";
import FAQs from "./components/FAQs";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center  py-2 md:px-20 mx-auto max-w-[1430px]">
      <Hero />
      <Benefit />
      <Testimonial />
      <FAQs />
      <Explore />
    </section>
  );
}
