import React from "react";

const Card = (props) => {
  const { img, title, description, price } = props;

  return (
    //Card
    <div className="bg-red-user-0 shadow-md p-8 mb-12 flex flex-col items-center flex-wrap pb-8 gap-3 text-center rounded-b-3xl ">
      <img
        src={img}
        className="w-56 h-56 rounded-3xl object-cover -mt-28 shadow-2xl "
      ></img>
      <p className="text-2xl text-white-user-0 uppercase font-bold">{title}</p>
      <span className="text-white-user-0 text-xl">{price}</span>
      <p className="text-gray-600 text-lg">{description}</p>
    </div>
  );
};

export default Card;
