import type { FilterType } from "@/app/types";

const filters: FilterType[] = ["All", "Active", "Completed"];

type TaskFiltersProps = {
  filter: FilterType;
  onFilter: (filter: FilterType) => void;
  count: number;
};

export const TaskFilters = ({ filter, onFilter, count }: TaskFiltersProps) => {
  return (
    <div className="w-full h-12 px-8 flex gap-7 justify-between items-center">
      <div className="w-fit h-full flex gap-7">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => onFilter(item)}
            className={`flex items-center h-12 border-b-2 font-semibold text-sm leading-5.25 ${
              filter === item ? "border-[#236B53] text-[#236B53]" : "border-transparent text-[#7B8680] hover:text-[#236B53]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <p className="flex items-center justify-center min-w-6 h-6.25 bg-[#F0F4F1] rounded-md px-1.5 text-[11px] leading-[16.5px] text-[#65766C]">{count}</p>
    </div>
  );
};