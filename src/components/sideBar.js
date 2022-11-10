import React from "react";
import "../style/Sidebar.css";
import home from "../asset/icons/icons8-home-64.png";
import task from "../asset/icons/icons8-task-planning-64.png";
import calender from "../asset/icons/icons8-calendar-64.png";
import documents from "../asset/icons/icons8-attestation-64.png";
import setting from "../asset/icons/icons8-setting-64.png";
import homeActive from "../asset/icons/icons8-home-64-active.png";
import taskActive from "../asset/icons/icons8-task-planning-64-active.png";
import calenderActive from "../asset/icons/icons8-calendar-64-active.png";
import documentsActive from "../asset/icons/icons8-attestation-64-active.png";
import settingActive from "../asset/icons/icons8-setting-64-active.png";
import signOut from "../asset/icons/icons8-logout-64.png";

function SideBar({active}) {
  return (
    <div className="sideBar">
      <div className="sideBar__logo">
        <p>logo</p>
      </div>
      <div className="sideBar__list">
        <ul>
          <li className={active == "home" ? "active" : ""}>
            <img src={active == "home" ? homeActive : home} alt="home" />
          </li>
          <li className={active == "task" ? "active" : ""}>
            <img src={active == "task" ? taskActive : task} alt="task" />
          </li>
          <li className={active == "calender" ? "active" : ""}>
            <img src={active == "calender" ? calenderActive : calender} alt="calender" />
          </li>
          <li className={active == "documents" ? "active" : ""}>
            <img src={active == "documents" ? documentsActive : documents} alt="documents" />
          </li>
          <li className={active == "setting" ? "active" : ""}>
            <img src={active == "setting" ? settingActive : setting} alt="setting" />
          </li>
          {/* <li><img src="" alt="" /></li> */}
        </ul>
      </div>
      <div className="signOut">
        <img src={signOut} alt="signOut" />
      </div>
    </div>
  );
}

export default SideBar;
