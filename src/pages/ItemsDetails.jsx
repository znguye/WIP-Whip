import {useParams} from "react-router-dom"
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function ItemsDetails({content}){
    
    const {taskid} = useParams();

    //Old:
    // const shownTask = content.find((task) =>{
    //     return task.id === taskid
    // })    

    const shownTask = content.find((task) => task.id.toString() === taskid);

    
    const changeLabel = (status)=> {

        return status == "To Do" ? "to-do" 
        :status == "In Progress" ? "wip"
        :status == "Done" ? "done" : ""
    }

    return (
        <>
            <Navbar />
            <Sidebar />
            <div>
                <h2>{shownTask.title}</h2>
                <p>{shownTask.description}</p>
                <p>{shownTask.assignee}</p>
                <p className={changeLabel(shownTask.status)}>Status: {shownTask.status}  </p>
                <p className ={`Priority-${shownTask.priority}`} >Priority: {shownTask.priority}</p>
                <p>Created date: {shownTask.createdDate}</p>
                <p>Due date: {shownTask.dueDate}</p>
            </div>
            <Footer />
        </>
        
    );
}

