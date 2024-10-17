document.getElementById('addButton').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
  
    const taskList = document.getElementById('taskList');
    
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        listItem.classList.toggle('completed');
    });

   
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(listItem);
    });
    listItem.prepend(checkbox);
    listItem.appendChild(deleteButton);
    
    taskList.appendChild(listItem);
    
    taskInput.value = '';
}
