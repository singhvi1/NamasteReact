import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const MovieList = ({ movies, title }) => {
  return (
    movies && (
      <div className="relative">
        <h1 className="text-white text-2xl md:text-3xl font-semibold mb-3">
          {title}
        </h1>

        <Swiper
          spaceBetween={12}
          slidesPerView={"auto"}
          grabCursor={true} // enables mouse drag
          className="px-2"
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id} style={{ width: "200px" }}>
              <MovieCard
                poster={movie?.imageSet?.verticalPoster?.w720 || "#"}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
  );
};

export default MovieList;
