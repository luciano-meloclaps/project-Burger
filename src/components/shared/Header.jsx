import React from "react";
import { BiSearch } from "react-icons/bi";

export const Header = () => {
  return (
    <header>
      {/*Title and Search*/}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl text-gray-300">Burger Crack </h1>
          <p className="text-gray-500">sadasd</p>
        </div>
        <form>
          <div className="w-full relative">
            <BiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white"></BiSearch>
            <input
              type="text"
              className="bg-[#000000] w-full py-2 pl-10 pr-4 rounded-lg outline-none text-white"
              placeholder="Search"
            />
          </div>
        </form>
      </div>
      {/*Tabs*/}
      <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
        <a
          href="#"
          className="relative py-2 pr-4 before:w-3/4 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0
      before:rounded-full before:-bottom-[1px] text-[#5cceb5] "
        >
          Mas pedidos
        </a>
        <a href="#" className="py-2 pr-4">
          Cold dishes
        </a>
        <a href="#" className="py-2 pr-4">
          Soup
        </a>
        <a href="#" className="py-2">
          Grill
        </a>
      </nav>
    </header>
  );
};

export default Header;
