import React from 'react';
import {hour_needed} from './QuestionPage.js';
import {question} from './QuestionPage.js';
import './style.css';
const ResultsPage = () => {
  return (
    <div className='component-div'>
    <h1>Results</h1>
    <h2 style={{marginBlock:"6%", color:"blue"}}>User story: {question}</h2>
    <h2>User 1: {hour_needed} hr</h2>
    </div>
  );
};

export default ResultsPage;
