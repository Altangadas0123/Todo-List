import { Check } from "lucide-react";

export const TaskNoResults = () => {
  return (
    <div className="w-full h-60 flex justify-center items-center flex-col gap-2">
      <div className="flex justify-center items-center w-14 h-14 rounded-full bg-[#F0F6F2]">
        <Check className="w-6 h-6 text-[#6C9B82]" />
      </div>
      <p className="font-semibold text-base leading-6 text-[#304C3E]">No tasks here</p>
      <p className="text-sm leading-5.25 text-[#7A8881]">Try another filter to see your tasks.</p>
    </div>
  );
};