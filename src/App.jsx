//Components
import { useState } from "react";
import Sidebar from "./components/shared/Sidebar";
import Car from "./components/shared/Car";
import Header from "./components/shared/Header";
import Card from "./components/shared/Card";
import * as React from "react";
import { motion } from "framer-motion"


//Libraries
import {
  BiSolidHome,
  BiSolidGrid,
  BiSolidUser,
  BiSolidBadgeDollar,
  BiSolidXCircle,
  BiSolidChevronDown,
} from "react-icons/bi";
import { Dropdown } from "@nextui-org/react";

//Functions
function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    //Prevenir que se abran las dos fn
    setShowOrder(false);
  };
  const toggleOrder = () => {
    setShowOrder(!showOrder);
    //Prevenir que se abran las dos fn
    setShowMenu(false);
  };

  return (
    <div className="bg-found-user-0 font-body font-semibold w-full min-h-screen p-2 md:p-10">
      <Sidebar showMenu={showMenu} />
      <Car showOrder={showOrder} setShowOrder={setShowOrder} />
      {/*Menu Celphone*/}
      <nav className="bg-pink-user-0 xl:hidden text-found-user-0 fixed w-full z-30 bottom-0 left-0 text-3xl py-4 px-12 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button>
          <BiSolidHome></BiSolidHome>
        </button>
        <button>
          <BiSolidUser></BiSolidUser>
        </button>
        <button>
          <BiSolidBadgeDollar onClick={toggleOrder}></BiSolidBadgeDollar>
        </button>
        <button onClick={toggleMenu}>
          {showMenu ? <BiSolidXCircle /> : <BiSolidGrid />}
        </button>
      </nav>
      <main className="xl:pl-32 xl:col-span-2 xl:pr-96 pb-20">
        <div className="md:p-12 p-4"> 
          {/*Header*/}
          <Header />
          {/* Title content*/}
          <div className="flex items-center justify-end mb-16 mr-10">
            {/*  <h2 className="text-xl text-gray-300 px-4">Como quieres buscar?</h2> */}
            <button className="flex items-center gap-4 text-white-user-0 bg-pink-user-0 py-2 px-4 xl:mb-20 mb-8  rounded-xl">
              <BiSolidChevronDown></BiSolidChevronDown>Populares 🔥
            </button>
          </div>
          {/*Content*/}
          <div className="p-10 grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-20 md:grid-cols-2 ">
            {/*Card*/}
            <Card
              img="public\pikachu.png"
              title="Pikachu"
              price="$2.000"
              description="Doble Cheddar, Doble Carne, Pan de papa, Salsa "
            />

            {/*Card*/}
            <Card
              img="public\pexels-gonzalo-acuña-10922925-PhotoRoom.png-PhotoRoom.png"
              title="Bulbasaur"
              price="$2.000"
              description="Lechucga, Tomate, Cheddar"
            />

            {/*Card*/}
            <Card 
              img="public\pexels-gonzalo-acuña-10922930-PhotoRoom.png-PhotoRoom.png"
              title="Charmander"
              price="$2.000"
              description="Lechucga, Tomate, Cheddar"
            />

            {/*Card*/}
            <Card
              img="public\pexels-gonzalo-acuña-10922929-PhotoRoom.png-PhotoRoom.png"
              title="Psyduck"
              price="$2.000"
              description="Lechucga, Tomate, Cheddar"
            />

            {/*Card*/}
            <Card
              img="public\pexels-gonzalo-acuña-10922931-PhotoRoom.png-PhotoRoom.png"
              title="Squirtle"
              price="$2.600"
              description="Doble Carne, Lechucga, Tomate, Cheddar, Cebolla"
            />

            {/*Card*/}
            <Card
              img="public\pexels-gonzalo-acuña-10922926-PhotoRoom.png-PhotoRoom.png"
              title="Snorlax"
              price="$2.600"
              description="Doble Carne, Lechucga, Tomate, Cheddar, Cebolla"
            />

            {/*Card*/}
            <Card
              img="public\pexels-gonzalo-acuña-10922931-PhotoRoom.png-PhotoRoom.png"
              title="Meowth"
              price="$2.600"
              description="Doble Carne, Lechucga, Tomate, Cheddar, Cebolla"
            />

            {/*Card*/}
            <Card
              img="public\food-photographer-X92WLoaQ1_o-unsplash-PhotoRoom.png-PhotoRoom3.png"
              title="Gengar"
              price="$2.600"
              description="Doble Carne, Lechucga, Tomate, Cheddar, Cebolla"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
export default App;
