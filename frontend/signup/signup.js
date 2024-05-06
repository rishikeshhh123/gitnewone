function signup(e) {
    e.preventDefault();

    const form = new FormData(e.target);

    const signupDetails = {
        name: form.get("name"),
        email: form.get("email"),
        phoneNumber: form.get("phonenumber"),
        password: form.get("password")
    };
    

    axios.post('http://localhost:3000/signup', signupDetails)
    .then(response => {
        if(response.status === 201){
            window.location.href = "../login/login.html";
        } else {
            throw new Error('Failed to signup');
        }
    })
    .catch(err => {
        document.body.innerHTML += `<div style="color:red;">${err} <div>`;
    });
}
