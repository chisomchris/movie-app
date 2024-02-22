import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home";
import ErrorPage from "./pages/error-page";
import { Medias } from "./layout/Medias";
import { getLoader, MediaGrid } from "./components/MediaGrid";
import { homeLoader } from "./components/HomeGrid";
import { Media, getLoader as getMediaLoader } from "./pages/media";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    loader: homeLoader,
  },
  {
    path: "movies",
    element: <Medias />,
    children: [
      {
        path: "",
        element: <MediaGrid mediaType="movie" />,
        loader: getLoader("movie"),
      },
      {
        path: ":id",
        element: <Media mediaType="movie" />,
        loader: getMediaLoader("movie"),
      },
    ],
  },

  {
    path: "tv-series",
    element: <Medias />,
    children: [
      {
        path: "",
        element: <MediaGrid mediaType="tv" />,
        loader: getLoader("tv"),
      },
      {
        path: ":id",
        element: <Media mediaType="tv" />,
        loader: getMediaLoader("tv"),
      },
    ],
  },
  {
    path: "upcoming",
    element: <Medias />,
    children: [
      {
        path: "",
        element: (
          <div className="px-4">To be implemented by Darling SylviaX</div>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
