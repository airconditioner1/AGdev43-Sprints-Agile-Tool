import React from "react";
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {question} from './StoryPoker.js';
import './style.css';
import Cookies from "js-cookie";

var hour_needed;
var email = Cookies.get('user_email');
  
const QuestionPage = () => {
	const inputRef = useRef(null);
	const [updated, setUpdated] = useState('?');

  

  const getResultsDB = () => {
    console.log('getting results from db');
    console.log('if dbresponse = false then proceed to next page or pop an error msg to how much time');
    alert('make results call to database. If success, proceed to next page with full table');
    //TODO: make flask call to get results
  }

	const handleClick = () => {
    var input = document.getElementById("num-hours").value;
    hour_needed = input;
    setUpdated(hour_needed);
    let a = hour_needed;  // update the 'a' variable to the new value of 'hour_needed'
    console.log(Cookies.get('user_email'));
    console.log(a);  // log the new value of 'hour_needed'
    //TODO: make flask call to insert answer
    alert("got user answer and email");
  };
return (
	<div className="component-div">
	<h1 style={{margin:"5%"}}>User story:{question}</h1>
	<h2 style={{marginTop:"2%"}}>How long will this story take to build?</h2>
    <input
          // ref={inputRef}
          type="number"
          id="num-hours"
          placeholder="1, 2, 3, 5, 8, 13, 21.."
        />

      <h2 style={{marginTop:"5%"}}>Your Answer {email}: {updated} hr</h2>

      <div className="button-container">
        <button onClick={handleClick}>Submit</button>
        <Link to="/storypoker/results">
        <button style={{marginLeft:"2%"}} onClick={getResultsDB}>Results➡</button>
      </Link>      </div>

	</div>
);
};


export{question}
export {hour_needed}
export default QuestionPage;
