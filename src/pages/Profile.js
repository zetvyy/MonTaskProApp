import React from "react";
import CardProfile from "../components/CardProfile";
import CardProfileEdit from "../components/CardProfileEdit";
import SideBar from "../components/sideBar";
import "../style/Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <SideBar action="setting"/>
      <main className="profile-content">
        <CardProfile />
        <CardProfileEdit />
      </main>
    </div>
  );
};

export default Profile;
