import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import ShimmerSuggestion from "../utils/ShimmerSuggestion";
const GptMovieSuggestion = () => {
  const { movieNames, movieResults, loading } = useSelector(
    (store) => store.gpt
  );
  // console.log(movieResults);
  if (loading) {
    return <ShimmerSuggestion />; // only show while fetching
  }

  if (!movieNames || movieResults.length === 0) {
    return null; // nothing shown initially
  }
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 bg-black opacity-90 z-0 "></div>
      <div className="relative z-10 p-4">
        {movieNames.map((movieName, index) => (
          <MovieList
            title={movieName}
            movies={movieResults[index]}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
