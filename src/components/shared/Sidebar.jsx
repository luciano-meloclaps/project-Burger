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
      className={`bg-pink-user-0 fixed lg:left-0 top-0 w-32 h-full flex flex-col justify-between py-6 rounded-tr-2xl
      rounded-br-2xl z-50 -left-full transition-all ${
        showMenu ? "left-0" : "-left-full"
      }`}
    >
      <div>
        {/*Sidebar Items*/}
        <ul className="pl-5">
          <li>
            {/*Icon Logo*/}
            <h1 className="my-10 flex items-center">
              <a href="#">
                <img
                  src="public\weather.png"
                  style={{ width: "300px" }}
                ></img>
              </a>
            </h1>
          </li>
          <li className="bg-red p-4 rounded-tl-2xl rounded-bl-2xl">
            {/*Icon Home*/}
            <a
              href="#"
              className="bg-found-user-0 p-4 text-pink-user-0 rounded-xl flex justify-center"
            >
              <BiSolidHome className="text-2xl"></BiSolidHome>
            </a>
          </li>
          <li className="hover:bg-found-user-0 p-4 rounded-tl-2xl rounded-bl-2xl group transition-colors">
            {/*Icon Dollar*/}
            <a
              href="#"
              className="group-hover:bg-red-user-0 p-4 flex justify-center rounded-xl text-white-user-0 group-hover:text-found-user-0 transition-colors "
            >
              <BiSolidBadgeDollar className="text-2xl"></BiSolidBadgeDollar>
            </a>
          </li>
          <li className="hover:bg-found-user-0 p-4 rounded-tl-2xl rounded-bl-2xl group transition-colors">
            {/*Icon Chat*/}
            <a
              href="#"
              className="group-hover:bg-red-user-0 p-4 flex justify-center rounded-xl text-white-user-0 group-hover:text-found-user-0 transition-colors "
            >
              <BiSolidChat className="text-2xl"></BiSolidChat>
            </a>
          </li>
          <li className="hover:bg-found-user-0 p-4 rounded-tl-2xl rounded-bl-2xl group transition-colors">
            {/*Icon Trash*/}
            <a
              href="#"
              className="group-hover:bg-red-user-0 p-4 flex justify-center rounded-xl text-white-user-0 group-hover:text-found-user-0 transition-colors "
            >
              <BiSolidTrashAlt className="text-2xl"></BiSolidTrashAlt>
            </a>
          </li>
          <li className="hover:bg-found-user-0 p-4 rounded-tl-2xl rounded-bl-2xl group transition-colors">
            {" "}
            {/*Icon Notification*/}
            <a
              href="#"
              className="group-hover:bg-red-user-0  p-4 flex justify-center rounded-xl text-white-user-0 group-hover:text-found-user-0 transition-colors "
            >
              <BiSolidBell className="text-2xl"></BiSolidBell>
            </a>
          </li>
          <li className="hover:bg-found-user-0 p-4 rounded-tl-2xl rounded-bl-2xl group transition-colors">
            {" "}
            {/*Icon Settings*/}
            <a
              href="#"
              className="group-hover:bg-red-user-0 p-4 flex justify-center rounded-xl text-white-user-0 group-hover:text-found-user-0 transition-colors "
            >
              <BiSolidWrench className="text-2xl"></BiSolidWrench>
            </a>
          </li>
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
              className="group-hover:bg-red-user-0 p-4 flex justify-center rounded-xl text-white-user-0 group-hover:text-found-user-0 transition-colors "
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
