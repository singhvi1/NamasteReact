import { useSelector } from "react-redux";
import useAnimatonMovies from "../hooks/useAnimatonMovies";
import useHorrorMovies from "../hooks/useHorrorMovies";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useScifiMovies from "../hooks/useScifiMovies";
import GptSearch from "./GptSearchPage";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useHorrorMovies();
  useScifiMovies();
  useAnimatonMovies();
  return (
    <div className="flex flex-col">
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};
export default Browse;
