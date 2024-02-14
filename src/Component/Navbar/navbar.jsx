import img from "../../assets/Menu.png"
import imgg from "../../assets/tv.png"
import imggg from "../../assets/Search.png"
function Navbar(){
    return(
        <nav className="w-full h-[80px] flex items-center justify-between pl-6 px-6">   
            <div className="flex items-center md:w-[186px] md:gap-[24px]  w-full">
                <img src={imgg} alt="logo"  className="w-[50px] h-[50px]"/>
                <p className="font-DM Sans text-2xl text-white font-bold leading-6">MovieBox</p>
            </div>
           
            <div className="w-[525px] rounded-md border-2 border-[#D1D5DB] py-1.5 px-2.5 md:flex items-center justify-between hidden sm:hidden">
                <input type="text"  placeholder="What do you want to watch?" className="w-[221px] h-[24px] bg-transparent outline-none"/>
                <img src={imggg} className="w-[16px] h-[16px]" alt="" />
            </div>
            <div className="md:flex items-center w-[114px] gap-[27px] h-[36x] hidden sm:hidden">
                <p className="text-base text-white font-bold leading-6">SigIn</p>
                <img src={img} alt="logo" className="w-[24px] h-[24px]"/>
            </div>
        </nav>
    )
}
export default Navbar;