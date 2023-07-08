import React, {useState} from "react";
import './App.css';

function App() {
  const [email, SetEmail] = useState('');
  const [password, Setpassword] = useState('');
  
  function teste(){
   
    var json = {
      "email": email,
      "password": password
    }
    console.log(json);
  }

  return (
    <div className='container'>
      <h1 className='title'>Login</h1>
      <div className='forms'>
      <input type="text" placeholder='Digite seu login' value={email} onChange={(e)=> SetEmail(e.target.value)}/>
      </div>
      <div className='forms'>
      <input type="password" placeholder='Digite sua senha' value={password} onChange={(e)=> Setpassword(e.target.value)}/>
      </div>
      <button className='btn' onClick={teste}>Entrar</button>
    </div>
 
  );
}

export default App;
