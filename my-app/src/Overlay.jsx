import React from "react";

// window.location.reload();

const Overlay = ({ onSignInClick, onSignUpClick, isRightPanelActive }) => {
  // setTimeout(1000);
  window.location.reload();
  return (
    <div
      className={`overlay-container ${
        isRightPanelActive ? "right-panel-active" : ""
      }`}
    >
      <div className="overlay">
        <div className="overlay-panel overlay-left">
          <h1>Let's get started!</h1>
          <p>Already have an account?</p>
          <button
            id="sign-in-button"
            className="btn btn-light"
            onClick={onSignInClick}
          >
            Sign in
          </button>
        </div>

        <div className="overlay-panel overlay-right">
          <h1>Welcome!</h1>
          <p>Don't have an account yet?</p>
          <button
            id="sign-up-button"
            className="btn btn-light"
            onClick={onSignUpClick}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

// window.location.reload();
export default Overlay;
