import { Navbar } from "./Navbar";
import image from "../assets/IMDB.png";
import image1 from "../assets/Rotten.png";
import image2 from "../assets/Icon.png";
import { Wrapper } from "./Wrapper";
import { Link, useLoaderData } from "react-router-dom";

export function Header() {
  const { banner } = useLoaderData();
  const bgImage = `https://image.tmdb.org/t/p/original/${banner.backdrop_path}`;
  return (
    <header
      className="min-h-[calc(100dvh-5rem)] bg-center bg-cover w-full"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Navbar />

      <Wrapper>
        <div className="max-w-72 flex flex-col gap-3 mt-14">
          <Link to={"video"} className="text-4xl font-bold text-white">
            {" "}
            {banner.title || banner.name}
          </Link>

          <div className="w-48 flex justify-between mt-2">
            <img src={image} className="" alt="" />
            <img src={image1} className="" alt="" />
          </div>

          <p className="text-white line-clamp-6">{banner.overview}</p>

          <button className="w-[169px] h-9 rounded-md flex items-center bg-[#BE123C] gap-2 py-2 px-4 mt-6 mb-8">
            <img src={image2} className="w-5 h-5" alt="" />
            <p className="font-bold capitalize text-white">Watch trailer</p>
          </button>
        </div>
      </Wrapper>
    </header>
  );
}
