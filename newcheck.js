function handleFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('id1').value;
    const description = document.getElementById('id2').value;
const obj={
    name,description
}
axios.post('https://crudcrud.com/api/1d3eee73d4654ae6b9c8f4ab2efcedc5',obj)
   .then((response)=>{
        appendtodo(response.data)
   })
   .catch((err)=>console.log(err))
   // addTodoItem(obj); 
  }

  function appendtodo(obj){ 
   document.getElementById('id1').value="";
     document.getElementById('id2').value="";

    const listItem = document.createElement('li');
    listItem.textContent =` ${obj.name}: ${obj.description}`;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
      moveItemToCompletedList(listItem, checkbox);
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        
            listItem.remove();
        })
      
      
    

    listItem.appendChild(checkbox);
    listItem.appendChild(deleteButton);

    document.getElementById('output1').appendChild(listItem);
  
  }


  function moveItemToCompletedList(item, checkbox) {
    if (checkbox.checked) {
      document.getElementById('output2').appendChild(item);
    }
  }
  window.addEventListener("DOMContentLoaded",()=>{
   axios.get('https://crudcrud.com/api/1d3eee73d4654ae6b9c8f4ab2efcedc5')
   .then((response)=>{
    //console.log(response)
    for(var i=0;i<response.data.length;i++){
        addTodoItem(response.data[i])
    }
   })
   .catch((err)=>{
    console.log(err)
   })
       
        })
  
   
