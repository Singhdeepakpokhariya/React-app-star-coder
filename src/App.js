import React from 'react'
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Component/Home"
import About from "./Component/About"
import Service from "./Component/Service"
import Contact from "./Component/Contact"
import Navbar from "./Component/Navbar"
import Footer from "./Component/Footer"
import { Route} from "react-router-dom"
import { Routes } from "react-router-dom"


const App = () => {
  return (
    <>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/contact" element={<Contact/>} />
        
      </Routes>
      <Footer />
      
      
    </>
  )
}

export default App
