import { useState } from "react";

export default function useTaskForm() {
  const [taskForm, setTaskFrom] = useState(false);

  const showTaskForm = () => {
    setTaskFrom(true);
  };
  const hideTaskForm = () => {
    setTaskFrom(false);
  };
  return {
    taskForm,
    showTaskForm,
    hideTaskForm,
  };
}
