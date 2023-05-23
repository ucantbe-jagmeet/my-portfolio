import React from "react";

import About from "./About";
import BigNavbar from "./BigNavbar";
import Img from "../assets/img.png";
import Me from "../assets/me.jpeg";

const Home = () => {
  return (
    <>
      <main className="home--main ">
        <BigNavbar />
        <header className="home--header">
          <img
            src={Me}
            alt=""
            className=" home--header--img1 rounded-3xl  w-52 pb-72 "
          />
          <img
            src={Img}
            alt=""
            className="home--header--img2  pt-[25rem] w-screen "
          />
        </header>
        <section className="home--about">
          <About />
        </section>
      </main>
    </>
  );
};

export default Home;
