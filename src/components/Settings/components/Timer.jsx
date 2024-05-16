import WatchLogo from "/public/icons/settings/watch.svg";
import Input from "../ui/Input/Input";
import SubTitle from "../ui/SubTitle";
import { useSelector } from "react-redux";
import ToggleSetting from "../ui/ToggleSetting";
import {
  updateAutoStartsBreaks,
  updateAutoStartsPomodoro,
  updateLongBreak,
  updateLongBreakInterval,
  updatePomodoro,
  updateShortBreak,
} from "../../../app/slices/settingsSlice/timerSlice";
import Button from "../ui/Button";

function Timer() {
  const timer = useSelector((state) => state.settings.timer);
  return (
    <div className="pb-[12px] mb-[12px] border-b border-eGray">
      <SubTitle title="Timer">
        <WatchLogo width={25} height={25} strokeWidth="2" />
      </SubTitle>

      {/* Time */}
      <div className="py-[12px]">
        <span className="block text-second-txet-color font-semibold">
          Time minutes
        </span>
        <div className="flex justify-between mt-[10px]">
          <Input
            labelContent="Pomodoro"
            updateInputValue={updatePomodoro}
            inputValue={timer.pomodoro}
          />
          <Input
            labelContent="Short Break"
            updateInputValue={updateShortBreak}
            inputValue={timer.shortBreak}
          />
          <Input
            labelContent="Long Break"
            updateInputValue={updateLongBreak}
            inputValue={timer.longBreak}
          />
        </div>
      </div>

      {/* long Break Interval */}
      <ToggleSetting settingsHeader="long break interval">
        <Input
          inputValue={timer.longBreakInterval}
          updateInputValue={updateLongBreakInterval}
        />
      </ToggleSetting>
    </div>
  );
}

export default Timer;
