/*eslint-disable*/

export class testFunctions {

  constructor() {
    this.toDoList = [
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
    ];
  }

  addTask(todo) {
    this.toDoList.push(todo);
    return this.toDoList;
  }

  removeTask(list) {

    if (this.toDoList.length === 0) {
      return this.toDoList;
      
    }else if (this.toDoList.length === 1) {
      toDoList.pop();
      return this.toDoList;

    }else{
      for (let i = 0; i < this.toDoList.length; i += 1) {

        if (this.toDoList[i].index === list.index){
          this.toDoList.splice(i, 1);
        }
  
    }
      return this.toDoList;
    }
   
  }

  editTask(list, newDescription) {

    for (let i = 0; i < this.toDoList.length; i += 1) {

      if (this.toDoList[i].index === list.index){
        this.toDoList[i].description = newDescription;
      }
    }
    return this.toDoList;
  }

  updateCompletedStatus(list) {
    for (let i = 0; i < this.toDoList.length; i += 1) {

      if (this.toDoList[i].index === list.index){
        this.toDoList[i].completed = true;
      }
    }
    return this.toDoList;
  }

  clearAllCompletedStatus(item) {

  this.toDoList.push(item)

   const filterred = this.toDoList.filter((item) => item.completed === false);

    return filterred;
  }

}


