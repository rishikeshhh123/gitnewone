
function handleFormSubmit(event) {
    event.preventDefault();

    const todoName = document.getElementById('id1').value;
    const description = document.getElementById('id2').value;

    const todoObject = { name: todoName, description: description };

    axios.post('https://crudcrud.com/api/e716d74c898b41f58c5fb57822865d61/hello', todoObject)
        .then((response) => {
            const listItem = document.createElement('li');
            listItem.setAttribute('data-id', response.data._id);//
            listItem.innerHTML = `
                <input type="checkbox" class="checkbox" onclick="moveToDone(event)">
                ${todoObject.name} - ${todoObject.description}
                <button class="delete" onclick="deleteTodo(event)">Delete</button>
            `;

            document.getElementById('output1').appendChild(listItem);
            event.target.reset();
        })
        .catch((error) => {
            console.error('Error :', error);
        });
}


function moveToDone(event) {
    const listItem = event.target.closest('li');
    
     
    if (event.target.checked) {
        listItem.classList.add('completed');
        document.getElementById('output2').appendChild(listItem);
    } else {
        listItem.classList.remove('completed');
        document.getElementById('output1').appendChild(listItem);
    }
    
}


function deleteTodo(event) {
    const listItem = event.target.closest('li');
   
   if (listItem && listItem.hasAttribute('data-id')) {
    const todoId = listItem.getAttribute('data-id');

    axios.delete(`https://crudcrud.com/api/e716d74c898b41f58c5fb57822865d61/hello/${todoId}`)
        .then(() => {
            listItem.remove();
            //console.log(response);
        })
        .catch((err) =>{ console.log(err)});
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
    axios.get('https://crudcrud.com/api/e716d74c898b41f58c5fb57822865d61/hello')
        .then((response) => {
            const todos = response.data;

            todos.forEach(todo => {
                const listItem = document.createElement('li');
                listItem.setAttribute('data-id',todo._id);
                listItem.innerHTML = `
                    <input type="checkbox" class="checkbox" onclick="moveToDone(event)">
                    ${todo.name} - ${todo.description}
                    <button class="delete" onclick="deleteTodo(event)">Delete</button>
                `;

                document.getElementById('output1').appendChild(listItem);
            });
        })
        .catch((error) => {
            console.error('Error:', error);
        });
       

})



           
