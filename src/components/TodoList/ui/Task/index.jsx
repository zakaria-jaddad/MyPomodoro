import Todoist from "../../../../api/todoist/Todoist";
import Markdown from "react-markdown";
import removeTask from "./util/removeTask";
import { toast } from "sonner";
import { useState } from "react";
import TaskAnimation from "./ui/TaskAnimation/TaskAnimation";

const Task = ({ task, tasks }) => {
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);
  const [isTaskDeleted, setIsTaskDeleted] = useState(false);

  return (
    <div className="flex justify-between items-center py-3 px-2">
      <div className="inline-flex items-center">
        <div>
          <div
            className="mb-2"
            onClick={() => {
              const closeTask = async () => {
                const { isSuccess, message } = await Todoist.closeTask(task.id);
                if (!isSuccess) {
                  toast.error(message);
                  setIsTaskCompleted(false);
                  return;
                }
                toast.success(message);
              };
              setIsTaskCompleted(true);
              closeTask();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`w-6 h-6 hover:text-active-button hover:cursor-pointer ${
                isTaskCompleted && "text-active-button"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          {isTaskCompleted === true && (
            <TaskAnimation animationColor={"var(--active-button)"} />
          )}
        </div>

        <div className="mx-[10px]">
          <Markdown>{task.content}</Markdown>
        </div>

        <div />
      </div>
      <div>
        <div
          className="mb-2"
          onClick={() => {
            const deleteTask = async () => {
              const { isSuccess, message } = await Todoist.deleteTask(task.id);
              if (!isSuccess) {
                toast.error(message);
                return;
              }
              toast.success(message);
            };
            removeTask({ taskID: task.id, tasks: tasks });
            setIsTaskDeleted(true);
            deleteTask();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`w-4 h-4 hover:text-[#ff0000] hover:cursor-pointer ${
              isTaskDeleted && "text-[#ff0000]"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </div>
        {isTaskDeleted === true && <TaskAnimation animationColor={"#ff0000"} />}
      </div>
    </div>
  );
};

export default Task;
