
import { useState } from 'react'
import './App.css'
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Scores from './Pages/Scores'
import ContactUs from './Pages/Contact'
import Watch from './Pages/Watch'
import LoginRegisterModal from './Components/LoginModal'
import Dashboard from './Pages/Dashboard'
import ProtectedRoute from './Components/ProtectedRoute'

function App() {
  const [openLogin, setOpenLogin]= useState(false);

  return(
     <>
    <BrowserRouter>
     <Navbar onOpenLogin={()=>setOpenLogin(true)} />
     <LoginRegisterModal open={openLogin} onClose={()=>setOpenLogin(false)}/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/Scores' element={<Scores/>}/>
       <Route path='/ContactUs' element={<ContactUs/>}/>
       <Route path='/Watch' element={<Watch/>}/>
       <Route path='/dashboard'
        element={
          <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>
        }/>
      

      </Routes>
    </BrowserRouter>
     
     </>


  );
}

export default App
