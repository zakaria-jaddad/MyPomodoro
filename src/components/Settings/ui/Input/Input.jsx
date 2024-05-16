import useCurrentInputValue from "./hooks/useCurrentInputValue";

function Input({ labelContent = null, updateInputValue, inputValue = "" }) {
  const [isValid, [currentInputValue, setCurrentInputValue]] =
    useCurrentInputValue(inputValue, updateInputValue);
  const errorMessage =
    isValid === false ? (
      <span className="font-normal text-red-400 text-[12px] pl-1 ">
        Invalid Value
      </span>
    ) : null;

  return (
    <div
      style={{ overflowWrap: "break-word" }}
      className="flex flex-col xsm:w-[98px] w-[55px] text-third-text-color font-bold mb-[4px] text-[14px]"
    >
      {labelContent !== null ? (
        <label
          htmlFor={labelContent}
          data-valid={isValid}
          className="block data-[valid=false]:text-red-400"
        >
          {labelContent}
        </label>
      ) : null}
      <input
        data-valid={isValid}
        className="p-[10px] rounded-[6px] bg-efGray max-h-[38.5px] outline-none data-[valid=false]:focus:border data-[valid=false]:focus:border-red-400"
        type="number"
        value={parseInt(currentInputValue)}
        id={labelContent}
        min="1"
        onChange={(e) => {
          setCurrentInputValue(e.target.value);
        }}
      />
      {errorMessage}
    </div>
  );
}

export default Input;
