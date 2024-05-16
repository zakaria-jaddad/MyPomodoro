import settingsPageReducer from "./settingsPageSlice";
import timerReducer from "./timerSlice";
import soundReducer from "./soundSlice";
import themeReducer from "./themeSlice";
import { combineReducers } from "@reduxjs/toolkit";

const settingsReducer = combineReducers({
  settingsPage: settingsPageReducer,
  timer: timerReducer,
  sound: soundReducer,
  theme: themeReducer,
});

export default settingsReducer;
