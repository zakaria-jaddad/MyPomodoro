import SubTitle from "../ui/SubTitle";
import ToggleSetting from "../ui/ToggleSetting";
import TodoistIntegrationButton from "../../../ui/TodoisIntegrationButton";
import IntegrationLogo from "/public/icons/settings/integration.svg"

function Integration() {
  return (
    <div className="pb-[12px] mb-[12px] border-b border-eGray">
      <SubTitle title="integration">
        <IntegrationLogo width={25} height={25} strokeWidth="2" />
      </SubTitle>
      <ToggleSetting settingsHeader="todoist">
        <TodoistIntegrationButton
          buttonContent={"Connect"}
          buttonClassStyles="px-[12px] duration-300 transition-all opacity-70  hover:opacity-100 capitalize text-${buttonColor} text-sm rounded border border-solid border${buttonColor} h-full flex items-center justify-center"
        />
      </ToggleSetting>
    </div>
  );
}

export default Integration;
