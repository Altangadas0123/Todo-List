import { FilterType } from "@/components";

const filters: FilterType[] = ["All", "Active", "Completed",];

type TaskFiltersProps = {
  filter: FilterType;
  onFilter: (fikter: FilterType) => void;
}

export const TaskFilters = ({filter, onFilter}: TaskFiltersProps) => {
  return (
    <div className='w-full h-12 px-8 flex gap-7 justify-between items-center'>
      <div className='w-fit h-full flex gap-7'>
        <p className='flex items-center w-5.5 h-12 border-b-2 border-[#236B53] font-semibold text-sm leading-5.25 text-[#236B53]'>All</p>
        <p className='flex items-center w-12 h-12 font-semibold text-sm leading-5.25 text-[#7B8680] hover:text-[#236B53]'>Active</p>
        <p className='flex items-center w-21.25 h-12 font-semibold text-sm leading-5.25 text-[#7B8680] hover:text-[#236B53]'>Completed</p>
      </div>

      <p className='flex items-center justify-center w-4 h-6.25 bg-[#F0F4F1] rounded-md p-1 text-[11px] leadnig-[16.5px] text-[#65766C]'>0</p>
    </div>
  )
}
