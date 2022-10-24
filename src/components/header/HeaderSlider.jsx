import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import MovieCard from "../movies/MovieCard";

export default function HeaderSlider({ setBg }) {
  function getImage(number) {
    return `/slider${number}.jpg`;
  }

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
        {[1, 2, 3, 4].map((number) => (
          <SwiperSlide key={number}>
            <div onMouseOver={(e) => setBg(getImage(number))}>
              <MovieCard img={getImage(number)} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
