import React from "react";
import MovieCard from "../movies/MovieCard";
import MoviesListSlider from "./MoviesListSlider";

const movies = [
  "/slider1.jpg",
  "/slider2.jpg",
  "/slider3.jpg",
  "/slider2.jpg",
  "/slider3.jpg",
  "/slider1.jpg",
];

export default function MoviesList() {
  return (
    <div className="container">
      <div className="pt-8">
        <div className="md:flex gap-8 items-center md:mb-4">
          <h2 className="text-slate-300 text-2xl">What's Popular</h2>

          <ul className="my-6 flex flex-col gap-4 md:gap-8 text-yellow-100 md:flex-row items-baseline">
            <li>Streaming</li>
            <li className="text-yellow-300 text-xl">On TV</li>
            <li>For Rent</li>
            <li>In Theaters</li>
          </ul>
        </div>
        <MoviesListSlider movies={movies} />
      </div>

      <div className="pt-8">
        <div className="md:flex gap-8 items-center md:mb-4">
          <h2 className="text-slate-300 text-2xl">Free to Watch</h2>

          <ul className="my-6 flex flex-col gap-4 md:gap-8 text-yellow-100 md:flex-row items-baseline">
            <li className="text-yellow-300 text-xl">Movie</li>
            <li>TV</li>
          </ul>
        </div>
        <MoviesListSlider movies={movies} />
      </div>
    </div>
  );
}
