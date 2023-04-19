import React from "react";
import "./Homepage.css"; // Import the styles for the homepage

function Homepage() {
  return (
    <div className="homepage-container">
      <main>
        <img
          id="SprintsLogo"
          src="/images/SprintsLogo.jpg"
          alt="Sprints Logo"
        />
        <h1>Welcome to Sprints</h1>
        <p>
          We help teams integrate agile methodologies and devops tools into
          their projects.
        </p>
        <div className="features">
          <h2>Our Features</h2>
          <h6>Warning: Not Complete</h6>
          <ul>
            <li>
              Personalized View
              <img
                id="placeholder"
                src="/images/placeholder.png"
                alt="placeholder"
              />
            </li>
            <li>
              Clear and Efficient Taskboard
              <img
                id="placeholder"
                src="/images/placeholder.png"
                alt="placeholder"
              />
            </li>
            <li>
              Time saving Agile tips
              <img
                id="placeholder"
                src="/images/placeholder.png"
                alt="placeholder"
              />
            </li>
            <li>
              Collaborative team communication
              <img
                id="placeholder"
                src="/images/placeholder.png"
                alt="placeholder"
              />
            </li>
            <li>
              Client involvement and feedback
              <img
                id="placeholder"
                src="/images/placeholder.png"
                alt="placeholder"
              />
            </li>
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
