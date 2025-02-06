const todoList = [{
  name: 'Code',
  dueDate: '2024-10-21'
}, {
  name: 'Sleep',
  dueDate: '2024-12-21'
}];

renderTodoList ();

function renderTodoList() {
  let todoListHTML = ``;
  
//=====Changed=====
  todoList.forEach(function(todoObject, index) {
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
        <button onclick = "
        todoList.splice(${index}, 1);
        renderTodoList();
        " class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  });
//=================
  document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML;
}

function addtodo () {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    // name: name, 
    // dueDate: dueDate
    name,    //Shorthand property
    dueDate
  });
  inputElement.value = '';

  renderTodoList();
}
