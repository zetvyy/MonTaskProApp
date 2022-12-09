import React from "react";
import "../style/Navbar.css";


function Navbar() {

    return (
        <div className="navbar">
            <div className="searchInput">
                <input type="text" placeholder="Search"/>
            </div>
        </div>
    )
}

export default Navbar;