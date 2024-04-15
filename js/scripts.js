console.log("script Loaded");

    //1. assign variables to DOM elements 

    let addTaskButton = document.getElementById("add-button")
    let newTaskInput = document.getElementById("task-input")
    let todoListContainer = document.getElementById("todo-list")
    let templateElement = document.getElementById("todo-item-template")
    let template = templateElement.innerHTML
    
    /* Step 2. Lets write the function to handle the 'click' event
    ---------------------------------------------------------------*/
    function onAddTaskClicked(event){
        // Get the contents of the input box
        let taskName = newTaskInput.value;

        // clear the input box 
        newTaskInput.value = ""

        // Search and replace to add task name (found above)
        let = todoHTML = template.replace("<!----TASK_NAME---->", taskName)

        // we have the formatted HML, lets insert it into the to do container 
        todoListContainer.insertAdjacentHTML('afterbegin', taskname);
    }
    function onTodoClicked(event){
        let targetElement = event.toElement    

        while(!targetElement.classList.contains("task")){
            targetElement = targetElement.parentElement
        }
        let checkbox = targetElement.querySelector(".checkbox")
    }
    /* Step 3 make the event trigger our functions
    -----------------------------------------------*/ 
    addTaskButton.addEventListener('click', onAddTaskClicked);
    todoListContainer.addEventListener('click', onTodolistClicked);