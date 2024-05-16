import { getSavedValue } from "./localStorage";

/* 
  KEY: String 
  value: Object

  get value from localStorage if ther is not data saves it and get it
*/
export default function getDataFromLocalStorage(KEY, value) {
  return getSavedValue(KEY, value);
}
