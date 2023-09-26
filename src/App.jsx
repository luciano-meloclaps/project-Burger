//Components
import { useState, useEffect } from "react";

//Libraries
import {
  BiSolidHome,
  BiSolidGrid,
  BiSolidUser,
  BiSolidBadgeDollar,
  BiSolidXCircle,
} from "react-icons/bi";

//Data
import data from "./assets/burgers.json";

//Components
import BannerAboutUs from "./components/aboutUs/bannerAboutUs";
import Sidebar from "./components/shared/Sidebar";
import Car from "./components/car/Car";
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import DropdownUser from "./components/shared/DropdownUser";
import Example from "./components/hero/Hero";

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
      <Example />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0d0d0d"
          fill-opacity="1"
          d="M0,32L60,58.7C120,85,240,139,360,138.7C480,139,600,85,720,80C840,75,960,117,1080,144C1200,171,1320,181,1380,186.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
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
        <div className="xl:pl-32 xl:col-span-2 xl:pr-96 md:p-16 pt-10">
          {/*Header Component */}
          <Header />
          {/* Title content*/}
          <div className="flex items-center justify-end m-8 lg:mx-28 mb-16">
            {/* Drpdown Component */}
            <DropdownUser />
          </div>
          {/*Content*/}
          <div className="md:p-28 p-8 grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-24 md:grid-cols-2 ">
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
      </main>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -50 1440 330">
        <path
          fill="#0d0d0d"
          fill-opacity="1"
          d="M0,224L48,234.7C96,245,192,267,288,245.3C384,224,480,160,576,144C672,128,768,160,864,149.3C960,139,1056,85,1152,80C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <BannerAboutUs />
    </div>
  );
}
export default App;
