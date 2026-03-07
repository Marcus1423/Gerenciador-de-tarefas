import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export function TaskProvider({ children }) {

    const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(data, projectId = null) {

    setTasks(prev => [
      ...prev,
      { 
        id: Date.now(),
      title: data.title,
      description: data.description,
      category: data.category,
      completed: false,
      projectId
       }
    ]);
  }

  function toggleTask(id) {
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function removeTask(id) {
        setTasks(prev => prev.filter(p => p.id !== id));
  }

  return (
    <TaskContext.Provider value={{tasks, addTask, removeTask, toggleTask}}>
        { children }
    </TaskContext.Provider>
  )

}



