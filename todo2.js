window.addEventListener("DOMContentLoaded",function(){
    axios.get("https://crudcrud.com/api/25933d3131414339bc07017fcec8e6e8/todo")
    .then((response)=>{
        const todoitems=response.data;
        todoitems.forEach(todoitem=>{
            const listitem=createlistitem(todoitem);
            if(todoitem.completed){
                document.getElementById('output2').appendChild(listitem);
            }
            else{
                document.getElementById('output1').appendChild(listitem);
            }
        })
       // console.log(response)
      // loadtodoitems();
    })
    .catch((err)=>console.log(err))
})
function handleFormSubmit(event){
    event.preventDefault();
const name=document.getElementById("id1").value;
const description=document.getElementById("id2").value;
const obj={
    name,description
};
addtodoitem(obj);
name.value="";
description.value="";
}
function addtodoitem(obj){
    axios.post('https://crudcrud.com/api/25933d3131414339bc07017fcec8e6e8/todo',obj)
    .then((response)=>{
        const todoitem=response.data;
        
        const listitem=createlistitem(todoitem);
        document.getElementById('output1').appendChild(listitem);
    })
    .catch((err)=>{
        console.log('error',err);
    });
    
    }
    function createlistitem(todoitem){
        const listitem=document.createElement('li');
           listitem.textContent=`${todoitem.name}: ${todoitem.description}`;
           listitem.dataset.id=todoitem.id;
           const checkbox=document.createElement('input');
           checkbox.type='checkbox';
       checkbox.addEventListener('change',function(){
           moveItemToCompletedList(listitem,checkbox);
       }) ;
       const deletebtn=document.createElement('button');
       deletebtn.textContent='Delete';
       deletebtn.addEventListener('click',function(){
           deletetodo(listitem);
           //listitem.remove();
       });
       listitem.appendChild(checkbox);
       listitem.appendChild(deletebtn);
       return listitem;
       //document.getElementById('output1').appendChild(listitem);
       
       }

function  moveItemToCompletedList(item,checkbox){
    const id= item.dataset.id;
    axios.put(`https://crudcrud.com/api/25933d3131414339bc07017fcec8e6e8/todo/${id}`,{ completed:checkbox.checked})
.then(()=>{
    if(checkbox.checked){
    document.getElementById('output2').appendChild(item);
}
else{
    document.getElementById('output1').appendChild(item);
}
})
.catch((err)=>{
    console.log(err)
})
}


function deletetodo(item){
    const id=item.dataset.id;
    axios.delete(`https://crudcrud.com/api/25933d3131414339bc07017fcec8e6e8/todo/${id}`)
    .then(()=>{
        item.remove();
    })
    .catch((err)=>{
        console.log(err)
    })
}
