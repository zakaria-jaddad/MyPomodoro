import { createSlice } from "@reduxjs/toolkit";
import saveDataToLocalStorage from "../../util/localStorage/saveDataTolocalStorage";
import getDataFromLocalStorage from "../../util/localStorage/getDataFromLocalStorage";
const KEY = "timer";
const initialState = getDataFromLocalStorage(KEY, {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 30,
  autoStartsBreaks: false,
  autoStartsPomodoro: false,
  longBreakInterval: 4,
});

export const timerSlice = createSlice({
  name: "timerSlice",
  initialState: initialState,
  reducers: {
    updatePomodoro: (state, actions) => {
      saveDataToLocalStorage(KEY, {
        ...state,
        pomodoro: parseInt(actions.payload),
      });
      return { ...state, pomodoro: parseInt(actions.payload) };
    },
    updateShortBreak: (state, actions) => {
      saveDataToLocalStorage(KEY, {
        ...state,
        shortBreak: parseInt(actions.payload),
      });
      return { ...state, shortBreak: parseInt(actions.payload) };
    },
    updateLongBreak: (state, actions) => {
      saveDataToLocalStorage(KEY, {
        ...state,
        longBreak: parseInt(actions.payload),
      });
      return { ...state, longBreak: parseInt(actions.payload) };
    },
    updateAutoStartsBreaks: (state, actions) => {
      saveDataToLocalStorage(KEY, {
        ...state,
        autoStartsBreaks: actions.payload,
      });
      return { ...state, autoStartsBreaks: actions.payload };
    },
    updateAutoStartsPomodoro: (state, actions) => {
      saveDataToLocalStorage(KEY, {
        ...state,
        autoStartsPomodoro: actions.payload,
      });
      return { ...state, autoStartsPomodoro: actions.payload };
    },
    updateLongBreakInterval: (state, actions) => {
      saveDataToLocalStorage(KEY, {
        ...state,
        longBreakInterval: parseInt(actions.payload),
      });
      return { ...state, longBreakInterval: parseInt(actions.payload) };
    },
  },
});

export const {
  updatePomodoro,
  updateLongBreak,
  updateShortBreak,
  updateAutoStartsBreaks,
  updateAutoStartsPomodoro,
  updateLongBreakInterval,
} = timerSlice.actions;

export default timerSlice.reducer;
