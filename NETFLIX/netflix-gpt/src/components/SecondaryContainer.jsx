import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black ">
        <div className="-mt-40 pl-5 relative z-10">
          <MovieList
            title={"nowPlayingMovies"}
            movies={movies.nowPlayingMovies}
          />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Horror"} movies={movies.HorrorMovies} />
          <MovieList title={"Sci-Fi"} movies={movies.SciFiMovies} />
          <MovieList title={"Animation"} movies={movies.AnimationMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
