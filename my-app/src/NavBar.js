


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import App from "./App";
// import DummyPage from "./DummyPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar () {
    return(

        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div class="container-fluid">
                <a class="nav-link" href='/app-page'>App</a>
                
            </div>
            <div class="container-fluid">
                <a class="nav-link" href='/dummy-page'>DummyPage</a>
                
            </div>
            {/* <div class="container-fluid">
                <a class="nav-link" href='/'>Home</a>
                
            </div> */}
            <div class="container-fluid">
                <a class="nav-link" href='/login-page'>Login</a>
                
            </div>
            <div class="container-fluid">
                <a class="nav-link" href='/'>Home</a>
                
            </div>
            {/* <Link to='/app-page'> App </Link>   
            <Link to='/dummy-page'>DummyPage </Link> 
            <Link to='/'>Home </Link>    */}
       </nav>

       
       
    )
}
export default NavBar;