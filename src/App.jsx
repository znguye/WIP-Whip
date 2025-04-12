import {Routes, Route} from 'react-router-dom';
import data from "./data/data.json"

import { useState } from 'react'
import HomePage from './pages/HomePage'
import About from './pages/About'
import ItemsDetails from './pages/ItemsDetails';
import NotFound from './pages/NotFound';

import './App.css'
import EditTask from './components/EditTask';


function App() {
  // const [count, setCount] = useState(0)

  //New
  const [task, setTask] = useState(data);

  return (
    <Routes>
      <Route path ="/" element = {<HomePage task={task} setTask={setTask} />} />
      <Route path ="/about" element = {<About/>} />
      <Route path ="/tasks/:taskid" element = {<ItemsDetails content={task}/>} />
      <Route path ="*" element = {<NotFound/>} />
      <Route path="/edit-task/:taskid" element ={<EditTask/>}/>
      {/* New */}
    </Routes>
  )
}

export default App

// Dashboard, Item Details, About, Not found