import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

function TaskItem({ task }) {
  const { toggleTask, removeTask } = useContext(TaskContext);

  return (
    <li className="flex items-center justify-between dark:bg-slate-900 border border-slate-800 rounded-xl p-4 dark:hover:bg-slate-800 transition">
      
      {/* Título */}
      <span
        onClick={() => toggleTask(task.id)}
        style={{
          cursor: "pointer",
          textDecoration: task.completed ? "line-through" : "none"
        }}
      >
        {task.title}
      </span>

      <button onClick={() => toggleTask(task.id)} className="bg-green-800/10 text-green-600 hover:bg-green-500/20 px-3 py-1 rounded-lg transition">
        Concluir
      </button>
      <button onClick={() => removeTask(task.id)} className="bg-red-500/10 text-red-400 hover:bg-red-500/20 px-3 py-1 rounded-lg transition">
        Remover
      </button>

    </li>
  );
}

export default TaskItem;