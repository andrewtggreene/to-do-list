const taskList = document.getElementById('task-list');
const todoForm = document.getElementById('todo-form');
const newTaskInput = document.getElementById('new-task');

// Function to create a new task list item
function createTaskItem(task) {
  const listItem = document.createElement('li');
  const taskText = document.createElement('span');
  taskText.classList.add('task-text');
  taskText.textContent = task.text;
  
  const progressBar = document.createElement('progress');
  progressBar.value = task.progress;
  progressBar.max = 100;

  const updateButton = document.createElement('button');
  updateButton.classList.add('update-progress');
  updateButton.textContent = 'Update';

  listItem.appendChild(taskText);
  listItem.appendChild(progressBar);
  listItem.appendChild(updateButton);

  // Optional: Add event listener for update button (implementation details omitted)
  updateButton.addEventListener('click', () => {
    // Update progress value based on user interaction here
  });

  return listItem;
}

// Function to load tasks from local storage (if available)
function loadTasks() {
  const storedTasks = localStorage.getItem('toDoList');
  if (storedTasks) {
    const tasks = JSON.parse(storedTasks);
    tasks.forEach(task => {
      taskList.appendChild(createTaskItem(task));
    });
  }
}

// Function to add a new task
function addTask(taskText) {
  const newTask = {
    text: taskText,
    progress: 0, // Initial progress set to 0
  };
  const taskItem = createTaskItem(newTask);
  taskList.appendChild(taskItem);

  // Update local storage with the new task list
  const tasks = JSON.parse(localStorage.getItem('toDoList')) || [];
  tasks.push(newTask);
  localStorage.setItem('toDoList', JSON.stringify(tasks));

  // Clear the input field
  newTaskInput.value = '';
}

// Event listener for form submission
todoForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission behavior
  const newTaskText = newTaskInput.value.trim();
  if (newTaskText) {
    addTask(newTaskText);
  }
});

// Load tasks from local storage on page load
loadTasks();
