import React from "react";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";


const Card = (props) => {
  const { img, title, description, price } = props;

  return (
    //Card
    <div className="font-body bg-red-user-0 shadow-md p-4 mb-12 flex justify-between items-center flex-col flex-wrap pb-8 gap-3 text-center rounded-b-3xl ">
      <img
        src={img}
        className="w-56 h-56 rounded-3xl object-cover -mt-28 shadow-2xl "
      ></img>
      <p className="text-4xl text-pink-user-0 uppercase font-title">{title}</p>
      <span className="text-gray-200  text-xl">{price}</span>
      <p className="text-gray-700 text-ms">{description}</p>
      <Button className="box-border bg-pink-user-0 text-red-user-0 w-36 2xl:w-60">Añadir</Button>
    </div>
  );
};

export default Card;
