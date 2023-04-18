import React from 'react';
import {hour_needed} from './about.js';
import {question} from './index.js';
import './style.css';
const Blogs = () => {
return (
	<div>
	<h1>The answer for the whole group is the following</h1>
	<h2>Answer for the question: {question}</h2>
	<h2>User 1: {hour_needed} hr</h2>
	</div>
);
};

export default Blogs;
