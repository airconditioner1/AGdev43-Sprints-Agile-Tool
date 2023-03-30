let btnCreateATask = document.getElementById("createATask")
let taskFormBox = document.getElementById("box-taskForm")
function createATask() {
    // btnCreateATask.innerText = "Creating Task"
    taskFormBox.innerHTML = `          
          <form id="taskForm-el" method="post">            
            <br><label for="title">Task Title:</label><br>
            <input class="taskInput" type="text" id="title" name="title" placeholder="type your task..."/><br>
            <label for="time">Hours To Complete:</label><br>
            <select name="languages" id="hours">
              <option value="null" aria-placeholder="Choose a time estimate (hrs)"></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="SplitFurther">Task too long, need to split task into futher subtask.</option>
            </select><br>
            <label for="priority">Priority:</label><br>
            <select name="languages" id="priority"> 
              <option value="null" aria-placeholder="select a priority"></option>
              <option value="!">!</option>
              <option value="!!">!!</option>
              <option value="!!!">!!!</option>
              <option value="Long term">Long term, no priority needed</option>
            </select>
            <label for="assign">Assigned Member:</label><br>
            <select name="users" id="users">
              <option value="null" aria-placeholder="Choose a person"></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="Long term">Long term, no priority needed</option>
            </select> <br><br>
            <input id="submit" type="submit" value="Create">
          </form> 
    `
}

const taskForm = document.getElementById("taskForm-el")
let tasks = []
const taskTable = document.getElementById("taskTableBody")
taskForm.addEventListener("submit", function() {
  // let currTask = []
  // let title = document.getElementById("title")
  // let time = document.getElementById("hours")
  // let priority = document.getElementById("priority")
  // let people = document.getElementById("users")
  // currTask.push(title.value)
  // currTask.push(time.value)
  // currTask.push(priority.value)
  // currTask.push(people.value)
  // tasks.push(currTask)

  taskTable.innerHTML += `<tr>
  <td>1,008</td>
  <td>random</td>
  <td>data</td>
  <td>placeholder</td>
  <td>text</td>
</tr>`
          //  `
          //   <tr>
          //     <td>${currTask[0]}</td>
          //     <td>placeholder</td>
          //     <td>irrelevant</td>
          //     <td>visual</td>
          //     <td>layout</td>
          //   </tr>
          // `
})

// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// var raw = JSON.stringify({
//   "hostname": "localhost",
//   "portnum": "43306",
//   "query": "some insert query that currently won't insert anything into the database"
// });

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
  
//   redirect: 'follow'
// };

// fetch("http://localhost:5000/api", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));



// let taskForm = document.getElementById("taskForm")

// taskForm.addEventListener('submit', function(e){
//     e.preventDefault()

//     var hours = document.getElementById("Hours").v
//     var priority = document.getElementById("priority")
//     var user = document.getElementById("users")

//     fetch('https://8131ddb0-1a83-459e-9758-ace5dbc6459f.mock.pstmn.io', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             hours: hours,
//             priority: priority,
//             user: user
//         })
//     })
//     .then(function(response){
//         return response.json
//     })
//     .then(function(data){
//         console.log(data)
//     })
// })


