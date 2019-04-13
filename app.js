function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    // create a new input
    let checkbox = document.createElement('input');

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // add delete button
    let deleteButton = document.createElement('button');
    deleteButton.textContent = "delete";
    deleteButton.className = 'mdl-button mdl-js-button mdl-button--raised mdl-button--accent';
    deleteButton.addEventListener('click', function(event){
      toDoList.removeChild(this.parentElement);
    })


    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // style checkbox
    checkbox.className = 'mdl-checkbox__input'


    //set the title
    newLi.textContent = title;
    newLi.className = 'mdl-list__item';

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    //attach the li to the ul
    toDoList.appendChild(newLi);

    // attach the delete button to the li
    newLi.appendChild(deleteButton);

    //empty the input
    newToDoText.value = '';

  });
}

window.onload = function() {
  onReady();
};
