import data from "../../data/data.json";
import { useState } from "react";

//pass task.status from Kanban to make data work dinamically.

export default function ToDo() {
  const toDo = data.filter((task) => task.status === "To Do");

  const [newList, setNewList] = useState(toDo);

  const deleteItem = (taskId) => {
    const filteredTasks = newList.filter((task) => {
      return task.id !== taskId;
    });

    setNewList(filteredTasks);
    console.log("newlist", newList);
  };

  // newList.map part below should be a seperate component "list-item"
  return (
    <>
      <div>
        {newList.map((task) => {
          return (
            <>
              <ul>
                <li key={task.title}>{task.title}</li>
                <li key={task.assignee}>{task.assignee}</li>
              </ul>
              <button
                onClick={() => deleteItem(task.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </>
          );
        })}
      </div>
    </>
  );
}
