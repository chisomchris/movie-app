import { useEffect, useRef, useState } from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";
import image from "../assets/Chevronright1.png";
import { ToolTip } from "./ToolTip.jsx";
import { useObserveElementWidth } from "../hooks/useObserveElemWidth";

export const Paginator = () => {
  const elemRef = useRef();
  const { resizeObserver, buttons } = useObserveElementWidth();
  const [searchParams, setSearchParams] = useSearchParams();
  const [start, setStart] = useState(1);

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

  const changeRange = (direction) => {
    if (elemRef.current) {
      const start = Number(elemRef.current.querySelector("button").textContent);
      const pointer =
        direction === "+"
          ? start + buttons
          : direction === "-"
          ? start - buttons
          : start;
      setStart(
        pointer < 1
          ? 1
          : pointer > total_pages - buttons
          ? total_pages - buttons
          : pointer
      );
    }
  };

  const getArray = (start) => {
    const arr = [];
    for (let i = start; i < start + buttons; i++) {
      arr.push(i);
    }
    return arr;
  };

  // update starting index for pagination buttons when search param changes or when number of buttons change
  useEffect(() => {
    const currentIndex = Number(searchParams.get("page")) || 1;
    setStart(Math.floor((currentIndex - 0.001) / buttons) * buttons + 1);
  }, [searchParams, buttons]);

  // attach a resize observer to buttons container
  useEffect(() => {
    resizeObserver.observe(elemRef.current);
  }, []);

  return (
    <div className="flex gap-x-10 gap-y-4 py-6 justify-between flex-wrap sm:flex-nowrap">
      <div className="flex gap-3 flex-nowrap">
        <PrevNextBtn
          mode="skip"
          direction="backward"
          onClick={() => {
            changeRange("-");
          }}
        />
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
          {getArray(start).map((page) => (
            <Button number={page} key={page} />
          ))}
        </div>
      </div>

      <div className="flex gap-3 flex-nowrap ml-auto">
        <PrevNextBtn className="group" onClick={() => prevNext("+")}>
          <ToolTip text="Next Page" />
        </PrevNextBtn>
        <PrevNextBtn
          mode="skip"
          onClick={() => {
            changeRange("+");
          }}
        />
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
