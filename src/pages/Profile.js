import React from "react";
import CardProfile from "../components/CardProfile";
import CardProfileEdit from "../components/CardProfileEdit";
import SideBar from "../components/sideBar";
import Navbar from "../components/navbar";
import "../style/Profile.css";

const Profile = () => {
  return (
    <React.Fragment>
      <SideBar active="setting"/>
      <div className="profile">
      <Navbar title="Setting" />
        <main className="profile-content">
          <CardProfile />
          <CardProfileEdit />
        </main>
      </div>  
    </React.Fragment>
  );
};

export default Profile;
