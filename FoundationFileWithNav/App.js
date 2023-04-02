
import './App.css';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DummyPage from "./DummyPage";

function TaskForm({ onSubmit }) {
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");
  const [users, setUsers] = useState("");
  const [hours, setHours] = useState("0");

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ description, priority, users: users.split(","), hours});
    setDescription("");
    setPriority("medium");
    setHours("0");
    setUsers("");


  }

  return (
    
    <form onSubmit={handleSubmit}>
      <div>
      <h1>Task Manager</h1>
        <label>
          Description:
          <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Priority:
          <select value={priority} onChange={(event) => setPriority(event.target.value)}>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Hours To Complete:
          <select value={hours} onChange={(event) => setHours(event.target.value)}>
            <option value="0">0</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="8">8</option>
            <option value="13">13</option>
            <option value="21">21</option>
            <option value="34">34</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Users:
          <input type="text" value={users} onChange={(event) => setUsers(event.target.value)} />
          <small>Separate multiple users with commas</small>
        </label>
      </div>
      <button><btn1 type="submit">Add Task</btn1></button>
    </form>
    
  );
}


function TaskTable({ tasks }) {
  return (
    <div>
    <div>
      <h1>Tasks Table</h1>
    </div>
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Priority</th>
          <th>Hours</th>
          <th>Users</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={index}>
            <td>{task.description}</td>
            <td>{task.priority}</td>
            <td>{task.hours}</td>
            <td>{task.users.join(", ")}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

function OtherElements()
{
  return (
    <div>
      <button> <btn2 onClick={() => window.location.href="/dummy-page"}>Next Page</btn2></button>
    </div>
  );
}


function App() {
  const [tasks, setTasks] = useState([]);

  function handleTaskSubmit(task) {
    setTasks([...tasks, task]);
  }

return (

      <div>
        
        <Routes>
          <Route path="/" element={<div><TaskForm onSubmit={handleTaskSubmit} /><TaskTable tasks={tasks} /><OtherElements/></div>} />
          <Route path="/dummy-page" element={<DummyPage />} />
        </Routes>
        
      </div>

  );
}


export default App;

