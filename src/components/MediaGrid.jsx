import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { MovieCard } from "./MovieCard";
import { Paginator } from "./Paginator";
import { Footer } from "./Footer";

export const getLoader = (param) => {
  return async function ({ request }) {
    const url = new URL(request.url);
    const page = url.searchParams.get("page") || 1;
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/${param}/popular?api_key=${
          import.meta.env.VITE_API_KEY
        }&page=${page}`
      );
      const medias = response.data;
      return { medias };
    } catch (error) {
      console.log(error);
    }
  };
};

export function MediaGrid({ mediaType }) {
  const { medias } = useLoaderData();

  return (
    <div className="px-4 pt-4">
      <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
        {medias.results.map((media, index) => {
          return <MovieCard media={media} key={index} mediaType={mediaType} />;
        })}
      </ul>
      <Paginator />
      <Footer />
    </div>
  );
}
