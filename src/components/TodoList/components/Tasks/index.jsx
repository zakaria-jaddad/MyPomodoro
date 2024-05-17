import Task from "../../ui/Task";
import TaskForm from "../../ui/TaskForm/TaskForm";
import useTaskForm from "./hooks/useToggleTaskForm";
import Todoist from "../../../../api/todoist/Todoist";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { toast } from "sonner";
import { useEffect, useMemo, useState } from "react";
import TaskSkelaton from "./ui/TaskSkelaton";

const Tasks = () => {
  const { taskForm, showTaskForm, hideTaskForm } = useTaskForm();
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getTasks = async () => {
      const { isSuccess, message, tasks } = await Todoist.getTasks();
      if (!isSuccess) {
        toast.error(message);
        return;
      }
      setTasks(tasks);
      setIsLoading(false);
      return;
    };
    getTasks();
    window.addEventListener("online", () => {
      getTasks();
    });
  }, [tasks]);

  const [tasksRef] = useAutoAnimate();

  return (
    <>
      {isLoading === true ? (
        <TaskSkelaton />
      ) : (
        <div
          id="tasks"
          className="my-5 [&_a]:underline [&_a]:hover:no-underline [&_a]:block [&_code]:text-active-button 
        [&_code]:bg-[#363636] [&_code]:py-[2px] [&_code]:px-[4px] [&_code]:border [&_code]:border-solid [&_code]:border-[#3d3d3d] [&_code]:rounded-[5px] [&_code]:text-[0.875em]
        "
          ref={tasksRef}
        >
          {tasks.map((task) => {
            return (
              <div id={task.id} key={task.id}>
                <Task task={task} tasks={tasks} />
              </div>
            );
          })}
        </div>
      )}

      {taskForm === true ? (
        <TaskForm
          tasks={tasks}
          showTaskForm={showTaskForm}
          hideTaskForm={hideTaskForm}
        />
      ) : null}

      <div
        className="w-full"
        onClick={() => {
          showTaskForm();
        }}
      >
        <div
          className={`h-[64px] w-full flex gap-3 items-center justify-center font-semibold text-xl capitalize opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer border-dashed border-white border-[2px] rounded-lg ${
            taskForm == true ? "opacity-100" : ""
          }
          `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-plus-square"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="12" y1="8" x2="12" y2="16"></line>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
          <div className=" text-lg">add task</div>
        </div>
      </div>
    </>
  );
};
export default Tasks;
