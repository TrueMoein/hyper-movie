import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import MovieCard from "../movies/MovieCard";

export default function MoviesListSlider({ movies }) {
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
      {movies.map((img) => (
        <SwiperSlide key={img}>
          <MovieCard img={img} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
