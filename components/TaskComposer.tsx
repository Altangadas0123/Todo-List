"use client";

import { useState } from "react";
import type { ChangeEvent, SubmitEvent } from "react";
import { Plus } from "lucide-react";

type TaskComposerProps = {
  onCreateTask: (title: string) => void;
};

export const TaskComposer = ({ onCreateTask }: TaskComposerProps) => {
  const [taskTitle, setTaskTitle] = useState("");

  const hasText = taskTitle.trim() !== "";
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.target.value);
  };

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const title = taskTitle.trim();
    if (title === "") return;

    onCreateTask(title);
    setTaskTitle("");
  };
  return (
    <div className="w-full px-8 flex">
      <form
        onSubmit={handleSubmit}
        className="w-152 h-18.5 flex items-center justify-between rounded-2xl border border-[#DCE9E2] p-2 bg-[#F4F8F5]"
      >
        <input
          value={taskTitle}
          onChange={handleChange}
          placeholder="What needs to get done?"
          className="w-113.5 h-14 text-base leading-6 rounded-xl p-4 text-[#213D35] placeholder:text-[#75867E] outline-none focus:bg-white focus:text-[#213D35] transition-colors"
        />
        <button type="submit" className={`w-32 h-12 rounded-xl flex items-center justify-center gap-2 transition-colors ${hasText ? "bg-[#236B53]" : "bg-[#D8E5DD]"}`}>
          <Plus size={16} strokeWidth={2} className={`${hasText ? "text-[white]" : "text-[#63796C]"}`} />
          <span className={`font-semibold text-sm leading-5.25 ${hasText ? "text-[white]" : "text-[#63796C]"}`}>Add task</span>
        </button>
      </form>
    </div>
  );
};

// #236B53]