import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import Starship from "./Starship";
import StarshipForm from "./StarshipForm";
import StarshipFilterButton from "./StarshipLaunchFilterButton";

// object with values that are functions for filtering the starships data array
const FILTER_MAP = {
  All: () => true,
  Active: (starship) => !starship.launched,
  Launched: (starship) => starship.launched,
};

// using the object.keys method to collect an array of FILTER_NAMES
const FILTER_NAMES = Object.keys(FILTER_MAP);

export default function Starships(props) {
  const [starships, setStarships] = useState(props.starships);
  const [filter, setFilter] = useState("All");

  function toggleStarshipLaunched(id) {
    // sync the browser with the data
    // updatedTasks maps over the original starships array
    const updatedStarships = starships.map((starship) => {
      // conditional: if asking, does the starship id match the id provided to the function?
      if (id === starship.id) {
        // if true, use object spread syntax to create a new object
        // and toggle the checked property of that object
        return { ...starship, launched: !starship.launched };
      }
      // if false return the original object
      return starship;
    });
    // calling setStarships to update state
    setStarships(updatedStarships);
  }

  // the deleteTask callback prop
  function deleteStarship(id) {
    const remainingStarships = starships.filter(
      (starship) => id !== starship.id
    );
    setStarships(remainingStarships);
  }

  function editStarship(id, newName) {
    const editedStarship = starships.map((starship) => {
      // if this starship has the same id as the edited starship
      if (id === starship.id) {
        return { ...starship, name: newName };
      }
      return starship;
    });
    setStarships(editedStarship);
  }

  const starshipList = starships.filter(FILTER_MAP[filter]).map((starship) => (
    // passing in props to child component
    <Starship
      id={starship.id}
      name={starship.name}
      launched={starship.launched}
      key={starship.id}
      // the callback props
      toggleStarshipLaunched={toggleStarshipLaunched}
      deleteStarship={deleteStarship}
      editStarship={editStarship}
    />
  ));

  const filterList = FILTER_NAMES.map((name) => (
    <StarshipFilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  // handling form submission via a callback
  // addStarship is a callback
  // allows for data to be sent from <StarshipForm/>
  // this gets passed to child StarshipForm
  function addStarship(name) {
    const newStarship = { id: "id", name: name, launched: false };
    // using the setTasks hook to update the list of tasks
    // the newTask object that will be added to the tasks array
    // using the spread syntax to copy existing array and add the new object at the end
    // the array is passed into setTasks to update state
    setStarships([...starships, newStarship]);
  }

  // built for counting tasks
  const starshipNoun = starshipList.length !== 1 ? "starships" : "starship";
  const headingText = `${starshipList.length} ${starshipNoun} ready for launch`;

  return (
    <Box w="60%" borderWidth="5px" borderRadius="lg" p="5px" m="20px">
      <h1>Starship Control</h1>
      {/* the addStarshio prop is used in the handleSubmit function in StarshipForm */}
      <StarshipForm addStarship={addStarship} />
      <div className="filters btn-group stack-exception">{filterList}</div>
      <h2 id="list-heading">{headingText} </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {starshipList}
      </ul>
    </Box>
  );
}
