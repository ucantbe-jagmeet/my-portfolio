import { useState } from "react";

import { FaBars } from "react-icons/fa";

const navLinks = [
  {
    id: 1,
    href: "/home",
    text: "Home",
  },
  {
    id: 2,
    href: "/about",
    text: "About",
  },
  {
    id: 3,
    href: "/Projects",
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
    <main className="h-10 w-[100%] flex items-center pt-4 justify-around bg-transparent ">
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
                className="text-[--primary-red1] cursor-pointer hover:text-[--primary-green] ease-in  duration-200 "
                onMouseEnter={() => setIsHover(!isHover)}
                onMouseLeave={() => setIsHover(!isHover)}
              >
                {isHover ? `/${text}` : `${text}`}
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default BigNavbar;
