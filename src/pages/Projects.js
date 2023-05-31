import React from "react";
import { FcApproval } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { SiVercel } from "react-icons/si";
import portfolio1 from "../assets/portfolio/portfolio1.png";

const Projects = () => {
  return (
    <main className="h-auto w-[100vw] bg-[--primary-red1] text-[--primary-black] p-10 flex flex-col items-center justify-center ">
      <div className="w-[100%]  flex flex-col items-center py-10">
        <h1 className="text-3xl text-white uppercase tracking-wide">
          Portfolio
        </h1>
        <p className=" flex  font-semibold tracking-wider my-5">
          Each Project is a Unique piece of development{" "}
          <FcApproval className="text-2xl" />
        </p>
      </div>
      <div className="md:w-[70%] my-5">
        <div className="h-[50vh] sm:h-auto w-[100%] bg-white rounded-md p-2 grid  grid-cols-1 items-center md:grid-cols-2 md:h-[50vh] ">
          <div className="w-[100%] text-center flex flex-col items-center ">
            <h1 className="font-semibold text-xl tracking-wider">
              Yummy Slice Pizza
            </h1>
            <p className="w-[70%]  hidden sm:block my-1 md:my-5 lg:my-7">
              This is Restaurant Website made for my cousin for his Startup
            </p>
            <div className="w-[100%] flex justify-center items-center my-4">
              <button className="px-2 py-1 bg-purple-600 text-white rounded-md mx-5 flex justify-center items-center">
                <SiVercel className="mr-2" /> See Live
              </button>
              <button className="px-2 py-1 bg-slate-500 text-white rounded-md mx-1 flex justify-center items-center">
                <BsGithub className="mr-2 text-lg" /> Source Code
              </button>
            </div>
          </div>
          <div className="w-[100%] flex justify-center ">
            <img
              src={portfolio1}
              alt=""
              className="h-auto w-[80%] sm:w-[90%] shadow-lg "
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
