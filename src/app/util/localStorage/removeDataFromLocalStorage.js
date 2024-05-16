/* 
  removes Item from local storage using it's key
*/
const removeDataFromLocalStorage = (KEY) => {
  localStorage.removeItem(KEY);
}
export default removeDataFromLocalStorage;