import React from "react";
import footerLinks from "../assets/footerLinks";

const Contact = () => {
  return (
    <main className="h-[100vh] w-[100%] flex justify-center items-center bg-[--primary-black]">
      <div className="grid grid-cols-2 gap-5 gap-y-10 pb-20 scale-125 md:grid-cols-4 lg:scale-150">
        {footerLinks.map((link) => {
          const { id, icon, href } = link;

          return (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-[--primary-red1] sm:text-6xl mr-4  md:mr-10 md:scale-125"
            >
              {icon}
            </a>
          );
        })}
      </div>
    </main>
  );
};

export default Contact;
