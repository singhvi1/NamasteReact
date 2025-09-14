import { Info } from "lucide-react"; // icons
import { FaPlay } from "react-icons/fa";
const VideoTitle = ({ title, overview, netflixOption }) => {
  // console.log(title, overview, link, videoLink);
  const link = netflixOption?.link || "#";
  const videoLink = netflixOption?.videoLink || "#";
  return (
    <div className=" w-screen aspect-video  absolute  bg-gradient-to-r from-black pt-[30%] px-[10%]">
      <h1 className="text-3xl text-white sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg">
        {title}
      </h1>
      <p className="mt-4 text-sm sm:text-base md:text-lg text-white line-clamp-5 w-[50%]">
        {overview}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <a href={videoLink || "#"} target="_blank" rel="noopener noreferrer"
>
          <button className="flex items-center justify-center gap-2 bg-white text-black px-4 sm:px-6 py-2 sm:py-2 cursor-pointer hover:bg-gray-300 rounded-md w-full sm:w-auto">
            <FaPlay size={20} /> Play
          </button>
        </a>
        <a href={link || "#"} target="_blank" rel="noopener noreferrer"
>
          <button className="flex items-center justify-center gap-2 bg-gray-500 text-white px-4 sm:px-6 py-2 sm:py-2 cursor-pointer hover:bg-black rounded-md w-full sm:w-auto">
            <Info size={20} color="black" /> More Info
          </button>
        </a>
      </div>
    </div>
  );
};

export default VideoTitle;
