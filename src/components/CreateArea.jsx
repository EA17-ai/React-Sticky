import React, { useState } from "react";
import Note from "./Note";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const handleChange = (event) => {
    const newValue = event.target.value;
    const name = event.target.name;
    setNote((prevValue) => {
      if (name === "title") {
        return {
          title: newValue,
          content: prevValue.content
        };
      } else if (name === "content") {
        return {
          title: prevValue.title,
          content: newValue
        };
      }
    });
  };

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />
        <textarea
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
        />
        <button
          onClick={(event) => {
            props.onAdd(note);
            setNote({
              title: "",
              content: ""
            });
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
