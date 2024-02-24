import React, { useContext, useState } from 'react'
import './Login.css'
import {  useSnackbar } from "notistack";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { DataContext } from '../../context/Datacontext';
function Login() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate=useNavigate()
  const { storeTokenInLs } = useContext(DataContext);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const {email,password}=formData
    
        try {
          await axios.post("http://localhost:5000/login", { email, password }).then((response)=>{
            console.log(response.data);
            if (response.data==='login failed') {
                enqueueSnackbar("Invalid email or password", { variant: "error" });
            }else{
                enqueueSnackbar("login successfull", { variant: "success" });
                navigate("/home")
                storeTokenInLs(response.data.Token)
            }

          })
    
        } catch (error) {
          enqueueSnackbar("something wrong", { variant: "error" });
console.log(error);
    
        }
      };
  return (
    <div className="register">
    <div className="form-section">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="">Email</label>
          <div className="input-box">
            <input
              type="email"
              required
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              autoComplete="off"
            />
          </div>
        </div>
        <div className="input">
          <label htmlFor="">Password</label>
          <div className="input-box">
            <input
              type="password"
              required
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              autoComplete="off"
            />
          </div>
        </div>
        <button className="btn-login" type="submit">
          Login
        </button>
        <p>
          Not a member?
          <span>
            {" "}
            <Link to="/register" className="text-decoration-none  ">
              Signup now
            </Link>
          </span>
        </p>
      </form>
    </div>
  </div>
  )
}

export default Login