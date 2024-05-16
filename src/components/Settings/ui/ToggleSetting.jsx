import Button from "./Button";

/* 
  @pars
    - String: settingsHeader represent what the setting do 
    - Object: button information about the button 
        - Bool: button state
        - Function: updates button state

*/
function ToggleSetting({ settingsHeader = "", children }) {
  return (
    <div className="py-[12px]">
      <div className=" flex justify-between items-center gap-[5px] h-[32px] w-full">
        <h3 className="font-bold capitalize leading-7">{settingsHeader}</h3>
        {children}
      </div>
    </div>
  );
}

export default ToggleSetting;
