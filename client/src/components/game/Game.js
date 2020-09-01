import React from "react";
import Sidebar from "../layout/Sidebar";
import GameContainer from "./GameContainer";

const Game = () => {
  return (
    <div className='game'>
      <Sidebar />
      <GameContainer />
    </div>
  );
};

export default Game;
