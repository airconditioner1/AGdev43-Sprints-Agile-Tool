import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Overlay from "./Overlay";
import Google from "./Google";
import './login-style.css'
import './styles.css'


const LoginPage = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };
// login-page

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  return (
    <div className="login-container">
          {/* <div className={`box ${isRightPanelActive ? "right-panel-active" : ""}`}> */}

      <div className="form-container center-container">
        <SignupForm />
      </div>

      <div className="form-container">
        <LoginForm />
        <Google />
      </div>

      {/* <Overlay
        onSignInClick={handleSignInClick}
        onSignUpClick={handleSignUpClick}
        isRightPanelActive={isRightPanelActive}
      /> */}
    </div>
  );
};


export default LoginPage;
