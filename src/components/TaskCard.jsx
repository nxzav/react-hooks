import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-slate-500 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-300 text-sm">{task.description}</p>
      <button
        className="bg-red-600 px-2 rounded-sm mt-3 hover:bg-red-700"
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        Eliminar tarea
      </button>
    </div>
  );
}
