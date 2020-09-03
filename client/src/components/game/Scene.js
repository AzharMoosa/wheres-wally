import React, { useState, useContext, useEffect, Fragment } from "react";
import GameContext from "../../context/gameContext";
import ScoreTable from "./ScoreTable";
import SceneOne from "../../images/waldo.png";

const Scene = () => {
  const gameContext = useContext(GameContext);
  const { endGame, game, createPlayer } = gameContext;
  const [newPlayer, setPlayer] = useState({
    oswald: false,
    wally: false,
    wenda: false,
  });
  const [name, setName] = useState("");
  const [table, setTable] = useState(false);
  const [oswaldBtns, setOswaldBtns] = useState(false);
  const [wallyBtns, setWallyBtns] = useState(false);
  const [wendaBtns, setWendaBtns] = useState(false);

  const { oswald, wally, wenda } = newPlayer;

  useEffect(() => {
    checkGameOver();
    // eslint-disable-next-line
  }, [oswald, wally, wenda]);

  const checkGameOver = () => {
    if (oswald && wally && wenda) {
      endGame();
    }
  };

  const addPlayerToTable = () => {
    let timerValue = document
      .querySelector(".react-stopwatch-timer__table")
      .innerHTML.substring(5);
    let score = timerValue.substring(0, timerValue.length - 6);
    let player = { name, time: score };
    createPlayer(player);
    setName("");
    setTable(true);
  };

  const toggleOswaldBtns = () => {
    if (!oswald) {
      setOswaldBtns(!oswaldBtns);
    }
  };

  const toggleWallyBtns = () => {
    if (!wally) {
      setWallyBtns(!wallyBtns);
    }
  };

  const toggleWendaBtns = () => {
    if (!wenda) {
      setWendaBtns(!wendaBtns);
    }
  };

  return (
    <Fragment>
      <ScoreTable table={table} />
      <div className={`name-input ${game ? "hidden" : ""}`}>
        <input
          type='text'
          placeholder='Enter Name...'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type='submit' onClick={() => addPlayerToTable()}>
          Submit
        </button>
      </div>

      <div className='scene'>
        <img src={SceneOne} alt='scene' />

        {/* Oswald */}
        <div
          onClick={() => toggleOswaldBtns()}
          className={`oswald ${oswald ? "outline" : ""}`}
        >
          <div className={`btns  ${!oswaldBtns ? "hidden" : ""}`}>
            <button>Wally</button>
            <button
              onClick={() => {
                setPlayer({ ...newPlayer, oswald: true });
                toggleOswaldBtns();
                checkGameOver();
              }}
            >
              Oswald
            </button>
            <button>Wenda</button>
          </div>
        </div>

        {/* Wally */}
        <div
          onClick={() => toggleWallyBtns()}
          className={`wally ${wally ? "outline" : ""}`}
        >
          <div className={`btns ${!wallyBtns ? "hidden" : ""}`}>
            <button
              onClick={() => {
                setPlayer({ ...newPlayer, wally: true });
                toggleWallyBtns();
                checkGameOver();
              }}
            >
              Wally
            </button>
            <button>Oswald</button>
            <button>Wenda</button>
          </div>
        </div>

        {/* Wenda */}

        <div
          onClick={() => toggleWendaBtns()}
          className={`wenda ${wenda ? "outline" : ""}`}
        >
          <div className={`btns ${!wendaBtns ? "hidden" : ""}`}>
            <button>Wally</button>
            <button>Oswald</button>
            <button
              onClick={() => {
                setPlayer({ ...newPlayer, wenda: true });
                toggleWendaBtns();
                checkGameOver();
              }}
            >
              Wenda
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Scene;
