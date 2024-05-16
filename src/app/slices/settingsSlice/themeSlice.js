import { createSlice } from "@reduxjs/toolkit";
import saveDataToLocalStorage from "../../util/localStorage/saveDataTolocalStorage";
import getDataFromLocalStorage from "../../util/localStorage/getDataFromLocalStorage";

const KEY = "theme";
const initialState = getDataFromLocalStorage(KEY, {
  themeColors: {
    "main-bg-color": "#3C3633",
    "main-text-color": "#EEEDEB",
    "second-text-color": "#1F1717",
    "third-text-color": "#747264",
    "active-button": "#84C733CC",
  },
  darkModeWhenRunning: false,
});

// ========

export const themeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    updateTheme: (state, actions) => {
      saveDataToLocalStorage(KEY, { ...state, themeColors: actions.payload });
      return { ...state, themeColors: actions.payload };
    },
    updateDarkModeWhenRunning: (state, actions) => {
      saveDataToLocalStorage(KEY, {
        ...state,
        darkModeWhenRunning: actions.payload,
      });
      return { ...state, darkModeWhenRunning: actions.payload };
    },
  },
});

export const { updateTheme, updateDarkModeWhenRunning } = themeSlice.actions;
export default themeSlice.reducer;
