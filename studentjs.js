let totalStudents = 0;  
function handleFormSubmit(event){
    event.preventDefault()
const type1=event.target.id1.value;
const type2=event.target.id2.value;
const type3=event.target.id3.value;

const obj={
    type1,
    type2,
    type3
}
axios.post("https://crudcrud.com/api/1390c8c7d35b4205b8999f8dc3c3b759/project",obj)
.then((response)=>{
    showUserOnScreen(response.data)
    console.log(response)
    totalStudents++; // Increment the totalStudents counter
    updateTotalStudentsCounter();
})
.catch((err)=>{
    console.log(err)
})
}
window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/1390c8c7d35b4205b8999f8dc3c3b759/project")
    .then((response)=>{
        updateTotalStudentsCounter();
        console.log(response)
        for(var i=0;i<response.data.length;i++){
            showUserOnScreen(response.data[i])
           totalStudents++;  // Increment the totalStudents counter
           
        }
        // updateTotalStudentsCounter();
    })
    .catch((err)=>console.log(err))
})
function updateTotalStudentsCounter() {
    // Update the displayed total students count
    document.getElementById("totalStudents").textContent = totalStudents;
}
function showUserOnScreen(user){
    document.getElementById("id1").value='';
    document.getElementById("id2").value='';
    document.getElementById("id3").value='';

    const parentNode=document.getElementById('output');
    const childNode=`<li id=${user._id}> ${user.type1}-${user.type2}-${user.type3}
             <button onclick=deleteUser('${user._id}')>delete</button>
             <button onclick=editUser('${user.type1}','${user.type2}','${user.type3}','${user._id}')>edit</button>
    </li>`
    parentNode.innerHTML=parentNode.innerHTML+childNode;


}
function editUser(type1, type2, type3, userId) {
    const updatedData = {
        type1,
        type2,
        type3
    };
    document.getElementById("id1").value = type1;
    document.getElementById("id2").value = type2;
    document.getElementById("id3").value = type3;

    axios.put(`https://crudcrud.com/api/1390c8c7d35b4205b8999f8dc3c3b759/project/${userId}`, updatedData)
        .then((response) => {
            console.log(response);
            // If the update is successful, you may want to update the UI or perform any additional actions
        })
        .catch((err) => {
            console.log(err);
        });

    // Set input values and remove the old user from the screen
  
    // Delete the old user from the screen
    deleteUser(userId);
}


function deleteUser(userId){
    axios.delete(`https://crudcrud.com/api/1390c8c7d35b4205b8999f8dc3c3b759/project/${userId}`)
    .then((response)=>{
        totalStudents--; // Decrement the totalStudents counter first
        updateTotalStudentsCounter(); // Update the displayed total students count
        removeUserFromScreen(userId);
        console.log(response);
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