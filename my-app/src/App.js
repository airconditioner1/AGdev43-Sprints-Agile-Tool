import React from "react";
import "./Homepage.css"; // Import the styles for the homepage

function Homepage() {
  return (
    <div className="homepage-container">
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <div className="cta">
            <h3></h3>
            <button>Login</button>
            <button>Sign Up</button>
        </div>
        </nav>
      </header>
      <main>
        <img id="SprintsLogo" src='/images/SprintsLogo.jpg' alt="Sprints Logo"/> 
        <h1>Welcome to Sprints</h1>
        <p>We help teams integrate agile methodologies and devops tools into their projects.</p>
        <div className="features"> 
           <h2>Our Features</h2>
           <h6>Warning: Not Complete</h6>
           <ul>
            <li>Personalized View<img id="placeholder" src='/images/placeholder.png' alt="placeholder"/></li>
            <li>Clear and Efficient Taskboard<img id="placeholder" src='/images/placeholder.png' alt="placeholder"/></li>
            <li>Time saving Agile tips<img id="placeholder" src='/images/placeholder.png' alt="placeholder"/></li>
            <li>Collaborative team communication<img id="placeholder" src='/images/placeholder.png' alt="placeholder"/></li>
            <li>Collaborative Story Poker <img id="placeholder" src='/images/placeholder.png' alt="placeholder"/></li>
           </ul>
        </div>
        
      </main>
      <footer>
        <p>Go UW Madison! We ❤ 🧀</p>
      </footer>
    </div>
  );
}

export default Homepage;
