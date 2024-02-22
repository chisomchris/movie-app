import image from "../assets/im.png";
import image1 from "../assets/rot.png";
import { Link } from "react-router-dom";

export function MovieCard({ media, mediaType }) {
  return (
    <li className="shadow-md">
      <Link
        to={`/${mediaType === "movie" ? "movies" : "tv-series"}/${media.id}`}
        className="flex flex-col gap-3 relative"
      >
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${media.poster_path}`}
            alt=""
            className="w-full object-cover"
          />

          <div>
            <div className="absolute top-2 mr-3 w-[19px] h-[19px] right-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 30 30"
                fill="none"
              >
                <g filter="url(#filter0_b_39697_79)">
                  <ellipse
                    cx="15"
                    cy="15.1842"
                    rx="15"
                    ry="14.6053"
                    fill="#F3F4F6"
                    fillOpacity="0.5"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_b_39697_79"
                    x="-2"
                    y="-1.42105"
                    width="34"
                    height="33.2105"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="1" />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_39697_79"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_39697_79"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>

            <div className="absolute top-2 mr-3 w-[19px] h-[19px] right-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.17157 5.48284C4.73367 3.96185 7.26633 3.96185 8.82842 5.48284L9.99999 6.62359L11.1716 5.48284C12.7337 3.96185 15.2663 3.96185 16.8284 5.48284C18.3905 7.00383 18.3905 9.46984 16.8284 10.9908L9.99999 17.6396L3.17157 10.9908C1.60948 9.46984 1.60948 7.00383 3.17157 5.48284Z"
                  fill="#D1D5DB"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="px-3 py-4">
          <p className="font-bold text-[#9CA3AF] ">
            {media.release_date || media.first_air_date}
          </p>

          <h1 className="font-bold text-lg text-[#111827]">
            {" "}
            {media.title || media.name}{" "}
          </h1>

          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center">
              <img src={image} className="w-[35px] h-[17px] mr-2" alt="IMDB" />
              <p className="text-xs font-medium text-[#111827] w-[56px] h-[12px] leading-[12px]">
                86.0 / 100
              </p>
            </div>
            <div className="flex items-center">
              <img
                src={image1}
                className="w-[16px] h-[17px] mr-2"
                alt="rotten"
              />
              <p className="text-xs font-medium text-[#111827] w-[23px] h-[12px] leading-[12px] ">
                97%
              </p>
            </div>
          </div>

          <p className="font-bold text-[#9CA3AF] pt-2 capitalize">
            {media.media_type}
          </p>
        </div>
      </Link>
    </li>
  );
}
