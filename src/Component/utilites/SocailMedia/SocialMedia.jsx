import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaBehance } from "react-icons/fa";
import { BsSnapchat, BsTiktok } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
import style from "./social.module.css";
const SocialMedia = ({ data }) => {
  return (
    <div className="d-flex flex-wrap align-items-center gap-3">
      {data.behance && (
        <a rel="noreferrer" target="_blank" href={data.behance}>
          <FaBehance size={30} className={style.icon} />
        </a>
      )}
      {data.snapchat && (
        <a rel="noreferrer" target="_blank" href={data.snapchat}>
          <BsSnapchat size={30} className={style.icon} />
        </a>
      )}
      {data.tiktok && (
        <a rel="noreferrer" target="_blank" href={data.tiktok}>
          <BsTiktok size={30} className={style.icon} />
        </a>
      )}
      {data.instagram && (
        <a rel="noreferrer" target="_blank" href={data.instagram}>
          <AiOutlineInstagram size={30} className={style.icon} />
        </a>
      )}

      {data.facebook && (
        <a rel="noreferrer" target="_blank" href={data.facebook}>
          <FaFacebookF size={30} className={style.icon} />
        </a>
      )}
    </div>
  );
};

export default SocialMedia;
