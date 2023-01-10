//project module
//project creator: addProject() gets called once in the beginning to add default project
                        //adds empty project with methods like rename, addTodo/todoobjectcreator living on it
  
  //empty project object that stores todos in todos = [];
  //methods: add todo (what previously was addProject)
    //todos are also objects with methods (see previous version)


const myProjects = (function () {
        let projects = [];
        const project = {
                init: function (title) {
                        this.title = title;
                        this.todos = [];
                        return this;
                },
                createTodoItem: function (tas, desc, dDate) {
                        const todoItem = Object.create(toDoItem).init(tas, desc, dDate)
                        this.todos.push(todoItem)
                },
        }

        const toDoItem = {
                init: function (task, description, dueDate) {
                        this.task = task;
                        this.description = description;
                        this.dueDate = dueDate;
                        // this.priority = projects.length + 1;
                        return this;
                },
                alterTask: function (newTask) { this.task = newTask },
                alterDescription: function (newDescription) { this.description = newDescription },
                alterDueDate: function (newDueDate) { this.dueDate = newDueDate },
                setPriority: function (newPriority) { this.priority = newPriority },
        }
        
        const createProject = function (title) {
                return Object.create(project).init(title);
        }
        const addProject = (title) => {
                const newProject = createProject(title);
                projects.push(newProject);
        }
        const getProjects = () => projects;
       // const getProject = (project) => projects[project];

        //to see what projects looks like after certain actions, wont be needed after UI is done!
        const printProject = (project) => { console.log(getProject(project)) /* console.table? */ };
        
        addProject('Default Project');
        return { addProject, getProjects, printProject }
})();
 
function projectController() {
        const projects = myProjects.getProjects();
 }