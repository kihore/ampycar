import React from 'react'
import axios from 'axios';
import "./signin.css"

export default function Signin() {
    function handleSubmit(){  
        console.log("Logged successfully");
        axios.post("http://localhost:5000/users",
        {usermail:document.getElementById("usermail").value,
        userpwd:document.getElementById("userpwd").value
        })
        .then(resp=>{console.log(resp.data)
        })
        .catch(function (err){
          console.log(err)
        })
      }
   
          return(
              <div>
              <div className="header" ><b>Ampy Cars</b> </div>
              <div className="main">
              <div className="sub-main">
                  <div>
                      <div> <b>Login</b> </div>
                      <input 
                      type="text" 
                      id="usermail" 
                      name="email" 
                      placeholder="User Email" 
                      className="useremail" required 
                      />
                      <input 
                      type="password" 
                      id="userpwd" 
                      name="pwd" 
                      placeholder="Password" 
                      className="password" required 
                      />
                      <button 
                      onClick={handleSubmit} 
                      type="submit" 
                      className="login-button" 
                      > Login </button>
                  </div>
              </div>
              </div>
              </div>
          )
      }
