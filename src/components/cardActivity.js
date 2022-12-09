import React from "react";
import "../style/cardActivity.css";


function cardActivity({date, title, desc, onClickDel, onClickMove, completed}) {

    return (
        <div className="card__activity">
            <div className="card__header">
                <div className="header__title">
                    <p>{title}</p>
                </div>
                <div className="header__date">
                    <p>{date}</p>
                </div>
            </div>
            <div className="card__contain">
                <p>{desc}</p>
            </div>
            <div className="action">
                <div className="delete">
                    <button onClick={onClickDel} ></button>
                </div>
                <div className={`move ${completed}`} >
                    <button onClick={onClickMove}></button>
                </div>
            </div>
        </div>
    )
}

export default cardActivity;