import React from "react";
import style from "./portfolio.module.css";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper";
const Portfolio = ({ data }) => {
  const swiperOptions = {
    loop: true,
    centeredSlides: false,
    spaceBetween: 0,
    navigation: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    breakpoints: {
      500: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      900: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
    },
  };
  const { t } = useTranslation();
  return (
    <div id="port" className="container-fluid my-4">
      <div>
        <h3
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-offset="50"
          className="text-center mb-3  fw-bold text-main fs-3"
        >
          {t("port")}
        </h3>
      </div>

      <Swiper
        className="mySwiper w-100 text-center"
        modules={[Autoplay, Navigation, Pagination]}
        data-aos="fade-up"
        data-aos-offset="200"
        {...swiperOptions}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className={`mb-5 ${style.slider} mx-auto`}>
            <div className={style.imgContainer}>
              <img src={item.image} alt="portfolio/img" className={style.img} />
            </div>

            <p className="text-main p-0 m-0">{item.title}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;
/*
    <div >
        {port.map((item, index) => (
          <div key={index} className="container">
            <div
              className={`p-0 col-12 col-md-5  ${style.mainContainer}`}
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >
              <img
                alt="portfolio/img"
                src={item.img}
                className="w-100 h-50 img-fluid"
              />
              <h4 className="fw-bolder  pt-5 text-center mb-3">
              
              </h4>
              
            </div>
          </div>
        ))}
      </div>
*/
