import { Link } from "react-router-dom";

export default function TaskItem({ list, deleteTask, editTask }) {


 /* const deleteItem = (taskId) => {
    const filteredTasks = newList.filter((task) => {
      return task.id !== taskId;
    });

    setNewList(filteredTasks);
    console.log("newlist", newList);
  };*/

  return (
    <>
      {list.map((task) => {
        return (
          <div key={task.id} className="task-card">
            <ul className="task-lists" key={task.id}>
              {/* <li>{task.title}</li> */}
              <li>
                <Link to={`/tasks/${task.id}`}>{task.title}</Link>
              </li>

              <li>
                <span className={`label Priority-${task.priority}`}>Priority: {task. priority}</span>
              </li>

              <li>{task.assignee}</li>
            </ul>
            <div className="buttons">
                <button onClick={() => deleteTask(task.id)} className="btn">Delete</button>
                <button onClick={() => editTask(task.id)} className="btn">Edit</button>
                
            </div>
                
          </div>
        );
      })}
    </>
  );
}
