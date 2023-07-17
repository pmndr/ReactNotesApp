import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({ notes, saveNote, deleteNote }) => {
  return (
    <div className="notes-list">
      <AddNote saveNote={saveNote} />

      {notes.map((note) => (
        <Note key={note.id} id={note.id} text={note.text} deleteNote={deleteNote} />
      ))}
    </div>
  );
};

export default NotesList;
