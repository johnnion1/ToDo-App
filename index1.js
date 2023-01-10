const myProjects = (function () {
//  Store projects
        const projects = [];        
// Display projects
        const displayTitles = () => {
                const titles = projects.map(project => project.title);
                console.log(titles)
        }
        const showProject = (index) => {
                projects[index].showTitle();
                projects[index].showDescription(); 
                projects[index].showDueDate(); 
        }
//  For creating objects (projects)
        class Project {
                title = 'Add a title...';
                description = 'Add a description...';
                dueDate = 'Add due date...';
                constructor() {
                       this.title = this.addTitle();
                }
                addTitle() {
                        const titl = prompt('Give your project a title!', 'Cooking');
                        return titl;
                }
                showTitle() {
                        console.log(this.title);
                }
                showDescription() {
                        console.log(this.description);
                }
                showDueDate() {
                        console.log(this.dueDate);
                }
                addDescription() {
                        const descr = prompt('Add description: ', 'Broil flesh, eggs, vegs');
                        return descr;
                }
  // --> dueDate()       addDueDate() {                         to (re)set due date
                        const dDate = prompt('When is it due? ', 'TUES')
                        return dDate;
                }
        }
        class ToDoProject extends Project {
                color = 'default';
                constructor() {
                        super()
                        this.description = this.addDescription();
                        this.dueDate = this.addDueDate();
                }
                setColor () { 
                        const col = prompt('Pick a color', 'orange');
                        this.color = col;
                        console.log(this.color)
                } 
        }

        const changeProject = (index, feature) => {
//  
        }

        const addProject = () => {
                const todo = new ToDoProject;
                projects.push(todo);
        }

        return {
                addProject,
                displayTitles,
                showProject,
                changeProject,
        }
})();