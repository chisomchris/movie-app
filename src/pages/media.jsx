import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { MovieDetails } from "../components/MovieDetails";
import { WatchMore } from "../components/WatchMore";
import { useWidth } from "../hooks/useObserveElemWidth";
import { useEffect, useRef } from "react";

export const getLoader = (media) => {
  return async function ({ params }) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/${media}/${params.id}?api_key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const movieInfo = response.data;
      return { movieInfo };
    } catch (error) {
      console.log(error);
    }
  };
};

export function Media({ mediaType }) {
  const ref = useRef();
  const { movieInfo } = useLoaderData();
  const { width, resizeObserver } = useWidth();
  useEffect(() => {
    resizeObserver.observe(ref.current);
  }, []);

  return (
    <div className="w-full px-4 md:pl-6">
      <div className="md:pt-4">
        <img
          className="object-cover w-full aspect-[12/7] md:aspect-[2/1] md:rounded-2xl"
          src={`https://image.tmdb.org/t/p/original/${movieInfo.backdrop_path}`}
          alt=""
        />
      </div>

      <div
        className={`py-4 grid  gap-x-6 ${
          width < 640 ? "grid-cols-1" : "grid-cols-2"
        }`}
        ref={ref}
      >
        <MovieDetails
          id={movieInfo.id}
          title={movieInfo.title || movieInfo.name}
          runtime={movieInfo.runtime}
          pg={movieInfo.adult}
          releaseDate={movieInfo.release_date}
          overview={movieInfo.overview}
          mediaType={mediaType}
        />
        <WatchMore mediaType={mediaType} />
      </div>
    </div>
  );
}
