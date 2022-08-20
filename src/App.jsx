import { useState } from "react";
import { Task } from "./components/task/Task";
import "./App.css";
import { TaskInput } from "./components/task_input/TaskInput";

function App() {
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
    <>
      <h1>TO DO</h1>
      <section className="task-form-section">
        <h2>Enter your task</h2>
        <form onSubmit={addTask}>
          <TaskInput
            placeHolder="what do you want to do?"
            name="task-name"
            id="task-name"
          />
        </form>
      </section>
      <section className="tasks-section">
        <ul>
          {tasks.map(({ title, id, completed }) => (
            <Task
              id={id}
              title={title}
              completed={completed}
              handleChangeCompleted={e => changeCompleted(id, e)}
              handleDeleteTask={e => deleteTask(id, e)}
            />
          ))}
        </ul>
      </section>
    </>
  );
}
export default App;
