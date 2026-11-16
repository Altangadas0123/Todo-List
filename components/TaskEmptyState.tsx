import React from 'react'
import { Check } from 'lucide-react'

export const TaskEmptyState = () => {
  return (
    <div className='w-full h-60 flex justify-center items-center flex-col gap-2'>
      <div className='flex justify-center items-center w-14 h-14 rounded-[100%] bg-[#F0F6F2]'>
        < Check className='w-6 h-6 text-[#6C9B82]'/>
      </div>
      <p className='w-fit h-6 font-semibold text-base leading-6 text-[#304C3E]'>Your list starts here</p>
      <p className='w-fit h-5.25 text-sm leading-5.25 text-[#7A8881]'>Add your first task above.</p>
    </div>
  )
}
