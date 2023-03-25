import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import '../login.css';
import Footer from "../components/Footer";

export default function Login() {
  const [credentials, setcredentials] = useState({ email: "", password: "" });
  let navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter Valid Credentials");
    }
    if (json.success) {
      localStorage.setItem("userEmail",credentials.email)
      localStorage.setItem("authToken",json.authToken)
      console.log(localStorage.getItem("authToken"))
      alert("Login Successfully");
      navigate("/")
    }
  };
  const onChange = async (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <>

      <div  className="container" id="login">
        
        <div className="shadow rounded p-5  border border-dark ">
        <h3 className="fs-2 display-3 text-center mb-3">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label"> Email Address</label>
            <input type="text" className="form-control" name="email" value={credentials.email} onChange={onChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label"> Password</label>
         <input type="password" className="form-control" name="password" value={credentials.password} onChange={onChange}  required/>
          </div>
          <button className="m-3 btn btn-primary">Login</button>
          <Link to="/signup" className="m-3 btn btn-danger">
            Signup
          </Link>
        </form>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
}
