const myForm = document.getElementById('my-form');
const nameInput = document.querySelector('#name-box');
const emailInput = document.querySelector('#email-box');
const numberInput = document.querySelector('#number-box');
const messageInput = document.querySelector('#message-box');
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
    nameInput.value = '';
    emailInput.value = '';
    numberInput.value = '';
    messageInput.value = '';
}


function addMessage() {

    const fullName = nameInput.value;
    const email = emailInput.value;
    const number = numberInput.value;
    const message = messageInput.value;

    fetch('http://localhost:5009/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fullName, email, number, message })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}


function onSubmit(event) {
    event.preventDefault();

    if (nameInput.value === '' || emailInput.value === '' || numberInput.value === '' || messageInput.value === '') {
        messageBox.classList.remove('success');
        messageBox.innerHTML = '';
        handleError('Please insert all fields');
    } else {
        messageBox.classList.remove('error');
        messageBox.innerHTML = '';
        addMessage();
        handleSuccess('Message Sent');
        clearForm();
    }
}

