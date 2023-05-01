import "bootstrap/dist/css/bootstrap.min.css";
import "./Homepage.css";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

/**
 * 
 * @param user: variable defined in homepage trace the user status based on login
 * @param onLogout: callback function defined in homepage to logout
 * @param profile: variable trace defined in homepage trace profile info
 * @param isLoggedIn variable check the login status
 * @returns navbar display based on whether use is login in or not
 */
function NavBar({ user, onLogout, profile, isLoggedIn }) {

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
          {isLoggedIn ? ( // if we have logined, display user image and logout button
            <>
              <img src={Cookies.get("profile_img")} alt="user" />
              <button onClick={onLogout}>Logout</button>
            </>
          ) : ( // else, display login and signup button
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

