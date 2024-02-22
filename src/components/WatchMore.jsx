import star from "../assets/Star.png";
import ticket from "../assets/Tickets.png";
import list from "../assets/List.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function WatchMore({ mediaType }) {
  const [medias, setMedias] = useState([]);
  const [randon, setRandom] = useState(Math.ceil(Math.random() * 20));

  useEffect(() => {
    const getMedias = async () => {
      const start = Math.floor(Math.random() * 18);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/${mediaType}/top_rated?api_key=${
            import.meta.env.VITE_API_KEY
          }&page=${randon}`
        );
        setMedias(response.data.results.slice(start, start + 3));
      } catch (err) {
        console.log(err);
      }
    };
    getMedias();
  }, [randon]);

  return (
    <div className="pt-4 md:pt-0">
      <div className="flex items-center py-3">
        <img src={star} className="w-5 h-5" alt="" />
        <p className="ml-2">
          <span className="text-[#E8E8E8] mr-1">8.5</span> |
          <span className="ml-2 text-[#666]">350k</span>
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <div className="bg-[#BE123C] rounded-lg py-2 px-4 flex items-center">
          <img src={ticket} className="w-6 h-6" alt="" />
          <p className="text-white">See Showtimes</p>
        </div>

        <button
          onClick={() => {
            setRandom(Math.ceil(Math.random() * 21));
          }}
          className="bg-[#f1d9df] border border-[#BE123C] rounded-lg py-2 px-4 flex items-center"
        >
          <img src={list} className="w-6 h-6" alt="" />
          <p className="text-[#333] ml-1">More watch options</p>
        </button>
      </div>

      <ul className="grid grid-cols-3 gap-1 py-3">
        {medias.map((media) => {
          return (
            <li key={media.id}>
              <Link
                to={`/${mediaType === "movie" ? "movies" : "tv-series"}/${
                  media.id
                }`}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${media.poster_path}`}
                  alt="movie"
                  className="h-full object-cover"
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
