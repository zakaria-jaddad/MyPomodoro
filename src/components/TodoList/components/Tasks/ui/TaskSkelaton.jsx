const TaskSkelaton = () => {
  return (
    <div className="flex items-center justify-between py-3 w-full mx-auto my-3">
      <div className="animate-pulse bg-[#27272a] h-[30px] w-[30px] rounded-[50%]"></div>
      <div className="space-y-2 w-[350px] flex flex-col items-center">
        <div className="animate-pulse rounded-md bg-[#27272a] h-5 w-[95%]"></div>
        <div className="animate-pulse rounded-md bg-[#27272a] h-4 w-[80%]"></div>
      </div>
      <div className="animate-pulse bg-[#27272a] h-[30px] w-[30px] rounded-[50%]"></div>
    </div>
  );
};
export default TaskSkelaton;
