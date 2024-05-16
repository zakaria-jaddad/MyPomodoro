import { createSlice } from "@reduxjs/toolkit";
import saveDataToLocalStorage from "../../util/localStorage/saveDataTolocalStorage";
import getDataFromLocalStorage from "../../util/localStorage/getDataFromLocalStorage";
const KEY = "sound";

const initialState = getDataFromLocalStorage(KEY, {
  alarmSound: {
    alarmName: "twitch",
    alarmSound: "/public/sounds/twitch.mp3",
  },
  alarmSoundVolume: 50,
}
);

export const soundSlice = createSlice({
  name: "soundSlice",
  initialState,
  reducers: {
    updateAlarmSound: (state, actions) => {
      saveDataToLocalStorage(KEY, {
        ...state,
        alarmSound: { ...actions.payload },
      });
      return { ...state, alarmSound: { ...actions.payload } };
    },
    updateAlarmSoundValume: (state, actions) => {
      saveDataToLocalStorage(KEY, {
        ...state,
        alarmSoundVolume: parseInt(actions.payload),
      });
      return { ...state, alarmSoundVolume: parseInt(actions.payload) };
    },
  },
});

export const { updateAlarmSound, updateAlarmSoundValume } = soundSlice.actions;

export default soundSlice.reducer;
