import React from "react";

function ResultCard({ name, street, type, website }) {
  return (
    <a href={website} target="__blank">
      <div>
        <div>
          <h3>{name}</h3>
          <p>{street}</p>
          <p>{website}</p>
        </div>
      </div>
    </a>
  );
}

export default ResultCard;
