 
import { useEffect, useState } from 'react';
import './App.css';

function App() {
   const [name, setName]=useState('');
   const [email,setEmail]=useState('');
   const [pwd,setPwd]=useState('');
   const [errorMsg,setError]=useState('');
   const [errName,setErrName]=useState('');
   const [errEmail,setErrEmail]=useState('');
   const [errPwd,setErrPwd]=useState('');
  const nameHandler=(event)=>{
      
      setName(event.target.value);
      
  }

  const emailHandler=(e)=>{
      setEmail(e.target.value);
  }

  const pwdHandler=(e)=>{
    setPwd(e.target.value);
  }
  
   useEffect(()=>{
    if(pwd.length<6){
      setErrPwd("password should be atleast 6 characters");
     }
    else{
    setErrPwd("");
    }
   },[pwd]);

    
  const formsubmit=(e)=>{
    e.preventDefault(e.target.value);

    if(!name||!email||!pwd){
       setError("fill all fields");
    }
    if(!name){
      setErrName("Name is required");
    }

    if(!email){
      setErrEmail("email is required");
    }
    else if(!/\S+@\S\.\S+/.test(email)){
      setErrEmail("email is not valid");
    }
    else{
      setErrEmail("");
    }

    if(!pwd){
      setErrPwd("password is required");

    }
    
    setName('');
    setPwd('');
    setEmail('');
    
}

  return (
    <div className="App w-full flex flex-row justify-center ">
      <div className='bg-slate-600 w-1/2  shadow-lg rounded-lg '>
        <h1 className='text-4xl text-white font-bold'>Form Validation</h1>
        <form className='text-3xl font-md mb-4 text-left mx-2'>
          <label htmlFor='name'>Enter your Name</label><br></br>
          <input type='text' value={name} onChange={nameHandler} placeholder='Enter your Name'/><br></br>
          <div>{errName}</div><br></br>
          <label htmlFor='Email' >Enter your Email</label><br></br>
          <input type='email' autoComplete='off' value={email} onChange={emailHandler} placeholder='Enter your Email'/><br></br>
          <div>{errEmail}</div><br></br>
          <label htmlFor='Password'>Enter your Password</label><br></br>
          <input className='mb-5'value={pwd} onChange={pwdHandler} type='password' placeholder='Enter your password'/><br></br>
           <div>{errPwd}</div>
          <div>{errorMsg}</div>
          <button className='bg-green-300 bottom-2 border-zinc-300 mb-4 rounded-md'  onClick={formsubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
