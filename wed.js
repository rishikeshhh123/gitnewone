let totalStudents = 0;

async function handleFormSubmit(event) {
    event.preventDefault();
    const type1 = event.target.id1.value;
    const type2 = event.target.id2.value;
    const type3 = event.target.id3.value;

    const obj = {
        type1,
        type2,
        type3
    };

    try {
        const response = await axios.post("https://crudcrud.com/api/516b219a34574600ba4ccc2b6e5f53aa/project", obj);
        showUserOnScreen(response.data);
      

        totalStudents++;
        updateTotalStudentsCount();
    } catch (err) {
        console.log(err);
    }
}




function updateTotalStudentsCount() {
    document.getElementById("totalStudents").textContent = totalStudents;
}

function showUserOnScreen(user) {
    document.getElementById("id1").value = '';
    document.getElementById("id2").value = '';
    document.getElementById("id3").value = '';

    const parentNode = document.getElementById('output');
    const childNode = `<li id=${user._id}> ${user.type1}-${user.type2}-${user.type3}
             <button onclick=deleteUser('${user._id}')>delete</button>
             <button onclick=editUser('${user.type1}','${user.type2}','${user.type3}','${user._id}')>edit</button>
    </li>`;
    parentNode.innerHTML = parentNode.innerHTML + childNode;
    updateTotalStudentsCount();
}

async function editUser(type1, type2, type3, userId) {
    const updatedData = {
        type1,
        type2,
        type3
    };

    document.getElementById("id1").value = type1;
    document.getElementById("id2").value = type2;
    document.getElementById("id3").value = type3;

    try {
        const response = await axios.put(`https://crudcrud.com/api/516b219a34574600ba4ccc2b6e5f53aa/project/${userId}`, updatedData);
        console.log(response);
    } catch (err) {
        console.log(err);
    }

    deleteUser(userId);
}

async function deleteUser(userId) {
    try {
        
        await axios.delete(`https://crudcrud.com/api/516b219a34574600ba4ccc2b6e5f53aa/project/${userId}`);
        totalStudents--;
        updateTotalStudentsCount();

        
        const dataResponse = await axios.get("https://crudcrud.com/api/516b219a34574600ba4ccc2b6e5f53aa/project");
        const parentNode = document.getElementById('output');
        parentNode.innerHTML = '';

        for (let i = 0; i < dataResponse.data.length; i++) {
            showUserOnScreen(dataResponse.data[i]);
        }
    } catch (err) {
        console.log(err);
    }
}



function removeUserFromScreen(userId) {
    const parentNode = document.getElementById("output");
    const childNode = document.getElementById(userId);
    if (childNode) {
        parentNode.removeChild(childNode);
    }
}

window.addEventListener("DOMContentLoaded", async()=>{
    const response =  await axios.get("https://crudcrud.com/api/516b219a34574600ba4ccc2b6e5f53aa/project");
    totalStudents = response.data.length || 0; 

    updateTotalStudentsCount();

    for (let i = 0; i < response.data.length; i++) {
        showUserOnScreen(response.data[i]);
    }

});
