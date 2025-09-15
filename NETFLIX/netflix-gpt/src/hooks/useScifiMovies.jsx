import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, SCI_FI_API } from "../utils/constants";
import {  addSciFiMovies } from "../utils/movieSlice";

const useScifiMovies = () => {
  const dispatch = useDispatch();

  const getMoviesList = async () => {
    const data = await fetch(SCI_FI_API, API_OPTIONS);
    const json = await data.json();
    // console.log(json.shows)
    dispatch(addSciFiMovies(json.shows));
  };

  useEffect(() => {
    getMoviesList();
  }, []);
};

export default useScifiMovies;
