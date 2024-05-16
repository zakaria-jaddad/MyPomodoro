import timersReducer from "./timerSlice";
import { combineReducers } from "@reduxjs/toolkit";

const homeReducer = combineReducers({
  timers: timersReducer,
});

export default homeReducer;
