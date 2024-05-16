import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
/* 
  - Input
    -> inputValue: input value
    -> updateInputValue: function that updates the current input value and store it's value in redux state

  - cheks users input value valid or not 
*/
const useCurrentInputValue = (inputValue, updateInputValue) => {
  const [isValid, setIsValid] = useState(true);
  const [currentInputValue, setCurrentInputValue] = useState(inputValue);
  const dispatch = useDispatch();

  useEffect(() => {
    const validateCurentInputValue = () => {
      if (currentInputValue != "" || currentInputValue != 0) {
        dispatch(updateInputValue(currentInputValue));
        setIsValid(true);
        return 0;
      }
      setIsValid(false);
    };
    validateCurentInputValue();
  }, [currentInputValue]);

  return [isValid, [currentInputValue, setCurrentInputValue]];
};
export default useCurrentInputValue;
