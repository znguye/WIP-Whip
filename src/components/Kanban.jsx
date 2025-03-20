import ToDo from "./status/ToDo"
import Wip from "./status/Wip";
import Done from "./status/Done";

export default function Kanban() {
    
  return (
    <main className="kanban">
      <div className="category" id="to-do">
        <h1>To Do</h1>
        <ToDo />
      </div>
      <div className="category" id="wip">
        <h1>WIP</h1>
        <Wip />
      </div>
      <div className="category" id="done">
        <h1>Done</h1>
        <Done />
      </div>
    </main>
  );
}
