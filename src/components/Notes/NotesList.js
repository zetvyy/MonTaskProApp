import React, { useEffect, useState } from "react";
import '../../style/NotesList.css';
import { database, set, ref, onValue} from "../../config/firebase/firebase";
import Moment from 'react-moment';

const NotesList = () => {
    const [ notesList, setNotesList ] = useState([]);
    const [ isLoading, setIsLoading] = useState(true);
    const id = localStorage.getItem("id");

    const monthList = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    useEffect(() => {

        onValue(ref(database, `users/${id}/notes`), (snapshot) => {
           let _data = snapshot.val();
           let _notesList = [];

           for (let key in _data) {
            _notesList.push(_data[key]);
           }

           setNotesList(_notesList);
           setIsLoading(false);
      });
    }, []);  

    return (
        <center>
            <div className="notes-list">
                {isLoading ? "Loading...": notesList?notesList.map((note, index) => {
                    let _date = new Date (note.createdAt);
                    return (
                        <div key={index} className="notes-card">
                            <div className="date-note">{`${_date.getDate()}  ${monthList[_date.getMonth()]} ${_date.getFullYear()}`}</div>
                            <br />
                            {note.note}
                            <div className="time-note">
                                <Moment fromNow>{note.createdAt}</Moment>
                            </div>
                        </div>
                    )
                }): "Tidak ada Notes yang dimaksud!"}
            </div>
        </center>
    );
};

export default NotesList;