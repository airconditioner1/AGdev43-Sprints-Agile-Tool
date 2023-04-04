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
        </nav>
      </header>
      <main>
        <h1>Welcome to Agile Development</h1>
        <p>We build awesome products with agile methodologies.</p>
        <div className="features">
          
		     
           <h2>Our Features</h2>
           <ul>
            <li>Scrum-based project management</li>
            <li>Rapid prototyping and iteration</li>
            <li>Continuous integration and delivery</li>
            <li>Collaborative team communication</li>
            <li>Client involvement and feedback</li>
           </ul>
        </div>
        <div className="cta">
          <h3>Ready to get started?</h3>
          <button>Sign up now</button>
        </div>
      </main>
      <footer>
        <p>Copyright &copy; 2023 AGDev43</p>
      </footer>
    </div>
  );
}

export default Homepage;
