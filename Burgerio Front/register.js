const myForm = document.getElementById('registration-form');
const usernameInput = document.querySelector('#username-box');
const emailInput = document.querySelector('#email-box');
const passwordInput = document.querySelector('#password-box');
const repeatPasswordInput = document.querySelector('#repeatPassword-box');
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
    usernameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
    repeatPasswordInput.value = '';
}


function addUser() {
    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const repeatPassword = repeatPasswordInput.value;

    fetch('http://localhost:5009/auth/registration', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password, repeatPassword }),
    })
        .then(response => {
            if (response.ok) {
                // User registration successful
                return response.json();
            } else if (response.status === 409) {
                // User with entered email already exists
                throw new Error('User with entered email already exists');
            } else {
                // Other registration errors
                throw new Error('Registration failed');
            }
        })
        .then(data => {
            // Handle successful registration response
            console.log(data);
            handleSuccess('Registered Successfully');
            clearForm();
        })
        .catch(error => {
            // Handle error and display error message
            console.error(error);
            if (error.message === 'User with entered email already exists') {
                handleError('Email already exists');
            } else {
                handleError('Registration failed');
            }
        });
}

function onSubmit(event) {
    event.preventDefault();

    if (
        usernameInput.value === '' ||
        emailInput.value === '' ||
        passwordInput.value === '' ||
        repeatPasswordInput.value === ''
    ) {
        messageBox.classList.remove('success');
        messageBox.innerHTML = '';
        handleError('Please insert all fields');
    } else if (passwordInput.value !== repeatPasswordInput.value) {
        handleError('Passwords do not match');
    } else {
        messageBox.classList.remove('error');
        messageBox.innerHTML = '';
        addUser();
    }
}

