import React,{useState} from 'react'

import { NavLink} from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import "./Design.css"



const User=()=>{
    
    let history = useHistory();
   
   
    const[email,setEmail]=useState(" ")
    const [emailError,setEmailError]=useState(" ")

    const[password,setPassword]=useState( )
    const[passwordError,setPasswordError]=useState(" ")

    const [message,setMessage]=useState("true")

    const handleemail=(e)=>{
     setEmail(e.target.value );
     setEmailError(" ");
     setMessage('');
    }

    const handlepassword=(e)=>{
     setPassword(e.target.value);
     setPasswordError(" ");
     setMessage('');


    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(email === " "){
       
            setEmailError("not valid")

        

        }
        
        if(password === " "){
            setPasswordError("not valid")
        }

       


        

    }

   return(
        <>
        <div className="text7">
            <h2 className="heading">Enter Email  And Password </h2>
            
            <form onSubmit={handleSubmit}>
            <div className="em">
                <div className="div1">
        <label  htmlFor="email" className="text4">Email:</label>
        
        <input type="email" name="email" id="email" placeholder="enter Email" className="text2"
        value={email} onChange={handleemail}/>
        <div>{emailError}</div><br/><br/></div>
     
         <div className="div2">
        <label className="text3">Password:</label>

        <input type="password" name="password" id="password" placeholder="enter Password" className="text1"
        value={password} onChange={handlepassword}/>
         <div>{passwordError}</div>
        <div>{(password==="hruday123" && email==="hruday@gmail.com")?<NavLink className="dashboard" exact to='/About'> LogIn</NavLink>:null}</div>
    </div>

       
         </div>
        
       
        </form>
    




            </div>
        </>
    )
}
export default  User
