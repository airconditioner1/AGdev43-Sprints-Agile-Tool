import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './style.css';
import Cookies from 'js-cookie';
import { SERVER_URL } from '../../configdata.js';


let question = "";
let assigned_user = "";
//used for keep track of assigned users
const assigned_users = [];

function StoryPoker() {

  if (Cookies.get("authenticated") === 'true') {
    return (
      <div>
        <div>
          <StorypokerComp />
        </div>
      </div>
    );
  } else {
    console.log(Cookies.get("authenticated"));
    return (
      <div>
        <h1 style={{ color: "red" }}>Please sign into sprints to access SP!</h1>
      </div>
    );
  }
}

function StorypokerComp() {
	const [message, setMessage] = useState('');

	const [updated, setUpdated] = useState(message);
	
	//const [users, setUsers] = useState('');
  
	const handleChange = (event) => {
	  setMessage(event.target.value);
	};

	// const handleUsers = (event) => {
	// 	setUsers(event.target.value);
	// };
  
	const handleClick = () => {
	  // 👇 "message" stores input field value
	  var input = document.getElementById("message").value;
	  question = input;
	  setUpdated(message);
	  // alert("Your question is " + input)
		createSP();
		//submitQuestion();
	};


	const submitQuestion = () => {

		// 👇 "message" stores input field value
		var input = document.getElementById("message").value;
		question = input;
		setUpdated(message);
		// alert("Your question is " + input)
		createSP();

		//console.log(assigned_users);
		console.log(message);
		Cookies.set('message', message);
		//Cookies.set('assigned_users', assigned_users);
		console.log(Cookies.get('user_email'))
		//TODO: make api call to flask to insert question
		// alert("make flask sql queries: delete all, insert new records")
		
		insertSP();
	}

	async function createSP() {
    return fetch(SERVER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "anything",
      },
      body: JSON.stringify({
        hostname: "agdev-db",
        portnum: "3306",
        query: "drop table if exists `SP`;create table `AGDev43`.`SP`(`Email` varchar(200) not null, `StoryName` varchar(500) not null,`Answer` int,`T1` datetime not null,primary key (`Email`));",
        user: "root",
        password: "mc",
        database: "AGDev43",
      }),
    })
      .then((response) => response.json())
      .catch((error) => console.error(error));
  }

	async function insertSP() {
		var query = "insert into SP (Email, StoryName, Answer, T1) values ('"+"submission@storypoker.com"+"','"+Cookies.get('message')+"', null, NOW());";
		console.log(query);

    return fetch(SERVER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "anything",
      },
      body: JSON.stringify({
        hostname: "agdev-db",
        portnum: "3306",
        query: "insert into SP (Email, StoryName, Answer, T1) values ('"+"submission@storypoker.com	"+"','"+Cookies.get('message')+"', null, NOW());",
        user: "root",
        password: "mc",
        database: "AGDev43",
      }),
    })
      .then((response) => response.json())
      .catch((error) => console.error(error));
  }

	return (

		<div className='component-div'>
		<h1>story poker</h1>
		<h2>Enter a User Story: </h2>
		<input
					type="text"
					id="message"
					name="message"
					onChange={handleChange}
					value={message}
					placeholder='As <user>, I want to...'
				/>
				
			{/* <button style={{marginBottom:"2%"}} onClick={handleClick}>Confirm</button> */}

			{/* <h2 style={{marginBlock:"2%"}}>{"Current question: "+updated}</h2> */}
			{/* <h2>Assign Users to answer:</h2>

			<input
					type="text"
					id="users"
					name="users"
					onChange={handleUsers}
					value={users}
					placeholder='Enter user email one at a time: sally@sprints.com'
				/>	   */}
			<div className="button-container">
			</div>

			{/* <h2 >Assigned Users: </h2> */}
			
			<Link to="/storypoker/question">
					<button style={{width: "11rem"}} onClick={submitQuestion }>Present question</button>
			</Link>
		</div>

	);

};

export {question};
export default StoryPoker;
