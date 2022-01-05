import React from 'react'
import axios from 'axios';
import "./login.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const url = process.env.URL;
  const api_url = `$(url)`;
  let navigate = useNavigate();
   let trip=localStorage.getItem('trip');
   trip==='true'?trip=true:trip=false;
    const handleSubmit= (e)=> {
        e.preventDefault();
        axios.post("http://localhost:5001/login", {
                user_email: document.getElementById("user_email").value,
                password: document.getElementById("password").value
            })
            .then(resp => {
                alert(resp.data.message);
                if (resp.data.message === "Logged-In Successfully") {
                    localStorage.setItem("userdetail", JSON.stringify(resp.data));
                    localStorage.setItem("logged", true)
                    document.getElementById("user_email").value = "";
                    document.getElementById("password").value = "";
                    if(trip ===true){
                    navigate('/summary');
                    }else{
                      navigate('/');
                    }
                }

            })

            .catch(function(err) {
                console.log(err)
            })
    }

    return ( 
      
      <div className = "main">
        <div className = "sub-main">
          <form onSubmit = {handleSubmit}>
          <div> 
            <b> Login </b>  
            </div >
            <input type={"email"} id='user_email' placeholder='User email' required></input>
            <input type={"password"} id='password' placeholder='Password ' required></input>

          {/* <input type = {"email"}id = "user_email" placeholder = "User Email" required> </input> 
           <input type = {"password"} id = "password" placeholder = "Password" required> </input>   */}
            <button type = "submit" className = "login-button"> Login </button>
              <div> If ur new user 
                 <Link to = "/signup" type = "submit" >  signup </Link > 
              </div> 
            </form> 
          
        </div> 
      </div> 
      
      
    )
}