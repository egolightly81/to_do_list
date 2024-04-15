console.log("script Loaded");

    //1. assign variables to DOM elements 

    let addTaskButton = document.getElementById("add-button")
    let newTaskInput = document.getElementById("task-input")
    let todoListContainer = document.getElementById("todo-list")
    
    /* Step 2. Lets write the function to handle the 'click' event
    ---------------------------------------------------------------*/
    function onAddTaskClicked(event){
        let taskName = newTaskInput.value;
        newTaskInput.value = "";
        todoListContainer.insertAdjacentHTML('afterbegin', taskname);
    }


    
    /* Step 3 make the event trigger our functions
    -----------------------------------------------*/ 
    addTaskButton.addEventListener('click', onAddTaskClicked);
    todoListContainer.addEventListener('click', onTodolistClicked);