import img from "../assets/Menu.png";
import imggg from "../assets/Search.png";
import { Wrapper } from "./Wrapper";
import { Logo } from "./Logo";

export function Navbar() {
  return (
    <nav className="relative py-4 bg-[#0000006c]">
      <Wrapper className="flex justify-between">
        <Logo />

        <div className="hidden relative min-w-72 md:block">
          <input
            type="text"
            placeholder="What do you want to watch?"
            className="bg-transparent outline-none w-full h-full pr-12 pl-4 rounded-md border-2 border-[#D1D5DB] text-white"
          />
          <img
            src={imggg}
            className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2"
            alt=""
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="text-white font-bold">SigIn</button>
          <button>
            <img src={img} alt="logo" className="w-8 h-8" />
          </button>
        </div>
      </Wrapper>

      <div className="absolute w-full h-20 bg-gradient-to-b from-[#0000006c] top-full" />
    </nav>
  );
}
