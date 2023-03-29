import './style.css';

const ul = document.querySelector('ul');

const toDoList = [
  {
    description: 'wash the dishes',
    completed: [true, false],
    index: 0,
  },
  {
    description: 'sweep the floor',
    completed: [true, false],
    index: 1,
  },
  {
    description: 'visit the mall',
    completed: [true, false],
    index: 2,
  },
];

const loopArray = () => {
  for (let i = 0; i < toDoList.length; i += 1) {
    const li = `<li><div><input type="checkbox" name="check" class="checkbox"><span>${toDoList[i].description}</span></div> <i class="fas fa-ellipsis-v fa-1x"></i></li>`;
    ul.innerHTML += li;
  }
};

loopArray();
