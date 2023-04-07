jest.mock('../index.js');

import { testFunctions } from '../index.js';
// import { toDoList } from '../index.js';

describe('Methods for adding and removing a task', () => {

  test('Adding a new task', () => {

    const list = {
      index: 3,
      description: 'going to the restaurant',
      completed: false,
    }

    const result = [
      {
      index: 1,
      description: 'going to the restaurant',
      completed: false,
      },
      {
        index: 2,
        description: 'reading books',
        completed: false,
      },
      {
        index: 3,
        description: 'going to the restaurant',
        completed: false,
      },
    ]
    
    const addItem = new testFunctions();
    
    expect(addItem.addTask(list)).toStrictEqual(result);
  });


  test('Removing a task', () => {

    const list = {
      index: 1,
      description: 'going to the restaurant',
      completed: false,
    }

    const result = [
      {
        index: 2,
        description: 'reading books',
        completed: false,
      },
    ]
    
    const removeItem = new testFunctions();
    
    expect(removeItem.removeTask(list)).toStrictEqual(result);
  });

});