import React, { useState } from 'react'
import './Login.css'
import {  useSnackbar } from "notistack";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
      });
  const { enqueueSnackbar } = useSnackbar();
    const navigate=useNavigate()
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          await axios.post("http://localhost:5000/register",formData).then((response)=>{
            console.log(response.data);
            if (response.data==='password must between 6 and 12') {
                enqueueSnackbar("password must between 6 and 12", { variant: "error" });
            }else if(response.data==='User already exist'){
                enqueueSnackbar("User already exist", { variant: "error" });
            }else{
                enqueueSnackbar("User registerd successfull", { variant: "success" });
          navigate("/login")

            }

          })
        //   setIsLoggedIn(true)
    
        } catch (error) {
            enqueueSnackbar("Name or Email already exists", { variant: "error" });
    
    
        }
      };
  return (
    <div className="register">
    <div className="form-section">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="">Name</label>
          <div className="input-box">
            <input
              type="text"
              required
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              autoComplete="off"
            />
          </div>
        </div>
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
          register
        </button>
        <p>
         Already have an account?
          <span>
            {" "}
            <Link to="/" className="text-decoration-none  ">
              login here
            </Link>
          </span>
        </p>
      </form>
    </div>
  </div>
  )
}

export default Register