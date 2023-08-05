import React from "react";
import {
  BiSolidGame,
  BiSolidBadgeDollar,
  BiSolidHome,
  BiSolidChat,
  BiSolidTrashAlt,
  BiSolidWrench,
  BiSolidBell,
  BiSolidLogIn,
} from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="bg-[#000000] fixed left-0 top-0 w-28 h-full flex flex-col justify-between">
      <div> {/*Sidebar Items*/}
        <ul className="pl-5">
          <li> {/*Icon Logo*/}
            {" "}
            <h1 className="text-[#F4CF2A] text-5xl uppercase font-bold my-8 ">
              <a href="#" className="bg-yellow-300">
                <BiSolidGame></BiSolidGame>
              </a>
            </h1>
          </li>
          <li className="bg-[#262626] p-4 rounded-tl-2xl rounded-bl-2xl"> {/*Icon Home*/}
            <a
              href="#"
              className="bg-[#F4CF2A] p-4  rounded-xl flex justify-center"
            >
              <BiSolidHome className="text-2xl"></BiSolidHome>
            </a>
          </li>
          <li className="hover:bg-[#262626] p-4 rounded-tl-2xl rounded-bl-2xl group transition-colors">{/*Icon Dollar*/}
            <a
              href="#"
              className="group-hover:bg-[#F4CF2A] p-4 flex justify-center rounded-xl text-[#F4CF2A] group-hover:text-[#000000] transition-colors "
            >
              <BiSolidBadgeDollar className="text-2xl"></BiSolidBadgeDollar>
            </a>
          </li>
          <li className="hover:bg-[#262626] p-4 rounded-tl-2xl rounded-bl-2xl group transition-colors">{/*Icon Chat*/}
            <a
              href="#"
              className="group-hover:bg-[#F4CF2A] p-4 flex justify-center rounded-xl text-[#F4CF2A] group-hover:text-[#000000] transition-colors "
            >
              <BiSolidChat className="text-2xl"></BiSolidChat>
            </a>
          </li>
          <li className="hover:bg-[#262626] p-4 rounded-tl-2xl rounded-bl-2xl group transition-colors">{/*Icon Trash*/}
            <a
              href="#"
              className="group-hover:bg-[#F4CF2A] p-4 flex justify-center rounded-xl text-[#F4CF2A] group-hover:text-[#000000] transition-colors "
            >
              <BiSolidTrashAlt className="text-2xl"></BiSolidTrashAlt>
            </a>
          </li>
          <li className="hover:bg-[#262626] p-4 rounded-tl-2xl rounded-bl-2xl group transition-colors"> {/*Icon Notification*/}
            <a
              href="#"
              className="group-hover:bg-[#F4CF2A] p-4 flex justify-center rounded-xl text-[#F4CF2A] group-hover:text-[#000000] transition-colors "
            >
              <BiSolidBell className="text-2xl"></BiSolidBell>
            </a>
          </li>
          <li className="hover:bg-[#262626] p-4 rounded-tl-2xl rounded-bl-2xl group transition-colors"> {/*Icon Settings*/}
            <a
              href="#"
              className="group-hover:bg-[#F4CF2A] p-4 flex justify-center rounded-xl text-[#F4CF2A] group-hover:text-[#000000] transition-colors "
            >
              <BiSolidWrench className="text-2xl"></BiSolidWrench>
            </a>
          </li>
        </ul>
      </div>
      
      <div> {/*Log out*/}
        <ul className="pl-4">
          <li className="hover:bg-[#262626] p-4 rounded-tl-2xl rounded-bl-2xl group transition-colors"> {/*Icon Log out*/}
            <a
              href="#"
              className="group-hover:bg-[#F4CF2A] p-4 flex justify-center rounded-xl text-[#F4CF2A] group-hover:text-[#000000] transition-colors "
            >
              <BiSolidLogIn className="text-2xl"></BiSolidLogIn>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
