function handleFormSubmit(event) {
    event.preventDefault();

    const getValue = (id) => document.getElementById(id).value;

    const todoObject = { name: getValue('id1'), description: getValue('id2') };

    axios.post('https://crudcrud.com/api/34d16977a406437a98bda0fa27a5a44e/hello', todoObject)
        .then(({ data }) => {
            const listItem = createListItem(data._id, todoObject);
            document.getElementById('output1').appendChild(listItem);
            event.target.reset();
        })
        .catch(handleError);
}

function moveToDone(event) {
    const listItem = event.target.closest('li');
    document.getElementById('output2').appendChild(listItem);
}

function deleteTodo(event) {
    const listItem = event.target.closest('li');
    const todoId = listItem.getAttribute('data-id');

    axios.delete(`https://crudcrud.com/api/34d16977a406437a98bda0fa27a5a44e/hello/${todoId}`)
        .then(() => listItem.remove())
        .catch(handleError);
}

function createListItem(id, { name, description }) {
    const listItem = document.createElement('li');
    listItem.setAttribute('data-id', id);
    listItem.innerHTML = `
        <input type="checkbox" class="checkbox" onclick="moveToDone(event)">
        ${name} - ${description}
        <button class="delete" onclick="deleteTodo(event)">Delete</button>
    `;
    return listItem;
}

function handleError(error) {
    console.error('Error:', error);
}

document.addEventListener('click', (event) => {
    if (event.target.type === 'checkbox') {
        moveToDone(event);
    }

    if (event.target.classList.contains('delete')) {
        deleteTodo(event);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    axios.get('https://crudcrud.com/api/34d16977a406437a98bda0fa27a5a44e/hello')
        .then(({ data: todos }) => {
            todos.forEach(todo => {
                const listItem = createListItem(todo._id, todo);
                document.getElementById('output1').appendChild(listItem);
            });
        })
        .catch(handleError);
});
