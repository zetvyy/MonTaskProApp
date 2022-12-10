import React from "react";
import CardProfile from "../components/CardProfile";
import CardProfileEdit from "../components/CardProfileEdit";
import SideBar from "../components/sideBar";
import "../style/Profile.css";

const Profile = () => {
  return (
    <React.Fragment>
      <SideBar action="setting"/>
      <div className="profile">
        <main className="profile-content">
          <CardProfile />
          <CardProfileEdit />
        </main>
      </div>  
    </React.Fragment>
  );
};

export default Profile;
