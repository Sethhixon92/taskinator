var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");
var taskIdCounter = 0;

var taskFormHandler = function(event) {
     event.preventDefault();
     var taskNameInput = document.querySelector("input[name='task-name']").value;
     var taskTypeInput = document.querySelector("select[name='task-type']").value;

     // package up data as an object
     var taskDataObj = {
          name: taskNameInput,
          type: taskTypeInput
     };
     // check if input values are empty strings
     if (!taskNameInput || !taskTypeInput) {
          alert("You need to fill out the task form!");
          return false;
     }
     formEl.reset();
     // send it as an arguement to createTaskEl
     createTaskEl(taskDataObj);
    };
    var createTaskAction = function(taskId) {
         var actionContainerEl = document.createElement("div");
         actionContainerEl.className = "task-actions";
         // create a edit button
         var editButtonEl = document.createElement("button");
         editButtonEl.textContent = "Edit";
         editButtonEl.className = "btn edit-btn";
         editButtonEl.setAttribute("data-rtask-id", taskId);

         actionContainerEl.appendChild(editButtonEl);

         //create delete button
         var deleteButtonEl = document.createElement("button");
         deleteButtonEl.textContent = "Delete";
         deleteButtonEl.className = "btn delete-btn";
         deleteButtonEl.setAttribute("data-task-id", taskId);

         actionContainerEl.appendChild(deleteButtonEl);
         
         return actionContainerEl;
    }
    

     var createTaskEl = function(taskDataObj) {
     // create list item
     var listItemEl = document.createElement("li");
     listItemEl.className = "task-item";

     //add task id as a custom attribute
     listItemEl.setAttribute("data-task-id", taskIdCounter);

     var taskInfoEl = document.createElement("div");
     taskInfoEl.className = "task-info";
     taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + "</span>";
     listItemEl.appendChild(taskInfoEl);

     tasksToDoEl.appendChild(listItemEl);

     //increase task counter for next unique id
     taskIdCounter++;
     
     //create div to hold  task info and add to list item
     var taskInfoEl = document.createElement("div");
     //give it a class name
     taskInfoEl.className = "task-info";
     //add HTML contnet to div 
     taskInfoEl.innerHTML = "<h3 clsass='task-name'>" + taskDataObj.name + "</h3><span class= 'task-type'>" + taskDataObj.type + "</span>";
     listItemEl.appendChild(taskInfoEl);

     //add entire list item to list
     tasksToDoEl.appendChild(listItemEl);
 };
     
formEl.addEventListener("submit", taskFormHandler);