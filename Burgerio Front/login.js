const myForm = document.getElementById('login-form');
const emailInput = document.querySelector('#email-box');
const passwordInput = document.querySelector('#password-box');
const messageBox = document.querySelector('.messages');


myForm.addEventListener('submit', onSubmit);

function handleError(text) {
    messageBox.classList.add('error');
    messageBox.innerHTML = text;
}

function handleSuccess(text) {
    messageBox.classList.add('success');
    messageBox.innerHTML = text;
}

function clearForm() {
    emailInput.value = '';
    passwordInput.value = '';
}


function getUser() {
    const email = emailInput.value;
    const password = passwordInput.value;

    fetch('http://localhost:5009/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                messageBox.classList.remove('success');
                throw new Error('Incorrect password');
            }
        })
        .then(data => {
            // Handle successful login response
            console.log(data);
            handleSuccess('Logged in Successfully');
            clearForm();
            // window.location.href = 'main.html'
        })
        .catch(error => {
            // Handle error and display error message
            console.error(error);
            handleError('Incorrect Password');
        });
}

function onSubmit(event) {
    event.preventDefault();

    if (emailInput.value === '' || passwordInput.value === '') {
        messageBox.classList.remove('success');
        messageBox.innerHTML = '';
        handleError('Please insert all fields');
    } else {
        messageBox.classList.remove('error');
        messageBox.innerHTML = '';
        getUser();
    }
}

