import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { BsFillBootstrapFill, BsGithub } from "react-icons/bs";
import { SiExpress, SiPostman } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const data = [
  { id: 1, text: "HTML5", icon: <AiFillHtml5 /> },
  { id: 2, text: "CSS3", icon: <FaCss3Alt /> },
  { id: 3, text: "Tailwind", icon: <SiTailwindcss /> },
  { id: 4, text: "Bootstrap", icon: <BsFillBootstrapFill /> },
  { id: 5, text: "React", icon: <FaReact /> },
  { id: 6, text: "Typescript", icon: <SiTypescript /> },
  { id: 7, text: "REDUX TOOLKIT", icon: <TbBrandRedux /> },
  { id: 8, text: "NODE JS", icon: <FaNodeJs /> },
  { id: 9, text: "EXPRESS JS", icon: <SiExpress /> },
  { id: 10, text: "MONGO DB", icon: <DiMongodb /> },
  { id: 11, text: "Github", icon: <BsGithub /> },
  { id: 12, text: "Postman", icon: <SiPostman /> },
];

export default data;
