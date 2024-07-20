document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a task
  function addTask() {
      const taskText = taskInput.value.trim();

      if (taskText === "") {
          alert("Please enter a task");
          return;
      }

      // Create new task elements
      const li = document.createElement('li');
      li.textContent = taskText;

      const removeBtn = document.createElement('button');
      removeBtn.textContent = "Remove";
      removeBtn.className = 'remove-btn';
      removeBtn.onclick = () => {
          taskList.removeChild(li);
      };

      li.appendChild(removeBtn);
      taskList.appendChild(li);

      // Clear the input field
      taskInput.value = '';
  }

  // Add event listeners
  addButton.addEventListener('click', addTask);
  taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
          addTask();
      }
  });
});