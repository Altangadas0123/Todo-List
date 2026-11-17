import React from "react";
import { Plus } from "lucide-react";

export const TaskComposer = () => {
  return (
    <div className="w-full px-8 flex">
      <form action="submit" className="w-152 h-18.5 flex items-center justify-between rounded-2xl border-px border-[#DCE9E2] p-2 bg-[#F4F8F5]">
        <input type="text" className="w-113.5 h-14 flex text-base leading-6 rounded-xl p-4 text-[#213D35] placeholder:text-[#75867E]" placeholder="What needs to get done?" />

        <button className="w-32 h-12 rounded-xl flex items-center justify-center gap-2 bg-[#D8E5DD]">
          <Plus size={16} strokeWidth={2} className=" text-[#63796C]" />
          <div className="font-semibold text-sm leading-5.25 text-[#63796C] ">Add task</div>
        </button>
      </form>
    </div>
  );
};
