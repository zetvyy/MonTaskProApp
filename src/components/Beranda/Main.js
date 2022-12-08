import React from 'react';
import "../../style/Main.css";
import { ImArrowDown2, ImArrowUp2 } from "react-icons/im";

const Main = () => {
    return (
        <div className="featured-box">
            <div className="item-featured-box">
                <span className="title-featured">New Progress Task </span>
                <div className="item-content-featured">
                    <span className="number-amount"> 18 </span>
                    <span className="rate-arrow"> + 3,45%
                        <ImArrowUp2 className="rate-progress up" />
                    </span>
                </div>
                <span className="sub-featured"> Compared to the last 3 Week </span>
            </div>

            <div className="item-featured-box">
                <span className="title-featured2"> In Progress Task</span>
                <div className="item-content-featured">
                    <span className="number-amount2"> 26 </span>
                    <span className="rate-arrow"> + 2,89%
                        <ImArrowUp2 className="rate-progress up" />
                    </span>
                </div>
                <span className="sub-featured"> Compared to the last 3 Week </span>
            </div>

            <div className="item-featured-box">
                <span className="title-featured3">Visit Activity</span>
                <div className="item-content-featured">
                    <span className="number-amount3"> 14 </span>
                    <span className="rate-arrow"> - 0.67%
                        <ImArrowDown2 className="rate-progress down" />
                    </span>
                </div>
                <span className="sub-featured"> Compared to the last 3 Week </span>
            </div>
            
        </div>
    );
};

export default Main;