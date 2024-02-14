import image from "../../assets/Chevronright.jpg"
function Features(){
    return(
        <div className=" flex items-center justify-between max-w-[1244px] h-[47px] mx-auto mt-6">
            <div className="flex items-center w-[300px] h-[47px] gap-8 justify-between lg:justify-between-start mx-auto md:mx-0" >
                <h1 className="md:text-2xl text-base font-bold cursor-pointer">Trending</h1>
                <span className="md:text-2xl font-bold cursor-pointer">Movies</span>
                <span className="md:text-2xl font-bold cursor-pointer">Tv</span>
            </div>
            <div className="flex items-center">
                <h1 className="md:text-[18px] text-sm  text-[#BE123C] font-normal hidden md:block">See more</h1>
                <img src={image} className="md:w-[20px] h-[20px] hidden md:block" alt="" />
            </div>
        </div>
    )
}
export default Features;