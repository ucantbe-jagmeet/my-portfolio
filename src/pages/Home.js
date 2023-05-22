import React from "react";
import Img1 from "../assets/jagmeet_singh.png";
import Img2 from "../assets/fullStack.png";

const Home = () => {
  return (
    <main>
      <div>
        <div className="text-white ">Hello</div>
        <div className="h-screen justify-center flex items-end flex-col pb-20">
          <img src={Img1} alt="" className="h-72" />
          <img src={Img2} alt="" className="h-10" />
        </div>
      </div>
    </main>
  );
};

export default Home;
