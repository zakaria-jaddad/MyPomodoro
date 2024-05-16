import SubTitle from "../ui/SubTitle";
import ToggleSetting from "../ui/ToggleSetting";
import SoundLogo from "/public/icons/settings/sound.svg";
import Select from "../ui/Select";
import { useSelector } from "react-redux";
import Slider from "../ui/Slider";
import { updateAlarmSoundValume } from "../../../app/slices/settingsSlice/soundSlice";

function Sound() {
  const sound = useSelector((state) => state.settings.sound);
  return (
    <div className="pb-[12px] mb-[12px] border-b border-eGray">
      <SubTitle title="Sound">
        <SoundLogo width={25} height={25} strokeWidth="2" />
      </SubTitle>

      {/* inputs */}
      <ToggleSetting settingsHeader="Alarm Sound">
        <Select />
      </ToggleSetting>

      <ToggleSetting>
        <Slider
          value={sound.alarmSoundVolume}
          setValue={updateAlarmSoundValume}
          soundPath={sound.alarmSound.alarmSound}
        />
      </ToggleSetting>

    </div>
  );
}

export default Sound;
