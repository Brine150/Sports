
import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Scores from './Pages/Scores'
import ContactUs from './Pages/Contact'
import Watch from './Pages/Watch'
import LoginRegisterModal from './Components/LoginModal'


function App() {
  const [openLogin, setOpenLogin]= useState(false);

  return(
     <>
    <Router>
     <Navbar onOpenLogin={()=>setOpenLogin(true)} />
     <LoginRegisterModal open={openLogin} onClose={()=>setOpenLogin(false)}/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/Scores' element={<Scores/>}/>
       <Route path='/ContactUs' element={<ContactUs/>}/>
       <Route path='/Watch' element={<Watch/>}/>
      

      </Routes>
    </Router>
     
     </>


  );
}

export default App
