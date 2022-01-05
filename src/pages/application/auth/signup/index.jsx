import React from 'react'
import axios from 'axios'
import "./signup.css";
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  

    let navigate=useNavigate();
    let trip=localStorage.getItem('trip');
    trip==='true'?trip=true:trip=false;
    function handlechange(e){
        e.preventDefault()
        const password = document.getElementById("password");
        const conformpassword = document.getElementById("confirmPassword");
        //const email =document.getElementById("email");
       // Validation(email);
        if(password.value===conformpassword.value)
        {
        axios.post("http://localhost:5001/addvalue",{
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
        phoneNo:document.getElementById("phoneNo").value
    
    })
    .then(resp=>{
        console.log(resp.data);
        document.getElementsByName("name").value="";
        document.getElementsByName("email").value="";
        document.getElementsByName("password").value="";
        document.getElementsByName("phoneNo").value="";
        if(trip ===true){
            navigate('/summary');
            }else{
              navigate('/');
            }
        })
// .then(resp => {
//     alert(resp.data.message);
//     if (resp.data.message === "signed-up Successfully") {
//         localStorage.setItem("userdetail", JSON.stringify(resp.data));
//         localStorage.setItem("logged", true)
//         console.log("working")
//         document.getElementsById("name").value="";
//         document.getElementsById("email").value="";
//         document.getElementsById("password").value="";
//         document.getElementsById("phoneNo").value="";
//         document.getElementById("user_email").value = "";
//         document.getElementById("password").value = "";
//         navigate('/summary');

//     }
//     })

.catch(function(err){
    console.log("error");
})
    }

 if(password.value!==conformpassword.value){
    alert("Password Mismatched");
}       console.log("Password Matched");
    }
   
    
    return (
        <div className="main">
        <div className='signupContainer'>
            <form onSubmit={handlechange}>
            <h2>Sign Up</h2>

                <div className = 'field'>
                <label>Username</label>
                <div>
                    <input type= 'text' id="name" name= 'name' placeholder= 'Enter User_name'
                     required 
                     pattern= '^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$'
                     />
                </div>
                <div>
                    <label>Email</label>
                    <input type= 'email' id="email" name= 'email' placeholder= 'Enter Email-Id' required
                     pattern='^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' 
                    />
                </div>
                <div>
                    <label>Phone Number</label>
                    <input type="tel" id="phoneNo" name= 'phoneNo' placeholder= 'Mobile Number - xxxxx xxxxx' required pattern="[5-9]{1}[0-9]{9}"  />
                </div>
                <div>
                    <label>Password</label>
                    <input type= 'password' id="password" name= 'password' placeholder= 'Enter Password' 
                    required message="one caps letter followed by 6 small letters and 2 numbers"
                    pattern="[A-Z]{1}[a-z]{6}[0-9]{2}"
                     />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type= 'password' id="confirmPassword" name= 'confirmPassword' placeholder= 'Enter Confirm Password' 
                    required
                     />
                </div>
                </div>

                <button type="submit">Sign Up</button>
            </form>
        </div>
        </div>
    )
}
