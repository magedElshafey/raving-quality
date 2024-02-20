import React from "react";
import style from "./rev.module.css";
import "swiper/css/pagination";
import "swiper/css";
import { rev } from "../../fakers/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";
const Rev = ({ data }) => {
  const swiperOptions = {
    loop: true,
    centeredSlides: false,
    spaceBetween: 0,
    navigation: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    breakpoints: {
      500: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      900: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  };
  return (
    <div className="container">
      <h3 className=" text-center fw-bold text-main m-0 p-0 fs-3 mt-3 mb-2">
        أراء العملاء
      </h3>
      <Swiper
        className="mySwiper w-100 text-center"
        modules={[Autoplay, Navigation]}
        {...swiperOptions}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="mx-auto">
            <img src={item} alt="portfolio/img" className={style.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Rev;
