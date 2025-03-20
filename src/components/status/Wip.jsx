import data from "../../data/data.json";
import { useState } from "react";

export default function Wip() {
    const wip = data.filter((task) => task.status === "In Progress");

    const [newList, setNewList] = useState(wip);

    const deleteItem = (taskId) => {
      const filteredTasks = newList.filter((task) => {
        return task.id !== taskId;
      });

      setNewList(filteredTasks);
      console.log("newlist", newList);
    };

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
                  onClick={() => {
                    deleteItem(task.id);
                  }}
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