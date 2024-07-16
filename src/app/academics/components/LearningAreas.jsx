import { Subjects } from "@/app/academics/data";
import Image from "next/image";

const Card = ({title, text, image, style}) => (
    <div className={`${style} text-center lg:flex lg:flex-col md:w-[46%] lg:w-[30%] p-8 border border-black rounded-lg shadow-[4px_4px_0_#000]`}>
      <Image src={image} width={550} height={550} />
      <h4 className=" font-bold text-lg mt-4">{title}</h4>
      <p>{text}</p>
    </div>
  );

const LearningAreas = () => {
  return (
    <section className="md:px-20 my-12 md:my-16 flex flex-col items-center">
      <p className=" mb-4 py-1 px-3 text-xs rounded-lg border border-black bg-white">
        Our Features
      </p>
      <h2 className=" font-bold text-center md:text-start text-3xl md:text-4xl font-raleway">
        What Students Learn
      </h2>
      <p className=" md:w-[68%] text-center">
        At Little Learners Academy, we strive to cultivate a love for learning
        and equip children with essential skills for their future success. Our
        academic programs cover a wide range of subjects, allowing students to
        develop a strong foundation and discover their interests. Some key areas
        of learning include
      </p>
      <div className=" mt-14 flex flex-wrap justify-between gap-10 ">
        {Subjects.map(subject => (
            <Card key={subject.title} {...subject} />
        ))}
      </div>
    </section>
  );
};

export default LearningAreas;
