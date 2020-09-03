import React, { useContext } from "react";
import GameContext from "../../context/gameContext";
import ReactTimerStopwatch from "react-stopwatch-timer";

const Time = () => {
  const gameContext = useContext(GameContext);
  const { game, time } = gameContext;

  return (
    <div className='time'>
      <h3 className='timer'>
        <ReactTimerStopwatch
          isOn={game}
          className='react-stopwatch-timer__table'
          watchType='stopwatch'
          displayHours={false}
          fromTime={time}
        />
      </h3>
    </div>
  );
};

export default Time;
