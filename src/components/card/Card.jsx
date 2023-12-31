import { useState } from "react";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";

const Card = (props) => {
  const { id, img, title, description, price } = props;
  const [countAddCar, setCountAddCar] = useState(0);

  return (
    //Card
    <motion.div
      whileHover={{ scale: 1.13 }}
      transition={{ type: "spring", stiffness: 600, damping: 25 }}
      className=" box font-body bg-red-user-0 shadow-md p-4 mb-16 flex justify-between items-center flex-col flex-wrap pb-8 gap-3 text-center rounded-b-3xl "
    >
      <img
        src={img}
        className="w-56 h-56 rounded-3xl object-cover -mt-24 shadow-2xl "
      ></img>
      <p className="text-4xl text-pink-user-0 uppercase font-title">{title}</p>
      <span className="text-pink-user-0  text-xl">{price}</span>
      <p className="text-pink-user-0 text-base 2xl:px-8 px-4">{description}</p>
      <p>{id}</p>
      <Button
        className="bg-pink-user-0 text-red-user-0 w-52 font-bold 2xl:w-60"
        onClick={() => {
          setCountAddCar(countAddCar + 1);
          console.log(countAddCar);
        }}
      >
        Añadir {countAddCar > 0 ? `:  ${countAddCar}` : ""}
      </Button>
    </motion.div>
  );
};
export default Card;
