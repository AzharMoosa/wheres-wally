import React from "react";
import Scene from "./Scene";
import Time from "./Time";

const GameContainer = () => {
  return (
    <div className='game-container'>
      <Time />
      <Scene />
    </div>
  );
};

export default GameContainer;
