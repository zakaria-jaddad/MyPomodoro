import "../styles/rangeInput.css";
import { useDispatch } from "react-redux";
import playSound from "../../utils/playSound";

/* 
  takes sound object: has all sound information and function to update sound volume 
  sound: {...}
  setValue: func
*/
function Slider({ value, setValue, soundPath }) {
  const dispatch = useDispatch();
  return (
    <div className="w-[50%] h-full flex items-center gap-[10px]">
      <div className=" text-third-text-color">{value}</div>
      <input
        className="range-input w-[77%] h-[12px] bg-efGray [&::-webkit-slider-thumb]:bg-third-text-color [&::-webkit-slider-thumb]:w-[20px] [&::-webkit-slider-thumb]:h-[20px] [&::-webkit-slider-thumb]:rounder-[50%] [&::-webkit-slider-thumb]:cursor-pointer"
        type="range"
        min="0"
        max="100"
        value={parseInt(value)}
        onChange={(e) => {
          dispatch(setValue(e.target.value));
        }}
        onMouseUp={() => {
          playSound({ sound: soundPath, soundVolume: parseInt(value) / 100 });
        }}
      />
    </div>
  );
}

export default Slider;
