import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getCurrentTimerInfo from "../utils/getCurrentTimerInfo";
import goToNextTimer from "../utils/GoToNexTimer";
import playSound from "../../utils/playSound";

function secondsToTimer(seconds) {
  return seconds % 60 === 0 ? seconds % 60 : 60 - (seconds % 60);
}

function timerToSeconds(minutes, seconds) {
  return minutes * 60 + secondsToTimer(seconds);
}

/* 
  This Hook is complicated so i need to break it down
  This Hook make a Timer
*/
export default function useTimer(seconds = 0) {
  const dispatch = useDispatch();
  const soundInfo = useSelector((state) => state.settings.sound);
  const timerSettings = useSelector((state) => state.settings.timer); // current timer settings
  const timers = useSelector((state) => state.home.timers); // timers Status

  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(seconds);
  const [minutesTimer, setMinutesTimer] = useState(
    getCurrentTimerInfo({
      timers: timers,
      timerSettings: timerSettings,
    }).minutesTimer
  );

  const [timerInSeconds, setTimerInSeconds] = useState(
    timerToSeconds(minutesTimer, secondsLeft)
  );

  // timer
  useEffect(() => {
    let secondsInterval;
    if (isTimerRunning) {
      secondsInterval = setInterval(() => {
        setSecondsLeft((prevSecondsLeft) => {
          if (secondsToTimer(prevSecondsLeft) === 0) {
            return 1;
          }
          return prevSecondsLeft + 1;
        });
      }, 1000);
    }
    return () => clearInterval(secondsInterval);
  }, [isTimerRunning]);

  useEffect(() => {
    setMinutesTimer(
      getCurrentTimerInfo({
        timers: timers,
        timerSettings: timerSettings,
      }).minutesTimer
    );
    setIsTimerRunning(false);
    setSecondsLeft(0);
  }, [timers]);

  useEffect(() => {
    setTimerInSeconds(timerToSeconds(minutesTimer, secondsLeft));
    if (isTimerRunning) {
      if (secondsLeft === 1) {
        setMinutesTimer((prevMinutesTimer) => prevMinutesTimer - 1);
      }
    }
    // timer is done
    if (secondsToTimer(secondsLeft) === 0 && minutesTimer === 0) {
      playSound({
        sound: soundInfo.alarmSound.alarmSound,
        soundVolume: parseInt(soundInfo.alarmSoundVolume) / 100,
      });
      setIsTimerRunning(false);
        goToNextTimer({
        timerSettings: timerSettings,
        timers: timers,
        dispatch,
      });

    }
  }, [secondsLeft]);

  useEffect(() => {
    const updateTimer = () => {
      setMinutesTimer(() => {
        const newMinutesTimer = getCurrentTimerInfo({
          timers: timers,
          timerSettings: timerSettings,
        }).minutesTimer;
        return secondsLeft === 0 ? newMinutesTimer : newMinutesTimer - 1;
      });
    };
    updateTimer();
  }, [timerSettings]);

  return {
    seconds: {
      secondsLeft: secondsToTimer(secondsLeft),
      setSecondsLeft,
    },
    minutes: {
      minutesTimer: minutesTimer,
      setMinutesTimer,
    },
    timerStatus: {
      isTimerRunning,
      setIsTimerRunning,
    },
    timerInSeconds: timerInSeconds,
  };
}
