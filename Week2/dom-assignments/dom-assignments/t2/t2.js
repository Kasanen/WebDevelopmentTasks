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

for (let i = 0; i < todoList.length; i++) {
  const newli = document.createElement('li');

  const newinput = document.createElement('input');
  newinput.type = 'checkbox';
  newinput.id = todoList[i].id;
  newinput.checked = todoList[i].completed;

  const newlabel = document.createElement('label');
  newlabel.htmlFor = todoList[i].id;
  newlabel.textContent = todoList[i].task;

  newli.appendChild(newinput);
  newli.appendChild(newlabel);
  ulist.appendChild(newli);
}
