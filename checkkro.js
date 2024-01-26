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
        const response = await axios.post("https://crudcrud.com/api/300eccfa855d482f810ee1cbb7375df8/project", obj);
        showUserOnScreen(response.data);
       // console.log(response);

        totalStudents++;
        updateTotalStudentsCounter();
    } catch (err) {
        console.log(err);
    }
}

async function initialize() {
    try {
        const response = await axios.get("https://crudcrud.com/api/300eccfa855d482f810ee1cbb7375df8/project");
        totalStudents = response.data.length || 0; // Assuming the data is an array

        updateTotalStudentsCounter();

        for (let i = 0; i < response.data.length; i++) {
            showUserOnScreen(response.data[i]);
        }
    } catch (err) {
        console.log(err);
    }
}


function updateTotalStudentsCounter() {
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
    updateTotalStudentsCounter();
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
        const response = await axios.put(`https://crudcrud.com/api/300eccfa855d482f810ee1cbb7375df8/project/${userId}`, updatedData);
        console.log(response);
    } catch (err) {
        console.log(err);
    }

    deleteUser(userId);
}

async function deleteUser(userId) {
    try {
        // Delete the user
        await axios.delete(`https://crudcrud.com/api/300eccfa855d482f810ee1cbb7375df8/project/${userId}`);
        totalStudents--;
        updateTotalStudentsCounter();

        // Fetch and display the updated user list
        const dataResponse = await axios.get("https://crudcrud.com/api/300eccfa855d482f810ee1cbb7375df8/project");
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

window.addEventListener("DOMContentLoaded", initialize);
