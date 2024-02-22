import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollToTop(element) {
  const { search } = useLocation();

  useEffect(() => {
    const canControlScrollRestoration = "scrollRestoration" in window.history;
    if (canControlScrollRestoration) {
      window.history.scrollRestoration = "manual";
    }

    (element && element.scrollTo(0, 0)) || window.scrollTo(0, 0);
  }, [search]);
}
