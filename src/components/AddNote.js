import { useState } from "react";

const AddNote = ({ saveNote }) => {

    const [note, setNote] = useState("");
    const charLimit = 250;

    function handleChange(event) {
      if(charLimit - event.target.value.length >= 0) {
        setNote(event.target.value);
      }
    }

    function handleSaveNote(event) {
        event.preventDefault();

        if (note.trim().length > 0) {
        saveNote(note) 
        } else {
            alert("Empty note.")
        }

        setNote("");
    }

    // console.log(noteList)

  return (
    <div className="note add-note">
      <textarea
        name="text"
        rows="6"
        placeholder="Add a new note..."
        value={note}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{charLimit - note.length} remaining</small>
        <button className="btn" onClick={handleSaveNote}>Save</button>
      </div>
    </div>
  );
};

export default AddNote;
