import React, { useState } from "react";

const NewCourse = function newCourse({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = function handle(event: any) {
    event.preventDefault();
    onSubmit({ title, description });
  };

  return (
    <form className="NewCourse" onSubmit={handleChange}>
      <input
        placeholder="Title"
        type="text"
        value="title"
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        placeholder="Description"
        type="text"
        value="description"
        onChange={(event) => setDescription(event.target.value)}
      />
    </form>
  );
};

export default NewCourse;
