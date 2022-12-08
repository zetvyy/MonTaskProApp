import React from "react";
import SideBar from "../components/sideBar";
import AddNote from "../components/Notes/AddNotes";
import NotesList from "../components/Notes/NotesList";

const Notes = () => {
    return (
        <div className="AddNoteActivity__note">
            <SideBar active="task" />
            <div className="AddNoteActivity__content-note">
                <AddNote />
                <NotesList />
            </div>
        </div>
    );
};

export default Notes;