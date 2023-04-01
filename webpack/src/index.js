import './style.css';
/*eslint-disable*/ 
import {
  addList, removeList, toggleList, editList,
} from './add-remove.js';
import { updateItem, clearAllCompleted } from './interactive.js';


const toDoList = JSON.parse(localStorage.getItem('storageToDoList')) || [];
const enterKey = document.querySelector('.enter-key');
export const newListInput = document.querySelector('.add-input');
export const ul = document.querySelector('ul');
/*eslint-disable*/ 
export let count;

export const displayItem = () => {
  toDoList.forEach((list) => {
    const li = `<li id = ${list.id}><div><input type="checkbox" name="check" class="checkbox"><span contenteditable="true">${list.description}</span></div><div><i class="fas fa-ellipsis-v fa-1x"></i></div></li>`;
    ul.innerHTML += li;
  });
};

export const getCountValue = () => {
  if (toDoList.length === 0) {
    count = 1;
  } else if (toDoList[toDoList.length - 1].index >= 1) {
    count = toDoList[toDoList.length - 1].index + 1;
  } else {
    count = 1;
  }
};

enterKey.addEventListener('click', () => {
  if (newListInput.value.length > 0) {
    addList(toDoList);
    count += 1;
  }
});

newListInput.addEventListener('keydown', (event) => {
  if (newListInput.value.length > 0) {
    if (event.key === 'Enter') {
      addList(toDoList);
      count += 1;
    }
  }
});

getCountValue();
displayItem();
editList(toDoList);
removeList(toDoList);
toggleList();
updateItem(toDoList);
clearAllCompleted(toDoList);