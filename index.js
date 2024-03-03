const URL = "https://jsonplaceholder.typicode.com/todos";
fetch(URL)
  .then((res) => res.json())
  .then((data) => {
    const container = document.querySelector(".container");
    for (let i = 0; i < data.length; i++) {
      
      const todo = document.createElement("div");
      todo.textContent = data[i].title;
      todo.classList = 'todoCss'
      const buttonSecond = document.createElement("button");
      buttonSecond.textContent = "delete";
      buttonSecond.classList = 'buttonSecond'
      const inputSecond = document.createElement("input");
      inputSecond.classList = 'inputSecond'
      inputSecond.type = "checkbox";

      container.append(todo, inputSecond, buttonSecond);
      buttonSecond.addEventListener("click", () => todo.remove());
      buttonSecond.addEventListener("click", () => buttonSecond.remove());
      buttonSecond.addEventListener("click", () => inputSecond.remove());
    }
  });

const divGeneral = document.querySelector('.container')
const inputfirst = document.querySelector('.inputfirst')
const buttonfirst = document.querySelector('.buttonfirst')
function addTodo() {

    const inputone = document.createElement('input')
    const buttonone = document.createElement('button')
    const divAdd = document.createElement ('div')

  const newUser = {
    id: new Date(),
    title: inputfirst.value, 
    completed: false
  };
  inputone.type = 'checkbox'
  buttonone.textContent = 'delete'
  buttonone.classList = 'buttonone' 
  divAdd.textContent = inputfirst.value
  
  

  
  divGeneral.prepend(divAdd)
  divAdd.prepend(inputone)
  divAdd.append(buttonone)
  buttonone.addEventListener("click", () => divAdd.remove());

  fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  });
}

buttonfirst.addEventListener("click", () => addTodo(inputfirst.value));



