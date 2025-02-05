//=====practice-1=====
const todoList1 = [];

function addtodo1 () {
  const inputElement = document.querySelector('.js-name-input-practice-1');
  const name = inputElement.value;

  todoList1.push(name);
  console.log(todoList1);

  inputElement.value = '';
}



//=====practice-2======

const todoList2 = [];

renderTodoList ();

function renderTodoList() {
  let todoListHTML = ``;

  for(let i = 0; i < todoList2.length; i++) {
    const todo = todoList2 [i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }

  console.log(todoListHTML);

  document.querySelector('.js-todo-list2')
  .innerHTML = todoListHTML;
}

function addtodo2 () {
  const inputElement = document.querySelector('.js-name-input-2');
  const name = inputElement.value;

  todoList2.push(name);
  console.log(todoList2);

  inputElement.value = '';

  renderTodoList();
}
