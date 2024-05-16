import { saveValue } from "./localStorage";

/* 
  KEY: String 
  value: Object

  save value to localStorage by KEY
*/
export default function saveDataToLocalStorage(KEY, value) {
  return saveValue(KEY, value);
}
