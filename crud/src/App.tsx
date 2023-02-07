import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {  Routes, Route } from "react-router-dom";
import Effect from './components/Effect'
import Contact from './components/Contact';

function App() {


  return (

    <div >
            <Routes>
<Route path ='/' element={<Contact />}/> 
<Route path ='/show' element={<Effect/>}/> 

      </Routes>
  
    </div>
  )
}

export default App
