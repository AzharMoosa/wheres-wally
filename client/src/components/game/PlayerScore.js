import React from "react";

const PlayerScore = ({ name, time }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{time}</td>
    </tr>
  );
};

export default PlayerScore;
