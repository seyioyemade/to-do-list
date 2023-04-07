jest.mock('../index.js');

import { testFunctions } from '../index.js';

test('Editing a task', () => {

  const list = {
    index: 2,
    description: 'reading books',
    completed: false,
  }

  const newDescription = 'sweeping the floor';

  const result = [
    {
    index: 1,
    description: 'going to the restaurant',
    completed: false,
    },
    {
      index: 2,
      description: 'sweeping the floor',
      completed: false,
    },
  ]
  
  const editItem = new testFunctions();
  
  expect(editItem.editTask(list, newDescription)).toStrictEqual(result);
});

test('Updating an item completed status', () => {

  const list = {
    index: 1,
    description: 'going to the restaurant',
    completed: false,
  }

  const result = [
    {
      index: 1,
      description: 'going to the restaurant',
      completed: true,
      },
  
      {
        index: 2,
        description: 'reading books',
        completed: false,
      },
  ];

  const updateStatus = new testFunctions();
  
  expect(updateStatus.updateCompletedStatus(list)).toStrictEqual(result);

});


test('Clear all completed tasks', () => {

  const list = {
    index: 3,
    description: 'washing clothes',
    completed: true,
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
  ]

  const clearAll = new testFunctions();
  
  expect(clearAll.clearAllCompletedStatus(list)).toStrictEqual(result);

});