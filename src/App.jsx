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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 4 1400 309">
        <path
          fill="#0d0d0d"
          fill-opacity="1"
          d="M0,96L26.7,122.7C53.3,149,107,203,160,197.3C213.3,192,267,128,320,96C373.3,64,427,64,480,85.3C533.3,107,587,149,640,138.7C693.3,128,747,64,800,69.3C853.3,75,907,149,960,186.7C1013.3,224,1067,224,1120,208C1173.3,192,1227,160,1280,160C1333.3,160,1387,192,1413,208L1440,224L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
        ></path>
      </svg>

      {/*Sidebar Component */}
      <Sidebar showMenu={showMenu} />
      {/*Car Component*/}
      <Car showOrder={showOrder} setShowOrder={setShowOrder} />
      {/*Menu Celphone*/}
      <nav className="bg-pink-user-0 py-4 xl:hidden text-found-user-0 fixed w-full z-30 bottom-0 left-0 text-3xl px-12 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
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
        <div className="xl:pl-32 xl:col-span-2 xl:pr-96">
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 309">
        <path
          fill="#0d0d0d"
          fill-opacity="1"
          d="M0,256L26.7,245.3C53.3,235,107,213,160,213.3C213.3,213,267,235,320,208C373.3,181,427,107,480,101.3C533.3,96,587,160,640,165.3C693.3,171,747,117,800,106.7C853.3,96,907,128,960,128C1013.3,128,1067,96,1120,90.7C1173.3,85,1227,107,1280,122.7C1333.3,139,1387,149,1413,154.7L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
        ></path>
      </svg>

      <BannerAboutUs />
    </div>
  );
}
export default App;
