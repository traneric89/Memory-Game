import React from "react";

const Card = ({ teamNo, onClick }) => {
  return (
    <div>
      <img
        className="images"
        src={require("../images/" + teamNo + ".png")}
        alt=""
        onClick={() => onClick(teamNo)}
      />
    </div>
  );
};

export default Card;
