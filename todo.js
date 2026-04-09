class todoManager {
  constructor() {
    this.allTasks = [];
    this.allTasks = JSON.parse(localStorage.getItem('myTasks')) || [];
  }
//task info
  createTask(title, notes, focus){
    const newEntry = {
      title: title, 
      notes: notes, 
      focus: focus,
      id: Date.now()
    }
    this.allTasks.push(newEntry);

    console.log("current tasks:", this.allTasks);
    localStorage.setItem('myTasks', JSON.stringify(this.allTasks));
  }
}

const myApp = new todoManager();
