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
import { motion } from "framer-motion";
const Sidebar = (props) => {
  const { showMenu } = props;

  return (
    <div
      className={`bg-pink-user-0 z-50 fixed xl:left-0 top-0 w-36  h-full flex flex-col justify-between py-10  rounded-br-2xl rounded-tr-2xl
 -left-full transition-all  ${showMenu ? "left-0" : "-left-full"}`}
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
          <div className="box pl-8">
            <li className="bg-found-user-0 p-4 rounded-tl-3xl pl-5 rounded-bl-3xl">
              {/*Icon Home*/}
              <motion.a
                href="#"
                className="  bg-red-user-0 p-4 text-pink-user-0 rounded-xl flex justify-center"
                whileHover={{ scale: 1.13 }}
                transition={{ type: "spring", stiffness: 600, damping: 25 }}
              >
                <BiSolidHome className="text-xl xl:text-2xl"></BiSolidHome>
              </motion.a>
            </li>
            <li className="hover:bg-found-user-0 p-4 rounded-tl-2xl rounded-bl-2xl group transition-colors">
              {/*Icon Dollar*/}
              <motion.a
                href="#"
                className="box group-hover:bg-red-user-0 p-4 flex justify-center rounded-xl text-white-user-0 group-hover:text-pink-user-0 transition-colors "
                whileHover={{ scale: 1.13 }}
                transition={{ type: "spring", stiffness: 600, damping: 25 }}
              >
                <BiSolidBadgeDollar className="text-xl xl:text-2xl"></BiSolidBadgeDollar>
              </motion.a>
            </li>
            <li className="hover:bg-found-user-0 p-4 rounded-tl-2xl rounded-bl-2xl group transition-colors">
              {/*Icon Chat*/}
              <motion.a
                href="#"
                className="box group-hover:bg-red-user-0 p-4 flex justify-center rounded-xl text-white-user-0 group-hover:text-pink-user-0 transition-colors "
                whileHover={{ scale: 1.13 }}
                transition={{ type: "spring", stiffness: 600, damping: 25 }}
              >
                <BiSolidChat className="text-xl xl:text-2xl"></BiSolidChat>
              </motion.a>
            </li>
            <li className="hover:bg-found-user-0 p-4 rounded-tl-2xl rounded-bl-2xl group transition-colors">
              {/*Icon Trash*/}
              <motion.a
                href="#"
                className="box group-hover:bg-red-user-0 p-4 flex justify-center rounded-xl text-white-user-0 group-hover:text-pink-user-0 transition-colors "
                whileHover={{ scale: 1.13 }}
                transition={{ type: "spring", stiffness: 600, damping: 25 }}
              >
                <BiSolidTrashAlt className="text-xl xl:text-2xl"></BiSolidTrashAlt>
              </motion.a>
            </li>
            <li className="hover:bg-found-user-0 p-4 rounded-tl-2xl rounded-bl-2xl group transition-colors">
              {" "}
              {/*Icon Notification*/}
              <motion.a
                href="#"
                className="box group-hover:bg-red-user-0 p-4 flex justify-center rounded-xl text-white-user-0 group-hover:text-pink-user-0 transition-colors "
                whileHover={{ scale: 1.13 }}
                transition={{ type: "spring", stiffness: 600, damping: 25 }}
              >
                <BiSolidBell className="text-xl xl:text-2xl"></BiSolidBell>
              </motion.a>
            </li>
            <li className="hover:bg-found-user-0 p-4 rounded-tl-2xl rounded-bl-2xl group transition-colors">
              {" "}
              {/*Icon Settings*/}
              <motion.a
                href="#"
                className="box group-hover:bg-red-user-0 p-4 flex justify-center rounded-xl text-white-user-0 group-hover:text-pink-user-0 transition-colors "
                whileHover={{ scale: 1.13 }}
                transition={{ type: "spring", stiffness: 600, damping: 25 }}
              >
                <BiSolidWrench className="text-xl xl:text-2xl"></BiSolidWrench>
              </motion.a>
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
            <motion.a
              href="#"
              className="box group-hover:bg-red-user-0 p-4 flex justify-center rounded-xl text-white-user-0 group-hover:text-pink-user-0 transition-colors "
              whileHover={{ scale: 1.13 }}
              transition={{ type: "spring", stiffness: 600, damping: 25 }}
            >
              <BiSolidLogIn className="text-xl xl:text-2xl"></BiSolidLogIn>
            </motion.a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
