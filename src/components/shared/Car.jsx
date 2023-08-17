import React from "react";

//Libraries
import {
  BiX,
  BiSolidTrashAlt,
} from "react-icons/bi";

const Car = (props) => {
  const { showOrder, setShowOrder } = props;
  return (
    <div
      className={`lg:col-span-2 bg-pink-user-0 fixed top-0 w-full h-full lg:w-96 z-50 lg:right-0 transition-all
        ${showOrder ? "right-0" : "-right-full"}`}
    >
      {/* Orders */}
      <div className="relative pt-16 lg:pt-8 text-white-user-0 p-8 h-full">
        {/* Button Close Menu */}
        <BiX
          onClick={() => setShowOrder(false)}
          className="lg:hidden absolute rounded-full bg-white-user-0 text-xl left-4 top-4 p-3 box-content text-gray-300"
        />
        <h1 className="text-4xl mt-4 mb-2 font-black">Pedidos</h1>
        {/* Pills */}
        <div className="flex items-center gap-4 flex-wrap mb-8">
          <button className="bg-white-user-0 text-red-user-0 py-2 px-4 rounded-2xl">
            Take Await
          </button>
          <button className=" text-white-user-0 py-2 px-4 rounded-2xl border border-white-user-0">
            Delivery
          </button>
          <button className=" text-white-user-0 py-2 px-4 rounded-2xl border border-white-user-0">
            Comer en el lugar
          </button>
        </div>
        {/* Car */}
        <div>
          <div className="grid grid-cols-6 mb-4 p-4 text-xl">
            <h5 className="col-span-4 center">Item</h5>
            <h5>Cant</h5>
            <h5>Precio</h5>
          </div>
          {/* Total Products */}
          <div className=" md:h-[700px] lg:h-[540px] h-[400px] overflow-scroll">

            {/*Product 1*/}
            <div className="bg-white-user-0 py-6 px-3 rounded-xl mb-5">
              <div className="grid grid-cols-6 mb-5">
                {/*Description Product*/}
                <div className="col-span-4 text-pink-user-0 flex items-center gap-3">
                  <img
                    className="w-10 h-10 object-cover rounded-full"
                    src="public\pexels-gonzalo-acuña-10922927.jpg"
                  ></img>
                  <div>
                    <h5 className="text-ms text-pink-user-0 uppercase">burger Titan</h5>
                    <p className="text-sm text-gray-500">$2.000</p>
                  </div>
                </div>
                {/*Qty*/}
                <div>
                  <span className=" text-red-user-0 items-center text-ms flex justify-center">2</span>
                </div>
                {/*Price Total*/}
                <div>
                  <span className=" text-red-user-0 text-ms">$4.000</span>
                </div>
              </div>
              {/* Note */}
              <div className="grid grid-cols-6 items-center">
                <form className="col-span-5">
                  <input
                    type="text"
                    className="bg-pink-user-0 py-2 px-4 rounded-lg outline-none"
                    placeholder="Añadir nota"
                  ></input>
                </form>
                <div>
                  <button className="border col-span-1 border-pink-user-0 400 p-2 rounded-lg">
                    <BiSolidTrashAlt className="text-pink-user-0 " />
                  </button>
                </div>
              </div>
            </div>

            {/*Product 2*/}
            <div className="bg-white-user-0 py-6 px-4 rounded-xl mb-5">
              <div className="grid grid-cols-6 mb-5">
                {/*Description Product*/}
                <div className="col-span-4 text-pink-user-0 flex items-center gap-3">
                  <img
                    className="w-10 h-10 object-cover rounded-full"
                    src="public\pexels-gonzalo-acuña-10922930.jpg"
                  ></img>
                  <div>
                    <h5 className="text-ms text-pink-user-0 uppercase">burger Titan</h5>
                    <p className="text-sm text-gray-500">$2.000</p>
                  </div>
                </div>
                {/*Qty*/}
                <div>
                  <span className=" text-red-user-0 items-center text-ms flex justify-center">2</span>
                </div>
                {/*Price Total*/}
                <div>
                  <span className=" text-red-user-0 text-ms">$4.000</span>
                </div>
              </div>
              {/* Note */}
              <div className="grid grid-cols-6 items-center">
                <form className="col-span-5">
                  <input
                    type="text"
                    className="bg-pink-user-0 py-2 px-4 rounded-lg outline-none"
                    placeholder="Añadir nota"
                  ></input>
                </form>
                <div>
                  <button className="border col-span-1 border-pink-user-0 400 p-2 rounded-lg">
                    <BiSolidTrashAlt className="text-pink-user-0 " />
                  </button>
                </div>
              </div>
            </div>

            {/*Product 3*/}
            <div className="bg-white-user-0 py-6 px-4 rounded-xl mb-5">
              <div className="grid grid-cols-6 mb-5">
                {/*Description Product*/}
                <div className="col-span-4 text-pink-user-0 flex items-center gap-3">
                  <img
                    className="w-10 h-10 object-cover rounded-full"
                    src="public\pexels-gonzalo-acuña-10922925.jpg"
                  ></img>
                  <div>
                    <h5 className="text-ms text-pink-user-0 uppercase">burger Titan</h5>
                    <p className="text-sm text-gray-500">$2.000</p>
                  </div>
                </div>
                {/*Qty*/}
                <div>
                  <span className=" text-red-user-0 items-center text-ms flex justify-center">2</span>
                </div>
                {/*Price Total*/}
                <div>
                  <span className=" text-red-user-0 text-ms">$4.000</span>
                </div>
              </div>
              {/* Note */}
              <div className="grid grid-cols-6 items-center">
                <form className="col-span-5">
                  <input
                    type="text"
                    className="bg-pink-user-0 py-2 px-4 rounded-lg outline-none"
                    placeholder="Añadir nota"
                  ></input>
                </form>
                <div>
                  <button className="border col-span-1 border-pink-user-0 400 p-2 rounded-lg">
                    <BiSolidTrashAlt className="text-pink-user-0 " />
                  </button>
                </div>
              </div>
            </div>

            {/*Product 4*/}
            <div className="bg-white-user-0 py-6 px-4 rounded-xl mb-5">
              <div className="grid grid-cols-6 mb-5">
                {/*Description Product*/}
                <div className="col-span-4 text-pink-user-0 flex items-center gap-3">
                  <img
                    className="w-10 h-10 object-cover rounded-full"
                    src="public\pexels-gonzalo-acuña-10922925.jpg"
                  ></img>
                  <div>
                    <h5 className="text-ms text-pink-user-0 uppercase">snorlax</h5>
                    <p className="text-sm text-gray-500">$2.000</p>
                  </div>
                </div>
                {/*Qty*/}
                <div>
                  <span className=" text-red-user-0 items-center text-ms flex justify-center">2</span>
                </div>
                {/*Price Total*/}
                <div>
                  <span className=" text-red-user-0 text-ms">$4.000</span>
                </div>
              </div>
              {/* Note */}
              <div className="grid grid-cols-6 items-center">
                <form className="col-span-5">
                  <input
                    type="text"
                    className="bg-pink-user-0 py-2 px-4 rounded-lg outline-none"
                    placeholder="Añadir nota"
                  ></input>
                </form>
                <div>
                  <button className="border col-span-1 border-pink-user-0 400 p-2 rounded-lg">
                    <BiSolidTrashAlt className="text-pink-user-0 " />
                  </button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        {/* Submit Payment */}
        <div className="bg-red-user-0 border-t-4 absolute w-full bottom-0 left-0 p-8">
          <div className="flex items-center justify-between mb-2 ">
            <span className="text-gray-600">Descuento</span>
            <span className="text-white-user-0">$500</span>
          </div>
          <div className="flex items-center justify-between mb-6">
            <span className="text-gray-600">Subtotal</span>
            <span className="text-white-user-0">$3.500</span>
          </div>
          <div>
            <button className="bg-pink-user-0 w-full py-2 px-4 rounded-lg text-white">
              Continuar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;