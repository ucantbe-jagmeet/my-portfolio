import { useState } from "react";

const navLinks = [
  {
    id: 1,
    href: "/home",
    text: "Home",
  },
  {
    id: 1,
    href: "/about",
    text: "About",
  },
  {
    id: 1,
    href: "/technologies",
    text: "Technologies",
  },
  {
    id: 1,
    href: "/contact",
    text: "Contact",
  },
];

const BigNavbar = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <main className="h-10 flex items-center pt-4">
      <div className="text-[--primary-color] w-full text-xl">Logo</div>
      <div className="  w-full text-xl ">
        <ul className="flex justify-evenly">
          {navLinks.map((links) => {
            const { id, href, text } = links;

            return (
              <li
                className="text-[--primary-color] cursor-pointer hover:text-[--primary-green] ease-in  duration-200 "
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
