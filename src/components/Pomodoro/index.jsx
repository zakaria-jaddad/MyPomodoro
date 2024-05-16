import { useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import useTimer from "./hooks/useTimer";
import playSound from "../utils/playSound";
import clickSound from "/public/sounds/click.mp3";
import NavBar from "./components/NavBar";
import getCurrentTimerInfo from "./utils/getCurrentTimerInfo";
import TimerProgress from "./components/TimerProgress";

function Pomodoro() {
  // Global variables
  const timerSettings = useSelector((state) => state.settings.timer); // current timer settings
  const timers = useSelector((state) => state.home.timers); // timers Status
  // Locale variables
  const { seconds, minutes, timerStatus, timerInSeconds } = useTimer(0);
  const { secondsLeft, setSecondsLeft } = seconds;
  const { minutesTimer, setMinutesTimer } = minutes;
  const { isTimerRunning, setIsTimerRunning } = timerStatus;

  const activeTimerInfo = useMemo(() => {
    return getCurrentTimerInfo({
      timers: timers,
      timerSettings: timerSettings,
    });
  }, [minutesTimer, timerSettings, timers]);
  const { activeTimer } = activeTimerInfo;

  useEffect(() => {
    const PlayPauseSpaceEvent = (e) => {
      if (e.key === " ") {
        if (document.activeElement.tagName.toLowerCase() !== "input") {
          const startPauseButton =
            document.getElementById("start-pause-button");
          startPauseButton.click();
          e.preventDefault();
        }
      }
    };

    window.onkeydown = (e) => {
      PlayPauseSpaceEvent(e);
    };
  }, []);

  return (
    <main className="text-main-text-color">
      <TimerProgress
        isTimerRunning={isTimerRunning}
        timerInSeconds={timerInSeconds}
        activeTimerInfo={activeTimerInfo}
      />
      <div className="max-w-[450px] mx-auto">
        <div className="w-[100%] p-[20px_0px_30px] flex gap-[10px] flex-col items-center bg-[rgba(255,_255,_255,_0.1)] rounded-lg mb-[20px]">
          <NavBar />

          {/* main Timer */}
          <section className="text-[100px] font-semibold text-white tracking-wider">
            {`${minutesTimer}:${
              secondsLeft >= 0 && secondsLeft < 10
                ? `0${secondsLeft}`
                : secondsLeft
            }`}
          </section>

          {/* Button */}
          <div
            onClick={() => {
              setIsTimerRunning(!isTimerRunning);
              playSound({ sound: clickSound, soundVolume: 1 });
            }}
            id="start-pause-button"
            className={`rounded bg-white text-main-bg-color text-[22px] px-[12px] font-bold h-[55px] w-[200px] flex items-center justify-center uppercase cursor-pointer transition-colors duration-300 shadow-button-shadow
                ${
                  isTimerRunning === true
                    ? " shadow-none translate-y-[6px]"
                    : ""
                }`}
          >
            {isTimerRunning === false ? "start" : "pause"}
          </div>
        </div>

        {/* counter */}
        <div className="text-main-text-color flex flex-col items-center gap-[5px]">
          <div className="tracking-[2px]">#{timers[activeTimer].counter}</div>
          <div>
            {activeTimer === "pomodoro"
              ? "Time To Focuse"
              : activeTimer === "shortBreak"
              ? "Time To A Little Rest"
              : "Time To Take A Rest"}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Pomodoro;
