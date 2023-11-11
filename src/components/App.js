import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([
    {
      key: 1,
      title: "test title",
      content: "test content"
    }
  ]);

  function addNote(note) {
    const noteKey = notes.length > 0 ? notes[notes.length - 1].key + 1 : 1;
    const newNote = {
      key: noteKey,
      title: note.title,
      content: note.content
    };
    setNotes([...notes, newNote]);
    console.log(newNote);
  }

  function deleteNote(id) {
    setNotes([...notes.filter((i) => i.key !== id)]);
  }

  return (
    <div>
      <Header />
      <CreateArea submitInput={addNote} />
      {notes.map((note) => (
        <Note
          onDelete={deleteNote}
          id={note.key}
          title={note.title}
          content={note.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;