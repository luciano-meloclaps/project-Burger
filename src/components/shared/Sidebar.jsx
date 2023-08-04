import React from "react";
import { RiHome3Line } from "react-icons/ri";
import { BiSolidGame } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="bg-gray-950 fixed left-0 top-0 w-28 h-full">
      <ul className="pl-5">
        <li>
          <h1 className="text-yellow-300 text-5xl uppercase font-bold text-center my-5 ">
            <a href="#" className="bg-yellow-300">
              <BiSolidGame></BiSolidGame>
            </a>
          </h1>
        </li>
        <li className="bg-gray-800 p-4 rounded-tl-2xl rounded-bl-2xl ">
          <a href="#" className="bg-yellow-300 p-4 block rounded-xl">
            <RiHome3Line className="text-xl"></RiHome3Line>
          </a>
        </li>
        <li className="p-4 rounded-tl-2xl rounded-bl-2xl ">
          <a href="#" className="p-4 block rounded-xl text-yellow-300">
            <RiHome3Line className="text-xl"></RiHome3Line>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
