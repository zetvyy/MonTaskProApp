import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { GiNotebook } from "react-icons/gi";

const InfoNewTask = () => {
    return (
        <div className="newtask-box">
            <span className="title-newtask-box"><center>NEW TASK</center></span>
            <ul className="list-newtask-box">
                <li className="item-list-newtask-box">
                    <GiNotebook className="icon-newtask"/> Task <span className="info-task"> 122 </span>
                    <button className="button-show">
                        <AiOutlineEye className="button-show2"/> Show </button>
                </li>
                <li className="item-list-newtask-box">
                    <GiNotebook className="icon-newtask"/> Task <span className="info-task"> 123</span>
                    <button className="button-show">
                        <AiOutlineEye className="button-show2"/> Show </button>
                </li>
                <li className="item-list-newtask-box">
                    <GiNotebook className="icon-newtask"/> Task <span className="info-task"> 124 </span>
                    <button className="button-show">
                        <AiOutlineEye className="button-show2"/> Show </button>
                </li>
                <li className="item-list-newtask-box">
                    <GiNotebook className="icon-newtask"/> Task <span className="info-task"> 125 </span>
                    <button className="button-show">
                        <AiOutlineEye className="button-show2"/> Show </button>
                </li>
                <li className="item-list-newtask-box">
                    <GiNotebook className="icon-newtask"/> Task <span className="info-task"> 126 </span>
                    <button className="button-show">
                        <AiOutlineEye className="button-show2"/> Show </button>
                </li>
            </ul>
            
        </div>

    )
}

export default InfoNewTask;