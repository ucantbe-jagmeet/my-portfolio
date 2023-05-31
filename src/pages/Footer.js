import React from "react";
import img from "../assets/footer-img.png";
import footerLinks from "../assets/footerLinks";

const Footer = () => {
  return (
    <main className="h-auto w-[100vw] text-white bg-[--primary-black] flex justify-between  flex-col">
      <div className="flex justify-end md:pr-40 sm:pr-20 pr-10 lg:pt-3 ">
        {footerLinks.map((link) => {
          const { id, icon, href } = link;

          return (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-[--primary-red1] text-4xl sm:text-6xl mr-4 mt-10 md:mr-10 md:scale-125"
            >
              {icon}
            </a>
          );
        })}
      </div>
      <div className="">
        <img src={img} alt="" className="w-[100%] pb-14" />
      </div>
    </main>
  );
};

export default Footer;
