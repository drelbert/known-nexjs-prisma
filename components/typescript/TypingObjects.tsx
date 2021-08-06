import React from "react";

type Base = {
  id: string | number;
};

interface Avenger extends Base {
  first: string;
  family: string;
  company: string;
}

const tor: Avenger = {
  id: "33",
  first: "Tor",
  family: "Odenson",
  company: "Avengers",
};

const read: Avenger = {
  id: 99,
  first: "Read",
  family: "Avenge",
  company: "Avengers",
};

// create a collection or array for both
// create an array that is an array of objects
const avengers: Avenger[] = [tor, read];

// building feature state
type AvengerState = {
  avengers: Avenger[];
  currentAvenger: Avenger;
};

const newAvenger: Avenger = {
  id: null,
  first: "",
  family: "",
  company: "",
};

// create initial state
const initialAvengerState: AvengerState = {
  avengers,
  currentAvenger: newAvenger,
};

const team = initialAvengerState;

function TypingObjects() {
  return (
    <main>
      {team.avengers.map((avenger) => (
        <ul>{avenger.first}</ul>
      ))}
    </main>
  );
}

export default TypingObjects;
