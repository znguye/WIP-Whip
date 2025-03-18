// import {
//     BrowserRouter as Router,
//     Routes, Route,
//     Link
// } from 'react-router-dom';

import { useState } from 'react'
import HomePage from './pages/HomePage'

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePage />
    </>
  )
}

export default App
