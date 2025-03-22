import { useState } from "react";
import {Link} from "react-router-dom";

export default function TaskItem({list}){
    
    const [newList, setNewList] = useState(list)
    
    const deleteItem = (taskId) => {
        const filteredTasks = newList.filter((task) => {
          return task.id !== taskId;
        });
    
        setNewList(filteredTasks);
        console.log("newlist", newList);
      };
    
    
    return (
        <>
          {newList.map((task) => {
            return (
              <div className="task-card">
                <ul className="task-lists" key={task.id}>
                  {/* <li>{task.title}</li> */}
                  <li><Link to={`/tasks/${task.id}`} >{task.title}</Link></li>
                  <li>{task.assignee}</li>
                </ul>
                <button onClick={() => deleteItem(task.id)} className="delete-btn">Delete</button>
              </div>
            );
          })}
        </>
    )
}