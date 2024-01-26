function handleFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('id1').value;
    const description = document.getElementById('id2').value;

    addTodoItem(name, description);
  }

  function addTodoItem(name, description) {
    const listItem = document.createElement('li');
    listItem.textContent =` ${name}: ${description}`;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
      moveItemToCompletedList(listItem, checkbox);
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      listItem.remove();
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(deleteButton);

    document.getElementById('output1').appendChild(listItem);
  }

  function moveItemToCompletedList(item, checkbox) {
    if (checkbox.checked) {
      document.getElementById('output2').appendChild(item);
    }
  }