import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';
function Login() {
  const navigate = useNavigate();
  const [email, SetEmail] = useState('');
  const [password, Setpassword] = useState('');
  const [nome, Setnome] = useState('');
  const [username, Setusername] = useState('');
  const [Cpassword, Setcpassword] = useState('');

  var resultado;


  function cadastrar(){
    Axios.post("http://localhost:3001/cadastro",{ 
      email: email,
      pass: password,
      username: username,
      nome : nome
     

    
    }).then((response)=>{    
      resultado = response.data.msg  
      if(resultado === 'Login Não Autorizado'){
        console.log(typeof(email))
        toast('email e senha já cadastrado');
        console.log(resultado)
      }else if(resultado == 'campos em branco'){
        // alert('existem campos em branco')
        toast('existem campos em branco');
      }
      else if(resultado == 'user criado'){
       navigate('/home')
      }
      else{
        
      }
    });
    
  }
  function irLogin(){
    navigate('/');
  }

  return (
    <main>
    <div className='container'>
      <h1 className='title'>Cadastro</h1>
      <div className='forms'>
      <input type="text" placeholder='Digite seu Nome' value={nome} onChange={(e)=> Setnome(e.target.value)}/>
      </div>
      <div className='forms'>
      <input type="text" placeholder='Digite seu username' value={username} onChange={(e)=> Setusername(e.target.value)}/>
      </div>
      <div className='forms'>
      <input type="text" placeholder='Digite seu email' value={email} onChange={(e)=> SetEmail(e.target.value)}/>
      </div>
      <div className='forms'>
      <input type="password" placeholder='Digite sua senha' value={password} onChange={(e)=> Setpassword(e.target.value)}/>
      </div>
      <div className='forms'>
      <input type="password" placeholder='Confirme sua senha' value={Cpassword} onChange={(e)=> Setcpassword(e.target.value)}/>
      </div>
      
      <div>
      <button className='btn' onClick={cadastrar}>Cadastre-se</button>
      </div>
      <div>
      <button className='secondBtn' onClick={irLogin}>Login</button>
      </div>
    </div>
    </main>
  );
}

export default Login;
