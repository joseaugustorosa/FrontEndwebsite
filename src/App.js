import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/login'
import Registro from './components/register'
import Home from './components/home'
function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/cadastro" element={<Registro/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
      <ToastContainer />
    </Router>
    
  );
}

export default App;
