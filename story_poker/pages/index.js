import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './style.css';


let question = "";
let assigned_user = "";
//used for keep track of assigned users
const assigned_users = [];
var index = 0;


const Home = () => {
	const [message, setMessage] = useState('');

	const [updated, setUpdated] = useState(message);
	/////
	const [users, setUsers] = useState('');

	const [email, setAssign] = useState(message);


  
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
	  alert("Your question is " + input)
	};

	const handleClick2 = () => {
		// 👇 "message" stores input field value
		var input = document.getElementById("users").value;
		assigned_user = input;
		assigned_users.push(assigned_user)//add the input user to the assigned_user array
		setAssign(users);
		alert("The user you assigned is " + input)
		document.getElementById("user_list").innerHTML = assigned_users;
	  };

	  const handleClick3 = () => {
		// 👇 "message" stores input field value
		assigned_users.length = 0
		alert("All assigned users are cleared")
		document.getElementById("user_list").innerHTML = assigned_users;
	  };


  
return (
	<div>

	<h1>Welcome to story poker</h1>
	<h2>Start asking a question: </h2>
	<input
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
      />

	  <button onClick={handleClick}>Confirm Question</button>
      

      <h2>Question: {updated}</h2>

	  	

	  <h2>Assign Users to answer:</h2>

	  <input
        type="text"
        id="users"
        name="users"
        onChange={handleUsers}
        value={users}
      />	  
	 
      <button onClick={handleClick2}>Add User</button>
	  <button onClick={handleClick3}>Clear all User</button>

	  <h2 >Assigned Users: </h2>

	  <h2 id="user_list"></h2>
	  
	  <Link to="/about">
        <button>Present Question</button>
      </Link>
	  
	</div>

);

};

export {question};
export default Home;
