import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';

import Header from './header';
function Home() {
  const navigate = useNavigate();
  
  return (
    <Header/>

  );
}

export default Home;
