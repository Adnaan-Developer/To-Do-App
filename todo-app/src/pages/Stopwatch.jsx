import { useEffect, useState } from "react";

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const stop = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);

      return () => {
        clearInterval(stop);
      };
    }
  }, [isRunning]);

  const minutes = Math.floor(seconds / 60);
  const hour = Math.floor(minutes / 60);
  const elapsedSec = seconds % 60;
  const elapsedMin = minutes % 60;
  const secondsInString = elapsedSec.toString();
  const formatted = secondsInString.padStart(2, "0");
  const minutesInString = elapsedMin.toString();
  const formattedMinutes = minutesInString.padStart(2, "0");
  const hourInString = hour.toString();
  const formattedHour = hourInString.padStart(2, "0");

  return (
    <div className="md:mx-20 ml-20 mr-4 my-20">
      <h1 className="text-4xl  md:text-6xl mb-8 font-bold text-center">
        Stopwatch
      </h1>
      <div className="bg-[#222] py-20 rounded-4xl">
        <div className="text-white font-bold text-6xl md:text-8xl text-center">
          <p>
            {formattedHour}:{formattedMinutes}:{formatted}
          </p>
        </div>
        <div className="gap-2 md:gap-4 flex justify-center items-center pt-20">
          <button
            disabled={isRunning}
            onClick={() => setIsRunning(true)}
            className={`px-4 md:px-12 py-2 md:py-4 text-black md:text-4xl text-xl rounded-xl md:rounded-2xl font-bold bg-cyan-400 active:scale-95 transition-all ${isRunning ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            Start
          </button>
          <button
            disabled={!isRunning}
            onClick={() => setIsRunning(false)}
            className={`px-4 md:px-12 py-2 md:py-4 text-black md:text-4xl text-xl rounded-xl md:rounded-2xl font-bold bg-cyan-400 active:scale-95 transition-all  ${!isRunning ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            Stop
          </button>
          <button
            onClick={() => {
              setIsRunning(false);
              setSeconds(0);
            }}
            className="px-4 md:px-12 py-2 md:py-4 text-black md:text-4xl text-xl rounded-xl md:rounded-2xl font-bold bg-cyan-400 active:scale-95 transition-all"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
