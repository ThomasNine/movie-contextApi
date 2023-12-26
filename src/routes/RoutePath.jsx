import React from "react";
import { Route, Routes } from "react-router-dom";
import Movie from "../pages/Movie";
import TvSeries from "../pages/TvSeries";
import People from "../pages/People";
import MovieDetail from "../pages/MovieDetail";
import SeriesDetail from "../pages/SeriesDetail";
import PopularSeries from "../pages/PopularSeries";
import PopularMovies from "../pages/PopularMovies";
import TopRatedMovie from "../pages/TopRatedMovie";
import TopRatedSeries from "../pages/TopRatedSeries";
import Search from "../pages/Search";
import UpcomingMovies from "../pages/UpcomingMovies";
import UpcomingSeries from "../pages/UpcomingSeries";

const RoutePath = () => {
  return (
    <div>
      <Routes>
        <Route path="/movies" element={<Movie />} />
        <Route path="/movie/:detail" element={<MovieDetail />} />
        <Route path="/movies/popular" element={<PopularMovies />} />
        <Route path="/movies/top-rated" element={<TopRatedMovie />} />
        <Route path="/movies/upcoming" element={<UpcomingMovies />} />
        <Route path="/tv-series" element={<TvSeries />} />
        <Route path="/tv-series/:detail" element={<SeriesDetail />} />
        <Route path="/tv-series/popular" element={<PopularSeries />} />
        <Route path="/tv-series/top-rated" element={<TopRatedSeries />} />
        <Route path="/tv-series/upcoming" element={<UpcomingSeries />} />
        <Route path="/people" element={<People />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
};

export default RoutePath;
