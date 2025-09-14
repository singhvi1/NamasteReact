import useAnimatonMovies from "../hooks/useAnimatonMovies";
import useHorrorMovies from "../hooks/useHorrorMovies";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useScifiMovies from "../hooks/useScifiMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies()
  useHorrorMovies()
  useScifiMovies()
  useAnimatonMovies()
  return (
    <div className="flex flex-col">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};
export default Browse;
