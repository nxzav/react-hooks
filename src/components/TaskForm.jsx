import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-slate-500 p-10 mb-4 rounded-md" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-white mb-4">Crear nueva tarea</h1>
        <input
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Write your task"
          value={title}
          className="bg-slate-200 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="Write the task description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-200 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500 hover:bg-indigo-600 px-3 py-2 rounded-sm text-white">Guardar</button>
      </form>
    </div>
  );
}
