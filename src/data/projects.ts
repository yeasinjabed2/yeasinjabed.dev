import { AiFillGithub } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";

export const projects = [
  {
    id: 1,
    title: "Currency Exchange",
    description:
      "A currency exchange app that allows users to convert between different currencies.The application utilize predetermined exchange rates to deliver accurate conversion results.",
    cover: "",
    tags: [
      "Next.js",
      "ReactJs",
      "Typescript",
      "Materia-UI",
      "Socket",
      "Redux",
      "MongoDB",
      "Express",
      "Postfix",
    ],
    links: [
      { title: "Github", icon: AiFillGithub, url: "https://github.com" },
      { title: "Live", icon: HiOutlineExternalLink, url: "https://github.com" },
    ],
  },
  {
    id: 2,
    title: "Diagnostic Lab Management",
    cover: "",
    description:
      "A system that handles sample tracking, test management, result reporting and invoicing. This system enhances lab efficiency, patient care and financial management",
    tags: ["ReactJs", "Styled-component", "JWT", "Redux", "MongoDB", "NodeJS"],
    links: [
      { title: "Github", icon: AiFillGithub, url: "https://github.com" },
      { title: "Live", icon: HiOutlineExternalLink, url: "https://github.com" },
    ],
  },
  {
    id: 3,
    title: "LeaderBoard Generator",
    cover: "",
    description:
      "A system that allows users to manage PUBG sports points and generate customized leaderboards.",
    tags: ["ReactJs", "JWT", "Styled-component", "Redux", "MongoDB", "NodeJS"],
    links: [
      { title: "Github", icon: AiFillGithub, url: "https://github.com" },
      { title: "Live", icon: HiOutlineExternalLink, url: "https://github.com" },
    ],
  },
];
