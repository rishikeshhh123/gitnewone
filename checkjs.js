function addCandy(event){
    event.preventDefault()
const type1=event.target.id1.value;
const type2=event.target.id2.value;
const type3=event.target.id3.value;
const type4=event.target.id4.value;
const obj={
    type1,
    type2,
    type3,
    type4
}
axios.post("https://crudcrud.com/api/2886b1249b4f4273af76a801d2234244/project",obj)
.then((response)=>{
    showUserOnScreen(response.data)
    console.log(response)
})
.catch((err)=>{
    console.log(err)
})
}
window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/2886b1249b4f4273af76a801d2234244/project")
    .then((response)=>{
        console.log(response)
        for(var i=0;i<response.data.length;i++){
            showUserOnScreen(response.data[i])
        }
    })
    .catch((err)=>console.log(err))
})
function showUserOnScreen(user){
    document.getElementById("id1").value='';
    document.getElementById("id2").value='';
    document.getElementById("id3").value='';
    document.getElementById("id4").value='';
    const parentNode=document.getElementById('output');
    const childNode=`<li id=${user._id}> ${user.type1}-${user.type2}-${user.type3}-${user.type4}
             <button onclick=deleteUser('${user._id}')>delete</button>
             <button onclick=editUser('${user.type1}','${user.type2}','${user.type3}','${user.type4}','${user._id}')>edit</botton>
    </li>`
    parentNode.innerHTML=parentNode.innerHTML+childNode;


}
function editUser(type1,type2,type3,type4,userId){
    axios.put(`https://crudcrud.com/api/2886b1249b4f4273af76a801d2234244/project/${userId}`)
    .then((response)=>{
        console.log(response)
    })
    .catch((err)=>{console.log(err)})
    document.getElementById("id1").value="type1";
    document.getElementById("id2").value="type2";
    document.getElementById("id3").value="type3";
    document.getElementById("id4").value="type4";
    deleteUser(userId)

}

function deleteUser(userId){
    axios.delete(`https://crudcrud.com/api/2886b1249b4f4273af76a801d2234244/project/${userId}`)
    .then((response)=>{
        removeUserFromScreen(userId)
        console.log(response)
    })
    .catch((err)=>console.log(err))
}
function removeUserFromScreen(userId){
    const parentNode=document.getElementById("output");
    const childNode=document.getElementById(userId);
    if(childNode){
        parentNode.removeChild(childNode)
    }
}