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
            <div className="form-group">
              <label>ID</label>
              <input
                  type="text"
                  name="id"
                  value={id}
                  placeholder="14"
                  onChange={(e) => setId(e.target.value)}
              />
            </div>
          
            <div className="form-group">
              <label>Name</label>
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
              <label>Assigned To</label>
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
          

          <div className="form-group">
              <label>Created</label>
              <input
                type="text"
                name="createdDate"
                placeholder="2025-05-05"
                value={createdDate}
                onChange={(e) => setCreatedDate(e.target.value)}
              />
          </div>
         
          <div className="form-group">
              <label>Due</label>
              <input
                type="text"
                name="dueDate"
                placeholder="2025-05-05"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
          </div>
          <button type="submit">Save</button>

        </form>        
      </div>
    </>
  );
}
