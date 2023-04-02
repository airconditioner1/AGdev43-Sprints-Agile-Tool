


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import DummyPage from "./DummyPage";
//import { Link } from 'react-router-dom'
// function DummyPage() {
//     return (

//         <div>
//           <h1>Welcome to the Next Page</h1>
          
//           <Routes>
//             <Route path="/" element={App} />
//             <Route path="/dummy-page" element={<DummyPage />} />
//           </Routes>
//           <button><btn2 onClick={() => window.location.href="/"}>Previous Page</btn2></button>
//         </div>
  
//     );
//   }
  

  

// export const NavBar = () => {
//     return(
//         <div>
//         <div>
//             NavBar Page
//         </div>
//         <nav>
//         <Link to='/'> App</Link>   
//         <Link to='/dummy-page'>DummyPage</Link>   

//        </nav>
//        </div>
//     )
// }

function NavBar () {
    return(
        
        // <div>
        // <div>
        //     NavBar Page
        // </div>
        
        <nav>
        <Link to='/app-page'> App </Link>   
        <Link to='/dummy-page'>DummyPage </Link> 
        <Link to='/'>Home </Link>   

       </nav>
       //</div>

       
       
    )
}
export default NavBar;