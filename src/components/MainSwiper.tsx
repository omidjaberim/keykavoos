// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./css/MainSwiper.css";

// import required modules
import { Keyboard, Navigation } from "swiper/modules";

import slide1 from "../img/slide1.svg";
import slide2 from "../img/slide2.svg";
import slide3 from "../img/slide3.svg";
import ArrowLeft from "../img/left-arrow.svg";
import ArrowRight from "../img/right-arrow.svg";

export default function CustomSwiper() {
  return (
    <div className="container-box mt-[25px]">
      <div className="small-container">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Navigation]}
          navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
        >
          <SwiperSlide>
            <img src={slide1} className="w-full h-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} className="w-full h-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} className="w-full h-full" />
          </SwiperSlide>
        </Swiper>
      </div>
      <img
        src={ArrowLeft}
        className="arrow-left arrow lg:w-[32px] lg:h-[32px] md:w-[24px] md:h-[24px] h-[10px] w-[10px]  mx-2"
      />
      <img
        src={ArrowRight}
        className="arrow-right arrow lg:w-[32px] lg:h-[32px] md:w-[24px] md:h-[24px] h-[10px] w-[10px] mx-2"
      />
    </div>
  );
}
