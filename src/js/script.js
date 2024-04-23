// Todo: Function to add a new task
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskList = document.getElementById("taskList");

    // Create list item
    const li = document.createElement("li");

    // Create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", completeTask);

    // Create span for task text
    const span = document.createElement("span");
    span.textContent = taskText;

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", deleteTask);

    // Append elements to list item
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    // Append list item to task list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
  }
}

// Function to mark a task as completed
function completeTask(event) {
  const checkbox = event.target;
  const taskText = checkbox.nextElementSibling;

  if (checkbox.checked) {
    taskText.classList.add("completed");
  } else {
    taskText.classList.remove("completed");
  }
}

// Function to delete a task
function deleteTask(event) {
  const deleteButton = event.target;
  const li = deleteButton.parentElement;

  // Remove list item from task list
  li.remove();
}

// Add event listener to the "Add Task" button
document.getElementById("addTaskButton").addEventListener("click", addTask);