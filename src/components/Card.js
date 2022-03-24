import React from "react";

const Card = ({ teamNo }) => {
  return (
    <div>
      <img src={require("../images/" + teamNo + ".png")} alt="" />
    </div>
  );
};

export default Card;
