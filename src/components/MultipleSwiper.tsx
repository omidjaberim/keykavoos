import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./css/MultipleSwiper.css";
import Slide0 from "../img/miniSlides/mini1.svg";
import Slide1 from "../img/miniSlides/mini2.svg";
import Slide2 from "../img/miniSlides/mini3.svg";
import Slide3 from "../img/miniSlides/mini4.svg";
import Slide4 from "../img/miniSlides/mini5.svg";
import Slide5 from "../img/miniSlides/mini6.svg";
import Slide6 from "../img/miniSlides/mini7.svg";
import Slide7 from "../img/miniSlides/mini8.svg";
import Slide8 from "../img/miniSlides/mini9.svg";
import { Autoplay } from "swiper/modules";

export default function MultipleSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          450: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <img src={Slide0} className="h-[150px] w-[150px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide1} className="h-[150px] w-[150px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide2} className="h-[150px] w-[150px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide3} className="h-[150px] w-[150px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide4} className="h-[150px] w-[150px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide5} className="h-[150px] w-[150px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide6} className="h-[150px] w-[150px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide7} className="h-[150px] w-[150px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide8} className="h-[150px] w-[150px]" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
