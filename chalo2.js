function handleFormSubmit(event) {
    event.preventDefault();

    const todoName = document.getElementById('id1').value;
    const description = document.getElementById('id2').value;

    const todoObject = { name: todoName, description: description };

    axios.post('https://crudcrud.com/api/56c214d6e9d24e0a8fb001eb4eadc85f/hello', todoObject)
        .then((response) => {
            const listItem = createListItem(response.data._id, todoObject);
            document.getElementById('output1').appendChild(listItem);
            event.target.reset();
        })
        .catch((error) => {
            console.error('Error storing todo:', error);
        });
}

function moveToDone(event) {
    const listItem = event.target.closest('li');
    
    if (listItem) {
        listItem.removeAttribute('data-id'); // Remove data-id attribute
        document.getElementById('output2').appendChild(listItem);
    }
}

function deleteTodo(event) {
    const listItem = event.target.closest('li');
   
    if (listItem && listItem.hasAttribute('data-id')) {
        const todoId = listItem.getAttribute('data-id');

        axios.delete(`https://crudcrud.com/api/56c214d6e9d24e0a8fb001eb4eadc85f/hello/${todoId}`)
            .then(() => {
                listItem.remove();
            })
            .catch((err) => console.log(err));
    }
}

function createListItem(id, todo) {
    const listItem = document.createElement('li');
    listItem.setAttribute('data-id', id);
    listItem.innerHTML = `
        <input type="checkbox" class="checkbox" onchange="moveToDone(event)">
        <span>${todo.name} - ${todo.description}</span>
        <button class="delete" onclick="deleteTodo(event)">Delete</button>
    `;
    return listItem;
}

window.addEventListener('DOMContentLoaded', function () {
    axios.get('https://crudcrud.com/api/56c214d6e9d24e0a8fb001eb4eadc85f/hello')
        .then((response) => {
            const todos = response.data;

            todos.forEach(todo => {
                const listItem = createListItem(todo._id, todo);
                document.getElementById('output1').appendChild(listItem);
            });
        })
        .catch((error) => {
            console.error('Error fetching todos:', error);
        });
});
