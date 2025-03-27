import { useState } from "react";
import { Link } from "react-router-dom";

export default function TaskItem({ list, deleteTask }) {
  const [newList, setNewList] = useState(list);

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
              <li>{task.assignee}</li>
            </ul>
            <button onClick={() => deleteTask(task.id)} className="delete-btn">
              Delete
            </button>
            <Link to={`edit-task/${task.id}`}>
              <button>Edit</button>
            </Link>
          </div>
        );
      })}
    </>
  );
}
