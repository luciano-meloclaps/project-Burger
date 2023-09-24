import React from "react";
import { Image } from "@nextui-org/react";

function AboutUs() {
  return (
    <div className="grid grid-cols-6 p-10 justify-items-center items-center bg-pink-user-0 text-white">
      <div className="col-span-2 ml-56">
        <Image
          isBlurred
          src="public\pexels-gonzalo-acuña-10922929-PhotoRoom.png-PhotoRoom.png"
          alt="Logo"
          width={400}
          height={800}
        />
      </div>
      <div className="flex-colum text-center col-span-2 ">
        <h1 className="text-5xl text-red-user-0 font-title my-5">
          Sobre nosotros
        </h1>
        <p className="text-sm font-body text-center px-10">
          Somos un restaurante de hamburguesas que se enorgullece de servir solo
          los ingredientes más frescos y de alta calidad. Nuestro objetivo es
          brindar una experiencia gastronómica única y satisfacer a nuestros
          clientes con cada bocado.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
