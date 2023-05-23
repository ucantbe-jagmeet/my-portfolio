import React from "react";
import homeImg from "../assets/home-img.png";
import Img1 from "../assets/jagmeet_singh.png";
import Img2 from "../assets/fullStack.png";

import Img from "../assets/img.png";
import About from "./About";
import BigNavbar from "./BigNavbar";
const Home = () => {
  return (
    <>
      <main className="h-fit ">
        <BigNavbar />
        <div className="">
          <div className="pt-[21rem] ">
            <img src={Img} alt="" className="w-screen" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
