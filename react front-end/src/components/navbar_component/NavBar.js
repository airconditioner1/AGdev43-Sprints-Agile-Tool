// import App from "./App";
// import DummyPage from "./DummyPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Homepage.css"; // Import the styles for the homepage

function NavBar() {
  return (
    <header>
      <nav className="navbar navbar-inverse fixed-left">
        <ul>
          <li>
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link" href="/app-page">
              Taskboard
            </a>
          </li>
          <li>
            <a className="nav-link" href="/spchoice">
              Story Poker
            </a>
          </li>
          <li>
            <a className="nav-link" href="/dummy-page">
              Chatroom
            </a>
          </li>
        </ul>
        <div className="cta">
          <h3></h3>
          <button>
            <a className="nav-link" href="/login-page">
              Login
            </a>
          </button>
          <button>
            <a className="nav-link" href="/login-page">
              Sign up
            </a>
          </button>
        </div>
      </nav>
    </header>
  );
}
export default NavBar;
