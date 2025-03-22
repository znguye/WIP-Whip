import {useParams} from "react-router-dom"
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function ItemsDetails({content}){
    
    const {taskid} = useParams();

    const shownTask = content.find((task) =>{
        return task.id === taskid
    })    
    
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
                <span className={changeLabel(shownTask.status)}>{shownTask.status}</span>
                <span className ={`Priority-${shownTask.priority}`} >{shownTask.priority}</span>
                <p>{shownTask.createdDate}</p>
                <p>{shownTask.duedDate}</p>
            </div>
            <Footer />
        </>
        
    );
}

