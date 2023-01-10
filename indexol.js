const myProjects = (function () {   //need only this one project storage ->> module/IIFE
        const projects = [{ title: 'THISthis' }, { title: 'MAN', description: 'don trouble no one' }];
        const getProjects = () => projects;
        
        const Project = (title) => {   //proto
                const displayTitle = () => console.log(title);

                //methods like addDescription, addDueDate
                const addDescription = () => {
                        const descr = prompt('Add description: ', 'BROL');
                        this.description = descr;
                }
                const addDueDate = () => {
                        const dDate = prompt('When is it due? ', 'TUES')
                }
                let color = '';

                return { displayTitle, addDescription, addDueDate, color};
        };
        const ToDoProject = (title) => {
                const prototype = Project(title);

                //properties like description, duedate or checklist will be put here by 'this' keyword in prototype?

                const setColor = () => { 
                        const col = prompt('Pick a color', 'orange');
                        this.color = col;
                        console.log(this.color)
                } 
                return Object.assign({}, prototype, {setColor})
        }

        const displayProjects = () => {
                const projectTitles = projects.map(project => project.title);
                console.log(projectTitles);
        }

        const addProject = (project) => {
                projects.push(project);
        }

        return {
                addProject,
                displayProjects, 
                ToDoProject
        }
})();

/* DISPLAY


        
        
*/