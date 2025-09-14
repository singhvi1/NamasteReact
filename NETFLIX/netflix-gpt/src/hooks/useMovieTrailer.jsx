import React, { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (title, releaseYear ) => {
  const API_KEY = import.meta.env.VITE_YT_API;
  const dispatch = useDispatch();
  useEffect(() => {
     //if already in redux
    async function fetchTrailer() {
      try {
        const query = `${title} ${releaseYear} official trailer`;
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
          query
        )}&key=${API_KEY}&type=video`;
        const res = await fetch(url);
        const data = await res.json();
        const filterData = data.items.filter((item) => item?.id?.videoId);
        const trailer = filterData.length ? filterData[0] : null;
        // const thumbnails = filterData[0].snippet?.thumbnails?.medium?.url;
        // console.log(trailer);
        // console.log(thumbnails);
        if (filterData && filterData.length > 0) {
          dispatch(addTrailerVideo(trailer));
        //   console.log(data?.items[0]?.id?.videoId);
          localStorage.setItem(`trailer_${title}`, JSON.stringify(trailer));
        }
      } catch (err) {
        console.error("Error fetching trailer:", err);
      }
      // Check localStorage first
      const savedTrailer = localStorage.getItem(`trailer_${title}`);
      if (savedTrailer) {
        dispatch(addTrailerVideo(JSON.parse(savedTrailer)));
      } else {
        fetchTrailer();
      }
    }
    fetchTrailer();
  }, []);
  return <div></div>;
};

export default useMovieTrailer;
