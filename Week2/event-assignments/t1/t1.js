// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const ulist = document.querySelector('ul');

function update() {
  ulist.innerHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    ulist.insertAdjacentHTML(
      'beforeend',
      `<li>
        <input type="checkbox" id="${todoList[i].id}" ${
        todoList[i].completed ? 'checked' : ''
      }>
        <label for="${todoList[i].id}">${todoList[i].task}</label>
        <button type="button" data-id="${todoList[i].id}">
          X
        </button>
      </li>`
    );
  }
  addEventListeners();
}

function addEventListeners() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const deleteboxes = document.querySelectorAll('button[type="button"]');

  // Check boxes
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
      const taskId = parseInt(this.id);
      const isChecked = this.checked;

      const todoItem = todoList.find(item => item.id === taskId);
      if (todoItem) {
        todoItem.completed = isChecked;
      }

      console.log(todoItem.id + ' status: ' + todoItem.completed);
    });
  });

  // Delete boxes
  deleteboxes.forEach(deletebox => {
    deletebox.addEventListener('click', function () {
      const taskId = parseInt(this.dataset.id);

      const index = todoList.findIndex(item => item.id === taskId);
      if (index !== -1) {
        todoList.splice(index, 1);
      }

      const liElement = this.parentElement;
      ulist.removeChild(liElement);

      console.log(todoList);
    });
  });
}

// Add button
const dialogBtn = document.querySelector('.add-btn');
const dialog = document.querySelector('dialog');
const form = document.querySelector('form');
const textInput = document.querySelector('input[type="text"]');

dialogBtn.addEventListener('click', () => {
  dialog.showModal();
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const lastIndex = todoList.length - 1;

  const newTask = {
    id: todoList[lastIndex].id + 1,
    task: textInput.value,
    completed: false,
  };
  todoList.push(newTask);

  textInput.value = '';
  dialog.close();
  update();
});

update();
