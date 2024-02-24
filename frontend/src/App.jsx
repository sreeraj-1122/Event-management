import React from 'react'
import { Route, Routes } from 'react-router'
import Login from './pages/login/Login'
import Register from './pages/login/Register'
import Events from './pages/home/Events'
import DataProvider from './context/Datacontext'
import AddEvent from './pages/add events/AddEvent'

function App() {
  return (
    <div>
      <DataProvider>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Events/>}/> 
        <Route path='/addevent' element={<AddEvent/>}/> 
      </Routes>
      </DataProvider>
     
    </div>
  )
}

export default App