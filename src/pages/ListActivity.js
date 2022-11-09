import React from "react";
import SideBar from "../components/sideBar";
import "../style/ListActivity.css";

function ListActivity() {


    return (
        <div className="listActivity">
            <SideBar active="task" />
            <div className="listActivity__content">
                <p>haii</p>
            </div>
        </div>
    )

}

export default ListActivity;