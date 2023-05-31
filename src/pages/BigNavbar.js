import { useState } from "react";

import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const navLinks = [
  {
    id: 1,
    href: "/",
    text: "Home",
  },
  {
    id: 2,
    href: "/about",
    text: "About",
  },
  {
    id: 3,
    href: "/projects",
    text: "Projects",
  },
  {
    id: 4,
    href: "/contact",
    text: "Contact",
  },
];

const BigNavbar = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <main className="h-14 w-[100%] flex items-center py-4 justify-around  bg-[--primary-black] ">
      <div className="text-[--primary-red1]  text-2xl md:ml-32">
        <h1>Logo</h1>
      </div>
      <div>
        <FaBars className="text-[--primary-red1] text-2xl hover:text-[--primary-green] hover:rotate-[-90deg] transition-all duration-300 cursor-pointer hover:scale-105 md:hidden" />
      </div>
      <div className="w-[50%] text-xl hidden md:block ">
        <ul className="flex justify-evenly">
          {navLinks.map((links) => {
            const { id, href, text } = links;

            return (
              <li
                key={id}
                className="text-[--primary-red1] cursor-pointer hover:text-[--primary-green] ease-in  duration-200 "
                onMouseEnter={() => setIsHover(!isHover)}
                onMouseLeave={() => setIsHover(!isHover)}
              >
                <NavLink to={href}>{text}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default BigNavbar;
