const myProjects = (function () {
        //STORAGE:   (change to projectStorage?) - check uselocalstorage
        const projects = [/* {title: 'test', description: 'testdesc', dueDate: 'WED'}, {title: 'Second item', description: 'First in array, but priority == 2', dueDate: 'FRI', priority: 2}, {title: 'First item', description: 'Second in array, but priority == 1', dueDate: 'WED', priority: 1}*/];
        //DISPLAY:
        let projectDisplay = [];
        const todoproject = {
                init: function (title, description, dueDate) {
                        this.title = title;
                        this.description = description;
                        this.dueDate = dueDate;
                        this.priority = projects.length + 1;
                        return this; //so Object.create(todoproject) and init call of newly created object can be chained 
                        // like so: const todo1 = Object.create(todoproject).init([tododata])  or    .init('clean', 'wash curtains, clean floor')
                },
                printTitle: function () {        //test method to be put into prototype of new object
                        //"use strict"
                        console.log('Title: ' + this.title);
                },
                printDescription: function () {
                        console.log('Description: ' + this.description);
                },
                printDueDate: function () {
                        console.log('Due date: ' + this.dueDate);
                },
                alterTitle: function (newTitle) {
                        this.title = newTitle;
                },
                alterDescription: function (newDescription) {
                        this.description = newDescription;
                },
                alterDueDate: function (newDueDate) {
                        this.dueDate = newDueDate;
                },
                setPriority: function (priority) {
                        this.priority = priority;
                },
                alterPriority: function (newPriority) {
                  if (newPriority > 0 && newPriority < projects.length + 1) {
                          let oldpriority = this.priority;
                          for (let i = 0; i < projects.length; i++) {
                                  if (projects[i].priority == newPriority) {
                                          console.log('test')
                                          projects[i].setPriority(oldpriority);
                                          this.setPriority(newPriority)
                                          return;
                                  }
                          }
                         /*  let swap = projects.filter(project => project.priority == newOrder) //.map(project => indexOf(project)) //.setImportance(oldpriority);
                          console.log(swap)  */    
                         /*        swap.priority = oldpriority;
                          console.log(swap) */
                          /* .priority = oldpriority; */ /* doesnt work */
                         /*  this.priority = newOrder; */
                        }
                },
                createChecklist: function () {
                        this.checklist = Object.create(checklist).init()
                },
        
        };
        const checklist/* or creator for checklistItem? */ = {
                init: function (/* checkItems */) {
                        this.items = [/* ...checkItems */];
                },
                printList: function () {
                        for (let i = 0; i < items.length; i++){
                                console.log(this.items[i])
                        }
                },
                addItem: function (item) {
                        this.items.push(item);
                },
                removeItem: function (index) {
                        this.items.slice(index, 1)
                },
        }                
        
        const addProject = (title, description, dueDate) => {              //to be called when clicking "Add" at the bottom of UI form
                //get tododata from form elements
                const newproject = Object.create(todoproject).init(title, description, dueDate)
            //    newproject.prototype.printdescr = function() { console.log(this.description)}
                projects.push(newproject);
                displayProjects();
        };

        /* const createProject = (//title, description, dueDate ) => {
                //'dummy' because later just pass data as array to addProject
                  //OR not? because could write form.title.getValue in here(but then should be in display / UI somewhere)
                        //no is dummy because otherwise projects wuold refer
                        //to display/UI for project creation
               
                let title = prompt('Enter title', 'Cleaning');
                let description = prompt('Enter description', 'Wash curtains, clean floors');
                let dueDate = prompt('Enter due date', 'FRI');
                // later, switch to getting data from form elements at 'Add' click event
                return [title, description, dueDate];      //  this [tododata] gets passed to Object.create(todoproject).init([tododata]
        }; */
        /* -> TO DISPLAY:
                 const displayOrderedTitles = () => {
                if (!projects[0]) { return 'Add a project to get started...'}
                let projectTitles = projects.sort((a, b) => a.priority > b. priority ? 1 : -1 ).map(project => project.title);
            //    let projectTitles = projects.map(project => project.title);  // projects.sort(a, b => a.priority < b. priority).map(project => project.title);
                projectTitles.forEach(title => console.log(title)); 
        };*/
        
        const displayProject = (projectIndex) => { //or reference by priority value? (-> UI)
                console.log(projects[projectIndex])
        }
        const changeDescription = (projectIndex) => {
                let newDescription = prompt('Description: ', projects[projectIndex].description);
                projects[projectIndex].alterDescription(newDescription);
        }
        const alterPriority = (projectIndex, newOrder) => {
                projects[projectIndex].alterPriority(newOrder);
        }
       

        //put these into todoproject object
        const addChecklist = (project) => {
                projects[project].createChecklist()
        }
        const addChecklistItem = (project, item) => {
                projects[project].checklist.addItem(item);
                console.log(projects[project].checklist)
        }

        
        const displayProjects = () => {
                if (!projects[0]) {
                        console.log('Add a project to get started...')
                }
                else {
                let cells = [];
                for (let i = 0; i < projects.length; i++) {
                        cells.push(Cell())
                        } 
                        projectDisplay.length = 0;
                        projectDisplay.push(...cells)
                        console.log(projectDisplay)
                }
                populateCells();
        }

        const populateCells = () => { 
          //    const populatedCells =  projectDisplay.map(cell => cell.addProperties(Object.keys(projects[i])))
                for (let i = 0; i < projects.length; i++) {
                        let values = Object.values(projects[i]);
                        
                        projectDisplay[i].addProperties(...values);
                        
                }
        }

        const printProjectsCells = () => {
                const projectsWithCellsValues = projectDisplay.map(cell => cell.getContent());
                console.log(projectsWithCellsValues);
        }
        const getProjects = () => projectDisplay;
        return {
                projects,
                addProject,
        //        displayOrderedTitles,
                displayProject,
                changeDescription,
                alterPriority,
                addChecklist,
                addChecklistItem,
                populateCells,
                printProjectsCells,
                displayProjects,
                projectDisplay,
                getProjects,
        }        
}
        
)();

function Cell() {
        let values = [];
        const addProperties = (title, description, dueDate) => {
        const addTitle = (ti) => {
                values.push(ti)
               // console.log(title)
                
                 //how aboout calling these functions as well at the bottom?
                //or: why you shouldnt do shadow variables
        }
        const addDescription = (descr) => {
                values.push(descr)
        }
        const addDueDate = (dDate) => {
                values.push(dDate)
        }
                 //losing this! (OR not actually,) when calling addproperties, it doesnt add to this Cell object but somewhere else     ..functions just werent called
                addTitle(title);
                addDescription(description);
                addDueDate(dueDate);
                console.log( values); 
        }
        
        const getContent = () => {
                for (let i = 0; i < values.length; i++) {
                        console.log(values[i]);

                }
        } 
        return {
                values,
                addProperties,
                getContent
        }
}
myProjects.addProject('Cook', 'Dice veggies', 'FRi')
myProjects.addProject('clean', 'curtains wash', 'WED')
myProjects.addProject('Prepare for aunts visit', 'Make tea, cake, sodomy', 'THU')
function projectController() {
       const add = myProjects.addProject()
        //
}
function screenController() {
        const boxDiv = document.querySelector('.box');
        
        return {projects}
}