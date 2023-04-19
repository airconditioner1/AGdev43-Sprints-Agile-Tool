import React, { useState, useEffect} from "react";
import Cookies from "js-cookie";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import CookieBanner from "./CookieBanner";

function SignUp() {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      Cookies.set("authenticated", 'true');
      console.log("LOGGED IN");
      setUsername(codeResponse);
      window.localStorage.setItem('user', JSON.stringify(codeResponse));
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (username) {
      var data = JSON.parse(window.localStorage.getItem('user'));
      if(data === null){
        data = username;
      }
      // setUser(JSON.parse(window.localStorage.getItem('user')));
      fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${data.access_token}`, {
        headers: {
          Authorization: `Bearer ${data.access_token}`,
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setProfile(data);
          Cookies.set("user_email", data.email);
          Cookies.set('authenticated', 'true')
        })
        .catch((err) => console.log(err));
    }
  }, [username]);

  const handleSignUp = (event) => {

    event.preventDefault();
    if (!profile) {
      setErrorMessage("Please sign in with Google to create an account.");
      return;
    }
    if (!username) {
      setErrorMessage("Please enter a username.");
      return;
    }
    Cookies.set("authenticated", true);
    Cookies.set("user_email", profile.email);
    Cookies.set("username", username);
    navigate('/app-page');
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  return (
  <div
    style={{
      marginTop: 50,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <h2>Sign up with Google</h2>
    {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    {profile ? (
      <>
        <img src={profile.picture} alt="user image" />
        <p>Name: {profile.name}</p>
        <p>Email Address: {profile.email}</p>
        <form onSubmit={handleSignUp}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
          </label>
          <button type="submit">Create Account</button>
        </form>
      </>
    ) : (
      <button onClick={() => login()}>Sign up with Google 🚀</button>
    )}
     <CookieBanner />
  </div>
);

}

export default SignUp;
