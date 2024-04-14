// Function to add a user to a group
function addUserToGroup(event) {
    event.preventDefault();

    const groupId = document.getElementById('groupId').value;
    const userId = document.getElementById('userId').value;

    fetch(`http://localhost:3000/groups/${groupId}/addUser`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to add user to group');
        }
        return response.json();
    })
    .then(data => {
        alert(data.message);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to add user to group');
    });
}

// Function to remove a user from a group
function removeUserFromGroup(event) {
    event.preventDefault();

    const groupId = document.getElementById('groupIdRemove').value;
    const userId = document.getElementById('userIdRemove').value;

    fetch(`http://localhost:3000/groups/${groupId}/removeUser/${userId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to remove user from group');
        }
        return response.json();
    })
    .then(data => {
        alert(data.message);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to remove user from group');
    });
}

// Add event listeners to the forms
document.getElementById('addUserForm').addEventListener('submit', addUserToGroup);
document.getElementById('removeUserForm').addEventListener('submit', removeUserFromGroup);
