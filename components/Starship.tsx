import React, { useState } from "react";
import handleUpdate from "../pages/api/person/[id]/update";

// putting the props to use with {props. }
export default function Starship(props) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState(" ");

  function handleChange(e: any) {
    setNewName(e.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    props.editStarship(props.id, newName);
    setNewName(" ");
    setEditing(false);
  }

  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="starship-label" htmlFor={props.id}>
          New name for {props.name}
        </label>
        <input
          id={props.id}
          className="starship-text"
          type="text"
          value={newName}
          onChange={handleChange}
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn starship-cancel"
          onClick={() => setEditing(false)}
        >
          Cancel
          <span className="visually-hidden"> renaming {props.name}</span>
        </button>
        <button type="submit" className="btn btn__primary starship-edit">
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.launched}
          onChange={() => props.toggleStarshipLaunched(props.id)}
        />
        <label className="starship-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn" onClick={() => setEditing(true)}>
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deleteStarship(props.id)}
        >
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );

  return (
    <li className="starship">{isEditing ? editingTemplate : viewTemplate}</li>
  );
}
