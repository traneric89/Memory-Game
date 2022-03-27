import React from "react";
import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import Gameboard from "./components/Gameboard";
import Footer from "./components/Footer";

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [imageNos, setImageNos] = useState([]);
  const isMounted = useRef(false);

  const cardClicked = (teamNo) => {
    setImageNos([...imageNos, teamNo]);
  };

  useEffect(() => {
    if (isMounted.current) {
      if (containsDuplicate(imageNos)) {
        setCurrentScore(0);
        setImageNos([]);
        isMounted.current = false;
      } else {
        setCurrentScore(currentScore + 1);
      }
    } else {
      isMounted.current = true;
    }
  }, [imageNos]);

  useEffect(() => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }
  }, [currentScore]);

  const containsDuplicate = (nums) => {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
      obj[nums[i]] = obj[nums[i]] + 1 || 1;
      if (obj[nums[i]] > 1) return true;
    }
    return false;
  };

  return (
    <div>
      <div className="background">
        <Header />
        <Scoreboard currentScore={currentScore} highScore={highScore} />
        <Gameboard onClick={cardClicked} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
