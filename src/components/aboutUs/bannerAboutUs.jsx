import React from "react";

function BannerAboutUs() {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-9 xl:p-10 p-6 justify-items-center items-center bg-pink-user-0 text-white">
      <div className="col-span-4 xl:p-10 ml-10">
        <img
          className=" h-auto sm:w-1/4 md:w-1/2 lg:w-3/4 xl:w-full"
          src="public\sk-uVPV_nV17Tw-unsplash.jpg"
          alt="aboutUs"
        />
      </div>
      <div className="flex-colum text-center col-span-3 ">
        <h1 className="xl:text-6xl md:text-6xl text-4xl text-red-user-0 font-title my-5">
          Sobre nosotros
        </h1>
        <p className="xl:text-xl md:text-xl text-sm text-found-user-0 font-body text-center px-10">
          Somos un restaurante de hamburguesas que se enorgullece de servir solo
          los ingredientes más frescos y de alta calidad. Nuestro objetivo es
          brindar una experiencia gastronómica única y satisfacer a nuestros
          clientes con cada bocado.
        </p>
      </div>
    </div>
  );
}

export default BannerAboutUs;
