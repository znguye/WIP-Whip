// import ToDo from "./status/ToDo"
// import Wip from "./status/Wip";
// import Done from "./status/Done";
import AllStatus from "./status/AllStatus";

export default function Kanban({ task, deleteTask }) {

  return (
    <main>
      <AllStatus task={task} deleteTask={deleteTask}/>
    </main>
  )


}
