const myProjects = (function () {
        const projects = [/* {title: 'test', description: 'testdesc', dueDate: 'WED'}, {title: 'Second item', description: 'First in array, but priority == 2', dueDate: 'FRI', priority: 2}, {title: 'First item', description: 'Second in array, but priority == 1', dueDate: 'WED', priority: 1}*/];
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
        
        const addProject = () => {              //to be called when clicking "Add" at the bottom of UI form
                //get tododata from form elements
                const newproject = Object.create(todoproject).init(...createProject())
            //    newproject.prototype.printdescr = function() { console.log(this.description)}
                projects.push(newproject);
        };

        const createProject = (/* title, description, dueDate */ ) => {
                //'dummy' because later just pass data as array to addProject
                  //OR not? because could write form.title.getValue in here(but then should be in display / UI somewhere)
                        //no is dummy because otherwise projects wuold refer
                        //to display/UI for project creation
               
                let title = prompt('Enter title', 'Cleaning');
                let description = prompt('Enter description', 'Wash curtains, clean floors');
                let dueDate = prompt('Enter due date', 'FRI');
                // later, switch to getting data from form elements at 'Add' click event
                return [title, description, dueDate];      //  this [tododata] gets passed to Object.create(todoproject).init([tododata]
        };
        const displayOrderedTitles = () => {
                let projectTitles = projects.sort((a, b) => a.priority > b. priority ? 1 : -1 ).map(project => project.title);
            //    let projectTitles = projects.map(project => project.title);  // projects.sort(a, b => a.priority < b. priority).map(project => project.title);
                projectTitles.forEach(title => console.log(title));
        };
        const displayProject = (projectIndex) => {
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
        return {
                projects,
                addProject,
                displayOrderedTitles,
                displayProject,
                changeDescription,
                alterPriority,
                addChecklist,
                addChecklistItem
        }        
}
        
)();
