import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";

const Movie = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  useEffect(() => {
    fetchNowPlaying();
  }, []);
  const fetchNowPlaying = async () => {
    const api = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=fbd15b89c885b4d9f100259b808f46c5"
    );
    const { results } = await api.json();
    setNowPlaying(results);
  };
  return (
    <div className="container mt-8 mx-auto px-5 lg:px-0">
      <div
        className="grid grid-cols-12 gap-3 sm:gap-5 lg:gap-5 "
        style={{ minHeight: 1000 }}
      >
        <div className="hidden lg:block bg-slate-500 col-span-3"></div>
        <div className="col-span-12 lg:col-span-9 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {nowPlaying?.map((each) => {
              return (
                <Link
                  to={`/movies/${each.id}`}
                  className="relative rounded-xl overflow-hidden hover:-translate-y-[2px] duration-500 shadow-xl"
                  key={each.id}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/original/${each.backdrop_path}`}
                    alt={each.title}
                    className="  w-full"
                  />
                  {/* <div className="absolute w-full  bottom-0 py-4 backdrop-blur-[2px]">
                    abc
                  </div> */}
                  <div className="absolute bottom-2 sm:bottom-0 w-full py-3 left-0 backdrop-blur-[2px] bg-black/40">
                    <div className="flex px-5 justify-between items-center">
                      <div className="mb-1">
                        <h5 className="mb-1 text-gray-300 text-base font-semibold">
                          {each.title.length <= 30
                            ? each.title
                            : `${each.title.substring(0, 30)}...`}
                        </h5>
                        <h6 className="text-gray-400 text-sm font-medium blur-none">
                          {each.release_date}
                        </h6>
                      </div>

                      <div style={{ width: 50, height: 50 }}>
                        <CircularProgressbar
                          value={each.vote_average}
                          maxValue={10}
                          text={each.vote_average}
                          styles={buildStyles({
                            textSize: "30px",
                            pathColor: `#6366f1`,
                            textColor: "white",
                            trailColor: "#9ca3af",
                          })}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
