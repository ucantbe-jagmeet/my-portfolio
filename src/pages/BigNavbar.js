import React from "react";

const BigNavbar = () => {
  return (
    <main className="h-10 flex items-center">
      <div className="text-[--primary-color] w-full text-xl">Logo</div>
      <div className=" text-[--primary-color] w-full text-xl">
        <ul className="flex justify-evenly">
          <li className="px-2">Home</li>
          <li className="px-2">About</li>
          <li className="px-2">Project</li>
          <li className="px-2">Contact</li>
        </ul>
      </div>
    </main>
  );
};

export default BigNavbar;
