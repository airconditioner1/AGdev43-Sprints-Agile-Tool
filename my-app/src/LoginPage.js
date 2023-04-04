

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

// function LoginPage() {
//     return (

//         <div className="container p-5">
//           <h1>Welcome to the LoginPage</h1>
//         </div>
  
//     );
//   }
  
//   export default LoginPage;


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Overlay from "./Overlay";
import Google from "./Google"
//import './styles.css'

  const LoginPage = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  return (
    <div className={`box ${isRightPanelActive ? "right-panel-active" : ""}`}>
      <div className="form-container sign-up-container">
        <SignupForm />
      </div>

      <div className="form-container sign-in-container">
        <LoginForm />
        <Google />
      </div>


      <Overlay
        onSignInClick={handleSignInClick}
        onSignUpClick={handleSignUpClick}
        isRightPanelActive={isRightPanelActive}
      />
    </div>
  );
};

  
  export default LoginPage;
  