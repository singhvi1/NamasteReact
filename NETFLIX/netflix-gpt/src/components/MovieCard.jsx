
const MovieCard = ({ poster }) => {
  return (
    <div className="w-[140px] md:w-[180px] flex-shrink-0">
      <img
        src={poster}
        alt="Movie Poster"
        className="w-full h-[210px] md:h-[270px] object-cover rounded-md hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
      />
    </div>
  );
};

export default MovieCard;
