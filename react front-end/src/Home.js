import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "./components/app_taskboard_component/App";
import DummyPage from "./components/dummypage_component/DummyPage";
import NavBar from "./components/navbar_component/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./components/login_component/LoginPage";
import HomeScreen from "./components/home_component/HomeScreen";
import Cookies from "js-cookie";
import StoryPoker from "./components/storypoker_component/StoryPoker";
import QuestionPage from "./components/storypoker_component/QuestionPage";
import ResultsPage from "./components/storypoker_component/ResultsPage";



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
        <Route exact path='/storypoker' element={<StoryPoker />} />
        <Route path='/storypoker/question' element={<QuestionPage/>} />
        <Route path='/storypoker/results' element={<ResultsPage/>} />

      </Routes>
    </div>
  );
}
export default Home;
