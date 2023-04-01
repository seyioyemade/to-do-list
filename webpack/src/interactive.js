export const updateItem = (arr) => {
  const checkbox = document.querySelectorAll('ul input');

  checkbox.forEach((item) => {
    const siblings = item.parentElement.parentElement.parentElement.children;

    item.addEventListener('change', (event) => {
      if (event.target.checked) {
        item.nextElementSibling.classList.add('checkbox-effect');

        for (let i = 0; i < siblings.length; i += 1) {
          if (siblings[i] === item.parentElement.parentElement) {
            const index = arr.findIndex((obj) => obj.id === Number(siblings[i].id));
            arr[index].completed = true;
            localStorage.setItem('storageToDoList', JSON.stringify(arr));
          }
        }
      } else {
        item.nextElementSibling.classList.remove('checkbox-effect');

        for (let i = 0; i < siblings.length; i += 1) {
          if (siblings[i] === item.parentElement.parentElement) {
            const index = arr.findIndex((obj) => obj.id === Number(siblings[i].id));
            arr[index].completed = false;
            localStorage.setItem('storageToDoList', JSON.stringify(arr));
          }
        }
      }
    });
  });
};

export const clearAllCompleted = (arr) => {
  const clearBtn = document.querySelector('.btn-div button');
  const ul = document.querySelector('ul');
  clearBtn.addEventListener('click', () => {
    arr = arr.filter((item) => item.completed === false);

    ul.innerHTML = '';

    window.location.reload();

    arr.forEach((item) => {
      const li = `<li id = ${item.id}><div><input type="checkbox" name="check" class="checkbox"><span contenteditable="true">${item.description}</span></div><div><i class="fas fa-ellipsis-v fa-1x"></i></div></li>`;
      ul.innerHTML += li;
    });

    localStorage.setItem('storageToDoList', JSON.stringify(arr));
  });
};