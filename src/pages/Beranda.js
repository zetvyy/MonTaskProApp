import React from "react";
import InfoLastAct from "../components/Beranda/InfoLastAct";
import Main from "../components/Beranda/Main";
import SideBar from "../components/sideBar";
import InfoNewTask from "../components/Beranda/InfoNewTask";
import Navbar from "../components/navbar";
import "../style/Beranda.css";

const Beranda = () => {
    return (
        <React.Fragment>
            <SideBar active="task" />
            <Navbar />
            <div className="AddNoteActivity__content-beranda">
                <InfoLastAct />
                <InfoNewTask />
            </div>
            <div className="AddNoteActivity1">
            <Main />
            </div>
        </React.Fragment>
    );
};

export default Beranda ;