import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import MovieCard from "../movies/MovieCard";
import { useState } from "react";
import { useEffect } from "react";
import { fench } from "../../services/fench";

export default function MoviesListSlider({ type, activeTab }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await fench(`${type}/${activeTab}`);

      setMovies(data.results);
    })();
  }, [type, activeTab]);

  return (
    <Swiper
      breakpoints={{
        // when window width is >= 320px
        640: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        // when window width is >= 640px
        1024: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
      }}
      modules={[Autoplay]}
      autoplay={{ delay: 4000 }}
      centeredSlides
      loop
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <MovieCard movie={movie} imgSize="w342" type={type} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
