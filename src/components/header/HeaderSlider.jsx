import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import MovieCard from "../movies/MovieCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function HeaderSlider({ setBg }) {
  const [movies, setMovies] = useState([]);

  async function loadMovies() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=2d65b06dcf682524c5198a666426664c"
    );

    setMovies(data.results);
  }

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <div className="mt-8">
      <Swiper
        breakpoints={{
          // when window width is >= 320px
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay]}
        autoplay={{ delay: 2000 }}
        loop
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div
              onMouseOver={() =>
                setBg(`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`)
              }
            >
              <MovieCard movie={movie} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
