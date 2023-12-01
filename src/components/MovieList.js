import MovieCard from "./MovieCard";
const MovieList = ({ title, movies }) => {
  return (
    <div className="">
      <h1 className="text-3xl text-white">{title}</h1>
      <div className="flex overflow-x-hidden hover:overflow-x-scroll">
        <div className="flex pt-5">
          {movies?.map((movie) => (
            <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
