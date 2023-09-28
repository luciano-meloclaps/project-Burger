import React from "react";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import "./header.css";

export const Header = () => {
  const [activeTab, setActiveTab] = useState("burgers");
  return (
    <header className="lg:px-28 px-6">
      {/*Tabs*/}
      <nav className="font-body text-black-user-0 flex items-center md:text-base justify-between md:justify-start md:gap-8">
        <a
          href="#"
          className={` pr-4 text-sm sm:text-2xl uppercase${
            activeTab === "burgers" ? "text-pink-user-0" : ""
          }`}
          onClick={() => setActiveTab("burgers")}
        >
          BURGERS
          {activeTab === "burgers" && <div className="active-line" />}
        </a>
        <a
          href="#"
          className={` pr-4 text-sm sm:text-2xl uppercase ${
            activeTab === "combos" ? "text-pink-user-0" : ""
          }`}
          onClick={() => setActiveTab("combos")}
        >
          Combos
          {activeTab === "combos" && <div className="active-line" />}
        </a>
        <a
          href="#"
          className={` pr-4 text-sm sm:text-2xl uppercase ${
            activeTab === "fries" ? "text-pink-user-0" : ""
          }`}
          onClick={() => setActiveTab("fries")}
        >
          Fritas
          {activeTab === "fries" && <div className="active-line" />}
        </a>
        <a
          href="#"
          className={`pr-4 text-sm sm:text-2xl uppercase ${
            activeTab === "nuggets" ? "text-pink-user-0" : ""
          }`}
          onClick={() => setActiveTab("nuggets")}
        >
          Nuggets
          {activeTab === "nuggets" && <div className="active-line" />}
        </a>
        {/*<form className="">
          <div className="w-full relative">
            <BiSearch className="absolute  text-white-user-0 left-3 top-1/2 -translate-y-1/2 text-red-user-0-user-0"></BiSearch>
            <input
              type="text"
              className="bg-pink-user-0 text-found-user-0 w-full py-2 pl-10 pr-4 rounded-xl outline-none text-white-user-0-user-0 "
              placeholder="Buscar"
            />
          </div>
        </form>*/}
      </nav>
    </header>
  );
};

export default Header;
