
// import { useState } from "react";
import TaskItem from "./TaskItem";

export default function AllStatus({ task, deleteTask, editTask }) {

     console.log("task in TaskItem:", task)
  
     const toDo = task.filter((task) => task.status === "To Do");
     const wip = task.filter((task) => task.status === "In Progress");
     const done = task.filter((task) => task.status === "Done");
    // const [newToDoList, setNewToDoList] = useState(toDo);
    // const [newWipList, setNewWipList] = useState(wip);
    // const [newDoneList, setNewDoneList] = useState(done);
  
    console.log(toDo);
  
    // newList.map part below should be a seperate component "list-item"
    return (
      <div className="kanban">
        <div className="category" id="to-do">
          <h1>To Do</h1>
          <TaskItem list={toDo} deleteTask={deleteTask} editTask={editTask} />
        </div>
        <div className="category" id="wip">
          <h1>WIP</h1>
          <TaskItem list={wip} deleteTask={deleteTask} editTask={editTask}/>
        </div>
        <div className="category" id="done">
          <h1>Done</h1>
          <TaskItem list={done} deleteTask={deleteTask} editTask={editTask}/>
        </div>
      </div>
    );
  }
