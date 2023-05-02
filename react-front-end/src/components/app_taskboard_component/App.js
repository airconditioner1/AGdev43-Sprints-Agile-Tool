import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from "js-cookie";
import "./taskboard.css";
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';


function TaskForm({ onSubmit, setTasks }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");
  const [users, setUsers] = useState("");
  const [hours, setHours] = useState("0");
  const [dueDate, setDueDate] = useState("");

  loadTasks();

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
     if (title === "" || dueDate === "" || hours == 0 || users === "" ){
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
  function dbDelete() {
    let title = prompt("Enter the title for the deleting task: ");

      if(title===null){
        return;
      }

      let input_query = `DELETE FROM Task WHERE \`Task\`.\`Title\` = '${title}'`;
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
  function dbEdit(){
    alert("modifying task!");
    let oldTitle = prompt("Enter the Old Title: "); // the value of the "Title" column in the row you want to update
    let oldDesc = prompt("Enter the Old assigned users: "); // the value of the "Desc" column in the row you want to update

    let newTitle = prompt("Enter the NEW Title (or blank to not change): "); // the new value for the "Title" column
    let newDesc = prompt("Enter the NEW assigned users (or blank to not change)[seperated by commas]: ");  // the new value for the "Desc" column
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
    if (title === "" || dueDate === "" || hours == 0 || users === ""){
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
          {/* <p>Logged in: {Cookies.get("user_email")}</p> */}
          <h1 className="h1">Task Form</h1>
          <br></br>
          <label
            style={{
              marginTop: 20,
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
            className="formstuff"
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
        <div className="formstuff">
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
          <label className="formstuff" style={{marginLeft:30}}>
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
          <label className="formstuff">
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
          <label className="formstuff">
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
            className="buttonStyle"
            type="submit"
            onClick={dbstuffSend}
          >
            Add Task
          </button>
          <button
            className="buttonStyle"
            onClick={dbDelete}
          >
            Delete Task
          </button>
          <button
            className="buttonStyle"
            onClick={dbEdit}
          >
            Modify Task
          </button>
          <button
            className="buttonStyle"
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
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  const sortTasks = (field) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getSortIcon = (field) => {
    if (field === sortField) {
      return sortDirection === 'asc' ? <FaSortUp /> : <FaSortDown />;
    } else {
      return <FaSort />;
    }
  };

  const sortedTasks = tasks.sort((a, b) => {
    if (sortField) {
      const fieldValueA = a[sortField];
      const fieldValueB = b[sortField];
      if (fieldValueA < fieldValueB) {
        return sortDirection === 'asc' ? -1 : 1;
      } else if (fieldValueA > fieldValueB) {
        return sortDirection === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  });

  return (
    <div className="container-fluid">
      <div>
        <h1 className="h1" style={{ marginTop: 150 }}>Tasks Table</h1>
      </div>
      <table margin="30px" className="table table-bordered">
        <thead>
          <tr>
            <th className="formstuff" onClick={() => sortTasks('Title')}>
              Title {getSortIcon('Title')}
            </th>
            <th className="formstuff" onClick={() => sortTasks('Priority')}>
              Priority {getSortIcon('Priority')}
            </th>
            <th className="formstuff" onClick={() => sortTasks('Hours')}>
              Hours {getSortIcon('Hours')}
            </th>
            <th className="formstuff" onClick={() => sortTasks('Desc')}>
              Users {getSortIcon('Desc')}
            </th>
            <th  className="formstuff" onClick={() => sortTasks('DueDate')}>
              Due Date {getSortIcon('DueDate')}
            </th>
            <th className="formstuff" onClick={() => sortTasks('Status')}>
              Status {getSortIcon('Status')}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedTasks.map((task, index) => (
            <tr key={index}>
              <td className="formstuff">{task.Title}</td>
              <td className="formstuff">{task.Priority}</td>
              <td className="formstuff">{task.Hours}</td>
              <td className="formstuff">{task.Desc}</td>
              <td className="formstuff">{task.DueDate}</td>
              <td className="formstuff">{task.Status}</td>
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


  const [showTaskForm, setShowTaskForm] = useState(false);
  const toggleTaskForm = () => {
    setShowTaskForm(!showTaskForm);
  };

  if (Cookies.get("authenticated") === "true") {
    // return (
    //   <div class="display-container">
    //     <div class="Form">
    //       <TaskForm setTasks={setTasks} onSubmit={handleTaskSubmit} />
    //     </div>
    //     <div class="Table">
    //       <TaskTable tasks={tasks} />
    //     </div>
    //   </div>
    // );
    return (
      <div className="display-container">
        <button onClick={toggleTaskForm}>Toggle TaskForm</button>
        {showTaskForm && (
          <div className="Form">
            <TaskForm setTasks={setTasks} onSubmit={handleTaskSubmit} />
          </div>
        )}
        <div className="Table">
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
