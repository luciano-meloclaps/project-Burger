import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { BiX, BiSolidTrashAlt } from "react-icons/bi";

const Car = (props) => {
  const [activeButton, setActiveButton] = useState(null); // Estado para rastrear el botón activo

  // Función para manejar el clic en un botón
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

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
          <div className="grid grid-cols-6 mb-4 p-4 text-found-user-0 text-xl">
            <h5 className="col-span-4 center">Item</h5>
            <h5>Cant</h5>
            <h5>Precio</h5>
          </div>
          {/* Total Products */}
          <div className=" md:h-[700px] xl:h-[540px] h-[400px] overflow-scroll">
            {/*Product 1*/}
            <div className="bg-found-user-0 py-6 px-3 rounded-xl mb-5">
              <div className="grid grid-cols-6 mb-5">
                {/*Description Product*/}
                <div className="col-span-4 text-pink-user-0 flex itesm-center gap-3">
                  <img
                    className="w-10 h-10 object-cover rounded-full"
                    src="public\pexels-gonzalo-acuña-10922930-PhotoRoom.png-PhotoRoom.png"
                  ></img>
                  <div>
                    <h5 className="text-sm text-pink-user-0 uppercase">
                      burger Titan
                    </h5>
                    <p className="text-sm text-gray-500">$2.000</p>
                  </div>
                </div>
                {/*Qty*/}
                <div>
                  <span className=" text-red-user-0 itesm-center text-sm flex justify-center">
                    2
                  </span>
                </div>
                {/*Price Total*/}
                <div>
                  <span className=" text-red-user-0 text-sm">$4.000</span>
                </div>
              </div>
              {/* Note */}
              <div className="grid grid-cols-6 itesm-center">
                <form className="col-span-5">
                  <input
                    type="text"
                    className="bg-pink-user-0 text-sm py-2 px-4 rounded-xl outline-none"
                    placeholder="Añadir nota"
                  ></input>
                </form>
                <div>
                  <button className="border col-span-1 border-pink-user-0 400 p-2 rounded-xl">
                    <BiSolidTrashAlt className="text-pink-user-0 " />
                  </button>
                </div>
              </div>
            </div>

            {/*Product 2*/}
            <div className="bg-found-user-0 py-6 px-4 rounded-xl mb-5">
              <div className="grid grid-cols-6 mb-5">
                {/*Description Product*/}
                <div className="col-span-4 text-pink-user-0 flex itesm-center gap-3">
                  <img
                    className="w-10 h-10 object-cover rounded-full"
                    src="public\food-photographer-X92WLoaQ1_o-unsplash-PhotoRoom.png-PhotoRoom3.png"
                  ></img>
                  <div>
                    <h5 className="text-sm text-pink-user-0 uppercase">
                      burger Titan
                    </h5>
                    <p className="text-sm text-gray-500">$2.000</p>
                  </div>
                </div>
                {/*Qty*/}
                <div>
                  <span className=" text-red-user-0 itesm-center text-sm flex justify-center">
                    2
                  </span>
                </div>
                {/*Price Total*/}
                <div>
                  <span className=" text-red-user-0 text-sm">$4.000</span>
                </div>
              </div>
              {/* Note */}
              <div className="grid grid-cols-6 itesm-center">
                <form className="col-span-5">
                  <input
                    type="text"
                    className="bg-pink-user-0 text-sm py-2 px-4 rounded-xl outline-none"
                    placeholder="Añadir nota"
                  ></input>
                </form>
                <div>
                  <button className="border col-span-1 border-pink-user-0 400 p-2 rounded-xl">
                    <BiSolidTrashAlt className="text-pink-user-0 " />
                  </button>
                </div>
              </div>
            </div>

            {/*Product 3*/}
            <div className="bg-found-user-0 py-6 px-4 rounded-xl mb-5">
              <div className="grid grid-cols-6 mb-5">
                {/*Description Product*/}
                <div className="col-span-4 text-pink-user-0 flex itesm-center gap-3">
                  <img
                    className="w-10 h-10 object-cover rounded-full"
                    src="public\pexels-gonzalo-acuña-10922926-PhotoRoom.png-PhotoRoom.png"
                  ></img>
                  <div>
                    <h5 className="text-sm text-pink-user-0 uppercase">
                      burger Titan
                    </h5>
                    <p className="text-sm text-gray-500">$2.000</p>
                  </div>
                </div>
                {/*Qty*/}
                <div>
                  <span className=" text-red-user-0 itesm-center text-sm flex justify-center">
                    2
                  </span>
                </div>
                {/*Price Total*/}
                <div>
                  <span className=" text-red-user-0 text-sm">$4.000</span>
                </div>
              </div>
              {/* Note */}
              <div className="grid grid-cols-6 itesm-center">
                <form className="col-span-5">
                  <input
                    type="text"
                    className="bg-pink-user-0 text-sm py-2 px-4 rounded-xl outline-none"
                    placeholder="Añadir nota"
                  ></input>
                </form>
                <div>
                  <button className="border col-span-1 border-pink-user-0 400 p-2 rounded-xl">
                    <BiSolidTrashAlt className="text-pink-user-0 " />
                  </button>
                </div>
              </div>
            </div>

            {/*Product 4*/}
            <div className="bg-found-user-0 py-6 px-4 rounded-xl mb-5">
              <div className="grid grid-cols-6 mb-5">
                {/*Description Product*/}
                <div className="col-span-4 text-pink-user-0 flex itesm-center gap-3">
                  <img
                    className="w-10 h-10 object-cover rounded-full"
                    src="public\pexels-gonzalo-acuña-10922929-PhotoRoom.png-PhotoRoom.png"
                  ></img>
                  <div>
                    <h5 className="text-sm text-pink-user-0 uppercase">
                      snorlax
                    </h5>
                    <p className="text-sm text-gray-500">$2.000</p>
                  </div>
                </div>
                {/*Qty*/}
                <div>
                  <span className=" text-red-user-0 itesm-center text-sm flex justify-center">
                    2
                  </span>
                </div>
                {/*Price Total*/}
                <div>
                  <span className=" text-red-user-0 text-sm">$4.000</span>
                </div>
              </div>
              {/* Note */}
              <div className="grid grid-cols-6 itesm-center">
                <form className="col-span-5">
                  <input
                    type="text"
                    className="bg-pink-user-0 text-sm  py-2 px-4 rounded-xl outline-none"
                    placeholder="Añadir nota"
                  ></input>
                </form>
                <div>
                  <button className="border col-span-1 border-pink-user-0 400 p-2 rounded-xl">
                    <BiSolidTrashAlt className="text-pink-user-0 " />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Submit Payment */}
        <div className=" rounded-bl-2xl bg-red-user-0 border-t-4 absolute w-full bottom-0 left-0 p-8">
          <div className="flex itesm-center justify-between mb-2 ">
            <span className="text-gray-600">Descuento</span>
            <span className="text-white-user-0">$500</span>
          </div>
          <div className="flex itesm-center justify-between mb-6">
            <span className="text-gray-600">Subtotal</span>
            <span className="text-white-user-0">$3.500</span>
          </div>
          <div>
            <Button className="bg-pink-user-0 w-full text-lg font-semibold py-2 px-4 rounded-xl text-red-user-0">
              Continuar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;
