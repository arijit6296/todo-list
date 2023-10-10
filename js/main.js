
let taskArray = JSON.parse(localStorage.getItem('arrayItem'))||[];

function taskAdd() {
  let valueTitle = document.getElementById("Title").value;
  let valueTask = document.getElementById("Task").value;
  let clearValue = document.getElementById("Title");
  let clearTask =document.getElementById("Task");
  if(valueTitle !="" && valueTask !=""){
    const taskObject = { id: Date.now(), title: valueTitle, task: valueTask };
    taskArray.push(taskObject);
    clearValue.value ="";
    clearTask.value ="";
    console.log(taskArray);
    const saveArray = JSON.stringify(taskArray);
    localStorage.setItem('arrayItem', saveArray);
  }else{
    alert("Enter the value")
  }
  
  viewTask();
}
const taskList = document.getElementById("todo-items");
function viewTask() {
  taskList.innerHTML = "";
  let storageItems = JSON.parse(localStorage.getItem('arrayItem'));
  storageItems.forEach((task) => {
    const listItem = document.createElement("div");
    listItem.classList.add("todo-list");
    listItem.innerHTML = `<p>Title: ${
      task.title
    }</p> <br> <h5>${Date()}</h5> <h4>Task: ${
      task.task
    }</h4><br><div class="icons">
    <ul>
        <li><button type="button" class="btn2"><i class="fa fa-pencil-square-o"
                    aria-hidden="true"></i></button></li>
        <li><button type="button" class="btn2" onclick="deleteTask(${
          task.id
        })" id="btn2"><i class="fa fa-trash" aria-hidden="true"></i></button></li>
    </ul>
</div>`;
    taskList.appendChild(listItem);
  });
}

function deleteTask(task) {
  const taskIndex = taskArray.findIndex(elm=>elm.id === task);
if(taskIndex!==-1){
  taskArray.splice(taskIndex, 1);
  taskList.removeChild(taskList.children[taskIndex]);
localStorage.setItem('arrayItem', JSON.stringify(taskArray))
}
}
viewTask();
