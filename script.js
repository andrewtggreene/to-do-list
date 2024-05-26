const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// Function to add a new task to the list
function addNewTask() {
  const newTaskValue = newTaskInput.value.trim(); // Trim whitespace
  if (newTaskValue) {
    const newTaskItem = document.createElement('li');
    newTaskItem.textContent = newTaskValue;

    // Create a button to mark task as complete
    const completeButton = document.createElement('button');
    completeButton.textContent = '✔';
    completeButton.classList.add('complete-btn');
    completeButton.addEventListener('click', function() {
      newTaskItem.classList.toggle('completed');
    });

    // Create a button to remove the task
    const removeButton = document.createElement('button');
    removeButton.textContent = '❌';
    removeButton.classList.add('remove-btn');
    removeButton.addEventListener('click', function() {
      taskList.removeChild(newTaskItem);
    });

    // Add buttons and new task content to the list item
    newTaskItem.appendChild(completeButton);
    newTaskItem.appendChild(removeButton);
    taskList.appendChild(newTaskItem);

    // Clear the input field after adding the task
    newTaskInput.value = '';
  }
}

// Add click event listener to the "Add Task" button
addTaskButton.addEventListener('click', addNewTask);
