import React, { useState } from 'react'
import "./login.css"
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/loginLogo.png"



const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
 
    try {
        const res = await axios.post("/api/auth/signin", {email, password});
        console.log(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        toast.success('🦄 Wow so easy!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        setEmail("");
        setPassword("");
        navigate("/dashboard")
       
    } catch (err) {
       console.log(err)
    }
};


  return (
         <div className="login">
            <div className="loginWrapper">
              <div className='loginLeft'>
                <img src={logo} className='authImage' />
                <div className='adminBtn'>
                  <button onClick={()=> navigate("/adminsignin")}>Admin Sign In</button>
                </div>
              </div>
                <div className="loginRight">
                    <div className="loginBox">
                      <div className='loginLogo'>STUDENT SIGN IN</div>
                      <p className='para'>Enjoy Your Journey</p>
                      <label className='label'>Email</label>
                        <input placeholder="Email" type="email" required className="loginInput" onChange={(e)=> setEmail(e.target.value)} />
                        <label>Password</label>
                        <input placeholder="Password" type="password" required className="loginInput" onChange={(e)=> setPassword(e.target.value)} />
                        <button type="submit" className="loginButton" onClick={loginHandler}>Sign In</button>
                    </div>
                </div>
            </div>
        </div>

  )
}

export default Login