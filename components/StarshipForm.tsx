import React, { useState } from "react";

function StarshipForm(props) {
  // set the initial name value to " "
  // defining a function which will modify name called setName()
  // these both are returned by useState
  // using array descturcturing, capturing them both in separate variables
  const [name, setName] = useState("");

  // reading user input
  // using an inline type declaration
  // used below in <input/>
  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // passing in the callback prop from StarshipControl parent component
    props.addStarship(name);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          Add and Manage Starship Launch Status Here
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        // reading state
        value={name}
        //reading user input
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default StarshipForm;
