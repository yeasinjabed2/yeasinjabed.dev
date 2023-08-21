import { NavLayout } from "@/layout/NavLayout";
import mePng from "@/static/images/me.png";
import { oxanium, poppins } from "@/styles/fonts";
import Image from "next/image";
import { ReactNode } from "react";

const Skills = () => {
  return (
    <div className={oxanium.className + " relative mt-10 pb-20"}>
      <span className="about-me">About Me</span>
      <div className="about-section  border-2 border-[--active-40] rounded-lg flex space-between relative">
        <div className={poppins.className + " about-text"}>
          <div className="text-sm font-light leading-7">
            As a Self-taught Full Stack Developer, I try to leverage my
            experience in both front-end and back-end technologies to create web
            applications that address diverse needs. My journey has been marked
            by continuous learning and a commitment to improving my skills. With
            a passion for problem-solving, I try to make a positive impact by
            crafting software solutions that simplify tasks and enhance user
            experiences.
            <br />
            <br />
            In addition to my technical skills, I possess strong problem-solving
            abilities, a keen eye for detail, and a commitment to staying
            up-to-date with the latest industry trends and best practices. My
            experience as a Full Stack Developer has honed my ability to manage
            projects, meet deadlines, and communicate effectively with both
            technical and non-technical stakeholders.
            <br /> <br />
            Beyond my professional pursuits, I have an unwavering passion for
            technology, electronics, machines, and engines. This fascination has
            been a driving force in my personal and academic endeavors, leading
            me to explore the intricacies of how these elements shape our world.
            <br /> <br />
            From a young age, I have been captivated by the inner workings of
            machines and engines, constantly seeking to understand the mechanics
            behind their operation. This curiosity has translated into hands-on
            experiences, where I have tinkered with various devices, repaired
            electronics,
            <br /> <br />
            As an individual who finds solace in the hum of engines and the
            elegance of circuitry, I am excited to merge my technical skills as
            a Full Stack Developer with my passion for technology, electronics,
            machines, and engines. This unique blend of interests not only fuels
            my drive to excel in the tech industry but also ensures a holistic
            and creative approach to problem-solving and innovation.
            <br /> <br />
          </div>
        </div>
        <div className="my-photo hidden sm:block">
          <Image src={mePng} alt="skills" />
        </div>
      </div>

      <h1
        style={{ filter: "drop-shadow(1px 2px 10px #3ED88E)" }}
        className="text-2xl md:text-4xl text-[--text-primary] text-center py-10 mt-10 tracking-widest font-semibold"
      >
        CURRENT SKILL SETS
      </h1>
      <h3 className="text-1xl inline-block">Frontend</h3>
      <div className="flex flex-wrap justify-start gap-3 mt-4">
        {frontendSkills.map((skill, index) => (
          <button
            key={index}
            className="text-[--active] border border-[--active-40] p-1 px-3 rounded-md"
          >
            {skill}
          </button>
        ))}
      </div>
      <h3 className="text-1xl inline-block mt-10">Backend</h3>
      <div className="flex flex-wrap justify-start gap-3 mt-4">
        {backendSkills.map((skill, index) => (
          <button
            key={index}
            className="text-[--active] border border-[--active-40] p-1 px-3 rounded-md"
          >
            {skill}
          </button>
        ))}
      </div>
    </div>
  );
};

Skills.getLayout = (page: ReactNode) => <NavLayout>{page}</NavLayout>;

export default Skills;

const frontendSkills = [
  "React",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "SASS/SCSS",
  "Tailwind CSS",
  "Material UI",
  "Styled Components",
  "Next.js",
  "JWT",
  "Webpack",
  "Redux",
  "Redux Toolkit",
  "React Router",
  "React Query",
  "React Hook Form",
  "Framer Motion",
  "Bootstrap",
  "Figma",
];
const backendSkills = [
  "Node.js",
  "Express",
  "MongoDB",
  "REST APIs",
  "Design patterns",
  "OOP",
  "Socket.io",
  "Docker",
  "Git",
  "Nginx",
  "PM2",
  "Postfix",
  "Linux",
  "Vim",
];
