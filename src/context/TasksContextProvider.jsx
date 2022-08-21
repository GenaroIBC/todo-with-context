import { useState } from "react";
import { createContext } from "react";

export const TasksContext = createContext();

export function TasksContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const addTask = e => {
    e.preventDefault();
    const taskInput = e.target["task-name"];
    if (!taskInput.value.trim()) return;
    setTasks(prevTasks => {
      return [
        {
          title: taskInput.value,
          completed: false,
          id: Math.random(),
        },
        ...prevTasks,
      ];
    });
  };

  const changeCompleted = (id, e) => {
    if (!e.target.matches("li")) return;
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id, e) => {
    if (!e.target.matches("li button")) return;
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  return (
    <TasksContext.Provider
      value={{ addTask, changeCompleted, deleteTask, tasks }}
    >
      {children}
    </TasksContext.Provider>
  );
}
