import React from "react";
import Card from "./Card";

const Gameboard = () => {
  const teams = new Set();
  while (teams.size < 8) {
    teams.add(Math.floor(Math.random() * 30));
  }

  let teamArray = [];
  for (let team of teams) {
    teamArray.push(team);
  }

  console.log(teamArray);
  console.log(teams);

  return (
    <div className="img-container">
      {teamArray.map((team) => (
        <Card key={team} teamNo={team} />
      ))}
    </div>
  );
};

export default Gameboard;
