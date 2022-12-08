import React from "react";
import InfoLastAct from "../components/Beranda/InfoLastAct";
import Main from "../components/Beranda/Main";
import SideBar from "../components/sideBar";
import InfoNewTask from "../components/Beranda/InfoNewTask";
import "../style/Beranda.css";

const Beranda = () => {
    return (
        <div className="AddNoteActivity">
            <SideBar active="task" />
            <div className="AddNoteActivity__content">
                <InfoLastAct />
                <InfoNewTask />
            </div>
            <div className="AddNoteActivity1">
            <Main />
            </div>
        </div>
    );
};

export default Beranda ;