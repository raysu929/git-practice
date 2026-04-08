class todoManager {
  constructor() {
    this.allTasks = [];
  }

  createTask(title, notes, focus){
    const newEntry = {
      title: title, 
      notes: notes, 
      focus: focus,
      id: Date.now()
    }
    this.allTasks.push(newEntry);

    console.log("current tasks:", this.allTasks);
  }
}

const myApp = new todoManager();
