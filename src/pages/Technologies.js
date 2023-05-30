import React from "react";
import techLinks from "../assets/techLinks";

const Technologies = () => {
  return (
    <main className="h-[100vh] bg-[--primary-black]">
      <h1 className="text-[--primary-white] text-3xl text-center pt-10">
        Technologies
      </h1>
      <div className="relative w-full bg-[--primary-white]  p-16 overflow-hidden mt-10">
        <div className="flex animate absolute left-8 ">
          <div className="flex w-50 justify-around  bg-[--primary-white] items-center">
            {techLinks.map((item) => {
              const { id, text, icon } = item;
              return (
                <h1 className="">
                  <div className="flex justify-center items-center flex-col bg-[--primary-red1] rounded-full p-5 mx-4 w-24 h-24 text-[--primary-white] ">
                    <p className="text-4xl">{icon}</p>
                    <p className="text-sm text-center">{text}</p>
                  </div>
                </h1>
              );
            })}
          </div>
          <div className="flex w-50 justify-around  bg-[--primary-white] items-center">
            {techLinks.map((item) => {
              const { id, text, icon } = item;
              return (
                <h1 className="">
                  <div className="flex justify-center items-center flex-col bg-[--primary-red1] rounded-full p-5 mx-4 w-24 h-24 text-[--primary-white] ">
                    <p className="text-4xl">{icon}</p>
                    <p className="text-sm text-center">{text}</p>
                  </div>
                </h1>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Technologies;
