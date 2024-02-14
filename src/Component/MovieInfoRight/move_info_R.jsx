import star from "../../assets/Star.png";
import ticket from "../../assets/Tickets.png";
import list from "../../assets/List.png";
import { useState, useEffect } from "react";
import axios from "axios";
function MovieInfo_R() {
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    const datas = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=543affbe47ead4f79984688d45815285`
        );
        setMovies(response.data.results.slice(0,3));
      } catch (err) {
        console.log(err);
      }
    };
    datas();
  }, []);
  return (
    <section className="w-full ">
      <div className="flex items-center">
        <img src={star} className="w-[30px]  h-[30px]" alt="" />
        <div className="w-[103px] h-[38px] flex items-center ml-2">
          <span className="leading-normal font-[500] text-[25px] text-[#E8E8E8] font-Poppins not-italic">
            8.5
          </span>
          <span className="leading-normal font-[500] text-[20px] text-[#666] font-Poppins not-italic ml-1">
            | 350k
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-1">
        <div className="w-full h-[30px] bg-[#BE123C] rounded-xl p-5 flex  items-center">
          <img src={ticket} className="w-[25px] h-[25px]" alt="" />
          <p className="w-[153px] h-[30px] font-Poppins text-[20px] leading-normal font-[500] text-white ml-1">
            See Showtimes
          </p>
        </div>
        <div className="w-full h-[30px] bg-[#f1d9df] border border-[#BE123C] rounded-xl p-5 flex items-center">
          <img src={list} className="w-[23px] h-[23px]" alt="" />
          <p className="text-[17px] leading-normal font-Poppins font-[500] text-[#333] ml-1">
            More watch options
          </p>
        </div>
      </div>
      <div className="w-[360] h-[200px] mt-2 grid grid-cols-3 gap-1">
        {movie.map((movie) => {
          return (
            <div className=" bg-red-500" key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="movie"
                className="h-full object-cover"

              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default MovieInfo_R;
