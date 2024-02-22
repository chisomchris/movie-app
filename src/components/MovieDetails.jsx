import { useEffect, useState } from "react";
import axios from "axios";
import arrow from "../assets/Arrow.png";
import { useLocation } from "react-router-dom";

const Credit = ({ list, title }) => {
  return (
    <>
      {list.length > 0 && (
        <div className="flex gap-2 mt-3 ">
          <p className="text-[#333]">{`${title}${
            list.length > 1 ? "s" : ""
          }:`}</p>
          <p className="text-[#BE123C]">{list.slice(0, 10).join(", ")}</p>
        </div>
      )}
    </>
  );
};

export function MovieDetails({
  title,
  runtime,
  pg,
  releaseDate,
  overview,
  id,
  seasons,
  mediaType,
}) {
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
  const { pathname } = useLocation();

  function filterByRole(crew, role) {
    if (!crew) return [];
    return crew
      .filter((person) => person.job.toLowerCase() === role)
      .map((data) => data.name);
  }

  useEffect(() => {
    const fetchCredits = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/${mediaType}/${id}/credits?api_key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const { crew, cast } = response.data;
      setCast(cast);
      setCrew(crew);
    };
    fetchCredits();
  }, [pathname]);

  return (
    <div className="font-Poppins">
      <div>
        <p className="font-bold text-lg">{title}</p>
        <p>{releaseDate}</p>

        {runtime && (
          <p>
            {runtime} Mins {pg && <span> .PG-13</span>}
          </p>
        )}
        {seasons > 0 && (
          <p>
            {seasons} Seasons {pg && <span> .PG-13</span>}
          </p>
        )}
      </div>

      <p>{overview}</p>

      <div className="pt-3">
        <Credit list={filterByRole(crew, "director")} title="Director" />
        <Credit list={filterByRole(crew, "writer")} title="Writer" />
        <Credit list={cast.map((person) => person.name) || []} title="Star" />
      </div>

      <div className="flex flex-wrap items-center justify-between rounded-md shadow mt-6">
        <div className=" bg-[#BE123C] rounded-md h-full py-2 px-4 w-full">
          <p className="text-white text-nowrap">Top rated movie #65</p>
        </div>

        <button className=" text-[#333] flex flex-nowrap gap-1 py-2 px-4 w-full justify-between">
          <span className="text-nowrap">Awards 9 nominations</span>
          <img src={arrow} className="w-7 h-7 mr-2" alt="" />
        </button>
      </div>
    </div>
  );
}
