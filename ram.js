document.addEventListener('DOMContentLoaded', function () {
    loadTodoData();
  });

  function addTodo(event) {
    event.preventDefault();
    const name = document.getElementById('id1').value;
    const description = document.getElementById('id2').value;

    if (name && description) {
      addTodoItem(name, description);
      document.getElementById('id1').value = '';
      document.getElementById('id2').value = '';
    }
  }

  function loadTodoData() {
    axios.get('https://crudcrud.com/api/1d3eee73d4654ae6b9c8f4ab2efcedc5/todos')
      .then(response => {
        const todoList = document.getElementById('output1');
        response.data.forEach(item => {
          appendTodoItem(item);
        });
      })
      .catch(error => console.error('Error loading TODO data:', error));
  }

  function addTodoItem(name, description) {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: name,
      completed: false,
      description:
    })
    .then(response => {
      appendTodoItem(response.data);
    })
    .catch(error => console.error('Error adding TODO item:', error));
  }

  function appendTodoItem(item) {
    const todoList = document.getElementById('output1');
    const li = document.createElement('li');
    li.textContent = `${item.title} -${item.description}- ${item.completed ? 'Completed' : 'Not Completed'}`;
    li.dataset.id = item.id;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function () {
      if (this.checked) {
        moveTodoItemToCompleted(item.id);
      }
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
      deleteTodoItem(item.id);
    });


    li.appendChild(checkbox);
    li.appendChild(deleteButton);

    todoList.appendChild(li);
  }

  function moveTodoItemToCompleted(id) {
    axios.put(`https://crudcrud.com/api/1d3eee73d4654ae6b9c8f4ab2efcedc5/todos/${id}`, {
      completed: true
    })
    .then(() => {
      const todoList = document.getElementById('output1');
      const completedList = document.getElementById('output2');
      const item = document.querySelector(`[data-id="${id}"]`);

      if (item) {
        completedList.appendChild(item);
      }
    })
    .catch(error => console.error('Error updating TODO item:', error));
  }

  function deleteTodoItem(id) {
    axios.delete(`https://crudcrud.com/api/1d3eee73d4654ae6b9c8f4ab2efcedc5/todos/${id}`)
    .then(() => {
      const item = document.querySelector(`[data-id="${id}"]`);
      if (item) {
        item.remove();
      }
    })
    .catch(error => console.error('Error deleting TODO item:', error));
  }
