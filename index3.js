//project module
//project creator: addProject() gets called once in the beginning to add default project
                        //adds empty project with methods like rename, addTodo/todoobjectcreator living on it
  
  //empty project object that stores todos in todos = [];
  //methods: add todo (what previously was addProject)
    //todos are also objects with methods (see previous version)


function myProjects() {
        let projects = []:
        const project = {
                init: function (title) {
                        this.title = title;
                        this.todos = [];
                        return this;
                }
                createTodoItem: function (tas, desc, dDate) {
                        const todoItem = Object.create(todoItem).init(tas, desc, dDate)
                }
        }

        const toDoItem = {
                init: function (task, description, dueDate) {
                        this.task = task;
                        this.description = description;
                        this.dueDate = dueDate;
                       // this.priority = projects.length + 1;
                        return this;
                }
                alterTask: (newTask) => { this.task = newTask };
                alterDescription: (newDescription) => { this.description = newDescription };
                alterDueDate: (newDueDate) => { this.dueDate = newDueDate };
                setPriority: (newPriority) => { this.priority = newPriority };     
        }
        
        const createProject = function (title) {
                const newProject = Object.create(project).init(title);
                projects.push(newProject)
        }
        createProject('Default Project');
        return {createProject }
 }