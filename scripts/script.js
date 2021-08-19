
'use strict'

const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed');
   

let todoData = [];
console.log(todoData);

const render = function() {
  todoList.textContent = '';
  todoCompleted.textContent = '';

  todoData.forEach(function(item) {
      const li = document.createElement('li');
      li.classList.add('todo-item');

      li.innerHTML = '<span class="text-todo">' +
        item.value + '</span>' + 
        '<div class="todo-buttons">' + 
          '<button class="todo-remove"></button>' +
				  '<button class="todo-complete"></button>' + 
        '</div>';

      
      if(item.completed) {
        todoCompleted.append(li);
      }  else{
        todoList.append(li);
      }

      const btnTodoComplete = li.querySelector('.todo-complete'),
          btnTodoRemove = li.querySelector('.todo-remove');

      
      if(btnTodoRemove) {
        btnTodoRemove.addEventListener('click', function() {
          todoData.splice(item, 1);
          render();
        })
      }
    
      btnTodoComplete.addEventListener('click', function(){
        item.completed = !item.completed;
        render();
      })
    })
}


todoControl.addEventListener('submit', function(event) {
  event.preventDefault();

  const newTodo = {
    value: headerInput.value ,
    completed: false
  };

  let headerInputText = document.querySelector('.header-input').value;
  if(headerInputText == '') {
    console.log('Пусто!')
    alert('Вы не ввели текст:(');
    return false;
  } else{console.log('все ок')}
  todoData.push(newTodo);
   
  render();
  let newArr = JSON.stringify(todoData);
  localStorage.setItem('todo', newArr);

  let newArrParse = JSON.parse(newArr);
  // console.log(newArrParse);
  // newArrParse = todoData;
  headerInput.value = '';
})

