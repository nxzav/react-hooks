import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";

export default function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0)
    return (
      <h1 className="text-slate-700 text-2xl font-bold text-center">
        No hay tareas aún
      </h1>
    );

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      {tasks.map((task) => {
        return <TaskCard key={task.id} task={task} />;
      })}
    </div>
  );
}
