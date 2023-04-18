import React from "react";
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {question} from './index.js';
import './style.css';
var hour_needed;
  
const About = () => {
	const inputRef = useRef(null);

	const [updated, setUpdated] = useState('');
  
	const handleClick = () => {
	  var input = document.getElementById("message").value;
	  hour_needed = input
	  setUpdated(inputRef.current.value);
	  alert("Your answer is " + input + " hr")
	};
return (
	<div>
	
	<h1>Question:{question}</h1>
	<h2>Input number of hour needed</h2>
	<input
        ref={inputRef}
        type="text"
        id="message"
        name="message"
      />

      <h2>Your Answer: {updated} hr</h2>

      <button onClick={handleClick}>Submit</button>

	  <Link to="/blogs">
        <button>Show Result</button>
      </Link>

	</div>
);
};



export {hour_needed}
export default About;
