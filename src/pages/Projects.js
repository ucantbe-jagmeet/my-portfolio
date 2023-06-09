import React from "react";
import { FcApproval } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { SiVercel } from "react-icons/si";
import portfolio1 from "../assets/portfolio/portfolio1.png";
import portfolioData from "../assets/portfolio/portfolioData";

const Projects = () => {
  return (
    <main className="h-[100vh] w-[100vw] bg-[--primary-red1] text-[--primary-black] p-7  flex flex-col items-center justify-center ">
      <div className="w-[100%]  flex flex-col items-center py-10">
        <h1 className="text-3xl text-[--primary-white] uppercase tracking-wide">
          Portfolio
        </h1>
        <p className=" flex  font-semibold tracking-wider my-5">
          Each Project is a Unique piece of development{" "}
          <FcApproval className="text-2xl" />
        </p>
      </div>
      <div className="h-full md:w-[70%]  ">
        {portfolioData.map((links) => {
          const { id, title, text, href1, href2, img } = links;
          return (
            <>
              <div
                key={id}
                className="h-auto sm:h-auto w-[100%] rounded-md p-2 grid grid-cols-1 items-center md:grid-cols-2 md:h-[50vh] my-5 bg-white"
              >
                <div className="w-[100%] text-center flex flex-col items-center bg-white">
                  <h1 className="font-semibold text-xl tracking-widest">
                    {title}
                  </h1>
                  <p className="w-[70%]  hidden sm:block my-1 md:my-5 lg:my-7">
                    {text}
                  </p>
                  <div className="w-[100%] flex justify-center items-center my-4">
                    <a
                      href={href1}
                      target="_blank"
                      rel="noreferrer"
                      className="px-2 py-1 bg-purple-600 text-white rounded-md mx-5 flex justify-center items-center"
                    >
                      <SiVercel className="mr-2" /> See Live
                    </a>
                    <a
                      href={href2}
                      target="_blank"
                      rel="noreferrer"
                      className="px-2 py-1 bg-slate-500 text-white rounded-md mx-1 flex justify-center items-center"
                    >
                      <BsGithub className="mr-2 text-lg" /> Source Code
                    </a>
                  </div>
                </div>
                <div className="w-[100%] flex justify-center my-4">
                  <img
                    src={img}
                    alt=""
                    className="h-auto w-[80%] sm:w-[90%] shadow-md rounded-lg shadow-red-300"
                  />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </main>
  );
};

export default Projects;
