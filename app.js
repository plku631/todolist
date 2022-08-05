var taskInput = document.getElementById("newlist"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incompletelist"); 
var completedTasksHolder = document.getElementById("completedlist"); 
var createNewTaskElement = function(taskString) {

	var listItem = document.createElement("li");

	var checkBox = document.createElement("input"); // checkbox
	var label = document.createElement("label");
	var editInput = document.createElement("input"); // text
	var editButton = document.createElement("button");
	var deleteButton = document.createElement("button");


	checkBox.type = "checkbox";
	editInput.type = "text";

	editButton.innerText = "編輯";
	editButton.className = "edit";
	deleteButton.innerText = "刪除";
	deleteButton.className = "delete";

	label.innerText = taskString;

	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);

	return listItem;
}

var addTask = function() {

	var listItem = createNewTaskElement(taskInput.value);

	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);

	taskInput.value = "";
}


var editTask = function() {


	var listItem = this.parentNode;

	var editInput = listItem.querySelector("input[type=text");
	var label = listItem.querySelector("label");

	var containsClass = listItem.classList.contains("editMode");
  
  listItem.classList.toggle("editMode");
  label.innerText = editInput.value;
  editInput.value = ""
  

}


var deleteTask = function() {

	var listItem = this.parentNode;
	var ul = listItem.parentNode;

	ul.removeChild(listItem);
}


var taskCompleted = function() {

	var listItem = this.parentNode;
	completedTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskIncomplete);
}

var taskIncomplete = function() {

	var listItem = this.parentNode;
	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {

	var checkBox = taskListItem.querySelector("input[type=checkbox]");
	var editButton = taskListItem.querySelector("button.edit");
	var deleteButton = taskListItem.querySelector("button.delete");

	editButton.onclick = editTask;

	deleteButton.onclick = deleteTask;

	checkBox.onchange = checkBoxEventHandler;
}


addButton.addEventListener("click", addTask);


