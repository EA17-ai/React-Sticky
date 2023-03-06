import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteList, setNoteList] = useState([]);
  const AddNote = (note) => {
    setNoteList((prevItems) => {
      return [...prevItems, { title: note.title, content: note.content }];
    });
  };
  const DeleteNote = (id) => {
    setNoteList((itemsInList) => {
      return itemsInList.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={AddNote} />
      <Footer />
      {noteList.map((note, index) => (
        <Note
          id={index}
          key={index}
          title={note.title}
          content={note.content}
          onDelete={DeleteNote}
        />
      ))}
    </div>
  );
}

export default App;
