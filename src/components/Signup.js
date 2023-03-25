import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Footer from "./Footer";

export default function Signup() {
  let navigate = useNavigate();
   const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      alert("Registration Successfull");
      navigate("/login")
 
         }
    else{
      alert("Enter valid Credentials");

    }
  };
  const onChange = async (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="container" id="signup">
        <h3 className="fs-2 display-3 text-center">Signup</h3>
      <div className="shadow rounded p-5  border border-dark ">
        <form onSubmit={handleSubmit}>
          <div className="mb-3 ">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={credentials.name}
              onChange={onChange} required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={credentials.email}
              onChange={onChange} required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={credentials.password}
              onChange={onChange} required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              name="geolocation"
              value={credentials.geolocation}
              onChange={onChange}  required />
          </div>
          <button className="m-3 btn btn-primary">Submit</button>
          <Link to="/login" className="m-3 btn btn-danger">
            Signin
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
