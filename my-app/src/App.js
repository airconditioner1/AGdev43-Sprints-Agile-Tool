import { useState } from "react";
import { Button } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function TaskForm({ onSubmit }) {
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");
  const [users, setUsers] = useState("");
  const [hours, setHours] = useState("0");

  function dbstuff() {
    return (
      fetch("https://f533-128-105-37-247.ngrok.io/post/variables", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "anything",
        },
        body: JSON.stringify({
          hostname: "database",
          portnum: "3306",
          query: "select * from Task;",
          user: "root",
          password: "mc",
          database: "AGDev43",
        }),
      })
        .then((response) => response.json())
        // .then(data => console.log(data))
        .catch((error) => console.error(error))
    );
  }

  
  function loadTasks() {
    let iterator = dbstuff();
    // var data_;
    // iterator
    //   .then(response => response.json())
    //   .then(data => {
    //     data_ = data
    //   });

    var arr = "";
    const promise = Promise.resolve(iterator);
    promise.then((response) => {
      var title = response[0]['Title'];
      var description = response[0]['Desc'];
      var priority = response[0]['Priority'];
      var hours = response[0]['Hours'];
      arr = arr + title + description + priority + hours;
    });
    console.log(arr) // arr = "", why??
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ description, priority, users: users.split(","), hours });
    setDescription("");
    setPriority("medium");
    setHours("0");
    setUsers("");
  }
  return (
    <div className="container p-5">
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Task Manager</h1>
          <label>
            Description:
            <input
              type="text"
              className="form-control"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Priority:
            <select
              className="form-control"
              value={priority}
              onChange={(event) => setPriority(event.target.value)}
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Hours To Complete:
            <select
              className="form-control"
              value={hours}
              onChange={(event) => setHours(event.target.value)}
            >
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
            <input
              type="text"
              className="form-control"
              value={users}
              onChange={(event) => setUsers(event.target.value)}
            />
            <small>Separate multiple users with commas</small>
          </label>
        </div>
        <button className="btn btn-primary" type="submit">
          Add Task
        </button>
        <new Button className="btn btn-primary" style={{margin: 10}} onClick={loadTasks}> Load tasks </new>
      </form>
    </div>
  );
}

function TaskTable({ tasks }) {
  return (
    <div className="container p-4">
      <div>
        <h1>Tasks Table</h1>
      </div>
      <table className="table table-bordered table-striped">
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

function App() {
  const [tasks, setTasks] = useState([]);

  function handleTaskSubmit(task) {
    setTasks([...tasks, task]);
  }

  return (
    <div>
      <div>
        <TaskForm onSubmit={handleTaskSubmit} />
        <TaskTable tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
