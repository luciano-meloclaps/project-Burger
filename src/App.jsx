//Components
import { useState } from "react";
import Sidebar from "./components/shared/Sidebar";
import Car from "./components/shared/Car";
import Header from "./components/shared/Header";
import Card from "./components/shared/Card";

//Libraries
import {
  BiSolidHome,
  BiSolidGrid,
  BiSolidUser,
  BiSolidBadgeDollar,
  BiSolidXCircle,
  BiSolidChevronDown,
} from "react-icons/bi";

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
    <div className="bg-[#262626] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      <Car showOrder={showOrder} setShowOrder={setShowOrder} />
      {/*Menu Celphone*/}
      <nav className="bg-[#bf974d] lg:hidden fixed w-full bottom-0 left-0 text-3xl py-4 px-12 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
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
      <main className="lg:pl-32 lg:pr-96 pb-20">
        <div className="md:p-8 p-4">
          {/*Header*/}
          <Header />
          {/* Title content*/}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Choose dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-black py-2 px-4 rounded-lg">
              <BiSolidChevronDown></BiSolidChevronDown>Ver mas
            </button>
          </div>
          {/*Content*/}
          <div className="p-10 grid grid-cols-1 lg:grid-cols-3 gap-20 md:grid-cols-2 ">
            {/*Card*/}
            <Card
              img="public\pexels-gonzalo-acuña-10922925.jpg"
              title="SpiderMan"
              price="$2.000"
              description="Lechucga, Tomate, Cheddar"
            />

            {/*Card*/}
            <Card
              img="public\pexels-gonzalo-acuña-10922926.jpg"
              title="SpiderMan"
              price="$2.000"
              description="Lechucga, Tomate, Cheddar"
            />

            {/*Card*/}
            <Card
              img="public\pexels-gonzalo-acuña-10922927.jpg"
              title="SpiderMan"
              price="$2.000"
              description="Lechucga, Tomate, Cheddar"
            />

            {/*Card*/}
            <Card
              img="public\pexels-gonzalo-acuña-10922928.jpg"
              title="SpiderMan"
              price="$2.000"
              description="Lechucga, Tomate, Cheddar"
            />

            {/*Card*/}
            <Card
              img="public\pexels-gonzalo-acuña-10922929.jpg"
              title="Captain America"
              price="$2.600"
              description="Doble Carne, Lechucga, Tomate, Cheddar, Cebolla"
            />

            {/*Card*/}
            <Card
              img="public\pexels-gonzalo-acuña-10922929.jpg"
              title="Captain America"
              price="$2.600"
              description="Doble Carne, Lechucga, Tomate, Cheddar, Cebolla"
            />

            {/*Card*/}
            <Card
              img="public\pexels-gonzalo-acuña-10922929.jpg"
              title="Captain America"
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
