let taskArray = [];

function taskAdd() {
  const valueTitle = document.getElementById("Title").value;
  const valueTask = document.getElementById("Task").value;
  if(valueTitle !="" && valueTask !=""){
    const taskObject = { id: Date.now(), title: valueTitle, task: valueTask };
    taskArray.push(taskObject);
    console.log(taskArray);
  }else{
    alert("Enter the value")
  }
  viewTask();
}
const taskList = document.getElementById("todo-items");
function viewTask() {
  taskList.innerHTML = "";
  taskArray.forEach((task) => {
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
  taskArray.splice(0, 1);
  taskList.removeChild(taskList.firstElementChild);
}
