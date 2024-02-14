import image from "../../assets/Menu.png";
import image1 from "../../assets/Home.png";
import image2 from "../../assets/MovieProjector.png";
import image3 from "../../assets/TVShow.png";
import image4 from "../../assets/Calendar.png";
import image5 from "../../assets/Logout.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieInfo_L from "../../Component/MovieInfoLeft/movie_Info_L";
import MovieInfo_R from "../../Component/MovieInfoRight/move_info_R";
function MovieId() {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);
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
    <section className=" flex flex-col md:flex md:flex-row md:h-full p-2 md:p-0">
      <div className="w-full md:w-[20%]  md:border-r md:border-gray-600 bg-grey-500">
        <div className="w-[185px] h-[50px] gap-[24px] flex items-center my-8 mx-6">
          <Link to="/">
            <img src={image} className="w-[50px] h-[50px]" alt="" />
          </Link>
          <p className="font-bold text-[#333] leading-[24px] text-base font-Poppins">
            MovieBox
          </p>
        </div>
        <div className=" hidden md:block">
          <div className="flex flex-col gap-6 mt-5">
            <div className="flex items-center  gap-2 p-4 hover:bg-red-100 cursor-pointer font-Poppins">
              <Link to="/" className="ml-8 flex items-center gap-2">
                <img src={image1} alt="" />

                <p className="w-[61px] text-[#666]  text-[14px]  leading-normal font-Poppins ">
                  Home
                </p>
              </Link>
            </div>
            <div className="flex items-center gap-2 bg-red-100 border-r-[#BE123C] border-4 p-4 cursor-pointer">
              <img src={image2} className="ml-8" alt="" />
              <p className="w-[61px] text-[#666]  text-[14px]  leading-normal font-Poppins">
                Movies
              </p>
            </div>
            <div className="flex items-center gap-2 p-4 hover:bg-red-100 cursor-pointer">
              <img src={image3} className="ml-8" alt="" />
              <p className="w-[61px] text-[#666]  text-[14px]  leading-normal font-Poppins">
                Tv Series
              </p>
            </div>
            <div className="flex items-center gap-2 p-4 cursor-pointer hover:bg-red-100">
              <img src={image4} className="ml-8" alt="" />
              <p className="w-[61px] text-[#666]  text-[14px]  leading-normal font-Poppins">
                Upcoming
              </p>
            </div>
          </div>
          <div className="w-[170px] h-[210px] rounded-[20px] border-[#BE123C] bg-[#F8E7EB] mx-auto mt-11 p-3 flex flex-col gap-3 font-Poppins">
            <p className="w-[137px] h-[69px] text-[15px] leading-normal font-semibold ">
              Play movie quizes and earn free tickets
            </p>
            <p className="w-[139px] h-[36px] text-[12px] leading-normal font-bold ">
              50k people are playing now
            </p>
            <button className="w-[112px] h-[30px] rounded-[30px] bg-red-200 text-[12px] text-[#BE123C] font-bold leading-normal">
              Start playing
            </button>
          </div>

          <div className="flex items-center mt-[150px]">
            <img src={image5} className="ml-8" alt="logout" />
            <p className="font-Poppins text-[#666] text-[20px] font-[600] leading-normal">
              Log Out
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[80%]">
        <div className="w-full h-[550px] md:p-3 md:rounded-3xl">
          <img
            className="h-[550px] object-full w-full md:rounded-3xl"
            src={`https://image.tmdb.org/t/p/original/${movieInfo.backdrop_path}`}
            alt=""
          />
        </div>
        <div className=" md:flex md:items-center mt-4 ">
          <MovieInfo_L />
          <MovieInfo_R />
        </div>
      </div>
    </section>
  );
}
export default MovieId;
