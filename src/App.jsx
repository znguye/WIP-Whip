import {Routes, Route} from 'react-router-dom';
import data from "./data/data.json"

// import { useState } from 'react'
import HomePage from './pages/HomePage'
import About from './pages/About'
import ItemsDetails from './pages/ItemsDetails';
import NotFound from './pages/NotFound';

import './App.css'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path ="/" element = {<HomePage/>} />
      <Route path ="/about" element = {<About/>} />
      <Route path ="/tasks/:taskid" element = {<ItemsDetails content={data}/>} />
      <Route path ="*" element = {<NotFound/>} />
    </Routes>
  )
}

export default App

// Dashboard, Item Details, About, Not found