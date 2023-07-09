import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';
import Axios from 'axios';
function Login() {
  const navigate = useNavigate();
  const [email, SetEmail] = useState('');
  const [password, Setpassword] = useState('');
  var resultado;
  function login(){
    Axios.post("http://localhost:3001/login",{ 
      email: email,
      pass: password
    }).then((response)=>{  
      resultado = response.data.msg
      if(resultado === 'Login Não Autorizado'){
        toast('Login e senha não correspondem');
      }else{
        console.log(response.data.nome)
        toast('Login feito com sucesso');
        navigate('/home')
      }
    });
  }
  function irCadastro(){
    navigate('/cadastro');
  }

  return (
    <main>
    <div className='container'>
      <h1 className='title'>Login</h1>
      <div className='forms'>
      <input type="text" placeholder='Digite seu login' value={email} onChange={(e)=> SetEmail(e.target.value)}/>
      </div>
      <div className='forms'>
      <input type="password" placeholder='Digite sua senha' value={password} onChange={(e)=> Setpassword(e.target.value)}/>
      </div>
      <div>
      <button className='btn' onClick={login}>Entrar</button>
      </div>
      <div>
      <button className='secondBtn' onClick={irCadastro}>Cadastre-se</button>
      </div>
    </div>
    </main>
  );
}

export default Login;
