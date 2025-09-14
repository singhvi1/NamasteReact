
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ANIMATOIN_MOVIES_API, API_OPTIONS, HORRORMOVIE_API } from "../utils/constants";
import {addAnimationMovies, addHorrorMovies} from "../utils/movieSlice";


const useAnimatonMovies = () => {
  const dispatch = useDispatch();

  const getMoviesList = async () => {
    const data = await fetch(ANIMATOIN_MOVIES_API, API_OPTIONS);
    const json = await data.json();
    // console.log(json)
    dispatch(addAnimationMovies(json.shows));
  };

  useEffect(() => {
    getMoviesList();
  }, []);
};

export default useAnimatonMovies;
