let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

// function addTodo
function addTodo(){
    let inputElement = document.querySelector('.js-name-todo');
    let dueDateElement = document.querySelector('.js-due-date');
    let name = inputElement.value;
    let dueDate = dueDateElement.value;
    todoList.push({
        name,
        dueDate,
    });
    localStorage.setItem('todoList',JSON.stringify(todoList));
    inputElement.value = "";
    dueDateElement.value = "";
    renderTodoList();
}

function renderTodoList(){
    let todoListHTML = "";

    todoList.forEach(function(todoObject,index){
        let {name,dueDate} = todoObject;
        todoListHTML += `<p>${name}</p><p> ${dueDate}</p> <button class="remove-btn" onclick="removeTodo(${index})">Remove</button>`;
        
    })
    
    // for(let i=0;i<todoList.length;i++){
    //     todoListHTML += `<p>${todoList[i].name}</p><p> ${todoList[i].dueDate}</p> <button class="remove-btn" onclick="removeTodo(${i})">Remove</button>`;
    // }

    let todoListElement = document.querySelector('.js-todo-list');
    todoListElement.innerHTML = todoListHTML;
}

renderTodoList()


function removeTodo(ind){
    todoList.splice(ind,1);
    localStorage.setItem('todoList',JSON.stringify(todoList))
    renderTodoList();
}


function getCurrentDate(){
    const date = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    return `${year+"-"+month+"-"+date}`;
}

document.querySelector('.js-due-date').value = getCurrentDate();