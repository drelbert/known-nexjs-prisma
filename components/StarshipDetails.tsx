import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

export interface StarshipProps {
  id: number;
  name: string;
  model: string;
  starshipClass: string;
  passengers: string;
  pilots: string;
  launchDate: string;
}

const StarshipDetails: React.FC<{ starship: StarshipProps }> = ({
  starship,
}) => {
  return (
    <div
      onClick={() => Router.push("/starship/[id]", `/starship/${starship.id}`)}
    >
      <h2>{starship.name}</h2>
      <ReactMarkdown source={starship.starshipClass} />
    </div>
  );
};

export default StarshipDetails;
