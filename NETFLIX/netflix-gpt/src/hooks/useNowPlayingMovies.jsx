import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS, API_URL } from "../utils/constants";

const useNowPlayingMovies=()=>{
    const dispatch=useDispatch()

  const getMoviesList = async () => {
    const data = await fetch(API_URL, API_OPTIONS);
    const json =await data.json();
    // console.log(json.shows)
    dispatch(addNowPlayingMovies(json.shows))
  };

  useEffect(()=>{
    getMoviesList();
  },[])
}

export default useNowPlayingMovies;