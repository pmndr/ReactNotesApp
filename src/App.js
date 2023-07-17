import NotesList from "./components/NotesList";
import Header from "./components/Header";
import { useState, useEffect } from "react";


const App = () => {
  const [notes, setNotes] = useState(() => {
    const localValue = localStorage.getItem("notes-app-items")

    if(localValue == null) return []

    return JSON.parse(localValue)
  });

useEffect(() => {
  localStorage.setItem("notes-app-items", JSON.stringify(notes))
}, [notes])

  function saveNote(text) {
    const newNote = {
      text: text,
      id: crypto.randomUUID(),
    };

    const newNotes = [...notes, newNote];

    setNotes(newNotes);
  }

  function deleteNote(id) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className="App">
      <Header />
      <NotesList notes={notes} saveNote={saveNote} deleteNote={deleteNote} />
    </div>
  );
};

export default App;
