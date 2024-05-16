import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./slices/settingsSlice";
import homeReducer from "./slices/pomodoroSlice/root";

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    home: homeReducer, 
  },
});
