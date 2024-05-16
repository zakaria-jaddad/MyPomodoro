import { useEffect, useState } from "react";

const useProgressBar = (isTimerRunning, timerInSeconds, activeTimerInfo) => {
  const { activeTimer, minutesTimer } = activeTimerInfo;
  const [newSecondsWidth, setSecondsWidth] = useState(0);
  const [initialTimer, setInitialTimer] = useState(minutesTimer * 60);

  useEffect(() => {
    setSecondsWidth(100 / (minutesTimer * 60));
  }, []);

  useEffect(() => {
    const setProgressBarWidth = () => {
      const progressBar = document.getElementById("progress-bar");
      const newWidth = parseFloat(progressBar.style.width) + newSecondsWidth;
      progressBar.style.width = `${newWidth}%`;
      return newWidth;
    };
    if (isTimerRunning) setProgressBarWidth();
    setInitialTimer(minutesTimer * 60);
  }, [timerInSeconds]);

  useEffect(() => {
    const updateProgressBarWidth = () => {
      const progressBar = document.getElementById("progress-bar");
      const newSecondsWidth = 100 / (minutesTimer * 60);
      const timeDifferent = (initialTimer - timerInSeconds) % 60;

      progressBar.style.width = `${timeDifferent * newSecondsWidth}%`;
      setSecondsWidth(newSecondsWidth);
    };
    updateProgressBarWidth();
  }, [minutesTimer]);

  useEffect(() => {
    const initialProgressBarWidth = () => {
      const progressBar = document.getElementById("progress-bar");
      progressBar.style.width = "0%";
    };
    initialProgressBarWidth();
  }, [activeTimer]);
};

export default useProgressBar;
