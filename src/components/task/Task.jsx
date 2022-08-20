import "./Task.css";
export function Task({
    title,
    completed,
    handleChangeCompleted,
    handleDeleteTask,
}) {
    let classes = completed ? "task-completed" : "";
    classes += " task";

    return (
        <li onClick={handleChangeCompleted} className={classes}>
            {title}
            <button onClick={handleDeleteTask} className="delete-task-button">
                delete
            </button>
        </li>
    );
}
