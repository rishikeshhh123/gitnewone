function handleFormSubmit(event) {
    event.preventDefault();

    const todoName = document.getElementById('id1').value;
    const description = document.getElementById('id2').value;

    const todoObject = { name: todoName, description: description,completed:false };

    axios.post('https://crudcrud.com/api/0b2d3b83ee624176a3377ab4710e22bd/hello', todoObject)
        .then((response) => {
            const listItem = document.createElement('li');
            listItem.setAttribute('data-id', response.data._id);
            listItem.innerHTML = `
                <input type="checkbox" class="checkbox" onclick="moveToDone(event)">
                <span>${todoObject.name} - ${todoObject.description}</span>
                <button class="delete" onclick="deleteTodo(event)">Delete</button>
            `;

            document.getElementById('output1').appendChild(listItem);
            event.target.reset();
        })
        .catch(error => {
            console.error('Error storing todo:', error);
        });
}
function moveToDone(event) {
    const checkbox = event.target;
    const listItem = checkbox.closest('li');

    function handleFormSubmit(event) {
        event.preventDefault();
    
        const todoName = document.getElementById('id1').value;
        const description = document.getElementById('id2').value;
    
        const todoObject = { name: todoName, description: description,completed:false };
    
        axios.post('https://crudcrud.com/api/0b2d3b83ee624176a3377ab4710e22bd/hello', todoObject)
            .then((response) => {
                const listItem = document.createElement('li');
                listItem.setAttribute('data-id', response.data._id);
                listItem.innerHTML = `
                    <input type="checkbox" class="checkbox" onclick="moveToDone(event)">
                    <span>${todoObject.name} - ${todoObject.description}</span>
                    <button class="delete" onclick="deleteTodo(event)">Delete</button>
                `;
    
                document.getElementById('output1').appendChild(listItem);
                event.target.reset();
            })
            .catch(error => {
                console.error('Error storing todo:', error);
            });
    }
    function moveToDone(event) {
        const checkbox = event.target;
        const listItem = checkbox.closest('li');
    
        if (checkbox.checked) {
            listItem.classList.add('completed');
            const clonedItem = listItem.cloneNode(true);
            document.getElementById('output1').removeChild(listItem);
            document.getElementById('output2').appendChild(clonedItem);
        } else {
            listItem.classList.remove('completed');
            const clonedItem = listItem.cloneNode(true);
            document.getElementById('output2').removeChild(listItem);
            document.getElementById('output1').appendChild(clonedItem);
        }
    }
    
    
    
    
    
    
    function deleteTodo(event) {
        const listItem = event.target.closest('li');
       
       if (listItem && listItem.hasAttribute('data-id')) {
        const todoId = listItem.getAttribute('data-id');
    
        axios.delete(`https://crudcrud.com/api/0b2d3b83ee624176a3377ab4710e22bd/hello/${todoId}`)
            .then((response) => {
                listItem.remove();
                console.log(response);
            })
            .catch((err) => console.log(err));
    }
    }
    
    window.addEventListener('click', function (event) {
        if (event.target.type === 'checkbox') {
            moveToDone(event);
        }
    
        if (event.target.classList.contains('delete')) {
            deleteTodo(event);
        }
    });
    window.addEventListener('DOMContentLoaded', function () {
        axios.get('https://crudcrud.com/api/0b2d3b83ee624176a3377ab4710e22bd/hello')
            .then((response) => {
                const todos = response.data;
    
                // Clear existing todos
                document.getElementById('output1').innerHTML = '';
                document.getElementById('output2').innerHTML = '';
    
                todos.forEach(todo => {
                    const listItem = document.createElement('li');
                    listItem.setAttribute('data-id', todo._id);
                    // Check the completed state and apply the 'completed' class accordingly
            if (todo.completed) {
                listItem.classList.add('completed');
            }
                    listItem.innerHTML = `
                        <input type="checkbox" class="checkbox" onclick="moveToDone(event)">
                        <span>${todo.name} - ${todo.description}</span>
                        <button class="delete" onclick="deleteTodo(event)">Delete</button>
                    `;
    
                    // Check the status and append to the appropriate output element
                    if (todo.completed) {
                        document.getElementById('output2').appendChild(listItem);
                    } else {
                        document.getElementById('output1').appendChild(listItem);
                    }
                });
            })
            .catch(error => {
                console.error('Error fetching todos:', error);
            });
    });
    
}






function deleteTodo(event) {
    const listItem = event.target.closest('li');
   
   if (listItem && listItem.hasAttribute('data-id')) {
    const todoId = listItem.getAttribute('data-id');

    axios.delete(`https://crudcrud.com/api/0b2d3b83ee624176a3377ab4710e22bd/hello/${todoId}`)
        .then((response) => {
            listItem.remove();
            console.log(response);
        })
        .catch((err) => console.log(err));
}
}

window.addEventListener('click', function (event) {
    if (event.target.type === 'checkbox') {
        moveToDone(event);
    }

    if (event.target.classList.contains('delete')) {
        deleteTodo(event);
    }
});
window.addEventListener('DOMContentLoaded', function () {
    axios.get('https://crudcrud.com/api/0b2d3b83ee624176a3377ab4710e22bd/hello')
        .then((response) => {
            const todos = response.data;

            // Clear existing todos
            document.getElementById('output1').innerHTML = '';
            document.getElementById('output2').innerHTML = '';

            todos.forEach(todo => {
                const listItem = document.createElement('li');
                listItem.setAttribute('data-id', todo._id);
                // Check the completed state and apply the 'completed' class accordingly
        if (todo.completed) {
            listItem.classList.add('completed');
        }
                listItem.innerHTML = `
                    <input type="checkbox" class="checkbox" onclick="moveToDone(event)">
                    <span>${todo.name} - ${todo.description}</span>
                    <button class="delete" onclick="deleteTodo(event)">Delete</button>
                `;

                // Check the status and append to the appropriate output element
                if (todo.completed) {
                    document.getElementById('output2').appendChild(listItem);
                } else {
                    document.getElementById('output1').appendChild(listItem);
                }
            });
        })
        .catch(error => {
            console.error('Error fetching todos:', error);
        });
});
