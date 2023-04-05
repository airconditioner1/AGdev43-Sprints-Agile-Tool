// import App from "./App";
// import DummyPage from "./DummyPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Homepage.css"; // Import the styles for the homepage

function NavBar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a class="nav-link" href="/">
              Home
            </a>
          </li>
          <li>
            <a class="nav-link" href="/app-page">
              Dashboard
            </a>
          </li>
          <li>
            <a class="nav-link" href="/dummy-page">
              Services
            </a>
          </li>
          <li>
            <a class="nav-link" href="/dummy-page">
              Contact
            </a>
          </li>
        </ul>
        <div className="cta">
          <h3></h3>
          <button>
            <a class="nav-link" href="/login-page">
              Login
            </a>
          </button>
          <button>
            <a class="nav-link" href="/login-page">
              Sign up
            </a>
          </button>
        </div>
      </nav>
    </header>
    // <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    //   <div class="container-fluid">
    //     <a class="nav-link" href="/app-page">
    //       App
    //     </a>
    //   </div>
    //   <div class="container-fluid">
    //     <a class="nav-link" href="/dummy-page">
    //       Story Poker
    //     </a>
    //   </div>
    //   <div class="container-fluid">
    //     <a class="nav-link" href="/login-page">
    //       Login
    //     </a>
    //   </div>
    //   <div class="container-fluid">
    //     <a class="nav-link" href="/">
    //       Home
    //     </a>
    //   </div>
    // </nav>
  );
}
export default NavBar;
