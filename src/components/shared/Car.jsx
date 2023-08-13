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
      className={`lg:col-span-2 bg-black fixed top-0 w-full h-full lg:w-96 z-50 lg:right-0 transition-all
        ${showOrder ? "right-0" : "-right-full"}`}
    >
      {/* Orders */}
      <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full">
        {/* Button Close Menu */}
        <BiX
          onClick={() => setShowOrder(false)}
          className="lg:hidden absolute rounded-full bg-black text-xl left-4 top-4 p-3 box-content text-gray-300"
        />
        <h1 className="text-2xl mt-4 mb-2 ">Pedidos</h1>
        {/* Pills */}
        <div className="flex items-center gap-4 flex-wrap mb-8">
          <button className="bg-yellow-400 text-black py-2 px-4 rounded-2xl">
            Take Await
          </button>
          <button className=" text-yellow-400 py-2 px-4 rounded-2xl border border-gray-500">
            Delivery
          </button>
          <button className=" text-yellow-400 py-2 px-4 rounded-2xl border border-gray-500">
            Comer en el lugar
          </button>
        </div>
        {/* Car */}
        <div>
          <div className="grid grid-cols-6 mb-4 p-4">
            <h5 className="col-span-4">Item</h5>
            <h5>Qty</h5>
            <h5>Price</h5>
          </div>
          {/* Total Products */}
          <div className=" md:h-[700px] lg:h-[540px] h-[400px] overflow-scroll">
            {/*Product*/}
            <div className="bg-[#262626] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-3">
                {/*Description Product*/}
                <div className="col-span-4 flex items-center gap-3">
                  <img
                    className="w-10 h-10 object-cover rounded-full"
                    src="food-photographer-Fn6dPYtPUMc-unsplash-removebg-preview (5).png"
                  ></img>
                  <div>
                    <h5 className="text-sm">burger Titan</h5>
                    <p className="text-xs text-gray-500">$2.000</p>
                  </div>
                </div>
                {/*Qty*/}
                <div>
                  <span>2</span>
                </div>
                {/*Price Total*/}
                <div>
                  <span>$4.000</span>
                </div>
              </div>
              {/* Note */}
              <div className="grid grid-cols-6 items-center">
                <form className="col-span-5">
                  <input
                    type="text"
                    className="bg-black py-2 px-4 rounded-lg outline-none"
                    placeholder="Añadir nota"
                  ></input>
                </form>
                <div>
                  <button className="border border-yellow-400 p-2 rounded-lg">
                    <BiSolidTrashAlt className="text-yellow-400" />
                  </button>
                </div>
              </div>
            </div>
            {/*Product*/}
            <div className="bg-[#262626] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-3">
                {/*Description Product*/}
                <div className="col-span-4 flex items-center gap-3">
                  <img
                    className="w-10 h-10 object-cover rounded-full"
                    src="food-photographer-Fn6dPYtPUMc-unsplash-removebg-preview (5).png"
                  ></img>
                  <div>
                    <h5 className="text-sm">burger Titan</h5>
                    <p className="text-xs text-gray-500">$2.000</p>
                  </div>
                </div>
                {/*Qty*/}
                <div>
                  <span>2</span>
                </div>
                {/*Price Total*/}
                <div>
                  <span>$4.000</span>
                </div>
              </div>
              {/* Note */}
              <div className="grid grid-cols-6 items-center">
                <form className="col-span-5">
                  <input
                    type="text"
                    className="bg-black py-2  px-4 rounded-lg outline-none"
                    placeholder="Añadir nota"
                  ></input>
                </form>
                <div>
                  <button className="border border-yellow-400 p-2 rounded-lg">
                    <BiSolidTrashAlt className="text-yellow-400" />
                  </button>
                </div>
              </div>
            </div>
            {/*Product*/}
            <div className="bg-[#262626] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-3">
                {/*Description Product*/}
                <div className="col-span-4 flex items-center gap-3">
                  <img
                    className="w-10 h-10 object-cover rounded-full"
                    src="food-photographer-Fn6dPYtPUMc-unsplash-removebg-preview (5).png"
                  ></img>
                  <div>
                    <h5 className="text-sm">burger Titan</h5>
                    <p className="text-xs text-gray-500">$2.000</p>
                  </div>
                </div>
                {/*Qty*/}
                <div>
                  <span>2</span>
                </div>
                {/*Price Total*/}
                <div>
                  <span>$4.000</span>
                </div>
              </div>
              {/* Note */}
              <div className="grid grid-cols-6 items-center">
                <form className="col-span-5">
                  <input
                    type="text"
                    className="bg-black py-2  px-4 rounded-lg outline-none"
                    placeholder="Añadir nota"
                  ></input>
                </form>
                <div>
                  <button className="border border-yellow-400 p-2 rounded-lg">
                    <BiSolidTrashAlt className="text-yellow-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Submit Payment */}
        <div className="bg-yellow-500 absolute w-full bottom-0 left-0 p-4">
          <div className="flex items-center justify-between mb-2 ">
            <span className="text-black">Descuento</span>
            <span className="text-black">$500</span>
          </div>
          <div className="flex items-center justify-between mb-6">
            <span className="text-black">Subtotal</span>
            <span className="text-black">$3.500</span>
          </div>
          <div>
            <button className="bg-black w-full py-2 px-4 rounded-lg text-white">
              Continuar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;