import { Link } from "react-router-dom";
import imgg from "../assets/tv.png";
export const Logo = ({ dark }) => {
  return (
    <Link to={"/"} className="flex items-center gap-4 flex-nowrap">
      <img src={imgg} alt="logo" className="w-12 h-12" />
      <p
        className={`font-DM-Sans text-xl font-bold ${
          dark ? "text-black" : "text-white"
        }`}
      >
        MovieBox
      </p>
    </Link>
  );
};
