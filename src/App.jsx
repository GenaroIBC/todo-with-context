import { Task } from "./components/task/Task";
import "./App.css";
import { TaskInput } from "./components/task_input/TaskInput";
import { useContext } from "react";
import { TasksContext } from "./context/TasksContextProvider";

function App() {
  const { addTask, tasks } = useContext(TasksContext);

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
            <Task id={id} title={title} completed={completed} />
          ))}
        </ul>
      </section>
    </>
  );
}
export default App;
