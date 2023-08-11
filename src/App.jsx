//Components
import { useState } from "react";
import Sidebar from "./components/shared/Sidebar";

//Libraries
import {
  BiSolidHome,
  BiSolidGrid,
  BiSolidUser,
  BiSolidBadgeDollar,
  BiSolidXCircle,
  BiSearch,
  BiSolidChevronDown,
} from "react-icons/bi";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-[#262626] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      {/*Menu Celphone*/}
      <nav className="bg-[#F4CF2A] lg:hidden fixed w-full bottom-0 left-0 text-3xl py-4 px-12 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button>
          <BiSolidHome></BiSolidHome>
        </button>
        <button>
          <BiSolidUser></BiSolidUser>
        </button>
        <button>
          <BiSolidBadgeDollar></BiSolidBadgeDollar>
        </button>
        <button onClick={toggleMenu}>
          {showMenu ? <BiSolidXCircle /> : <BiSolidGrid />}
        </button>
      </nav>
      <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8 p-4 pb-20">
        <div className="lg:col-span-6 md:p-8">
          {/*Header*/}
          <header>
            {/*Title and Search*/}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
              <div>
                <h1 className="text-2xl text-gray-300">Burger Crack </h1>
                <p className="text-gray-500">sadasd</p>
              </div>
              <form>
                <div className="w-full relative">
                  <BiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white"></BiSearch>
                  <input
                    type="text"
                    className="bg-[#000000] w-full py-2 pl-10 pr-4 rounded-lg outline-none text-white"
                    placeholder="Search"
                  />
                </div>
              </form>
            </div>
            {/*Tabs*/}
            <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
              <a
                href="#"
                className="relative py-2 pr-4 before:w-3/4 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0
              before:rounded-full before:-bottom-[1px] text-[#5cceb5] "
              >
                Mas pedidos
              </a>
              <a href="#" className="py-2 pr-4">
                Cold dishes
              </a>
              <a href="#" className="py-2 pr-4">
                Soup
              </a>
              <a href="#" className="py-2">
                Grill
              </a>
            </nav>
          </header>
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
            <div className="bg-black p-8 flex flex-col items-center pb-4 gap-3 text-center rounded-3xl ">
              <img src="amirali-mirhashemian-pjGnlZTtQ-Y-unsplash.jpg" className="w-40 h-40 rounded-full object-cover -mt-20 shadow-2xl "></img>
              <p className="text-xl text-gray-400">Burger Titan</p>
              <span className="text-gray-400">$2.000</span>
              <p className="text-gray-600">Crema titan, Rucula, Queso Mozzarella, Blen de carne</p>
            </div>
             {/*Card*/}
             <div className="bg-black py-10 px-10 flex flex-col items-center gap-3 text-center rounded-3xl ">
              <img src="food-photographer-E94j3rMcxlw-unsplash.jpg" className="w-40 h-40 rounded-full object-cover -mt-20 shadow-2xl "></img>
              <p className="text-xl text-gray-400">Burger Titan</p>
              <span className="text-gray-400">$2.000</span>
              <p className="text-gray-600">Crema titan, Rucula, Queso Mozzarella, Blen de carne</p>
            </div>
             {/*Card*/}
             <div className="bg-black p-12 flex flex-col items-center gap-3 text-center rounded-3xl ">
              <img src="food-photographer-Fn6dPYtPUMc-unsplash.jpg" className="w-40 h-40 rounded-full object-cover -mt-20 shadow-2xl "></img>
              <p className="text-xl text-gray-400">Burger Titan</p>
              <span className="text-gray-400">$2.000</span>
              <p className="text-gray-600">Crema titan, Rucula, Queso Mozzarella, Blen de carne</p>
            </div>
             {/*Card*/}
             <div className="bg-black p-8 flex flex-col items-center gap-3 text-center rounded-3xl ">
              <img src="food-photographer-X92WLoaQ1_o-unsplash (1).jpg" className="w-40 h-40 rounded-full object-cover -mt-20 shadow-2xl "></img>
              <p className="text-xl text-gray-400">Burger Titan</p>
              <span className="text-gray-400">$2.000</span>
              <p className="text-gray-600">Crema titan, Rucula, Queso Mozzarella, Blen de carne</p>
            </div>
             {/*Card*/}
             <div className="bg-black p-8 flex flex-col items-center gap-3 text-center rounded-3xl ">
              <img src="amirali-mirhashemian-lL7MRs9UWnM-unsplash.jpg" className="w-40 h-40 rounded-full object-cover -mt-20 shadow-2xl "></img>
              <p className="text-xl text-gray-400">Burger Titan</p>
              <span className="text-gray-400">$2.000</span>
              <p className="text-gray-600">Crema titan, Rucula, Queso Mozzarella, Blen de carne</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 bg-[#bf974d] fixed lg:static right-0">Carrito</div>
          
        
      </main>
    </div>
  );
}
export default App;
