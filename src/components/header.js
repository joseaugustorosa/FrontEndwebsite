import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import '../styles/header.css'
import 'bootstrap/dist/css/bootstrap.css';
import {    User } from 'react-feather';
function Header() {
  const navigate = useNavigate();
 

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" className="o" href="#">Organizer</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">Tarefas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Investimentos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">demais opções</a>
        </li>
        </ul>
        </div>
        <form class="form-inline">
        <a class="nav-link mr-sm-2">José Augusto </a>
        </form>
        <form class="form-inline">
        <User className="icon"/>
        </form>
      
    
  </nav>

   
  );
}

export default Header;
