import React, { useState, useEffect, useRef } from "react";
import style from "./nav.module.css";
import { navLinks } from "../../../fakers/data";
import { useTranslation } from "react-i18next";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import SocialMedia from "../../utilites/SocailMedia/SocialMedia";
const Nav = ({ logo, social, whatsapp, behance }) => {
  const [t, i18n] = useTranslation();
  const [showSideBar, setShowSideBar] = useState(false);
  const [shdow, setShadow] = useState(false);
  const sidebarRef = useRef();
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setShowSideBar(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    document.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      {/*larg screen view*/}
      <div className="d-none d-md-block">
        <div
          className={`${style.navContainer} ${
            shdow ? style.setShadow : style.removeShadow
          }  d-flex align-items-center`}
        >
          <div className="container d-flex justify-content-between align-items-center">
            <img
              alt="logo/img"
              loading="lazy"
              src={logo}
              className={`p-0 m-0 ${style.logo}`}
            />
            <ul className="p-0 m-0 d-flex align-items-center gap-4 fw-bold ">
              {navLinks.map((item, index) => (
                <li key={index}>
                  {i18n.language === "ar" ? (
                    <a
                      className={`link pb-3 ${style.navLinks}`}
                      href={`${
                        item.title === "Behance" ||
                        item.ArabicTitle === "بيهانس"
                          ? behance
                          : item.path
                      }`}
                    >
                      {item.ArabicTitle}
                    </a>
                  ) : (
                    <a
                      className={`link pb-3 ${style.navLinks}`}
                      href={`${
                        item.title === "Behance" ||
                        item.ArabicTitle === "بيهانس"
                          ? behance
                          : item.path
                      }`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <button className={style.btn}>
              <a
                className={`link ${style.btnText}`}
                href={`https://wa.me/${whatsapp}`}
              >
                {t("btnNav")}
              </a>
            </button>
          </div>
        </div>
      </div>
      {/*mobile view*/}
      <div className="d-block d-md-none">
        <div
          className={`${style.navContainer} ${
            shdow ? style.setShadow : style.removeShadow
          }`}
        >
          <div className="container d-flex justify-content-between align-items-center">
            <div>
              <img
                alt="logo/img"
                loading="lazy"
                src={logo}
                className={style.logo}
              />
            </div>
            <button className={`d-none d-md-block ${style.btnMob}`}>
              <a
                className={`link ${style.btnText}`}
                href={`https://wa.me/${whatsapp}`}
              >
                {t("btnNav")}
              </a>
            </button>
            {!showSideBar && (
              <AiOutlineMenu
                onClick={() => setShowSideBar(true)}
                size={30}
                className={style.menuIcon}
              />
            )}
          </div>
          {showSideBar && <div className={style.overlay}></div>}
          <div
            ref={sidebarRef}
            className={`${style.sideBar} ${
              showSideBar ? style.show : style.hide
            }`}
          >
            <div className=" position-relative">
              <div className={style.closeContainer}>
                <AiOutlineClose
                  onClick={() => setShowSideBar(false)}
                  size={40}
                  className={`pb-3 ${style.closeIcon} ${
                    showSideBar ? style.rotate : ""
                  }`}
                />
              </div>
              <div className="d-flex justify-content-center">
                <ul className="fw-bold m-0 p-0 mt-5 text-center">
                  {navLinks.map((item, index) => (
                    <li
                      onClick={() => setShowSideBar(false)}
                      className={`py-3  ${style.mobileLink}`}
                      key={index}
                    >
                      {i18n.language === "ar" ? (
                        <a
                          className={`link ${style.navLinks}`}
                          href={item.path}
                        >
                          {item.ArabicTitle}
                        </a>
                      ) : (
                        <a
                          rel="noreferrer"
                          className={`link pb-3 ${style.navLinks}`}
                          href={item.path}
                          target="_blank"
                        >
                          {item.title}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <hr className={style.line} />
            <button
              className={`d-flex justify-content-center mx-auto ${style.btnMob}`}
            >
              <a
                className={`link ${style.btnText}`}
                href={`https://wa.me/${whatsapp}`}
              >
                {t("btnNav")}
              </a>
            </button>
            <hr className={style.line} />
            <div className="pt-3 d-flex justify-content-center align-items-center gap-2">
              <SocialMedia data={social} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
/*
  large screen view
  	<div className='d-none d-md-block '>
				<div >
					<div className='container-fluid py-4  d-flex justify-content-between align-items-center'>
				
						<div className='p-0 m-0'>
						
						</div>
					
						
				
						
					</div>
				</div>
			</div>
*/
/*
                    mobile view 
                    	
*/
export default Nav;
