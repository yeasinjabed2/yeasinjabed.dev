import { AiFillGithub } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";

const getName = (len: number, letter: string) =>
  Array.from({ length: len }, (_, i) => letter + (i + 1));

export const projects = [
  {
    id: 1,
    title: "Currency Exchange",
    description:
      "A currency exchange app that allows users to convert between different currencies.The application utilize predetermined exchange rates to deliver accurate conversion results.",
    images: getName(34, "a"),
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
      {
        title: "Live1",
        icon: HiOutlineExternalLink,
        url: "https://currency.yeasinjabed.dev/auth/login/",
      },
      {
        title: "Live2",
        icon: HiOutlineExternalLink,
        url: "https://admin.currency.yeasinjabed.dev/",
      },
    ],
  },
  {
    id: 2,
    title: "Diagnostic Lab Management",
    images: getName(15, "b"),
    description:
      "A system that handles sample tracking, test management, result reporting and invoicing. This system enhances lab efficiency, patient care and financial management",
    tags: ["ReactJs", "Styled-component", "JWT", "Redux", "MongoDB", "NodeJS"],
    links: [
      { title: "Github", icon: AiFillGithub, url: "https://github.com" },
      {
        title: "Live",
        icon: HiOutlineExternalLink,
        url: "https://diagnostic.yeasinjabed.dev/view/dashboard",
      },
    ],
  },
  {
    id: 3,
    title: "LeaderBoard Generator",
    images: getName(9, "c"),
    description:
      "A system that allows users to manage PUBG sports points and generate customized leaderboards.",
    tags: ["ReactJs", "JWT", "Styled-component", "Redux", "MongoDB", "NodeJS"],
    links: [
      { title: "Github", icon: AiFillGithub, url: "https://github.com" },
      {
        title: "Live",
        icon: HiOutlineExternalLink,
        url: "https://bdesports.yeasinjabed.dev/home",
      },
    ],
  },
];
