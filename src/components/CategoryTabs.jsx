import { useSearchParams } from "react-router-dom";
import image from "../assets/Chevronright.jpg";
import { Wrapper } from "./Wrapper";

export function CategoryTabs() {
  return (
    <div>
      <Wrapper className="py-6 h-20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8 justify-start">
            <TabButton tab="all" />
            <TabButton tab="movie" />
            <TabButton tab="tv" />
          </div>

          <button className="items-center hidden md:flex">
            <span className="text-[#BE123C]">See more</span>
            <img src={image} className="h-[20px]" alt="" />
          </button>
        </div>
      </Wrapper>
    </div>
  );
}

const TabButton = ({ tab }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "all";
  const updateTab = () => {
    if (tab === "all") {
      return setSearchParams({});
    }
    setSearchParams({ category: tab });
  };
  return (
    <button
      onClick={updateTab}
      className={`font-bold capitalize ${
        category.toLocaleLowerCase() === tab.toLocaleLowerCase()
          ? "text-red-600"
          : "text-gray-900"
      }`}
    >
      {tab}
    </button>
  );
};
