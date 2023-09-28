import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { BiX, BiSolidTrashAlt, BiSolidGhost } from "react-icons/bi";
import { Modal, useDisclosure } from "@nextui-org/react";

const Car = (props, isOpen, onOpen, onOpenChang) => {
  const [activeButton, setActiveButton] = useState(null); // Estado para rastrear el botón activo

  // Función para manejar el clic en un botón
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const carArray = [];

  const { showOrder, setShowOrder } = props;

  return (
    <div
      className={`xl:col-span-2 rounded-tl-2xl rounded-bl-3xl bg-pink-user-0 fixed top-0 w-full h-full xl:w-96 z-50 xl:right-0 transition-all
        ${showOrder ? "right-0" : "-right-full"}`}
    >
      {/* Orders */}
      <div className="relative font-body pt-16 xl:pt-8 text-white-user-0 p-8 h-full">
        {/* Button Close Menu */}
        <BiX
          onClick={() => setShowOrder(false)}
          className="xl:hidden absolute rounded-full bg-red-user-0 text-xl left-4 top-4 p-3 box-content text-pink-user-0"
        />
        <h1 className="text-3xl mt-4 mb-2 font-black">Pedidos</h1>
        {/* Pills */}
        <div className="flex items-center gap-4 flex-wrap mb-8">
          <Button
            variant={activeButton === "takeAwait" ? "flat" : "solid"}
            onClick={() => handleButtonClick("takeAwait")}
            className={
              activeButton === "takeAwait"
                ? "bg-red-user-0 font-bold"
                : "to-found-user-0 font-bold"
            }
          >
            Take Await
          </Button>
          <Button
            variant={activeButton === "delivery" ? "flat" : "solid"}
            onClick={() => handleButtonClick("delivery")}
            className={
              activeButton === "delivery"
                ? "bg-red-user-0 font-bold"
                : "to-found-user-0 font-bold"
            }
          >
            Delivery
          </Button>
          <Button
            variant={activeButton === "comerEnElLugar" ? "flat" : "solid"}
            onClick={() => handleButtonClick("comerEnElLugar")}
            className={
              activeButton === "comerEnElLugar"
                ? "bg-red-user-0 font-bold"
                : "to-found-user-0 font-bold"
            }
          >
            Comer en el lugar
          </Button>
        </div>

        {/* Car */}
        <div>
          <div className="grid grid-cols-6 mb-4 p-6 text-found-user-0 text-xl">
            <h5 className="col-span-4  center">Item</h5>
            <h5>Cant</h5>
            <h5>Precio</h5>
          </div>

          <div className=" md:h-[700px] flex items-center justify-center xl:h-[540px] h-[250px] overflow-scroll">
            {/* Total Products */}
            {carArray.length === 0 ? (
              <div className=" flex-col h-100% flex items-center justify-center">
                <BiSolidGhost className="text-6xl text-found-user-0 opacity-70" />
                <h1 className="text-2xl font-title text-found-user-0 opacity-70">
                  El carrito está vacío
                </h1>
              </div>
            ) : (
              carArray.map((car) => <p>{car.name}</p>)
            )}
          </div>
        </div>
        {/* Submit Payment */}
        <div className=" rounded-bl-2xl bg-red-user-0 border-t-4 absolute w-full bottom-0 left-0 p-8">
          <div className="flex itesm-center justify-between mb-2 ">
            <span className="text-pink-user-0">Descuento</span>
            <span className="text-pink-user-0">$</span>
          </div>
          <div className="flex itesm-center justify-between mb-6">
            <span className="text-pink-user-0">Subtotal</span>
            <span className="text-pink-user-0">$</span>
          </div>
          <div>
            <Button
              onClick={onOpen}
              className="bg-pink-user-0 w-full text-lg font-semibold py-2 px-4 rounded-xl text-red-user-0"
            >
              Continuar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;
