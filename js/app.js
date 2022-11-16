const form = document.getElementById('form');
const message = document.getElementById('message');
const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const email = document.getElementById('email');
const passWord = document.getElementById('password');

form.addEventListener('submit', (e) => {
    let messages = []    
    if (fname.value === '' || fname.value == null) {
        messages.push('First name cannot be blank');
    }

    if (lname.value === '' || lname.value == null) {
        messages.push('Last name cannot be blank');
    }

    if (email.value === '' || email.value == null) {
        messages.push('An email address is required!');
    }

    if (passWord.value === '' || passWord.value == null) {
        messages.push('Please enter a password!');
    }
    //Prevents form from being submitted without information!
    if (messages.length > 0){
        e.preventDefault()
        message.innerText = messages.join(', ');
    }
})


