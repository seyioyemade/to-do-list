/*eslint-disable*/ 
import {
  count, ul, newListInput, getCountValue,
} from './index.js';
import { updateItem, clearAllCompleted } from './interactive.js';

export const toggleList = () => {
  const span = document.querySelectorAll('ul span');

  span.forEach((item) => {
    item.addEventListener('click', () => {
      item.parentElement.parentElement.classList.add('bg-color');

      const siblings = item.parentElement.parentElement.parentElement.children;

      for (let i = 0; i < siblings.length; i += 1) {
        if (siblings[i] !== item.parentElement.parentElement) {
          if (siblings[i].classList.contains('bg-color')) {
           siblings[i].classList.remove('bg-color');
          } 

          if (siblings[i].lastElementChild.firstElementChild.classList.contains('fa-trash')) {
            siblings[i].lastElementChild.firstElementChild.classList.remove('fa-trash');
            siblings[i].lastElementChild.firstElementChild.classList.add('fa-ellipsis-v');
          }
        }

        if (siblings[i] === item.parentElement.parentElement) {
          if (siblings[i].lastElementChild.firstElementChild.classList.contains('fa-ellipsis-v')) {
            siblings[i].lastElementChild.firstElementChild.classList.remove('fa-ellipsis-v');
            siblings[i].lastElementChild.firstElementChild.classList.add('fa-trash');
          }
          if (siblings[i].lastElementChild.firstElementChild.classList.contains('fas')) {
            siblings[i].lastElementChild.firstElementChild.classList.remove('fas');
            siblings[i].lastElementChild.firstElementChild.classList.add('fa');
          }
        }
      }
    });
  });
};

export const removeList = (arr) => {
  const span = document.querySelectorAll('ul span');

  span.forEach((item) => {
    const trash = item.parentElement.nextElementSibling.lastElementChild;

    trash.addEventListener('click', () => {
      if (trash.classList.contains('fa-trash')) {
        const siblings = item.parentElement.parentElement.parentElement.children;

        for (let i = 0; i < siblings.length; i += 1) {
          if (siblings[i] === item.parentElement.parentElement) {
            const index = arr.findIndex((obj) => obj.id === Number(siblings[i].id));
            arr.splice(index, 1);
            item.parentElement.parentElement.classList.add('hide');
            arr.forEach((obj) => {
              if (obj.index > index) {
                obj.index -= 1;
              }
            });

            localStorage.setItem('storageToDoList', JSON.stringify(arr));
            getCountValue();
          }
        }
      }
    });
  });
};

export const editList = (arr) => {
  const span = document.querySelectorAll('ul span');

  span.forEach((item) => {
    item.addEventListener('keyup', (event) => {
      const siblings = item.parentElement.parentElement.parentElement.children;

      for (let i = 0; i < siblings.length; i += 1) {
        if (siblings[i] === item.parentElement.parentElement) {
          const index = arr.findIndex((obj) => obj.id === Number(siblings[i].id));
          arr[index].description = event.target.innerHTML;
        }
      }

      localStorage.setItem('storageToDoList', JSON.stringify(arr));
    });
  });
};

export const addList = (arr) => {
  const list = {
    id: Math.floor(Math.random() * 10000000),
    description: newListInput.value,
    completed: false,
    index: count,
  };

  const li = `<li id = ${list.id}><div><input type="checkbox" name="check" class="checkbox">
  <span contenteditable="true">${list.description}</span></div><div><i class="fas fa-ellipsis-v fa-1x"></i></div></li>`;
  ul.innerHTML += li;
  newListInput.value = '';
  arr.push(list);
  localStorage.setItem('storageToDoList', JSON.stringify(arr));

  toggleList();
  removeList(arr);
  editList(arr);
  updateItem(arr);
  clearAllCompleted(arr)
};
