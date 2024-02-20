import React from "react";
import style from "./about.module.css";
import { useTranslation } from "react-i18next";
import { about } from "../../fakers/data";
const About = ({ data }) => {
  const [t, i18n] = useTranslation();

  return (
    <div
      id="services"
      className={`py-4 d-flex align-items-center ${style.mainDiv}`}
    >
      <div className="container">
        <h2
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-center fw-bold text-white fs-3 mb-5"
        >
          {t("aboutTitle")}
        </h2>
        <div className="row align-items-center justify-content-center justify-content-md-start">
          {data.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3 mb-3">
              <div
                data-aos="zoom-in"
                data-aos-delay={`${400 + 100 * index}`}
                className={`py-3 px-2 d-flex flex-column gap-2 justify-content-center align-items-center ${style.mainCard} `}
              >
                <img className={style.img} alt="about/img" src={item.image} />
                <p className="fw-bold  text-black-50 m-0 p-0">{item.title}</p>
                <p className="text-black-50 m-0 p-0">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
/**
 *  <div id="services" className="container pt-5 mt-5">
      
      <div className="d-flex flex-wrap gap-4 justify-content-center">
        {about.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={item.delay}
            data-aos-offset="50"
           
          >
           
           
          </div>
        ))}
      </div>
    </div>
 */
