import React from "react";

import About from "./About";
import BigNavbar from "./BigNavbar";
import Img from "../assets/img.png";
import Img2 from "../assets/cartoon.jpg";
import Technologies from "./Technologies";
import Projects from "./Projects";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <main className="home--main  bg-[--primary-black] hide-scrollbar">
        <header className="home--header ">
          <img
            src={Img2}
            alt=""
            className="home--header--img2 w-[80%] rounded-2xl cover  sm:hidden mb-40"
          />
          <img
            src={Img}
            alt=""
            className="home--header--img1  pt-[22.5rem] w-screen "
          />
        </header>
        <section>
          <About />
        </section>
        <section>
          <Technologies />
        </section>
        <section>
          <Projects />
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </>
  );
};

export default Home;
