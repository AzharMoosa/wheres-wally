import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import GameContext from "../../context/gameContext";
import PlayerScore from "./PlayerScore";

const ScoreTable = ({ table }) => {
  const gameContext = useContext(GameContext);
  const { players, getPlayers, loading } = gameContext;

  useEffect(() => {
    getPlayers();
    // eslint-disable-next-line
  }, [table]);

  return (
    <div className={`score-table ${!table ? "hidden" : ""}`}>
      <div className='score-table-content'>
        <h3>High Score Table</h3>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {!loading &&
              players !== null &&
              players.map((player) => (
                <PlayerScore
                  key={player._id}
                  name={player.name}
                  time={player.time}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScoreTable;
