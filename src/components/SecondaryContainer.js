import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="-mt-60 relative z-20 px-5 ">
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Top Rated"} movies={movies?.topRatedVideo} />
      <MovieList title={"Popular Movies"} movies={movies?.popularMovies} />
      <MovieList title={"Drama"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies?.upComingMovies} />
      <MovieList title={"Thriler"} movies={movies?.nowPlayingMovies} />
    </div>
  );
};

export default SecondaryContainer;
