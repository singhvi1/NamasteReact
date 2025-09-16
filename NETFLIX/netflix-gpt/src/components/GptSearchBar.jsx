import { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import genAI from "../utils/gemini";
import { API_OPTIONS } from "../utils/constants";
import { addGptMoviesResult, clearMovies, setLoading } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  //search movie in RapidApi
  const searchMovieApi = async (movie) => {
    const data = await fetch(
      `https://streaming-availability.p.rapidapi.com/shows/search/title?country=in&title=${movie}&series_granularity=show&show_type=movie&output_language=en`,
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    return json;
  };

  const handleGeminiSearchClick = async () => {
    console.log(searchText?.current?.value);
    if (!searchText?.current.value) return;
    dispatch(clearMovies());
    dispatch(setLoading(true));

    //now make an GPT api call to get movie results
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
      const prompt = `
      Act as a movie recommendation system.
      Suggest 5-7 movies for this query: "${searchText.current.value}"
      Respond ONLY with a comma-separated list of movie names with year.
      Example: gadar, sholay, IronMan, Golmal, Moviex, Moviey
    `;

      const result = await model.generateContent(prompt);
      const gptReply = result?.response?.text();
      console.log(gptReply);
      const gptMovies = gptReply
        .split(",") // split by comma
        .filter((m) => m.length > 0);
      // console.log(gptMovies);

      //search for each gptMovie
      const promiseArray = gptMovies.map((movie) => searchMovieApi(movie));
      const moviesApiResult = await Promise.all(promiseArray);
      // console.log(moviesApiResult)
      dispatch(
        addGptMoviesResult({
          movieNames: gptMovies,
          movieResults: moviesApiResult,
        })
      );
    } catch (error) {
      console.error("Gemini API error:", error);
      alert("⚠️ Gemini servers are busy. Please try again in a few seconds.");
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        action=""
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 bg-white rounded-lg"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 bg-red-700 text-white rounded-lg cursor-pointer"
          onClick={handleGeminiSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
