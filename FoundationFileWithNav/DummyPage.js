

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "./App";
function DummyPage() {
    // return (
    //   <div>
    //     <h1>Welcome to the Next Page</h1>
    //   </div>
    // );

    ///
    return (

        <div>
          <h1>Welcome to the Next Page</h1>
          
          <Routes>
            <Route path="/" element={App} />
            <Route path="/dummy-page" element={<DummyPage />} />
          </Routes>
          <button onClick={() => window.location.href="/"}>Previous Page</button>
        </div>
  
    );
  }
  
  export default DummyPage;
  