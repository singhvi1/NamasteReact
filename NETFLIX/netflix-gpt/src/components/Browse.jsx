import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
  useNowPlayingMovies();

  return (
    <div className="flex flex-col">
      <Header />
      {/* 
          MainContainer
            -videoBackground
            -videoTitle
          SecendaryContainer
          -MovieList*  
       */}
       <MainContainer/>
       <SecondaryContainer/>
    </div>
  );
};
export default Browse;
