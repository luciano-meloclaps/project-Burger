import React from "react";
import { BiSearch } from "react-icons/bi";

export const Header = () => {
  return (
    <header className="px-6">
      {/*Title and Search*/}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-7xl text-pink-user-0 text-opacity-90 font-varia font-extralight uppercase">
            Burger Crack{""}
          </h1>
        </div>
        <form>
          <div className="w-full relative">
            <BiSearch className="absolute  text-white-user-0 left-3 top-1/2 -translate-y-1/2 text-red-user-0-user-0"></BiSearch>
            <input
              type="text"
              className="bg-pink-user-0 w-full py-2 pl-10 pr-4 rounded-lg outline-none text-white-user-0-user-0 "
              placeholder="Buscar"
            />
          </div>
        </form>
      </div>
      {/*Tabs*/}
      <nav className="text-black-user-0 sm:text-xs flex items-center md:text-xl justify-between md:justify-start md:gap-8 border-b-4 mb-6">
        <a
          href="#"
          className="relative py-4 pr-4 before:w-5/6 before:h-[5px] before:absolute before:bg-pink-user-0 before:left-0
      before:rounded-full before:-bottom-[4px] text-pink-user-0 "
        >
          Burgers
        </a>
        <a href="#" className="py-2 text-pink-user-0  pr-4">
          Combos
        </a>
        <a href="#" className="py-2 text-pink-user-0 pr-4">
          Fritas
        </a>
        <a href="#" className="py-2 text-pink-user-0">
          Nuggets
        </a>
      </nav>
    </header>
  );
};

export default Header;
