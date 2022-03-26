import React from "react";
import Card from "./Card";

const Gameboard = ({ onClick }) => {
  const teams = new Set();
  while (teams.size < 8) {
    teams.add(Math.floor(Math.random() * 30));
  }

  let teamArray = [];
  for (let team of teams) {
    teamArray.push(team);
  }
  return (
    <div className="img-container">
      {teamArray.map((team) => (
        <Card key={team} teamNo={team} onClick={onClick} />
      ))}
    </div>
  );
};

export default Gameboard;
