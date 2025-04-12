import Footer from "../components/Footer";
import Form from "../components/Form";
import Kanban from "../components/Kanban";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TaskItem from "../components/status/TaskItem";
import EditTask from "../components/EditTask";
// import data from "../data/data.json";
import { useState } from "react";

export default function HomePage({ task, setTask }) {

  // const [task, setTask] = useState(data);
  const [editedTask, setEditedTask] = useState({})

  const editTask = (id) =>{
    console.log("editing task id:", id);

    const taskCopy = [...task];
  
    const taskToEdit = taskCopy.find((task) => task.id == id);
    
    console.log("task to edit:", taskToEdit);

    setEditedTask(taskToEdit);
  };

  const updateTask = (updatedTask) => {
    if (!updatedTask){
      setEditedTask({}) 
      return;
    }

    const updatedTasks = task.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );

    setTask(updatedTasks);
    setEditedTask({})
  }

  const max_active_tasks = 7;;

  const getActiveTaskCount = (tasks) => {
    return tasks.filter(task =>
      task.status === "To Do" || task.status === "In Progress"
  ).length;
  }

  const activeTaskCount = getActiveTaskCount(task);

  const addTask = (newTask) => {
    
    setTask(prevTasks => [...prevTasks, newTask])
  };

  const deleteTask = (id) => {
    console.log("deleting task id:", id);
    const taskCopy = [...task]
    const filteredTasks = taskCopy.filter((task) => {
      return task.id !== id;
    });

    setTask(filteredTasks)
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      {/* Show/ hide form when editedTask.id is available */}
      {editedTask.id
      ? <EditTask editedTask={editedTask} onSave={updateTask}/>
      : <Form addTask={addTask} activeTaskCount={activeTaskCount} max_active_tasks={max_active_tasks}/>
      }

      {activeTaskCount >= max_active_tasks && (
        <div className="task-limit-warning">
          🚨 You’ve reached the limit of {max_active_tasks} active tasks.
          Please complete or delete some tasks before adding more.
        </div>
)}

      <Kanban task={task} deleteTask={deleteTask} editTask={editTask}/>
      <br/>
      <Footer />
    </>
  );
}
