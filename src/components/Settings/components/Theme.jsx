import SubTitle from "../ui/SubTitle";
import ToggleSetting from "../ui/ToggleSetting";
import ThemeLogo from "/public/icons/settings/theme.svg";
import { themes } from "../data/theme/themes";
import { useDispatch, useSelector } from "react-redux";
import {
  updateDarkModeWhenRunning,
  updateTheme,
} from "../../../app/slices/settingsSlice/themeSlice";
import Button from "../ui/Button";

function Theme() {
  const dispatch = useDispatch();

  return (
    <div className="pb-[12px] mb-[12px] border-b border-eGray">
      <SubTitle title="Theme">
        <ThemeLogo width={25} height={25} strokeWidth="2" />
      </SubTitle>

      <ToggleSetting settingsHeader="Color Themes">
        <div className="flex items-center self-end gap-[15px]">
          <div
            onClick={() => {
              dispatch(updateTheme(themes.firstTheme));
            }}
            className="bg-[#3C3633] w-[28px] h-[28px] rounded cursor-pointer"
          ></div>
          <div
            onClick={() => {
              dispatch(updateTheme(themes.secondTheme));
            }}
            className="bg-[#0D0D0D] w-[28px] h-[28px] rounded cursor-pointer"
          ></div>
          <div
            onClick={() => {
              dispatch(updateTheme(themes.thirdTheme));
            }}
            className="bg-[#232625] w-[28px] h-[28px] rounded cursor-pointer"
          ></div>
        </div>
      </ToggleSetting>
    </div>
  );
}
export default Theme;
