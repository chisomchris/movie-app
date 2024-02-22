import { useRef } from "react";
import { useScrollToTop } from "../hooks/useScrollToTop";

export const IndependentScroll = ({ left, right }) => {
  const scrollRef = useRef();
  useScrollToTop(scrollRef.current);
  return (
    <div className="grid md:grid-cols-[min-content_1fr]">
      <div className="md:h-dvh overflow-y-scroll no-scrollbar">{left}</div>

      <div className="h-dvh overflow-y-scroll" ref={scrollRef}>
        {right}
      </div>
    </div>
  );
};
