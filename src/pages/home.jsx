import { CategoryTabs } from "../components/CategoryTabs";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { HomeGrid } from "../components/HomeGrid";
import { useScrollToTop } from "../hooks/useScrollToTop";

export function Home() {
  useScrollToTop();
  return (
    <>
      <Header />
      <CategoryTabs />
      <HomeGrid />
      <Footer />
    </>
  );
}
