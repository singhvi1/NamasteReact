import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, HORRORMOVIE_API } from "../utils/constants";
import {addHorrorMovies} from "../utils/movieSlice";


const useHorrorMovies = () => {
  const dispatch = useDispatch();

  const getMoviesList = async () => {
    const data = await fetch(HORRORMOVIE_API, API_OPTIONS);
    const json = await data.json();
    // console.log(json)
    dispatch(addHorrorMovies(json.shows));
  };

  useEffect(() => {
    getMoviesList();
  }, []);
};

export default useHorrorMovies;
