const Note = ({ id, text, deleteNote} ) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <span></span>
        <button className="btn btn-delete" onClick={() => deleteNote(id)}>Delete</button>
      </div>
    </div>
  );
};

export default Note;
