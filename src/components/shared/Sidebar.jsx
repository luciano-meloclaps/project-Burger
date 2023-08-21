import React from "react";
import {
  BiSolidBadgeDollar,
  BiSolidHome,
  BiSolidChat,
  BiSolidTrashAlt,
  BiSolidWrench,
  BiSolidBell,
  BiSolidLogIn,
} from "react-icons/bi";

const Sidebar = (props) => {
  const { showMenu } = props;

  return (
    <div
      className={`bg-pink-user-0 z-50 fixed xl:left-0 top-0 w-36  h-full flex flex-col justify-between py-10  rounded-br-2xl rounded-tr-2xl
 -left-full transition-all ${
        showMenu ? "left-0" : "-left-full"
      }`}
    >
      <div>
        {/*Sidebar Items*/}
        <ul>
          
          <li className=" pl-6 mt-10 mb-8 items-center text-center flex flex-col ">
            {/* Sidebar Logo */}
            <h1>
              <img
                className="bg-found-user-0 p-2 border-solid border-4 border-red-user-0 rounded-full object-cover"
                width={"90px"}
                src="public\iconLogo.png"
              ></img>
              <a href="#"></a>
            </h1>
            
          </li>

          {/* Sidebar Icon */}
          <div className="pl-8">
            <li className="bg-found-user-0 p-4 rounded-tl-3xl pl-5 rounded-bl-3xl">
              {/*Icon Home*/}
              <a
                href="#"
                className="  bg-red-user-0 p-4 text-pink-user-0 rounded-xl flex justify-center"
              >
                <BiSolidHome className="text-xl xl:text-2xl"></BiSolidHome>
              </a>
            </li>
            <li className="hover:bg-found-user-0 p-4 rounded-tl-2xl rounded-bl-2xl group transition-colors">
              {/*Icon Dollar*/}
              <a
                href="#"
                className="group-hover:bg-red-user-0 p-4 flex justify-center rounded-xl text-white-user-0 group-hover:text-pink-user-0 transition-colors "
              >
                <BiSolidBadgeDollar className="text-xl xl:text-2xl"></BiSolidBadgeDollar>
              </a>
            </li>
            <li className="hover:bg-found-user-0 p-4 rounded-tl-2xl rounded-bl-2xl group transition-colors">
              {/*Icon Chat*/}
              <a
                href="#"
                className="group-hover:bg-red-user-0 p-4 flex justify-center rounded-xl text-white-user-0 group-hover:text-pink-user-0 transition-colors "
              >
                <BiSolidChat className="text-xl xl:text-2xl"></BiSolidChat>
              </a>
            </li>
            <li className="hover:bg-found-user-0 p-4 rounded-tl-2xl rounded-bl-2xl group transition-colors">
              {/*Icon Trash*/}
              <a
                href="#"
                className="group-hover:bg-red-user-0 p-4 flex justify-center rounded-xl text-white-user-0 group-hover:text-pink-user-0 transition-colors "
              >
                <BiSolidTrashAlt className="text-xl xl:text-2xl"></BiSolidTrashAlt>
              </a>
            </li>
            <li className="hover:bg-found-user-0 p-4 rounded-tl-2xl rounded-bl-2xl group transition-colors">
              {" "}
              {/*Icon Notification*/}
              <a
                href="#"
                className="group-hover:bg-red-user-0  p-4 flex justify-center rounded-xl text-white-user-0 group-hover:text-pink-user-0 transition-colors "
              >
                <BiSolidBell className="text-x xl:text-2xl"></BiSolidBell>
              </a>
            </li>
            <li className="hover:bg-found-user-0 p-4 rounded-tl-2xl rounded-bl-2xl group transition-colors">
              {" "}
              {/*Icon Settings*/}
              <a
                href="#"
                className="group-hover:bg-red-user-0 p-4 flex justify-center rounded-xl text-white-user-0 group-hover:text-pink-user-0 transition-colors "
              >
                <BiSolidWrench className="text-xl xl:text-2xl"></BiSolidWrench>
              </a>
            </li>
          </div>
        </ul>
      </div>

      <div>
        {/*Log out*/}
        <ul className="pl-5 py-10">
          <li className="hover:bg-found-user-0 p-4 rounded-tl-2xl rounded-bl-2xl group transition-colors">
            {" "}
            {/*Icon Log out*/}
            <a
              href="#"
              className="group-hover:bg-red-user-0 p-4 flex justify-center rounded-xl text-white-user-0 group-hover:text-pink-user-0 transition-colors "
            >
              <BiSolidLogIn className="text-xl xl:text-2xl"></BiSolidLogIn>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
