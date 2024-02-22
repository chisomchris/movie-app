import { Outlet } from "react-router-dom";
import { SidePanel } from "../components/SidePanel";
import { IndependentScroll } from "../components/IndependentScroll";

export function Medias() {
  return (
    <section>
      <IndependentScroll left={<SidePanel />} right={<Outlet />} />
    </section>
  );
}
