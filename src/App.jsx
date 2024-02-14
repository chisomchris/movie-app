import Home from "./Layout/Home/home";
import MovieId  from "./Layout/MovieId/movie_id"
import TvId from "./Layout/TvId/tvid"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element ={<Home/>}></Route>
            <Route path="movies/:id" element ={<MovieId/>}></Route>
            <Route path="tv/:id" element ={<TvId/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
