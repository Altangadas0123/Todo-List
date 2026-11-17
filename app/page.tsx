"use client";


import Image from "next/image";
import { ListTodo } from "lucide-react";
import { CornerDownLeft } from "lucide-react";
import { TaskComposer } from "@/components/TaskComposer";
import { TaskFilters } from "@/components/TaskFilters";
import { TaskEmptyState } from "@/components/TaskEmptyState";
import { TaskList } from "@/components/TaskList";
import type { Task } from "@/components/TaskList";

import { useState } from "react";



const Home = () => {

  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", title: "Prepare tomorrow's lesson", completed: false },
    { id: "2", title: "Buy groceries", completed: false },
    { id: "3", title: "Read 20 pages", completed: true },
  ]);



  return (
    <main className="flex flex-col w-200 h-fit py-20 px-16 bg-[#EAF0EB]">
      <div className="flex flex-col w-2xl h-fit rounded-3xl bg-[white] ">
        <header className="flex w-full px-8 pt-8 pb-6 gap-3">
          <div className="w-11 h-11 bg-[#E5F2ED] rounded-2xl flex justify-center items-center">
            < ListTodo className="w-6 h-6 text-[#23735A]"/>
          </div>
          <h1 className="w-28 h-9 font-semibold text-2xl leading-9 text-[#213D35]">My tasks.</h1>
        </header>

        <TaskComposer />

        <div className="w-full h-14.25 pt-3 pr-9 pb-7 flex gap-1.5 justify-end">
          <div className=" flex justify-center items-center">< CornerDownLeft className="w-3 h-3 text-[#7A8881]"/></div>
          <p className="w-24.75 h-4.25 text-[11px] leading-[16.5px] text-[#7A8881]">Enter to add a task</p>
        </div>

        <TaskFilters />

        <div className="w-full h-px bg-[#E9EEEB]"></div>
        {tasks.length === 0 ? <TaskEmptyState /> : <TaskList tasks={tasks} />}
      </div>
    </main>
  );
};

export default Home;