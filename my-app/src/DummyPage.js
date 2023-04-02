

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import Home from "./Home";
function DummyPage() {
    return (

        <div>
          <h1>Welcome to the Next Page</h1>
          
          <button><btn2 style={{}} onClick={() => window.location.href="/"}>Previous Page</btn2></button>

        </div>
  
    );
  }

  
  export default DummyPage;
  