import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Scores from './Pages/Scores'
import ContactUs from './Pages/ContactUs'
import Watch from './Pages/Watch'
import Login from './Pages/Login'

function App() {
  return(
     <>
     <Navbar/>
    <Router>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/Scores' element={<Scores/>}/>
       <Route path='/ContactUs' element={<ContactUs/>}/>
       <Route path='/Watch' element={<Watch/>}/>
       <Route path='/Login' element={<Login/>}/>



      </Routes>
    </Router>
     
     </>


  );
}

export default App
