import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { TbCalendarTime } from "react-icons/tb";
import { IoIosPhonePortrait } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { SlLocationPin } from "react-icons/sl";
import ProfileFoto from "../asset/profileFoto.webp";
import "../style/Profile.css";

const CardProfile = () => {
  return (
    <div className="profile-content__info">
      <div className="profile-header">
        <img src={ProfileFoto} alt="profile photo" className="profile-image" />
        <span className="my-profile">
          <p className="profile__name">Xiao Nai</p>
          <p>Student of Computer at Universitas Tianghua</p>
        </span>
      </div>
      <hr className="profile__linebreak" />
      <div className="profile-main">
        <p className="heading">Profile detail</p>
        <span className="profile-main__content">
          <BsPersonCircle className="icon-profile-content" />
          <p>Xiao Nai</p>
        </span>
        <span className="profile-main__content">
          <TbCalendarTime className="icon-profile-content" />
          <p>22-09-2000</p>
        </span>
        <span className="profile-main__content">
          <IoIosPhonePortrait className="icon-profile-content" />
          <p>+62812345678</p>
        </span>
        <span className="profile-main__content">
          <SiGmail className="icon-profile-content" />
          <p>Xiao@gmail.com</p>
        </span>
        <span className="profile-main__content">
          <SlLocationPin className="icon-profile-content" />
          <p>Jakarta, Indonesia</p>
        </span>
      </div>
    </div>
  );
};

export default CardProfile;
