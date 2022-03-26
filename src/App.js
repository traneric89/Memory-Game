import React from "react";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import Gameboard from "./components/Gameboard";
import Footer from "./components/Footer";

const App = () => {
  const [currentScore, setCurrentScore] = useState("");
  const [highScore, setHighScore] = useState("");
  const [imageNos, setImageNos] = useState([]);

  const cardClicked = (teamNo) => {
    console.log(teamNo);
    setImageNos([...imageNos, teamNo]);
    console.log(imageNos);
  };

  return (
    <div>
      <div className="background">
        <Header />
        <Scoreboard />
        <Gameboard onClick={cardClicked} />
      </div>
      <Footer />
    </div>
  );
};

export default App;

/* 
Components: 

- Header
- Gameboard
- Team Cards (state of array of number associated to each team. Every time a card is clicked, state clears and randomizes another set of 10 numbers
and sets the state again so a new set of teams can be displayed. This state will be in App.js and will be sent down to gameboard array where will
loop through array of numbers and for each number will send as prop and create Team Card component. Each team logo will have number associated to it
and whichever number is sent to Team Card (10 total) will be displayed.

UseEffect will clear that state of team numbers when any Team Card is clicked on. 
*/
