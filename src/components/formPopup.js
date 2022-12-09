import React from "react";
import "../style/formPopup.css";

export const Form = ({  onClick,
                        title,
                        onClickClose,
                        Judul,
                        Deadline,
                        Conten,
                        onChange,
                        className}) => {
    return <div className={className} >
                <form action=''>
                    <label htmlFor="judul">Judul</label>
                    <input type="text" name="judul" placeholder="Judul" id="judul" onChange={onChange} defaultValue={Judul || ""}/>
                    <label htmlFor="date">Deadline</label>
                    <input type="date" id="deadline" name="date" onChange={onChange} defaultValue={Deadline || ""}/>
                    <label htmlFor="content">Conten</label>
                    <textarea name="content" id="content" placeholder="Content" cols="30" rows="10" onChange={onChange} defaultValue={Conten || ""}></textarea>
                </form>
                <div className="actionForm">
                    <button onClick={onClick} >{title}</button>
                    <button className='cancel' onClick={onClickClose}>Cancel</button>
                </div>
            </div>
}