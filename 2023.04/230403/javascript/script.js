// clock js
const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

function clock() {
  const now = new Date(); //현재 날짜,시간 정보 불러오기
  hour.innerText = now.getHours(); 
  min.innerText = now.getMinutes();
  sec.innerText = now.getSeconds();
}
setInterval(clock, 1000); //1초간격으로 clock 함수를 실행

//todo list js
const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

let todos = [];
const save = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
}

const delItem = () => {
  const target = event.target.parentElement;
  todos = todos.filter((todo) => todo.id != target.id);
  target.remove();
}

const addItem = (todo) => {
  if(todo.text !=='') {
    const li = document.createElement('li');
    const button = document.createElement('button');
    const span = document.createElement('span');

    li.innerText = todo.text;
    button.innerText = 'X';
    button.addEventListener('click', delItem);

    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
    li.id = todo.id;
  }
}

const handler = (event) => {
  event.preventDefault();

  const todo =  {
    id: Date.now(),
    text: input.value
  };

  todos.push(todo);
  addItem(todo);
  save();
  input.value='';
}

const init = () => {
  const userTodos = JSON.parse(localStorage.getItem('todos'));
  userTodos.forEach((todo) => {
    addItem(todo);
  });
  todos = userTodos;
  };

init();
form.addEventListener('submit', handler);
//form 상수안에 html<form>태그를 가져오고, 이벤트를 추가한다