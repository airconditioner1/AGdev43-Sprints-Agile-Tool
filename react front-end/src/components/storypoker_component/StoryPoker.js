import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './style.css';
import Cookies from 'js-cookie';

let question = "";
let assigned_user = "";
//used for keep track of assigned users
const assigned_users = [];
var index = 0;


const StoryPoker = () => {
	const [message, setMessage] = useState('');

	const [updated, setUpdated] = useState(message);
	
	const [users, setUsers] = useState('');
  
	const handleChange = (event) => {
	  setMessage(event.target.value);
	};

	const handleUsers = (event) => {
		setUsers(event.target.value);
	};
  
	const handleClick = () => {
	  // 👇 "message" stores input field value
	  var input = document.getElementById("message").value;
	  question = input;
	  setUpdated(message);
	  // alert("Your question is " + input)
	};

	const handleClick2 = () => {
		// 👇 "message" stores input field value
		var input = document.getElementById("users").value;
		assigned_user = input;
		assigned_users.push(assigned_user)//add the input user to the assigned_user array
		// setAssign(users);
		// alert("The user you assigned is " + input)
		document.getElementById("user_list").innerHTML = assigned_users;
	};

	const submitQuestion = () => {

		console.log(assigned_users);
		console.log(message);
		console.log(Cookies.get('user_email'))
		//TODO: make api call to flask to insert question
		alert("make flask sql queries: delete all, insert new records")
	}

	const handleClick3 = () => {
		// 👇 "message" stores input field value
		assigned_users.length = 0
		alert("All assigned users are cleared")
		document.getElementById("user_list").innerHTML = assigned_users;
	};

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
				
			<button style={{marginBottom:"2%"}} onClick={handleClick}>Confirm Question</button>

			<h2 style={{marginBlock:"2%"}}>{"Current question: "+updated}</h2>
			<h2>Assign Users to answer:</h2>

			<input
					type="text"
					id="users"
					name="users"
					onChange={handleUsers}
					value={users}
					placeholder='Enter user email one at a time: sally@sprints.com'
				/>	  
			
			<button  onClick={handleClick2}>Add</button>
			<button style={{margin:"10px"}} onClick={handleClick3}>Clear</button>

			<h2 >Assigned Users: </h2>

			<h2 id="user_list"></h2>
			
			<Link to="/storypoker/question">
					<button onClick={submitQuestion}>Present Question</button>
			</Link>
		</div>

	);

};

export {question};
export default StoryPoker;
