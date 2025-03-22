import data from "../../data/data.json";
// import { useState } from "react";
import TaskItem from "./TaskItem";

export default function AllStatus() {
    const toDo = data.filter((task) => task.status === "To Do");
    const wip = data.filter((task) => task.status === "In Progress");
    const done = data.filter((task) => task.status === "Done");
  
    // const [newToDoList, setNewToDoList] = useState(toDo);
    // const [newWipList, setNewWipList] = useState(wip);
    // const [newDoneList, setNewDoneList] = useState(done);
  
    
  
    // newList.map part below should be a seperate component "list-item"
    return (
        <div className ="kanban">
           <div className="category" id="to-do">
                <h1>To Do</h1>
                <TaskItem list = {toDo}/>
           </div>
           <div className="category" id="wip">
                <h1>WIP</h1>
                <TaskItem list = {wip}/>
           </div>
           <div className="category" id="done">
                <h1>Done</h1>
                <TaskItem list = {done}/>
           </div>
        </div>
    );
  }
