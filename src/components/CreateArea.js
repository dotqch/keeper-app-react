import React, { useState } from "react";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({
    title: "",
    content: ""
  });
  function updateCreate(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setNewNote((current) => {
      return {
        ...current,
        [inputName]: inputValue
      };
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={updateCreate}
          value={newNote.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={updateCreate}
          value={newNote.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            props.submitInput(newNote);
            setNewNote({
              title: "",
              content: ""
            });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;