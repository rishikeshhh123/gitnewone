function todo(event){
    event.preventDefault()
const type1=event.target.id1.value;
const type2=event.target.id2.value;

const obj={
    type1,
    type2
}
axios.post("https://crudcrud.com/api/25933d3131414339bc07017fcec8e6e8/project",obj)
.then((response)=>{
    showUserOnScreen(response.data)
    console.log(response)
})
.catch((err)=>{
    console.log(err)
})
}
window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/25933d3131414339bc07017fcec8e6e8/project")
    .then((response)=>{
        console.log(response)
        for(var i=0;i<response.data.length;i++){
            showUserOnScreen(response.data[i])
        }
    })
    .catch((err)=>console.log(err))
})
function showUserOnScreen(user){
   var todoname= document.getElementById("id1").value
    var des=document.getElementById("id2").value
    const parentNode=document.getElementById('output1');
    var li=document.createElement("li");
    li.innerHTML=`${todoname}:${des}
    <button onclick="deleteUser(this)">Delete</button>
    <input type="checkbox" onclick="edit(this,'${todoname}','${des}')">Done</button>`;
    parentNode.appendChild(li);
    document.getElementById("id1").value="";
    document.getElementById("id2").value="";
   // const childNode=`<li id=${user._id}> ${user.type1}-${user.type2}
    //<input type="checkbox" onclick=edit('${user._id},${user.type1},${user.type2}')>
    // <button onclick=deleteUser('${user._id}')>delete</button>
             
    //</li>`
    //parentNode.innerHTML=parentNode.innerHTML+childNode;



}
function edit(button){
    var li=button.parenElement;
    var completelist=document.getElementById("output1");
    completelist.appendChild(li);
    li.removeChild(button); 
    //axios.put('https://crudcrud.com/api/2886b1249b4f4273af76a801d2234244/project',{userId,completed:true})
   //.. .then((response)=>{
      //   console.log(response)
   // })
   // deleteUser(userId)

}

function deleteUser(userId){
    axios.delete(`https://crudcrud.com/api/25933d3131414339bc07017fcec8e6e8/${userId}`)
    .then((response)=>{
        removeUserFromScreen(userId)
        console.log(response)
    })
    .catch((err)=>console.log(err))
}
function removeUserFromScreen(userId){
    const parentNode=document.getElementById("output1");
    const childNode=document.getElementById(userId);
    if(childNode){
        parentNode.removeChild(childNode)
    }
}