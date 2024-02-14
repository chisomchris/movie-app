import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import arrow from "../../assets/Arrow.png"

function MovieInfo_L() {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);
  // console.log(movieInfo);
  useEffect(() => {
    const fetchMovieInfo = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=543affbe47ead4f79984688d45815285`
        );
        setMovieInfo(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieInfo();
  }, []);

  return (
    <section className="p-3 ">
      <div className=" md:flex md:items-center text-[20px]  gap-4 p-1">
        <p className="font-bold font-Poppins">{movieInfo.title}</p>
        <p className=" font-bold font-Poppins">{new Date(movieInfo.release_date).toUTCString()}</p>
        <p className=" font-Poppins">.PG-13</p>
        <p className="   font-Poppins">{movieInfo.runtime}Mins</p>
      </div>

      <p className=" md:text-[20px] leading-normal mt-2 font-[400] font-Poppins">
        {movieInfo.overview}
      </p>
      <div className="mt-5 flex flex-col gap-5 ">
        <div className="h-[30px]">
          <p className="text-[#333] font-[400] font-Poppins">
            Director:{" "}
            <span className=" text-[#BE123C] leading-normal ml-2 font-[400] font-Poppins">
              Joseph Kosinski
            </span>
          </p>
        </div>

        <div className=" flex items-center gap-2 font-[400] font-Poppins">
          <p className="text-[#333]">Writer:</p>
          <span className="text-[#BE123C] text-[10px] md:text-xl">Jim Cash</span>,
          <span className="text-[#BE123C] text-[10px] md:text-xl">Jack Epps Jr</span>,
          <span className="text-[#BE123C] text-[10px] md:text-xl">Peter Craig</span>
        </div>

        <div className=" flex items-center gap-2 font-[400] font-Poppins">
          <p className="text-[#333]">Stars:</p>
          <span className="text-[#BE123C]  text-[10px] md:text-xl">Tom Cruise</span>,
          <span className="text-[#BE123C] text-[10px] md:text-xl">Jennifer Connelly,</span>
          <span className="text-[#BE123C] text-[10px] md:text-xl">Miles Teller</span>
        </div>
      </div>
      <div className="w-full flex items-center justify-between mt-3 rounded-[10px] border border-[#C7C7C7]">
        <div className=" bg-[#BE123C] rounded-[10px] flex items-center justify-center p-1 md:p-3 mr-1 md:mr-0">
          <p className="text-white  font-Poppins text-[12.5px] md:text-[20px] leading-normal font-[500] ">Top rated movie #65</p>
        </div>
        <div className=" text-[#333] md:text-[20px] text-[12px] font-Poppins leading-normal font-[500]">
          Awards 9 nominations
        </div>
        <img src={arrow} className="w-[30px] h-[30px] mr-2"alt="" />
      </div>
    </section>
  );
}
export default MovieInfo_L;
