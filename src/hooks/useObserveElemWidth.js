import { useState } from "react";

export const useObserveElementWidth = () => {
  const [buttons, setButtons] = useState(6);
  const resizeObserver = new ResizeObserver((entries) => {
    for (let entry of entries) {
      if (entry.contentBoxSize) {
        if (Array.isArray(entry.contentBoxSize)) {
          const width = Math.floor(entry.contentBoxSize[0].inlineSize);
          setButtons(() => (width < 280 ? 4 : Math.floor(width / 55)));
        } else {
          const width = Math.floor(entry.contentBoxSize.inlineSize);
          setButtons(() => (width < 280 ? 4 : Math.floor(width / 55)));
        }
      } else {
        const width = Math.floor(entry.contentRect.width);
        setButtons(() => (width < 280 ? 4 : Math.floor(width / 55)));
      }
    }
  });
  return { resizeObserver, buttons };
};

export const useWidth = () => {
  const [width, setWidth] = useState(320);
  const resizeObserver = new ResizeObserver((entries) => {
    for (let entry of entries) {
      if (entry.contentBoxSize) {
        if (Array.isArray(entry.contentBoxSize)) {
          setWidth(Math.floor(entry.contentBoxSize[0].inlineSize));
        } else {
          setWidth(Math.floor(entry.contentBoxSize.inlineSize));
        }
      } else {
        setWidth(Math.floor(entry.contentRect.width));
      }
    }
  });
  return { resizeObserver, width };
};
