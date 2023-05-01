import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from "js-cookie";
import "./taskboard.css";
import { SERVER_URL } from "../../configdata";

function TaskForm({ onSubmit, setTasks }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");
  const [users, setUsers] = useState("");
  const [hours, setHours] = useState("0");
  const [dueDate, setDueDate] = useState("");

  function dbstuff() {
    return fetch(SERVER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "anything",
      },
      body: JSON.stringify({
        hostname: "agdev-db",
        portnum: "3306",
        query: "select * from Task;", 
        user: "root",
        password: "mc",
        database: "AGDev43",
      }),
    })
      .then((response) => response.json())
      .catch((error) => console.error(error));
  }

  function sleep() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }

  function loadTasks() {
    let iterator = dbstuff();
    const promise = Promise.resolve(iterator);
    promise.then((response) => {
      var tasks = response;
      setTasks(tasks); // update state with fetched data
    });
    sleep();
  }
  function dbstuffSend() {
    return fetch(SERVER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "anything",
      },
      body: JSON.stringify({
        hostname: "agdev-db",
        portnum: "3306",
        query:
          "INSERT INTO `Task` (`TaskNum`, `PNum`, `Title`, `Desc`, `DueDate`, `Hours`, `Priority`, `Status`, `Sprint`, `DateCreated`, `CreatorEmail`)" +
          "VALUES (NULL , 8,'" +
          title +
          "','" +
          users +
          "','" +
          dueDate +
          "','" +
          hours +
          "','" +
          priority +
          "', NULL, NULL, NULL,'" +
          Cookies.get("user_email") +
          "')",
        user: "root",
        password: "mc",
        database: "AGDev43",
      }),
    })
      .then((response) => response.json())
      .catch((error) => console.error(error));
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ title, priority, users: users.split(","), hours, dueDate });
    setTitle("");
    setPriority("medium");
    setHours("0");
    setUsers("");
    setDueDate("")
  }

  return (
    <div className="container p-5">
      <form onSubmit={handleSubmit}>
        <div>
          <p>Logged in: {Cookies.get("user_email")}</p>
          <p>Username: {Cookies.get("username")}</p>
          <h1>Task Manager</h1>
          <br></br>
          <label
            style={{
              marginTop: 20,
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            Title:
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </label>
        </div>
        <div className="form-side-container">
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
          <label style={{marginLeft:30}}>
            Due Date:
              <input style={{marginLeft:0}}
              title="Due Date"
                placeholder="Select date"
                type="date"
                id="example"
                value={dueDate}
                class="form-control"
                onChange={(event) => setDueDate(event.target.value)}
              />
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
              <option value="1">1</option>
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
        <div className="button-container">
          <button
            className="btn btn-primary"
            type="submit"
            onClick={dbstuffSend}
          >
            Add Task
          </button>
          <button
            className="btn btn-primary"
            style={{ margin: 10 }}
            onClick={loadTasks}
          >
            {" "}
            Load tasks{" "}
          </button>
        </div>
      </form>
    </div>
  );
}

function TaskTable({ tasks }) {
  return (
    <div className="container p-4">
      <div>
        <h1 style={{ marginTop: 150 }}>Tasks Table</h1>
      </div>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Priority</th>
            <th>Hours</th>
            <th>Users</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.Title}</td>
              <td>{task.Priority}</td>
              <td>{task.Hours}</td>
              <td>{task.Desc}</td>
              <td>{task.DueDate}</td>
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
    setTasks([
      ...tasks,
      {
        Title: task.title,
        Priority: task.priority,
        Hours: task.hours,
        Desc: task.users,
        DueDate: task.dueDate
      },
    ]);
  }

  if (Cookies.get("authenticated") === "true") {
    return (
      <div class="display-container">
        <div class="Form">
          <TaskForm setTasks={setTasks} onSubmit={handleTaskSubmit} />
        </div>
        <div class="Table">
          <TaskTable tasks={tasks} />
        </div>
      </div>
    );
  } else {
    console.log(Cookies.get("authenticated"));
    return (
      <div>
        <h1 style={{ color: "red" }}>
          Please sign into sprints to access TaskBoard!
        </h1>
      </div>
    );
  }
}

export default App;
