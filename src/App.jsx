import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Greeting from './components/Greeting'
import Main from './components/Main'
import Home from './components/Home'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  

  return (
    <>
 
    <Router>
      <Routes>

        <Route path='/'  element={<Home />}/>
        <Route path='/education'  element={<Education />}/>
        <Route path='/experience'  element={<Experience />}/>
        <Route path='/projects'  element={<Projects />}/>
        <Route path='/contact'  element={<Contact />}/>
        
      </Routes>
      <Footer />
    </Router>
      
    </>
    
  )
}

export default App
