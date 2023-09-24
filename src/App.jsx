//Components
import { useState, useEffect } from "react";
import Sidebar from "./components/shared/Sidebar";
import Car from "./components/car/Car";
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import DropdownUser from "./components/shared/DropdownUser";

//Libraries
import {
  BiSolidHome,
  BiSolidGrid,
  BiSolidUser,
  BiSolidBadgeDollar,
  BiSolidXCircle,
} from "react-icons/bi";
import AboutUs from "./components/aboutUs/aboutUs";

//Data
import data from "./assets/burgers.json";

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

  const [burgers, setBurgers] = useState([]);

  useEffect(() => {
    setBurgers(data.burgers);
  }, []);

  return (
    <div className="bg-found-user-0 font-body font-semibold w-full min-h-screen ">
      {/*Sidebar Component */}
      <Sidebar showMenu={showMenu} />
      {/*Car Component*/}
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
      <main className="m-0 p-0">
        <div className="xl:pl-32 xl:col-span-2 xl:pr-96 md:p-16 py-10">
          {/*Header Component */}
          <Header />
          {/* Title content*/}
          <div className="flex items-center justify-end m-8 lg:mx-28 mb-16">
            {/* Drpdown Component */}
            <DropdownUser />
          </div>
          {/*Content*/}
          <div className="md:p-28 p-8 grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-20 md:grid-cols-2 ">
            {/*Card Component*/}
            {burgers.map((burger) => (
              <Card
                img={burger.img}
                title={burger.title}
                description={burger.description}
                price={burger.price}
              />
            ))}
          </div>
        </div>
        <AboutUs />
      </main>
    </div>
  );
}
export default App;
