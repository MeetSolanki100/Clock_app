import React, { useState } from 'react';

function Timer() {
  const [hrs, setHrs] = useState(0);
  const [mins, setMins] = useState(5);
  const [secs, setSecs] = useState(5);
  const [intervalId, setIntervalId] = useState(null);

  const start = () => {
    if (intervalId) return; // Avoid starting multiple intervals
    const id = setInterval(() => {
      setSecs(prevSecs => {
        if (prevSecs < 59) {
          return prevSecs - 1;
        } else {
          setMins(prevMins => {
            if (prevMins < 59) {
              return prevMins - 1;
            } else {
              setHrs(prevHrs => prevHrs - 1);
              return 0;
            }
          });
          return 0;
        }
      });
    }, 1000);
    setIntervalId(id);
  };

  const stop = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const restart = () => {
    stop();
    setHrs(0);
    setMins(0);
    setSecs(0);
  };

  return (
    <div className="body">
      <div className="Timer">
        <div className="Timer-disp">
          <input type="text" value={hrs} id="timer-hrs" readOnly />
          <p>:</p>
          <input type="text" value={mins} id="timer-mins" readOnly />
          <p>:</p>
          <input type="text" value={secs} id="timer-secs" readOnly />
        </div>
        <div className="control">
          <button onClick={start} className="startButton">
            Start
          </button>
          <button onClick={stop} className="stopButton">
            Stop
          </button>
          <button onClick={restart} className="restartButton">
            Restart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;

