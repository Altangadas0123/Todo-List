import { Check } from "lucide-react";
import { Trash } from "lucide-react";

export type Task = {
  id: string;
  title: string;
  completed: boolean;
};

type TaskListProps = {
  tasks: Task[];
  onDeleteTask: (id: string) => void;
  onToggleTask: (id: string) => void;
};

export const TaskList = ({ tasks, onDeleteTask, onToggleTask}: TaskListProps) => {
  const handleDelete = (id: string) => {
    onDeleteTask(id);
  };
  const handleToggle = (id: string) => {
    onToggleTask(id);
  };

  return (
    <div className="flex flex-col w-full h-fit py-2 px-5">
      {tasks.map((task) => (
        <label onClick={() => handleToggle(task.id) } key={task.id} className="group w-full h-fit rounded-xl p-2 flex items-center gap-3 ">
          <div className="w-11 h-11 flex justify-center items-center relative">
            <input type="checkbox" className="peer appearance-none w-5.5 h-5.5 rounded-full border border-[#BDCDC2] checked:bg-[#3A8366] checked:border-[#3A8366] cursor-pointer transition-colors" />

            <Check size={14} strokeWidth={2.5} className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" />
          </div>
        
          <p className="w-126 h-5.25 font-medium text-sm leading-5.25 text-[#30483C] group-has-checked:font-normal group-has-checked:text-[#93A096] group-has-checked:line-through">{task.title}</p>

          <button onClick={() => handleDelete(task.id) } className="w-11 h-11 flex justify-center items-center">
            <Trash size={16} strokeWidth={1.7} className="text-[#93A198]" />
          </button>
        </label>
        
      ))}
    </div>
  );
};
