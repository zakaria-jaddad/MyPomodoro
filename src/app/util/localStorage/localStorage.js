/* 
  save value to local storage and return it
*/
function saveValue(KEY, value) {
  localStorage.setItem(KEY, JSON.stringify(value));
  return JSON.parse(localStorage.getItem(KEY));
}

/* 
  gets value from local storage if exist 
  if not create value and return it, if doesn't exist
*/
function getSavedValue(KEY, value) {
  let savedValue = localStorage.getItem(KEY);

  // i just don't know it just work like this
  if (savedValue !== "undefined" && savedValue !== null) {
    return JSON.parse(savedValue);
  }

  if (value === null) {
    return null;
  }
  // if there is nothing save new value and return it
  return saveValue(KEY, value);
}

export { saveValue, getSavedValue };
