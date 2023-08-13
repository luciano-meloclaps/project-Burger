import React from "react";

const Card = (props) => {
  const { img, title, description, price } = props;

  return (
    //Card
    <div className="bg-black p-8 flex flex-col items-center pb-4 gap-3 text-center rounded-3xl ">
      <img
        src={img}
        className="w-40 h-40 rounded-3xl  object-cover -mt-20 shadow-2xl "
      ></img>
      <p className="text-xl text-gray-400">{title}</p>
      <span className="text-gray-400">{price}</span>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
