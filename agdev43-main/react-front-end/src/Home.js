import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "./components/app_taskboard_component/App";
import DummyPage from "./components/dummypage_component/DummyPage";
import NavBar from "./components/navbar_component/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./components/login_component/LoginPage";
import HomeScreen from "./components/home_component/HomeScreen";
import SignUp from "./components/login_component/Sign-up";
import Cookies from "js-cookie";


function Home() {
  if(Cookies.get('authenticated') === 'false'){
    Cookies.set('authenticated', 'false');
  }
  return (
    <div className="homepage-container">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/app-page" element={<App />}></Route>
        <Route path="/dummy-page" element={<DummyPage />}></Route>
        <Route path="/login-page" element={<LoginPage />}></Route>
        <Route path="/signup-page" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}
export default Home;
