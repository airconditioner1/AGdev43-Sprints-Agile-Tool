let btnCreateATask = document.getElementById("createATask")
let taskFormBox = document.getElementById("box-taskForm")
function createATask() {
    btnCreateATask.innerText = "Creating Task"
    taskFormBox.innerHTML = `<p>Hello world</p>`

}

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


