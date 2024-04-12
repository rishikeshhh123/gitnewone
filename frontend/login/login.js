// login.js

function login(e) {
    e.preventDefault();
    
    const form = new FormData(e.target);

    const loginDetails = {
        email: form.get("email"),
        password: form.get("password")
    };

    axios.post('http://localhost:3000/user/login', loginDetails)
        .then(response => {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userDetails', JSON.stringify(response.data.user));
            window.location.href = "../ExpenseTracker/index.html";
        })
        .catch(err => {
            document.body.innerHTML += `<div style="color:red;">${err} <div>`;
        });
}

function forgotPassword() {
    window.location.href = "../ForgetPassword/index.html";
}
