import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../style/Sidebar.css";
import home from "../asset/icons/icons8-home-64.png";
import task from "../asset/icons/icons8-task-planning-64.png";
import documents from "../asset/icons/icons8-attestation-64.png";
import setting from "../asset/icons/icons8-setting-64.png";
import homeActive from "../asset/icons/icons8-home-64-active.png";
import taskActive from "../asset/icons/icons8-task-planning-64-active.png";
import documentsActive from "../asset/icons/icons8-attestation-64-active.png";
import settingActive from "../asset/icons/icons8-setting-64-active.png";
import signOut from "../asset/icons/icons8-logout-64.png";
import logo from "../asset/logo.png";

function SideBar({ active }) {
  const navigate = useNavigate();

  const handlLogOut = () => {
    const logOut = confirm("Anda yakin ingin keluar");
    if (logOut) {
      localStorage.removeItem("id");
      navigate("/login");
    }
  };
  return (
    <div className="sideBar">
      <div className="sideBar__logo">
        <img src={logo} alt="" />
      </div>
      <div className="sideBar__list">
        <ul>
          <li className={active == "home" ? "active" : ""}>
            <Link to="/beranda">
              <img src={active == "home" ? homeActive : home} alt="home" />
            </Link>
          </li>
          <li className={active == "task" ? "active" : ""}>
            <Link to="/activity">
              <img src={active == "task" ? taskActive : task} alt="task" />
            </Link>
          </li>
          <li className={active == "documents" ? "active" : ""}>
            <Link to="/notes">
              <img
                src={active == "documents" ? documentsActive : documents}
                alt="documents"
              />
            </Link>
          </li>
          <li className={active == "setting" ? "active" : ""}>
            <Link to="/profile">
            <img
              src={active == "setting" ? settingActive : setting}
              alt="setting"
            />
            </Link>
          </li>
          {/* <li><img src="" alt="" /></li> */}
        </ul>
      </div>
      <div className="signOut">
        <img src={signOut} alt="signOut" onClick={handlLogOut} />
      </div>
    </div>
  );
}

export default SideBar;
