import React from "react";
import img from "../assets/footer2.png";
import { SiGmail } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <main className="h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] w-[100vw] text-white bg-[--primary-black] flex justify-between  flex-col">
      <div className="flex justify-end md:mr-40 mr-20 lg:mt-10">
        <a
          href="https://github.com/ucantbe-jagmeet"
          target="_blank"
          rel="noreferrer"
          className="text-[--primary-red1] text-6xl mr-4 mt-10 md:mr-10 md:scale-125"
        >
          <BsGithub />
        </a>
        <a
          href="https://twitter.com/ucantbe_jagmeet"
          target="_blank"
          rel="noreferrer"
          className="text-[--primary-red1] text-6xl mr-4 mt-10 md:mr-10 md:scale-150"
        >
          <AiFillTwitterCircle />
        </a>
        <a
          href="https://www.linkedin.com/in/jagmeet-singh-8a02931b0/"
          target="_blank"
          rel="noreferrer"
          className="text-[--primary-red1] text-6xl mr-4 mt-10 md:mr-10 md:scale-125"
        >
          <BsLinkedin />
        </a>
      </div>
      <div className="">
        <img src={img} alt="" className="w-[100%] " />
      </div>
    </main>
  );
};

export default Footer;
