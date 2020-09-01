import React from "react";
import ReactTimerStopwatch from "react-stopwatch-timer";

const Time = () => {
  const fromTime = new Date(0, 0, 0, 0, 0, 0, 0);

  return (
    <div className='time'>
      <h3>
        <ReactTimerStopwatch
          isOn={true}
          className='react-stopwatch-timer__table'
          watchType='stopwatch'
          fromTime={fromTime}
        />
      </h3>
    </div>
  );
};

export default Time;
