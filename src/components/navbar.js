import React from "react";
import "../style/navbar.css";


function Navbar({title}) {

    return (
        <div className="navbar">
            <div className="searchInput">
                <p className="navbar-title">{title}</p>
            </div>
        </div>
    )
}

export default Navbar;