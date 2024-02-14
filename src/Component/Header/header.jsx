import Navbar from "../Navbar/navbar";
import image from "../../assets/IMDB.png";
import image1 from "../../assets/Rotten.png";
import image2 from "../../assets/Icon.png"
import { useState, useEffect } from "react";
import axios from "axios";

function Header() {
  const [banner, setBanner] = useState([])
  const bgImage = `https://image.tmdb.org/t/p/original/${banner.backdrop_path}`
  

  useEffect(() =>{
    const fetchBanner = async () =>{
      try{
        const response = await axios.get(
          // 'https://api.themoviedb.org/3/movie/670292?api_key=543affbe47ead4f79984688d45815285'
          'https://api.themoviedb.org/3/trending/all/day?api_key=543affbe47ead4f79984688d45815285'
         
        );
        const images = response.data.results
        // console.log(images)
        const currentIndex = Math.floor(Math.random() * images.length)
        // console.log(currentIndex)
        setBanner(images[currentIndex])       
      }catch(error){
        console.log(error)
      }
    }
    fetchBanner();
  },[])
  return (
    <header
      className="h-[600px] bg-center bg-cover w-full"
      style={{backgroundImage: `url(${bgImage})`}}
      // style={{ backgroundImage: "url(`{https://image.tmdb.org/t/p/original/${banner.backdrop_path}`')" }}
    >
      <Navbar />
      <div className="md:w-[404px]  md:ml-8 mt-5 flex flex-col gap-3 p-2">
        <h1 className="text-5xl font-bold leading-[56px] text-white">
          {banner.original_title}
        </h1>
        <div className="w-[184px]  flex justify-between ">
          <img src={image} className="" alt="" />
          <img src={image1} className="" alt="" />
        </div>
        <div className="w-[302px] ">
          <p className="text-sm font-medium text-white leading-[18px]">
            {banner.overview}
          </p>
        </div>

        <div className="w-[169px] h-[36px] rounded-md flex items-center bg-[#BE123C] gap-[8px] py-1.5 px-4">
         <img src={image2} className="w-[20px] h-[20px]" alt="" />
         <p className="text-sm font-bold capitalize leading-[24px] text-white">Watch trailer</p>
        </div>
      
      </div>
    </header>
  );
}

export default Header;
