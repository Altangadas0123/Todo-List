import { Check, Trash } from "lucide-react";
import type { Task } from "@/app/types";

type TaskListProps = {
  tasks: Task[];
  onDeleteTask: (id: string) => void;
  onToggleTask: (id: string) => void;
};

export const TaskList = ({ tasks, onDeleteTask, onToggleTask }: TaskListProps) => {
  return (
    <div className="flex flex-col w-full h-fit py-2 px-5">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`group w-full h-fit rounded-xl p-2 flex items-center gap-3 ${
            task.completed ? "bg-[#F6F9F7]" : ""
          }`}
        >
          <div className="w-11 h-11 flex justify-center items-center relative">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleTask(task.id)}
              className="peer appearance-none w-5.5 h-5.5 rounded-full border border-[#BDCDC2] checked:bg-[#3A8366] checked:border-[#3A8366] cursor-pointer transition-colors"
            />
            <Check
              size={14}
              strokeWidth={2.5}
              className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"
            />
          </div>

          <p
            className={`flex-1 text-sm leading-5.25 ${
              task.completed
                ? "font-normal text-[#93A096] line-through"
                : "font-medium text-[#30483C]"
            }`}
          >
            {task.title}
          </p>

          <button
            onClick={() => onDeleteTask(task.id)}
            className="w-11 h-11 flex justify-center items-center"
          >
            <Trash size={16} strokeWidth={1.7} className="text-[#93A198]" />
          </button>
        </div>
      ))}
    </div>
  );
};