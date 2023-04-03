//This is a temporray screen with a navbar that will have a link to the 3 components we're working on: storypoker, taskbar, and LoginPage.



import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import DummyPage from "./DummyPage";
import NavBar from "./NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
function Home () {
    return(
        <div>
        <div>
            Home Page
        </div>

        <NavBar />
        <Routes>
            <Route path='/app-page' element={<App />}></Route>
            <Route path='/dummy-page' element={<DummyPage />}></Route>
        </Routes>
       </div>
    )
}
export default Home;