import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import DummyPage from "./DummyPage";
import NavBar from "./NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from "./LoginPage";
import HomeScreen from "./HomeScreen";

function Home () {
    return(
        <div className="homepage-container">
    
        <NavBar />
        <Routes>
            <Route path='/' element={<HomeScreen />}></Route>
            <Route path='/app-page' element={<App />}></Route>
            <Route path='/dummy-page' element={<DummyPage />}></Route>
            <Route path='/login-page' element={<LoginPage />}></Route>
        </Routes>
       </div>
    )
}
export default Home;
