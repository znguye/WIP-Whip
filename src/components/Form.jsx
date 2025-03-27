import { useState } from "react";

export default function Form({ addTask }) {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [status, setStatus] = useState("To Do");
  const [priority, setPriority] = useState("Medium");
  const [createdDate, setCreatedDate] = useState("");
  const [dueDate, setDueDate] = useState("");

  console.log("id ", id);
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newTask = {
        id: id,
        title: title,
        description: description,
        assignee: assignee, 
        status: status,
        priority: priority,
        createdDate: createdDate, 
        dueDate: dueDate,
    }
    addTask(newTask);
    console.log("task to be added: ", newTask);
  };

  return (
    <>
      <div className="form-container">
        <form className="add-task-form" onSubmit={handleSubmit}>
          ID:
          <input
            type="text"
            name="id"
            value={id}
            placeholder="E.g. 14"
            onChange={(e) => setId(e.target.value)}
          />
          Name:
          <input
            type="text"
            name="title"
            value={title}
            placeholder="E.g. Go karaoke"
            onChange={(e) => setTitle(e.target.value)}
          />
          Description
          <input
            type="text"
            name="description"
            value={description}
            placeholder="Describe your task"
            onChange={(e) => setDescription(e.target.value)}
          />
          Assigned To:
          <input
            type="text"
            name="assignee"
            value={assignee}
            placeholder="Max Muster"
            onChange={(e) => setAssignee(e.target.value)}
          />
          Status:
          <select
            name="status"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="To Do">To Do</option>
            <option value="In Progress">
              In Progess
            </option>
            <option value="Done">Done</option>
          </select>
          Priority:
          <input
            type="text"
            name="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          />
          Created:
          <input
            type="text"
            name="createdDate"
            value={createdDate}
            onChange={(e) => setCreatedDate(e.target.value)}
          />
          Due:
          <input
            type="text"
            name="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      </div>
    </>
  );
}
