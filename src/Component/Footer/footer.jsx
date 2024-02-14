import image from "../../assets/facebook.jpg";
import image1 from "../../assets/instagram.jpg";
import image2 from "../../assets/twitter.jpg";
import image3 from "../../assets/youtub.jpg";
function Footer() {
  return (
    <footer className="md:w-[492px] h-[165px] md:h-[145px] md:mx-auto md:mt-[78px] w-full">
      <div className="w-[240px] h-[27px] flex items-center justify-between mx-auto">
        <img src={image} className="md:w-[24px] md:h-[27px] w-[20px] h-[25px] " alt="" />
        <img src={image1} className="md:w-[24px] md:h-[27px] w-[20px] h-[25px]" alt="" />
        <img src={image2} className="md:w-[24px] md:h-[27px] w-[20px] h-[25px]" alt="" />
        <img src={image3} className="md:w-[24px] md:h-[27px] w-[20px] h-[25px]" alt="" />
      </div>
      <div className="md:w-[492px] w-full flex gap-2 mt-5 ">
        <span className="font-bold md:text-[18px] text-[13px] ml-2 md:ml-0 lg text-[#111827] ">
          Conditions of Use
        </span>
        <span className="font-bold md:text-[18px] text-[13px] text-[#111827]">
          Privacy & Policy
        </span>
        <span className="font-bold md:text-[18px] text-[13px] text-[#111827]">Press Room</span>
      </div>
      <div className="md:w-[366px] h-[23px] mx-auto mt-4 text-center md:text-center-0 ">
        <div className="">
          <p className="font-bold text-[15px] md:text-[18px] text-[#6B7280]">
            &copy;2023 MovieBox by Adriana Eka Prayudha
          </p>
        </div>
        <div>
          <p className="font-bold text-[15px] md:text-[18px] text-[#6B7280] text-center">
            Coded by Ifeoma Okpara Anumege
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
