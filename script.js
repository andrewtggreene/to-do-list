const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const taskPoints = document.getElementById('points');
const pointTracker = document.getElementById('pointTracker');
var points = 0;

// Function to add a new task to the list
function addNewTask() {
  const newTaskValue = newTaskInput.value.trim(); // Trim whitespace
  const newTaskPoint = taskPoints.value.trim();
  if (newTaskValue && taskPoints) {
    const newTaskItem = document.createElement('li');
    newTaskItem.id = 'task-list li';
    newTaskItem.textContent = newTaskValue + ': ' + newTaskPoint;
    // Create a button to mark task as complete
    const completeButton = document.createElement('button');
    completeButton.id = 'completeButton';
    completeButton.textContent = 'Complete';
    completeButton.classList.add('complete-btn');
    completeButton.addEventListener('click', function() {
      points += Number(newTaskPoint);
      pointTracker.textContent = 'Points: ' + points.toString();
      newTaskItem.classList.toggle('completed');
      var c = document.createDocumentFragment();
      for (var i = 0; i < 100; i++){
        var styles = 'transform: translate3d(' + (random(500)-250) + 'px, ' + (random(200) - 150) + 'px, 0) rotate(' + random(360) + 'deg);\
        background: hsla(' + random(360) + ', 100%, 50%, 1);\
        animation: bang 700ms ease-out forwards;\
        opacity: 0';
        var e = document.createElement("i");
        e.style.cssText = styles.toString();
        c.appendChild(e);
      }
      completeButton.append(c);
    });

    // Create a button to remove the task
    const removeButton = document.createElement('button');
    removeButton.id = 'removeButton';
    removeButton.textContent = 'Delete';
    removeButton.classList.add('remove-btn');
    removeButton.addEventListener('click', function() {
      var c = document.createDocumentFragment();
      for (var i = 0; i < 100; i++){
        var styles = 'transform: translate3d(' + (random(500)-250) + 'px, ' + (random(200) - 150) + 'px, 0) rotate(' + random(360) + 'deg);\
        background: hsla(' + random(360) + ', 100%, 50%, 1);\
        animation: bang 700ms ease-out forwards;\
        opacity: 0';
        var e = document.createElement("i");
        e.style.cssText = styles.toString();
        c.appendChild(e);
      }
      removeButton.append(c);
      function removeButtons(){
        taskList.removeChild(newTaskItem);
      }
      setTimeout(removeButtons, 500);
    });

    // Add buttons and new task content to the list item
    newTaskItem.appendChild(completeButton);
    newTaskItem.appendChild(removeButton);
    taskList.appendChild(newTaskItem);

    // Clear the input field after adding the task
    newTaskInput.value = '';
    taskPoints.value = '';
  }
}

// Add click event listener to the "Add Task" button
addTaskButton.addEventListener('click', addNewTask);

function random(max){
  return Math.random() * (max -0) + 0;
}