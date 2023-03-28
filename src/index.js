import React, { useState } from "react";
import ReactDOM from "react-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Overlay from "./Overlay";
import "./styles.css"

const App = () => {
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
      </div>

      <Overlay
        onSignInClick={handleSignInClick}
        onSignUpClick={handleSignUpClick}
        isRightPanelActive={isRightPanelActive}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
