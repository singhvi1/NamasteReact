import { BG_URL } from "../utils/constants"
import GptMovieSuggestion from "./GptMovieSuggestion"
import GptSearchBar from "./GptSearchBar"

const GptSearchPage = () => {
  return (
    <div className="">
      <div className="img absolute -z-10">
        <img
          src={BG_URL}
          alt="logo"
        />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearchPage
