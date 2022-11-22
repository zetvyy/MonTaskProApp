import React from "react";
import SideBar from "../components/sideBar";
import "../style/Profile.css";
import { BsPersonCircle } from "react-icons/bs";
import { TbCalendarTime } from "react-icons/tb";
import { IoIosPhonePortrait } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { SlLocationPin } from "react-icons/sl";

const Profile = () => {
  return (
    <div className="profile">
      <SideBar />
      <main className="profile-content">
        <div className="profile-content__info">
          <div className="profile-header">
            <img src="" alt="profile photo" className="profile-image" />
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

        <div className="profile-content__edit">
          <h1>Edit Profile</h1>
          <hr className="profile__linebreak" />
          <div className="profile-edit__main">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />

            <label htmlFor="fullname">Fullname</label>
            <input type="text" name="fullname" id="fullname" />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />

            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone" id="phone" />

            <label htmlFor="address">Address</label>
            <input type="text" name="address" id="address" />
          </div>
          <button className="button-save" type="submit">
            Simpan
          </button>
        </div>
      </main>
    </div>
  );
};

export default Profile;
