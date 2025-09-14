import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ title, releaseYear,fallback }) => {
  
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);
  useMovieTrailer(title, releaseYear);
  // console.log(fallback )
  // console.log(trailerVideo);
  if (trailerVideo && trailerVideo.title === title) return;//redux check
  return (
    <div className="w-full relative">
      {trailerVideo?.id ? (
        <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.id?.videoId}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.id?.videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      ) :(
        <img src={fallback} alt={title} className="w-full h-[80vh] object-contain " />
      )}
    </div>
  );
};

export default VideoBackground;
