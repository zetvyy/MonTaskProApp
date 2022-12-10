import React from "react";
import "../style/Profile.css";

const CardProfileEdit = () => {
  return (
    <div className="profile-content__edit">
      <h1 className="profile-content__h1">Edit Profile</h1>
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
  );
};

export default CardProfileEdit;
