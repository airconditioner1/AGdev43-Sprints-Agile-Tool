import React from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVER_URL } from "../../configdata";
import './style.css';
import Cookies from "js-cookie";

var hour_needed;
var email = Cookies.get('user_email');

const QuestionPage = () => {
	const [updated, setUpdated] = useState('?');
  const [question, setQuestion] = useState('');
  
  const getResultsDB = () => {
    console.log('getting results from db');
    console.log('if dbresponse = false then proceed to next page or pop an error msg to how much time');
    // alert('make results call to database. If success, proceed to next page with full table');
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
    // alert("Your answer is "+a.toString()+" hours!");
    fetchSPQuestion("CALL submit_answer('"+Cookies.get('user_email')+"', "+ a +");");
  };

  const fetchSPQuestion = (queryString) => {
    return fetch(SERVER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "anything",
      },
      body: JSON.stringify({
        hostname: "agdev-db",
        portnum: "3306",
        query: queryString, 
        user: "root",
        password: "mc",
        database: "AGDev43",
      }),
    })
      .then((response) => response.json())
      .catch((error) => console.error(error));
  }

  const loadQuestion = () => {
    let iterator = fetchSPQuestion("SELECT StoryName FROM `SP` LIMIT 1;");
    const promise = Promise.resolve(iterator);
    promise.then((response) => {
      console.log(response[0].StoryName);
      setQuestion(response[0].StoryName);
    });
    console.log(question);
  
  }

  loadQuestion();

return (
	<div className="component-div">
	<h1 style={{margin:"5%"}}>User story:{question}</h1>
	<h2 style={{marginTop:"2%"}}>How long will this story take to build? </h2>
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

export {hour_needed}
export default QuestionPage;
