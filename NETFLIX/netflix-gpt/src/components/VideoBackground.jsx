import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ title, releaseYear }) => {
  // if (!data) return <p>Loading trailer...</p>;
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);
  useMovieTrailer(title,releaseYear)
console.log(trailerVideo)
  if (trailerVideo && trailerVideo.title === title) return;
  return (
    <div  className="">
      <iframe
      className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.id?.videoId}?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
