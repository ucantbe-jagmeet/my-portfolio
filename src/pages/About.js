import React, { useState } from "react";
import me from "../assets/me.jpeg";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <main className=" h-auto md:h-[100vh] bg-[--primary-white] flex justify-center items-center py-20">
      <div className="h-[90%] md:w-[80%] grid grid-cols-1 md:grid-cols-2 items-center justify-items-center ">
        <div className=" w-[40%] sm:w-[40%] md:w-[60%] lg:w-[45%]">
          <img
            src={me}
            alt=""
            className=" rounded-md shadow-lg -rotate-3 hover:rotate-0 hover:scale-105 cursor-pointer"
          />
        </div>
        <div className=" w-[70%] text-black bg-[--primary-white] mt-10 md:w-[80%] md:mt-0">
          <h1 className="text-[--primary-red1] text-3xl ">About Me</h1>
          <h2 className="text-2xl  ">
            A dedicated Full-Stack Developer based in Himachal Pradesh, India
          </h2>
          <p className="tracking-wide pt-3 ">
            As a Junior Full Stack Developer, I possess an impressive arsenal of
            skills in JAVASCRIPT, REACTJS, TAILWIND, REDUX TOOLKIT, NODEJs,
            EXPRESSJs and MONGODB. I excel in designing and maintaining
            responsive websites that offer a smooth user experience.
            {!isExpanded && (
              <button
                className="text-md text-[--primary-red1]"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                ...Read More
              </button>
            )}
            {isExpanded && (
              <>
                <p className="tracking-wide">
                  My expertise lies in crafting dynamic, engaging interfaces
                  through writing clean and optimized code and utilizing
                  cutting-edge development tools and techniques. I am also a
                  team player who thrives in collaborating with cross functional
                  teams to produce outstanding web applications."
                </p>
                <button
                  className="text-md text-[--primary-blue]"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  Ok, Got It
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
