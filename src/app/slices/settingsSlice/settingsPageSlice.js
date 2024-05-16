import { createSlice } from "@reduxjs/toolkit";
import saveDataToLocalStorage from "../../util/localStorage/saveDataTolocalStorage";
import getDataFromLocalStorage from "../../util/localStorage/getDataFromLocalStorage";

const KEY = "settingsPage";
const initialState = getDataFromLocalStorage(KEY, false);

export const settingsPageSlice = createSlice({
  name: "settingsPageSlice",
  initialState,
  reducers: {
    showPage: (state) => {
      saveDataToLocalStorage(KEY, true);
      return true;
    },
    hidePage: (state) => {
      saveDataToLocalStorage(KEY, false);
      return false;
    },
  },
});

export const { showPage, hidePage } = settingsPageSlice.actions;

export default settingsPageSlice.reducer;
