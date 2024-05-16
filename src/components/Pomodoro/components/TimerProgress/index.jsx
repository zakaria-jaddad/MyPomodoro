import useProgressBar from "./hooks/useProgressBar";
const TimerProgress = ({ isTimerRunning, timerInSeconds, activeTimerInfo }) => {
  useProgressBar(isTimerRunning, timerInSeconds, activeTimerInfo);

  return (
    <div className="w-full h-[1px] mb-[40px] bg-third-text-color flex items-center">
      <div id="progress-bar" className="bg-white h-[3px] rounded-[100px]"></div>
    </div>
  );
};
export default TimerProgress;
