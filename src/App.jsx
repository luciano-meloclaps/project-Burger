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
      <main className="lg:pl-28 grid grid-cols-1 lg:grid-cols-8 p-5">
        <div className="lg:col-span-6">
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
            <nav className=" text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
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
          <div className="flex items-center justify-between mb-20">
            <h2 className="text-xl text-gray-300">Choose dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-black py-2 px-4 rounded-lg">
              <BiSolidChevronDown></BiSolidChevronDown>Ver mas
            </button>
          </div>
          {/*Content*/}
          <div>
            {/*Card*/}
            <div className="bg-emerald-600 p-8 flex flex-col item-center rounded-2xl">
              <img src="amirali-mirhashemian-lL7MRs9UWnM-unsplash.jpg" className="w-40 h-40 rounded-3xl object-cover -mt-20"></img>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 bg-red-500 fixed lg:static right-0">Carrito</div>
          
        
      </main>
    </div>
  );
}
export default App;
