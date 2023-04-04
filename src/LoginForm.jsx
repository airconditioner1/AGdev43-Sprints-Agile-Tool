import React from "react";

const LoginForm = () => {
  return (
    <form>
      <h1>Sign in</h1>
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
          type="password"
          className="form-control middle"
          placeholder="Password"
          required
        />
        <label style={{ color: "darkgray" }}>Password</label>
      </div>
      <button className="container-button btn btn-light">Sign in</button>

      <a
        className="btn btn-light login-button"
        href="/login-page"
        role="button"
        style={{ textTransform: "none" }}
      >
        <img
          width="20px"
          style={{ marginBottom: "3px", marginRight: "5px" }}
          alt="Google sign-in"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
        />
        Login with Google
      </a>
    </form>
  );
};

export default LoginForm;
