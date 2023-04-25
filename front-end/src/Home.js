import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "./components/app_taskboard_component/App";
import DummyPage from "./components/chatroom_component/Chatroom";
import NavBar from "./components/navbar_component/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./components/login_component/LoginPage";
import HomeScreen from "./components/home_component/HomeScreen";
import Cookies from "js-cookie";
import StoryPoker from "./components/storypoker_component/StoryPoker";
import QuestionPage from "./components/storypoker_component/QuestionPage";
import ResultsPage from "./components/storypoker_component/ResultsPage";
import SignUp from "./components/login_component/Sign-up";
import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";

function Home() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(
  Cookies.get("authenticated") === 'true' || localStorage.getItem('authenticated') === 'true'
);

  console.log("user in Home component:", user);

  const logOut = () => {
    window.localStorage.setItem('user', null);
    googleLogout();
    setProfile([]);
    setUser(null); // Reset user to null
    Cookies.set("user_email", 'false');
    Cookies.set("username", 'false');
    Cookies.set("authenticated", 'false');
    console.log(Cookies.get('authenticated'));
    setIsLoggedIn(false); // Update isLoggedIn state variable when user logs out
    Cookies.remove("authenticated"); // remove cookie
    localStorage.removeItem('authenticated'); //remove localstorage
  };

  return (
    <div className="homepage-container">
      <NavBar user={user} onLogout={logOut} profile={profile} isLoggedIn={isLoggedIn}/> 
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/app-page" element={<App />}></Route>
        <Route path="/dummy-page" element={<DummyPage />}></Route>
        <Route path="/login-page" element={<LoginPage setUser={setUser} user={user} setProfile={setProfile} profile={profile} setIsLoggedIn={setIsLoggedIn}/>}></Route> // Pass setIsLoggedIn as a prop to LoginPage
        <Route exact path='/storypoker' element={<StoryPoker />} />
        <Route path='/storypoker/question' element={<QuestionPage/>} />
        <Route path='/storypoker/results' element={<ResultsPage/>} />
        <Route path="/signup-page" element={<SignUp setUser={setUser} user={user} setProfile={setProfile} profile={profile} setIsLoggedIn={setIsLoggedIn}/>}></Route> 
      </Routes>
    </div>
  );
}

export default Home;
