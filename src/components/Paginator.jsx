import { useEffect, useRef, useState } from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";
import image from "../assets/Chevronright1.png";
import { ToolTip } from "./ToolTip.jsx";
import { useObserveElementWidth } from "../hooks/useObserveElemWidth";

export const Paginator = () => {
  const elemRef = useRef();
  const { resizeObserver, buttons } = useObserveElementWidth();
  const [searchParams, setSearchParams] = useSearchParams();
  const [index, setIndex] = useState(true);
  const [pages, setPages] = useState(2);

  const {
    medias: { total_pages },
  } = useLoaderData();

  const prevNext = (direction) => {
    const page = searchParams.get("page") || 1;
    const newPage =
      direction === "+"
        ? Number(page) + 1
        : direction === "-"
        ? Number(page) - 1
        : page;
    if (newPage < 1 || newPage > total_pages) return;
    searchParams.set("page", newPage);
    setSearchParams(searchParams);
  };

  const changeRange = (direction, steps) => {
    let range = Math.floor(currentIndex / steps) * steps;
    range = currentIndex == range ? range / currentIndex - 1 : range;
  };

  useEffect(() => {
    resizeObserver.observe(elemRef.current);
  }, []);

  const getArray = (currentIndex, steps, newRange) => {
    if (index) {
      let rang = pages * steps;
      console.log(rang);
    }
    const arr = [];
    let range = Math.floor(currentIndex / steps) * steps;
    range = currentIndex == range ? (range / steps - 1) * steps : range;
    for (let i = range; i < range + steps; i++) {
      arr.push(i + 1);
    }
    return arr;
  };

  return (
    <div className="flex gap-x-10 gap-y-4 py-6 justify-between flex-wrap sm:flex-nowrap">
      <div className="flex gap-3 flex-nowrap">
        <PrevNextBtn mode="skip" direction="backward" />
        <PrevNextBtn
          direction="backward"
          className="group"
          onClick={() => prevNext("-")}
        >
          <ToolTip text="Previous Page" />
        </PrevNextBtn>
      </div>

      <div ref={elemRef} className="min-w-[200px] flex-grow flex-shrink">
        <div className={`grid grid-rows-1 gap-3 grid-cols-${buttons}`}>
          {getArray(Number(searchParams.get("page")) || 1, buttons).map(
            (page) => (
              <Button number={page} key={page} />
            )
          )}
        </div>
      </div>

      <div className="flex gap-3 flex-nowrap ml-auto">
        <PrevNextBtn className="group" onClick={() => prevNext("+")}>
          <ToolTip text="Next Page" />
        </PrevNextBtn>
        <PrevNextBtn mode="skip" />
      </div>
    </div>
  );
};

const Button = ({ number }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateTab = (page) => {
    if (page == "1") {
      searchParams.delete("page");
      return setSearchParams(searchParams);
    }
    searchParams.set("page", page);
    setSearchParams(searchParams);
  };
  return (
    <button
      className={`py-1 w-12 bg-slate-100 rounded-sm ${
        searchParams.get("page") == number ||
        (!searchParams.get("page") && number == 1)
          ? "text-pink-600 font-bold"
          : ""
      } hover:bg-slate-200`}
      onClick={() => {
        updateTab(number);
      }}
    >
      {number}
    </button>
  );
};

const PrevNextBtn = ({ direction, mode, children, className, onClick }) => {
  return (
    <button
      className={`py-1 px-3 bg-slate-100 rounded-sm relative hover:bg-slate-200 ${
        typeof className === "string" ? className : ""
      }`}
      onClick={onClick}
    >
      <div
        className={`${
          direction === "backward" ? "rotate-180" : ""
        } relative h-6 w-6`}
      >
        {mode === "skip" ? (
          <>
            {" "}
            <img
              src={image}
              className="h-6 absolute top-1/2 -translate-y-1/2 -right-1/4"
              alt=""
            />
            <img
              src={image}
              className="h-6 absolute top-1/2 -translate-y-1/2 -left-1/4"
              alt=""
            />
          </>
        ) : (
          <>
            <img src={image} className="h-6" alt="" />
          </>
        )}
      </div>

      {children}
    </button>
  );
};
