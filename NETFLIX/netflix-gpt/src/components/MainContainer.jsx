import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return; //early return
  const mainMovie = movies[0];
  const { title, overview, releaseYear } = mainMovie;
  // console.log(title);
  // Dig into streamingOptions
  const netflixOption = mainMovie.streamingOptions?.in?.[0];
  const fallback = mainMovie?.imageSet.verticalPoster?.w720;
  // console.log(fallback)
  // console.log(mainMovie);
  return (
    <div className="w-full flex items-center justify-center">
      <VideoBackground
        title={title}
        releaseYear={releaseYear}
        fallback={fallback}
      />
      <VideoTitle
        title={title}
        overview={overview}
        netflixOption={netflixOption}
      />
    </div>
  );
};

export default MainContainer;
