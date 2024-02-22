import { Link } from "react-router-dom";
import image from "../assets/facebook.jpg";
import image1 from "../assets/instagram.jpg";
import image2 from "../assets/twitter.jpg";
import image3 from "../assets/youtub.jpg";
import { Wrapper } from "./Wrapper";

export function Footer() {
  return (
    <footer className="w-full text-pink-600 py-6">
      <Wrapper>
        <div className="flex items-center justify-center gap-6">
          <a href="" className="hover:scale-105">
            <img src={image} className="w-7 h-8 " alt="" />
          </a>
          <a href="" className="hover:scale-105">
            <img src={image1} className="w-7 h-8 " alt="" />
          </a>
          <a href="" className="hover:scale-105">
            <img src={image2} className="w-7 h-8 " alt="" />
          </a>
          <a href="" className="hover:scale-105">
            <img src={image3} className="w-7 h-8 " alt="" />
          </a>
        </div>

        <div className="flex items-center justify-center flex-wrap gap-x-6 gap-y-2 font-bold pt-4">
          <Link className="text-nowrap hover:text-[#111827]">
            Conditions of Use
          </Link>
          <Link className="text-nowrap hover:text-[#111827]">
            Privacy & Policy
          </Link>
          <Link className="text-nowrap hover:text-[#111827]">Press Room</Link>
        </div>

        <div className="text-center pt-4">
          <p className="font-bold text-[#111827]">
            &copy;2023 MovieBox by Adriana Eka Prayudha
          </p>
          <p className="text-[#6B7280] pt-2">
            Coded by{" "}
            <a
              className="text-pink-600 hover:text-[#111827]"
              href="https://github.com/SylviaifyX"
            >
              Ifeoma Okpara Anumege
            </a>
          </p>
        </div>
      </Wrapper>
    </footer>
  );
}
