import React from "react";
import './login-style.css'



const SignupForm = () => {
  return (
    <form>
      <h1>Sign up</h1>
      <div className="form-floating" style={{ width: "70%" }}>
        <input
          type="text"
          className="form-control top"
          placeholder="User Name"
          required
          autoFocus
        />
        <label style={{ color: "darkgray" }}>User Name</label>
      </div>

      <div className="form-floating" style={{ width: "70%" }}>
        <input
          type="text"
          className="form-control middle"
          placeholder="Password"
          required
        />
        <label style={{ color: "darkgray" }}>Password</label>
      </div>

      <div className="form-floating" style={{ width: "70%" }}>
        <input
          type="email"
          className="form-control bottom"
          id="floatingInput"
          placeholder="name@example.com"
          required
        />
        <label style={{ color: "darkgray" }}>Email</label>
      </div>

      <button className="container-button btn btn-light">Sign up</button>
    </form>
  );
};

export default SignupForm;