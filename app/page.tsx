"use client";

import { useState } from "react";
import { ListTodo, CornerDownLeft } from "lucide-react";
import type { Task, FilterType } from "./types"; 
import { TaskComposer, TaskFilters, TaskList, TaskEmptyState, TaskNoResults } from "@/components";

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<FilterType>("All");

  const createTask = (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      completed: false,
    };
    setTasks((current) => [...current, newTask]);
  };

  const deleteTask = (id: string) => {
    setTasks((current) => current.filter((task) => task.id !== id));
  };

  const toggleTask = (id: string) => {
    setTasks((current) =>
      current.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  };

  const visibleTasks = tasks.filter((task) => {
    if (filter === "Active") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true;
  });

  const renderContent = () => {
    if (tasks.length === 0) return <TaskEmptyState />;
    if (visibleTasks.length === 0) return <TaskNoResults />;
    return <TaskList tasks={visibleTasks} onDeleteTask={deleteTask} onToggleTask={toggleTask} />;
  };

  return (
    <main className="flex flex-col w-200 h-fit py-20 px-16 bg-[#EAF0EB]">
      <div className="flex flex-col w-2xl h-fit rounded-3xl bg-white">
        <header className="flex w-full px-8 pt-8 pb-6 gap-3">
          <div className="w-11 h-11 bg-[#E5F2ED] rounded-2xl flex justify-center items-center">
            <ListTodo className="w-6 h-6 text-[#23735A]" />
          </div>
          <h1 className="w-28 h-9 font-semibold text-2xl leading-9 text-[#213D35]">My tasks.</h1>
        </header>

        <TaskComposer onCreateTask={createTask} />

        <div className="w-full h-14.25 pt-3 pr-9 pb-7 flex gap-1.5 justify-end">
          <div className="flex justify-center items-center">
            <CornerDownLeft className="w-3 h-3 text-[#7A8881]" />
          </div>
          <p className="w-24.75 h-4.25 text-[11px] leading-[16.5px] text-[#7A8881]">Enter to add a task</p>
        </div>

        <TaskFilters filter={filter} onFilter={setFilter} count={visibleTasks.length} />

        <div className="w-full h-px bg-[#E9EEEB]"></div>

        {renderContent()}
      </div>
    </main>
  );
};

export default Home;