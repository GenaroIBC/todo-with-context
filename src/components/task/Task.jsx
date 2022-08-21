import { useContext } from "react";
import { TasksContext } from "../../context/TasksContextProvider";
import "./Task.css";

export function Task({ title, completed, id }) {
  let classes = completed ? "task-completed" : "";
  classes += " task";

  const { changeCompleted, deleteTask } = useContext(TasksContext);
  return (
    <li onClick={e => changeCompleted(id, e)} className={classes}>
      {title}
      <button onClick={e => deleteTask(id, e)} className="delete-task-button">
        delete
      </button>
    </li>
  );
}
