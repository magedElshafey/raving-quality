import React from "react";
import style from "./statistics.module.css";
import { useTranslation } from "react-i18next";
import { stats } from "../../fakers/data";
const Statistics = ({ data }) => {
  const [t, i18n] = useTranslation();
  return (
    <div
      id="stats"
      className={`py-4 d-flex align-items-center ${style.mainDiv}`}
    >
      <div className="container ">
        <h3
          data-aos="zoom-in"
          data-aos-delay="400"
          className=" fs-3 fw-bold text-white m-0 p-0 mb-3 text-center"
        >
          {t("res")}
        </h3>
        <div className="row  align-items-center">
          {data.map((item, index) => (
            <div
              data-aos="zoom-in"
              data-aos-delay={`${400 + 100 * index}`}
              key={index}
              className="col-12 col-md-6 col-lg-3 mb-3"
            >
              <div
                className={`d-flex flex-column align-items-center py-2 gap-1 ${style.mainCard}`}
              >
                <h2
                  className={`${style.num} m-0 p-0 fs-2 fw-bold text-black-50`}
                >
                  + {item.number}
                </h2>
                <p className="fw-bolder text-black-50 m-0 p-0">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
/**
 *   <div  className="container pt-5 mt-5">
      
      <div className="d-flex justify-content-center gap-5 flex-wrap pt-5">
        {stats.map((item, index) => (
          <div
           
            key={index}
            className={`d-flex justify-content-center align-items-center py-3 ${style.mainCard}`}
          >
            <div className="d-flex flex-column align-items-center">
             
            </div>
          </div>
        ))}
      </div>
    </div>
 */
