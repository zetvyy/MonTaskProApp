import React, { useState } from "react";
import "../../style/AddNote.css";
import { RiErrorWarningFill } from "react-icons/ri";
import { database as db, set, ref, onValue} from "../../config/firebase/firebase";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from "react-toast"; 

const AddNote = () => {
    const [text, setText] = useState("")
    const addNote = () => {
        //query..
        if (text) {
            //add to db.
            set(ref(db, 'notes/' + uuidv4()), {
                note: text,
                createdAt: Date.now(),
              }). then((err) => {
                 
                if (!err) {
                    toast.success("Berhasil menambahkan notes!");
                    setText("");
                    //check data;
                    onValue(ref(db, "notes"), (snapshot) => {
                        let _data = snapshot.val();

                        for (let key in _data) {
                            let createdAt = new Date(_data[key].createdAt);

                            createdAt.setDate(createdAt.getDate() + 1);
                            if (new Date() >= createdAt) {
                                set(ref(db, "notes/"+key), null);
                                console.log("exceded 24 hrs; it has to be deleted from db..")
                            }
                        }
                    });
                }
                else toast.error("Gagal menambahkan notes!");
              });
        }
    };
    return (
        <center>
        <div className="add-note">
           <textarea 
           rows="8"
           cols="85"
           placeholder="Tulis catatan pentingmu disini..."
           value={text} 
           onChange={(e) => setText(e.target.value)}>
           </textarea>
           <br />
           <button className="add-button" onClick={()=> addNote()}> Add Note</button>
        </div>

        <div className="warning-sign">
            <RiErrorWarningFill size="12" />
            <small> Catatanmu akan hilang setelah 24 jam</small>
            <ToastContainer delay={2500} />
        </div>
        </center>
    );
};

export default AddNote;