import Todoist from "../../../../api/todoist/Todoist";
import { toast } from "sonner";
import { useState } from "react";

function clearTaskInput() {
  const taskInput = document.getElementById("task-input");
  if (taskInput !== null) {
    taskInput.value = "";
  }
  return;
}

/* 
  if valid return true
  if not valid return false
*/
function checkTaskInput(taskInput) {
  return taskInput != "";
}

const TaskForm = ({ showTaskFrom, hideTaskForm, tasks }) => {
  const [taskContent, setTaskContent] = useState("");
  const [errorTaskContent, setErrorTaskContent] = useState(false);

  return (
    <div className="wrapper px-2 w-full flex justify-center my-5">
      <form className="w-[380px] rounded shadow-lg border border-[#27272a]">
        <div className="flex flex-col ">
          <div className="flex flex-col space-y-1.5 p-6 pb-0">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">
              New Task!
            </h3>
          </div>
          <div className="p-6 pb-0">
            <div className="flex flex-col space-y-1.5">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-1"
                htmlFor="task-input"
              >
                Task's name
              </label>
              <input
                className={`flex h-10 w-full rounded-md border border-input bg-main-bg-color px-3 py-2 text-sm ring-offset-background file:border-0 ${
                  errorTaskContent == true
                    ? "file:bg-[#ff0000] border-[#ff0000]"
                    : "file:bg-[#27272a] border-[#27272a]"
                } file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none`}
                id="task-input"
                placeholder="Name of your task"
                autoComplete="off"
                autoFocus={true}
                onChange={(e) => {
                  setTaskContent(e.target.value);
                  if (!checkTaskInput(e.target.value)) {
                    setErrorTaskContent(true);
                  } else {
                    setErrorTaskContent(false);
                  }
                }}
                //  click save button when pressing enter
                onKeyDown={(e) => {
                  if (e.key === "Escape") {
                    hideTaskForm();
                  }
                }}
              />
              {errorTaskContent == true ? (
                <div className="text-sm text-[#ff0000]">
                  Task value is empty.
                </div>
              ) : null}
            </div>
          </div>
          <div className="flex items-center justify-between gap-3 p-6 text-sm">
            <button
              type="reset"
              className="bg-main-bg-color text-main-text-color px-4 py-2 rounded font-medium border border-[#27272a]"
              onClick={(e) => {
                e.preventDefault();
                hideTaskForm();
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="text-main-bg-color bg-[#fafafa] px-4 py-2 rounded font-medium "
              id="save-task-button"
              onClick={async (e) => {
                e.preventDefault();
                if (!checkTaskInput(taskContent)) {
                  setErrorTaskContent(true);
                  return;
                }
                const { isSuccess, message, task } = await Todoist.createTask({
                  content: taskContent,
                });
                if (isSuccess) {
                  toast.success(message);
                  clearTaskInput();
                  tasks = [...tasks, task];
                  return;
                }
                toast.error(message);
                return;
              }}
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default TaskForm;
