import "bootstrap/dist/css/bootstrap.min.css";
import "./Homepage.css";
import { Link } from "react-router-dom";

function NavBar({ user, onLogout, profile, isLoggedIn }) {
  console.log("isLoggedIn", isLoggedIn);

  return (
    <header>
      <nav className="navbar navbar-inverse fixed-left">
        <ul>
          {isLoggedIn ? (
            <>
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/app-page" className="nav-link">
                  Taskboard
                </Link>
              </li>
              <li>
                <Link to="/storypoker" className="nav-link">
                  Story Poker
                </Link>
              </li>
              <li>
                <Link to="/dummy-page" className="nav-link">
                  Chatroom
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          )}
        </ul>
        <div className="cta">
          {isLoggedIn ? (
            <>
              <img src={profile.picture} alt="user" />
              <button onClick={onLogout}>Logout</button>
            </>
          ) : (
            <>
              <h3></h3>
              <Link to="/login-page" className="nav-link">
                <button>Login</button>
              </Link>
              <Link to="/signup-page" className="nav-link">
                <button>Sign up</button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default NavBar;

