import menuIcon from "../assets/Menu.png";
import image1 from "../assets/Home.png";
import image2 from "../assets/MovieProjector.png";
import image3 from "../assets/TVShow.png";
import image4 from "../assets/Calendar.png";
import image5 from "../assets/Logout.png";
import { Logo } from "../components/Logo";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export function SidePanel() {
  const [showMenu, setShowMenu] = useState(false);
  const togleMenu = () => {
    setShowMenu((v) => !v);
  };
  return (
    <nav>
      <div className="py-4">
        <div className="px-4 md:pl-12 flex items-center justify-between">
          <Logo dark />
          <button onClick={togleMenu} className="md:hidden">
            <img src={menuIcon} alt="" />
          </button>
        </div>

        <div
          className={`${
            !showMenu ? "h-0" : ""
          } overflow-hidden md:w-60 md:h-auto lg:w-72`}
        >
          <div className="mt-8">
            <CategoryBtn desc={"Home"} to="/" icon={image1} />
            <CategoryBtn desc={"Movies"} to="/movies" icon={image2} />
            <CategoryBtn desc={"TV Series"} to="/tv-series" icon={image3} />
            <CategoryBtn desc={"Upcoming"} to="/upcoming" icon={image4} />
          </div>

          <div className="bg-gree-500 w-[170px] rounded-2xl border-[#BE123C] bg-[#F8E7EB] p-4 mx-4 sm:ml-12 mt-4">
            <p className="font-semibold leading-5">
              Play movie quizes and earn free tickets
            </p>
            <p className="w-[139px] mt-2 text-sm">50k people are playing now</p>
            <button className="w-28 h-8 mt-3 rounded-full bg-red-200 text-sm text-[#BE123C] font-bold">
              {" "}
              Start playing
            </button>
          </div>

          <button className="flex items-center mt-10 px-4 sm:pl-12">
            <img src={image5} alt="logout" />
            <p className="font-Poppins text-[#666] font-semibold">Log Out</p>
          </button>
        </div>
      </div>
    </nav>
  );
}

const CategoryBtn = ({ desc, to, icon }) => {
  const { pathname } = useLocation();

  const active = pathname.includes(trim(desc.toLocaleLowerCase()));

  return (
    <Link
      to={to}
      className={`flex items-center gap-2 py-4 ${active ? "bg-pink-50" : ""}`}
    >
      <img src={icon} className="px-4 sm:pl-12" alt="" />
      <span className="w-[61px] text-[#666] font-Poppins text-nowrap">
        {desc}
      </span>
    </Link>
  );
};

const trim = (txt) => {
  if (typeof txt === "string" && txt.trim().length > 0) {
    return txt.trim().replace(/\s+/g, "-");
  }
};
