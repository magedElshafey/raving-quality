import React from "react";
import style from "./Serv.module.css";
import { useTranslation } from "react-i18next";
import { serv } from "../../fakers/data";
const Serv = () => {
  const [t, i18n] = useTranslation();

  return (
    <div
      className={`${style.mainDiv} py-4 d-flex align-items-center overflow-x-hidden`}
    >
      <div className="container">
        <h3
          data-aos="fade-up"
          data-aos-delay="400"
          className=" fs-2 fw-bold text-white mb-1 text-center"
        >
          {t("servicesTitle")}
        </h3>
        <p
          data-aos="fade-down"
          data-aos-delay="500"
          className="fw-medium fs-4 text-white-50 fw-bolder mb-3  text-center"
        >
          {t("servicesDesc")}
        </p>
        <div className="row justify-content-center">
          {serv.map((item, index) => (
            <div
              data-aos="zoom-out"
              data-aos-delay={item.delay}
              key={index}
              className="col-12 col-md-6 col-lg-4"
            >
              <div
                className={`${style.card} d-flex flex-column align-items-center gap-3`}
              >
                <div className={style.imgContainer}>
                  <img alt="icon/img" src={item.img} className={style.img} />
                </div>
                <p className={`m-0 p-0 fw-bold  text-white`}>
                  {i18n.language === "ar"
                    ? item.arabicTitle
                    : item.englishTitle}
                </p>
                <p className="m-0 p-0 text-white-50 text-center">
                  {i18n.language === "ar"
                    ? item.arabicDesc.substring(0, 100)
                    : item.englishDesc.substring(0, 100)}
                </p>

                <p className={`fw-bold text-white m-0 p-0`}>
                  {i18n.language === "ar" ? item.arabicStep : item.englishStep}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Serv;
/**
 * <div className="container pt-5 mt-5">
     
        <div className="d-flex pt-4 justify-content-center align-items-center gap-5 flex-wrap">
          {serv.map((item, index) => (
            <div
              className={`text-center ${style.mainContainer}`}
              key={index}
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >
              <div className="d-flex  gap-3">
                <img alt="icon/img" src={item.img} className={style.img} />
                <div>
                  <p className={`fw-bold mb-3  fs-5 ${style.title}`}>
                    {i18n.language === "ar"
                      ? item.arabicTitle
                      : item.englishTitle}
                  </p>
                  <p className="lh  mb-3">
                    {i18n.language === "ar"
                      ? item.arabicDesc
                      : item.englishDesc}
                  </p>
                </div>
              </div>

            
            </div>
          ))}
        </div>
    
    </div>
 */
