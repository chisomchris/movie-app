import M_Grid_Layout from "../MovieGridLayout/movie_layout"
// import TvGridLayout from "../TvGridLayout/tv"
import { useState, useEffect } from "react";
import axios from "axios"

function Trend(){

    const [trending, setTrending] = useState([]);

    useEffect(() =>{
        const getData = async () =>{
            try{
                const response = await axios.get(
                    'https://api.themoviedb.org/3/trending/all/day?api_key=543affbe47ead4f79984688d45815285'
                );
                setTrending(response.data.results.slice(0, 20))
            }catch (error){
                console.log(error)
            }
         
        };
        getData();
    },[]);

    return(
        <div className=" md:max-w-[1240px] grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3  sm-p-3  md:p-3 md:mx-auto mt-11 md:grid-cols-3 lg:grid-cols-4 gap-[15px]  p-3 lg:p-0">
            {trending.map((trend) =>{
               return <M_Grid_Layout trend={trend} key={trend.id} trendid={trend.id} />
            //    <TvGridLayout trend={trend} key={trend.id} trendid={trend.id} />
            })}
           
        </div>
    )
}
export default Trend;