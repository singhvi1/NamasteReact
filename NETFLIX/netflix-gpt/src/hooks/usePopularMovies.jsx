import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, POPULARMOVIES_API } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getMoviesList = async () => {
    const data = await fetch(POPULARMOVIES_API, API_OPTIONS);
    const json = await data.json();
    // console.log(json)
    dispatch(addPopularMovies(json.shows));
  };

  useEffect(() => {
    getMoviesList();
  }, []);
};

export default usePopularMovies;
