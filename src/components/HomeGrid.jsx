import axios from "axios";
import { Wrapper } from "./Wrapper";
import { MovieCard } from "./MovieCard";
import { useLoaderData } from "react-router-dom";
import { Paginator } from "./Paginator";

export async function homeLoader({ request }) {
  const url = new URL(request.url);
  const page = url.searchParams.get("page") || 1;
  const category = url.searchParams.get("category") || "all";

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/${category}/day?api_key=${
        import.meta.env.VITE_API_KEY
      }&page=${page}`
    );

    const medias = response.data;
    const banner =
      response.data.results[
        Math.floor(Math.random() * response.data.results.length)
      ];

    return { medias, banner };
  } catch (error) {
    console.log(error);
  }
}

export function HomeGrid() {
  const { medias } = useLoaderData();
  return (
    <div>
      <Wrapper>
        <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-8">
          {medias.results.map((media, index) => {
            return (
              <MovieCard
                media={media}
                key={index}
                mediaType={media.media_type}
              />
            );
          })}
        </ul>
        <Paginator />
      </Wrapper>
    </div>
  );
}
