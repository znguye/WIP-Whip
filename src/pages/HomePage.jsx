import Footer from "../components/Footer";
import Form from "../components/Form";
import Kanban from "../components/Kanban";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TaskItem from "../components/status/TaskItem";
import data from "../data/data.json";
import { useState } from "react";

export default function HomePage() {
  const [task, setTask] = useState(data);

  const addTask = (newTask) => {
    //console.log("adding task");
    // get a copy of task
    const taskCopy = [...task];
    taskCopy.push(newTask);
    console.log("taskCopy", taskCopy);
    setTask(taskCopy);
  };

  const deleteTask = (id) => {
    console.log("deleting task id:", id);
    const taskCopy = [...task]
    const filteredTasks = taskCopy.filter((task) => {
      return task.id !== id;
    });

    setTask(filteredTasks)
  };

  /* const deleteItem = (taskId) => {
    const filteredTasks = newList.filter((task) => {
      return task.id !== taskId;
    });

    setNewList(filteredTasks);
    console.log("newlist", newList);
  };*/

  return (
    <>
      <Navbar />
      <Sidebar />
      <Form addTask={addTask} />
      <Kanban task={task} deleteTask={deleteTask} />
      <Footer />
    </>
  );
}
