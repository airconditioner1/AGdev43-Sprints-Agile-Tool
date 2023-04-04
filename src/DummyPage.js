

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import Home from "./Home";


function DummyPage() {
    return (

        <div className="container p-5">
          <h1>Welcome to the Next Page</h1>
          
          <button className="btn btn-primary"  onClick={() => window.location.href="/"}>Previous Page</button>
          {/* <button> <btn2 style={{}} onClick={() => window.location.href="/"}>Previous Page</btn2></button> */}
        </div>
  
    );
  }

  // function dbstuff()
  // {
  //   fetch('http://localhost:5238/api')
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  //   .catch(error => console.error(error));
  // }
  // console.log(dbstuff())

  
  export default DummyPage;
  