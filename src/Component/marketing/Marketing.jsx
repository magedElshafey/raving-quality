import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../../lotties/social-media-influencer.json";
import { useTranslation } from "react-i18next";
import { marketDetails } from "../../fakers/data";
import style from "./marketing.module.css";
import { FaCheck } from "react-icons/fa";
const Marketing = ({ data, aboutTexts }) => {
  const [t, i18n] = useTranslation();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div id="about" className="container my-5">
      <div
        className="row justify-content-center align-items-center "
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-offset="100"
      >
        <div
          className="col-12 col-md-6 mb-3 mb-md-0"
          data-aos="fade-down"
          data-aos-delay="600"
        >
          <h3
            data-aos="zoom-in"
            data-aos-delay="400"
            className={`fw-bold text-main fs-3  mb-2 text-center  ${
              i18n.language === "ar" ? "text-md-end" : "text-md-end"
            }`}
          >
            {data.title}
          </h3>
          <p
            data-aos="fade-up"
            data-aos-delay="500"
            className={`mb-3 text-center  ${
              i18n.language === "ar" ? "text-md-end" : "text-md-end"
            }`}
          >
            {data.description}
          </p>
          <div data-aos="zoom-in" data-aos-delay="400" className="row ">
            {aboutTexts.map((item, index) => (
              <div key={index} className="col-12 col-md-6">
                <div className="d-flex align-items-center gap-1 mb-2">
                  <div className={style.box}>
                    <FaCheck size={15} className="text-white" />
                  </div>
                  <p className="p-0 m-0">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="500"
          className="col-12 col-md-6"
        >
          <Lottie isClickToPauseDisabled options={defaultOptions} />
        </div>
      </div>
    </div>
  );
};

export default Marketing;
/**
 *   <div
               
                className={`col-12 mb-3   d-flex align-items-center gap-2 `}
              >
               
                
              </div>
 */
/**
 *    <div
        className="row align-items-center justify-content-center"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-offset="100"
      >
        <div
          className="col-12 col-md-6 mb-4 mb-md-0"
          data-aos="fade-down"
          data-aos-delay="600"
        >
        
          
       
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="500"
          className="col-12 col-md-6 mb-4 mb-md-0"
        >
         
        </div>
      </div>
 */
