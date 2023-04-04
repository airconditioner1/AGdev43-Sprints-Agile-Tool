//This is a temporray screen with a navbar that will have a link to the 3 components we're working on: storypoker, taskbar, and LoginPage.



import { BrowserRouter as Router, Routes, Route, Link, useLocation} from "react-router-dom";
import App from "./App";
import DummyPage from "./DummyPage";
import NavBar from "./NavBar";
import LoginPage from "./LoginPage";
import HomeScreen from "./HomeScreen";
function Home() {
  const location = useLocation();

  // Hide the NavBar component on the login page
  const showNavBar = location.pathname !== '/login-page';

  return (
    <div className="container">
      {/* Conditionally render the NavBar component */}
      {showNavBar && <NavBar />}
      
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/app-page' element={<App />} />
        <Route path='/dummy-page' element={<DummyPage />} />
        <Route path='/login-page' element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default Home