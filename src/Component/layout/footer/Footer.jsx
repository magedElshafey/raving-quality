import React from "react";
import style from "./footer.module.css";
// import logo from "../../../assets/LOGO-PNG.png";
import SocialMedia from "../../utilites/SocailMedia/SocialMedia";
import { useTranslation } from "react-i18next";
import hotLine from "../../../assets/maaroofff.png";
const Footer = ({ logo, contact, social, selgon }) => {
  const year = new Date().getFullYear();
  const { t, i18n } = useTranslation();
  console.log("this is the address", contact.address);
  return (
    <div
      className={`mt-4 py-3 ${style.footerContainer} d-flex align-items-center`}
      id="footer"
    >
      <div className="container">
        <div className="row justify-content-center m-0 p-0">
          <div className="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
            <div className="d-flex flex-column gap-2 align-items-center">
              <img alt="logo" src={logo} className={style.logo} />
              <p className="m-0 p-0">{selgon}</p>
              <SocialMedia data={social} />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
            <div className="d-flex flex-column align-items-center gap-2">
              <p className="m-0 p-0 fw-bold fs-5">{t("site")}</p>
              <ul className="d-flex align-items-center flex-column gap-2 m-0 p-0">
                <li className={` ${style.footerLinksContainer} m-0 p-0`}>
                  <a className={style.footerLinks} href="/">
                    {t("home")}
                  </a>
                </li>
                <li className={` ${style.footerLinksContainer} m-0 p-0`}>
                  <a className={style.footerLinks} href="/#about">
                    {t("about")}
                  </a>
                </li>
                <li className={` ${style.footerLinksContainer} m-0 p-0`}>
                  <a className={style.footerLinks} href="/#services">
                    {t("serv")}
                  </a>
                </li>
                <li className={` ${style.footerLinksContainer} m-0 p-0`}>
                  <a
                    rel="noreferrer"
                    className={style.footerLinks}
                    target="_blank"
                    href={social.behance}
                  >
                    {t("behance")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
            <div className="d-flex flex-column align-items-center gap-3">
              <p className="m-0 p-0  fw-bolder  fs-5">{t("contactTitle")}</p>
              <ul className="m-0 p-0 d-flex flex-column align-items-center gap-2">
                <li className="m-0 p-0">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className={style.footerLinks}
                    href={`https://wa.me/${contact.whatsapp}`}
                  >
                    {contact.whatsapp}
                  </a>
                </li>
                <li className="m-0 p-0">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className={style.footerLinks}
                    href={`mailto:${contact.email}`}
                  >
                    {contact.email}
                  </a>
                </li>
                {contact.address ? (
                  <li className={`m-0 p-0 ${style.footerLinks}`}>
                    {contact.address}
                  </li>
                ) : null}
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="d-flex flex-column gap-1 align-items-center mb-2 mb-lg-0">
              <p>
                <img
                  alt="hootline/img"
                  src={hotLine}
                  className={style.hotImg}
                />
              </p>
              <p className="fw-bolder  fs-5 m-0 p-0">
                رقم السجل الضريبي : {contact.hotLine}
              </p>
            </div>
          </div>
        </div>
        <div
          className={` m-0 p-0 mt-2 ${style.copyRightContainer} d-flex align-items-center justify-content-center`}
        >
          <div className="d-flex align-items-center gap-1 m-0 p-0 mt-2">
            <p className="m-0 p-0 text-black-50">
              {t("copyRight")} &copy; {year} {t("allRight")}{" "}
            </p>
            <a
              rel="noreferrer"
              className={style.copyRightLink}
              href="https://www.facebook.com/profile.php?id=61555335491116&mibextid=ZbWKwL"
              target="_blank"
            >
              {i18n.language === "ar" ? "القمة" : "Al - Qema"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
/**
 * <p
          className={`m-0 p-0 py-2 text-black-50  text-center mt-3 ${style.copyRightContainer}`}
        >
          
         
        </p>
 */
/**
 *   <div>
      <div id="footer" className={` mt-3 ${style.footerContainer}`}>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-3">
           

           
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div className="d-flex flex-column align-items-center gap-3">
             
             
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div className="d-flex flex-column align-items-center gap-3">
              <p className="mb-0 fw-bold fs-3">{t("site")}</p>
              <ul className="d-flex align-items-center flex-column gap-3">
                <li className={` ${style.footerLinksContainer}`}>
                  <a className={style.footerLinks} href="/">
                    {t("home")}
                  </a>
                </li>
                <li className={` ${style.footerLinksContainer}`}>
                  <a className={style.footerLinks} href="/#about">
                    {t("about")}
                  </a>
                </li>
                <li className={` ${style.footerLinksContainer}`}>
                  <a className={style.footerLinks} href="/#serv">
                    {t("serv")}
                  </a>
                </li>
                <li className={` ${style.footerLinksContainer}`}>
                  <a
                    rel="noreferrer"
                    className={style.footerLinks}
                    target="_blank"
                    href="https://www.google.com"
                  >
                    {t("behance")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div className="d-flex flex-column gap-3 align-items-center">
              <a
                rel="noreferrer"
                className="d-inline-block w-75"
                target="_blank"
                href="https://wa.me/+201022153359"
              >
                <img
                  alt="hootline/img"
                  src={hotLine}
                  className={style.hotImg}
                />
              </a>
              <p className="fw-bolder  fs-4 mb-0">{t("hotline")} : 2258812</p>
            </div>
          </div>
        </div>
        <p
          className={`mb-0 text-white-50 fs-6 text-center pt-3 ${style.copyRightContainer}`}
        >
          {t("copyRight")} &copy; {year} {t("allRight")}{" "}
          <a
            rel="noreferrer"
            className={style.copyRightLink}
            href="https://www.facebook.com/brandsclub100?mibextid=ZbWKwL"
            target="_blank"
          >
            Tech Marvel
          </a>
        </p>
      </div>
    </div>
 */
