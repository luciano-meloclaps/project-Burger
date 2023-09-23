import React from "react";
import { Image } from "@nextui-org/react";

function AboutUs() {
  return (
    <div className="bg-pink-user text-white font-body">
      <div className="flex flex-col items-center justify-center py-10">
        <Image
          isBlurred
          src="public\pexels-gonzalo-acuña-10922929-PhotoRoom.png-PhotoRoom.png"
          alt="Logo"
          width={200}
          height={200}
        />
        <h1 className="text-4xl font-title my-5">Sobre nosotros</h1>
        <p className="text-lg font-body text-center px-10">
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
