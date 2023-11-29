import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

const useVideoBackground = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-us",
      API_OPTIONS
    );
    const json = await data.json();
    const Trailers = json.results?.filter((video) => video.type === "Trailer");
    const trailer = Trailers?.length ? Trailers[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
    return trailer;
  };
  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
};

export default useVideoBackground;
