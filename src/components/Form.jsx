// import { create } from "mocha/lib/suite";
import { useState } from "react";

export default function Form({ addTask, activeTaskCount, max_active_tasks }) {
  // const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [status, setStatus] = useState("To Do");
  const [priority, setPriority] = useState("Medium");
  // const [createdDate, setCreatedDate] = useState("");
  const [dueDate, setDueDate] = useState("");

  const resetForm = () => {
    // id: "", 
    setTitle(""),
    setDescription(""),
    setAssignee(""),
    setStatus("To Do"),
    setPriority("Medium"),
    // createdDate: "",
    setDueDate("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //prevent more than max tasks
    if (activeTaskCount >= max_active_tasks) {
      alert("Too many active tasks! Finish some before adding more.");
      return;
    }

    const generatedId = crypto.randomUUID();

    const today = new Date().toISOString().split("T")[0];
    
    const newTask = {
        id: generatedId,
        title: title,
        description: description,
        assignee: assignee, 
        status: status,
        priority: priority,
        createdDate: today, 
        dueDate: dueDate,
    }
    addTask(newTask);
    console.log("New ID: ", newTask.id);
    console.log("New Date: ", newTask.createdDate);

    resetForm();

  };

  return (
    <>
      <div className="form-container">
        <form className="add-task-form" onSubmit={handleSubmit}>
            {/* <div className="form-group">
              <label>ID</label>
              <input
                  type="text"
                  name="id"
                  value={id}
                  placeholder="14"
                  onChange={(e) => setId(e.target.value)}
              />
            </div>
           */}
            <div className="form-group">
              <label>Task name</label>
              <input
                type="text"
                name="title"
                value={title}
                placeholder="Finalise the design"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
         
            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                name="description"
                value={description}
                placeholder="Double check alignment"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          
            <div className="form-group">
              <label>Whip holder</label>
              <input
                type="text"
                name="assignee"
                value={assignee}
                placeholder="Max Muster"
                onChange={(e) => setAssignee(e.target.value)}
              />
            </div>
          
            <div className="form-group">
              <label>Status</label>
              <select
                name="status"
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progess</option>
                <option value="Done">Done</option>
              </select>
          </div>

          <div className="form-group">
              <label>Priority</label>
              <select
                name="priority"
                id="priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
          </div>
          

          {/* <div className="form-group">
              <label>Created</label>
              <input
                type="text"
                name="createdDate"
                placeholder="2025-05-05"
                value={createdDate}
                onChange={(e) => setCreatedDate(e.target.value)}
              />
          </div> */}
         
          <div className="form-group">
              <label>Doom date</label>
              <input
                type="text"
                name="dueDate"
                placeholder="2025-05-05"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
          </div>
          <div className="form-buttons">
          <button type="submit">Save</button>
          </div>
          

        </form>        
      </div>
    </>
  );
}
