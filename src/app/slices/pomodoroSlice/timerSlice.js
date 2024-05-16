import { createSlice } from "@reduxjs/toolkit";
import removeDataFromLocalStorage from "../../util/localStorage/removeDataFromLocalStorage";
import getDataFromLocalStorage from "../../util/localStorage/getDataFromLocalStorage";
import saveDataToLocalStorage from "../../util/localStorage/saveDataTolocalStorage";

const KEY = "timers";
const STATE = {
  timeStamp: Date.now(),
  pomodoro: {
    isActive: true,
    counter: 1,
  },
  shortBreak: {
    isActive: false,
    counter: 1,
  },
  longBreak: {
    isActive: false,
    counter: 1,
  },
};
const checkDuration = (KEY, STATE) => {
  const state = getDataFromLocalStorage(KEY, STATE);
  const maxDuration = 8 * 60 * 60 * 1000;
  if (Date.now() - state.timeStamp > maxDuration) {
    removeDataFromLocalStorage(KEY);
    return getDataFromLocalStorage(KEY, STATE);
  }
  return state;
};

const initialState = checkDuration(KEY, STATE);

const timersSlice = createSlice({
  name: "timersSlice",
  initialState,
  reducers: {
    /* 
      get new activeTimer and save it to localstorage 
      update it in the redux state
    */
    updateActiveTimer: (state, actions) => {
      const { payload } = actions;
      // ===

      const updatedState = Object.keys(state).reduce((acc, key) => {
        acc[key] = { ...state[key], isActive: key === payload };
        return acc;
      }, {});

      return saveDataToLocalStorage(KEY, {
        ...updatedState,
        timeStamp: Date.now(),
      });
    },
    // TODO : Make this code look good, it's ugly as F, there is not ugly Code Though, This code is not well written.
    updatePomodoroTimerCounter: (state, actions) => {
      const { payload } = actions;
      state.pomodoro.counter = parseInt(payload);
      state.timeStamp = Date.now();

      saveDataToLocalStorage(KEY, state);
      return state;
    },
    updateShortBreakTimerCounter: (state, actions) => {
      const { payload } = actions;
      state.shortBreak.counter = parseInt(payload);
      state.timeStamp = Date.now();

      saveDataToLocalStorage(KEY, state);
      return state;
    },
    updateLongBreakTimerCounter: (state, actions) => {
      const { payload } = actions;
      state.longBreak.counter = parseInt(payload);
      state.timeStamp = Date.now();

      saveDataToLocalStorage(KEY, state);
      return state;
    },
  },
});

export const {
  updateActiveTimer,
  updatePomodoroTimerCounter,
  updateShortBreakTimerCounter,
  updateLongBreakTimerCounter,
} = timersSlice.actions;

export default timersSlice.reducer;
