import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

export default function HeaderSlider({ setBg }) {
  function getImage(number) {
    return `http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider${number}.jpg`;
  }

  return (
    <div className="mt-8">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        autoplay={{ delay: 2000 }}
        loop
      >
        {[1, 2, 3, 4].map((number) => (
          <SwiperSlide key={number}>
            <img
              onMouseOver={(e) => setBg(getImage(number))}
              className="w-full rounded"
              src={getImage(number)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
