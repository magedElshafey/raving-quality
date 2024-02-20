import React, { useState, useEffect } from "react";
import style from "./btn.module.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

const FixedBtn = ({ whatsapp }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    document.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <div
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className={`${style.arrowContainer} ${show ? style.show : style.hide}`}
      >
        <AiOutlineArrowUp size={20} />
      </div>
      <div className={style.whats}>
        <a
          className={`link ${style.btnText}`}
          href={`https://wa.me/${whatsapp}`}
        >
          <FaWhatsapp className={style.whatsIcon} size={20} />
        </a>
      </div>
    </div>
  );
};

export default FixedBtn;
