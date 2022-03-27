import React from "react";

const Scoreboard = ({ currentScore, highScore }) => {
  return (
    <div className="scoreboard">
      <h3>Current Score: {currentScore}</h3>
      <h3>High Score: {highScore}</h3>
      <p>Instructions: Pick a team but never the same team twice. Good luck!</p>
    </div>
  );
};

export default Scoreboard;
