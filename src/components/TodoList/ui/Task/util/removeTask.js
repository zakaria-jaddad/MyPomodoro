export default function removeTask({ taskID, tasks }) {
  const newTasks = tasks.filter((task) => task.id !== taskID);
  tasks = [...newTasks];
}
