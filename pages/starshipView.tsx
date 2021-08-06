import React from "react";
import StarshipControl from "../components/StarshipControl";

const STARSHIPSDATA = [
  { id: "1", name: "TIE Advanced x1", launched: true },
  { id: "2", name: "Death Star", launched: false },
  { id: "3", name: "Millennium Falcon", launched: false },
];

export default function Starships() {
  return (
    <>
      <StarshipControl starships={STARSHIPSDATA} />
    </>
  );
}
