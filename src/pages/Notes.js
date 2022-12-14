import React from "react";
import SideBar from "../components/sideBar";
import Navbar from "../components/Notes/Navbar";
import AddNote from "../components/Notes/AddNotes";
import NotesList from "../components/Notes/NotesList";
import "../style/notes.css"

const Notes = () => {
    return (
        <div className="AddNoteActivity">
            <SideBar active="documents" />
            <div className="AddNoteActivity__content">
                <Navbar />
                <AddNote />
                <NotesList />
            </div>
        </div>
    );
};

export default Notes;