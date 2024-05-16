import { useDispatch } from "react-redux";

function Button({ buttonState, updateButtonState }) {
  const dispatch = useDispatch();
  return (
    <div
      className={`p-[3px] w-[60px] h-full rounded-[50px] flex items-center cursor-pointer ${
        buttonState === true
          ? "justify-end bg-active-button"
          : "justify-start bg-gray-ccc"
      }`}
      onClick={() => {
        buttonState === true
          ? dispatch(updateButtonState(false))
          : dispatch(updateButtonState(true));
      }}
    >
      <div className="bg-white w-[27px] h-[27px] rounded-full"></div>
    </div>
  );
}

export default Button;
