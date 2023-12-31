import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMoives";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Gptsearch from "./GptSearchPage";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="bg-black">
      <Header />
      {showGptSearch && <Gptsearch />}
      {!showGptSearch && <MainContainer />}
      {!showGptSearch && <SecondaryContainer />}
    </div>
  );
};

export default Browse;
