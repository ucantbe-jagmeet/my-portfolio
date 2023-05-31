import React from "react";
import Navbar from "./BigNavbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const SharedLayout = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default SharedLayout;
