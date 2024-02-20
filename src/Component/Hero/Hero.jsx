import React from "react";
import style from "./hero.module.css";
const Hero = ({ img }) => {
  return (
    <div className="mt-5 pt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <img
              data-aos="zoom-in"
              data-aos-delay="400"
              src={img}
              alt="banner/img"
              className={style.banner}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
