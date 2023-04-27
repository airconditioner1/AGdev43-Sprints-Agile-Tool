import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from "js-cookie";
import "./taskboard.css";

function TaskForm({ onSubmit, setTasks }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");
  const [users, setUsers] = useState("");
  const [hours, setHours] = useState("0");
  const [dueDate, setDueDate] = useState("");

  function dbstuff() {
    return fetch("https://bf31-128-105-37-247.ngrok-free.app/post/variables", {
      

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
    //check if all fields is filled before sending the request
     //testing
    
     if (title === "" || dueDate === "" || hours === "" || users === ""){
      alert("Please filled the form correctly !")
      return;
    }   
    console.log(dueDate);
    console.log(title);

    console.log(
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
        "', NULL, NULL, NULL, '')"
    );

    return fetch("https://bf31-128-105-37-247.ngrok-free.app/post/variables", {
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
  //testing
  function dbDelete() {
      let desc = prompt("Enter the assigned user(s) for the deleting task: ");
      let title = prompt("Enter the title for the deleting task: ");
      let input_query = `DELETE FROM Task WHERE \`Task\`.\`Desc\` = '${desc}' AND \`Task\`.\`Title\` = '${title}'`;
      alert("If you input the title and users correctly, the row is deleted, nothing otherwise ");
      return fetch("https://bf31-128-105-37-247.ngrok-free.app/post/variables", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "anything",
        },
        body: JSON.stringify({
          hostname: "agdev-db",
          portnum: "3306",
          query: input_query,
          user: "root",
          password: "mc",
          database: "AGDev43",
        }),
      })
        .then((response) => response.json())
        .catch((error) => console.error(error));
  }
  //testing
  function dbEdit(){
    alert("modifying task!");
    let oldTitle = prompt("Enter the Old Title: "); // the value of the "Title" column in the row you want to update
    let oldDesc = prompt("Enter the Old assigned users: "); // the value of the "Desc" column in the row you want to update

    let newTitle = prompt("Enter the NEW Title (or blank to not change): "); // the new value for the "Title" column
    let newDesc = prompt("Enter the NEW assigned users (or blank to not change)[seperated by commas]: ");  // the new value for the "Desc" column
    // let newPriority = prompt("Enter the NEW priority (or blank to not change)[high/medium/low]: ");  // the new value for the "Desc" column
    // let newDueDate = prompt("Enter the NEW due date (or blank to not change)[mm-dd-yyyy]: ");  // the new value for the "Desc" column
    // let newHours = prompt("Enter the NEW hours to complete (or blank to not change) [number]: ");  // the new value for the "Desc" column
    
    // let input_query = `UPDATE Task SET \`Desc\` = '${newDesc}', \`Title\` = '${newTitle}, \`Priority\` = '${newPriority},
    // \`DueDate\` = '${newDueDate}, \`Hours\` = '${newHours}' 
    // WHERE \`Desc\` = '${oldDesc}' AND \`Title\` = '${oldTitle}'`;

    //let oldDesc = "AAA"; // the value of the "Desc" column in the row you want to update
    //let oldTitle = "AAA"; // the value of the "Title" column in the row you want to update
    //let newDesc = "BBB"; // the new value for the "Desc" column
    //let newTitle = "BBB"; // the new value for the "Title" column
    let input_query = `UPDATE Task SET \`Desc\` = '${newDesc}', \`Title\` = '${newTitle}' WHERE \`Desc\` = '${oldDesc}' AND \`Title\` = '${oldTitle}'`;
    
    
    // Execute the query using your database connection
    
    return fetch("https://bf31-128-105-37-247.ngrok-free.app/post/variables", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "anything",
      },
      body: JSON.stringify({
        hostname: "agdev-db",
        portnum: "3306",
        query: input_query,//to_do
        user: "root",
        password: "mc",
        database: "AGDev43",
      }),
    })
      .then((response) => response.json())
      .catch((error) => console.error(error));
  }

  function handleSubmit(event) {
    //testing 
    // submit the form only when all the fiels are filled in  
    if (title === "" || dueDate === "" || hours === "" || users === ""){
      event.preventDefault();
    }
    else{
      event.preventDefault();
      onSubmit({ title, priority, users: users.split(","), hours, dueDate });
      

      setTitle("");
      setPriority("medium");
      setHours("0");
      setUsers("");
      setDueDate("")
    }
    
  }

  return (
    <div className="container p-5">
      <form onSubmit={handleSubmit}>
        <div>
          <p>Logged in: {Cookies.get("user_email")}</p>
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
            onClick={dbDelete}
          >
            Delete Task
          </button>
          <button
            className="btn btn-primary"
            onClick={dbEdit}
          >
            Modify Task
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
