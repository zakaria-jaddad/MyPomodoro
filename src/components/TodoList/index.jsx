import TodoistIntegrationButton from "../../ui/TodoisIntegrationButton";
import Tasks from "./components/Tasks";
import IntegrationLogo from "/public/icons/header/integration.svg";
import Arrow from "/public/icons/todolist/left-arrow-1.svg";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const TodoList = ({ isUserAuthenticated }) => {
  const [taskFormRef] = useAutoAnimate();

  return (
    <main className="antialiased mx-auto text-main-text-color">
      <div className="max-w-lg mx-auto p-8 shadow" ref={taskFormRef}>
        <div className="flex flex-row justify-center items-center">
          <div className="transition-all duration-300 flex justify-between items-center w-[100%] sm:w-[70%] md:w-full h-[60px] relative">
            <div className="flex justify-between items-center border-b w-full h-[60px]">
              <h1 className="text-main-text-color text-xl font-semibold">
                Tasks list
              </h1>

              {/* Integrations Button */}
              {isUserAuthenticated === true ? null : (
                <div className="h-[35px]">
                  <TodoistIntegrationButton
                    buttonContent={"Todoist"}
                    buttonClassStyles="h-full flex justify-center items-center gap-[0px] sm:gap-[5px] p-[8px_12px] min-w-[0px] sm:min-w-[70px] bg-transparent rounded-[5px] cursor-pointer
                                    opacity-[0.9] hover:opacity-[1] transition-all duration-300"
                    buttonIcon={
                      <IntegrationLogo
                        height={17}
                        width={17}
                        className="fill-main-text-color"
                      />
                    }
                  />
                </div>
              )}
            </div>

            {/* Arrow Conect To */}
            {isUserAuthenticated === true ? null : (
              <div className="absolute left-[92%] bottom-[-92%] hidden sm:block">
                <div className="relative h-full w-full">
                  <div>
                    <Arrow
                      height={200}
                      width={200}
                      className="fill-main-text-color"
                      stroke="white"
                    />
                  </div>
                  <div className="font-virgil font-semibold text-lg capitalize absolute top-[20px] left-[18px] w-full text-right rotate-[15deg]">
                    connect to
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {isUserAuthenticated === true ? <Tasks /> : null}

      </div>
    </main>
  );
};

export default TodoList;
