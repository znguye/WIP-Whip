// import { create } from "mocha/lib/suite";
import { useState } from "react";
import { useEffect } from "react";

export default function EditForm({ editedTask, onSave }) {

  const [formState, setFormState] = useState({
    ...editedTask
  })
  console.log("formState : ", formState)
  console.log("editedTask : ", editedTask)

  function handleChange (event) {
        const value = event.target.type === "checkbox" 
        ? event.target.checked 
        : event.target.value;

        setFormState({
            ...formState, 
            [event.target.name]: value
            
        } 
      )
     }

  const handleSave = (e) => {
    e.preventDefault();
    onSave(formState);
  };

  useEffect(() => {
    setFormState({...editedTask});
  }, [editedTask]);

  return (
    <>
      <div className="form-container">
        <form className="add-task-form" id="edit-task-form" onSubmit={handleSave}>
          
            <div className="form-group">
              <label>Task name</label>
              <input
                type="text"
                name="title"
                value= {formState.title}
                onChange={handleChange}
              />
            </div>
         
            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                name="description" 
                value= {formState.description}
                onChange={handleChange}
              />
            </div>
          
            <div className="form-group">
              <label>Whip holder</label>
              <input
                type="text"
                name="assignee"
                value= {formState.assignee}
                onChange={handleChange}
              />
            </div>
          
            <div className="form-group">
              <label>Status</label>
              <select
                name="status"
                id="status"
                value= {formState.status}
                onChange={handleChange}
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
                value= {formState.priority}
                onChange={handleChange}
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
          </div>
         
          <div className="form-group">
              <label>Doom date</label>
              <input
                type="text"
                name="dueDate"
                value= {formState.dueDate}
                onChange={handleChange}
              />
          </div>
          <div className="form-buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={() => onSave(null)}>Cancel</button>
          </div>
        </form>        
      </div>
    </>
  );
}
