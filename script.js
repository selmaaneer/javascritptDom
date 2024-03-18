const signupForm = document.getElementById('signupForm');
const errorMsg = document.getElementById('error-msg');
const loginForm = document.getElementById('loginForm');


signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = signupForm.elements['username'].value.trim();
    const email = signupForm.elements['email'].value.trim();
    const password = signupForm.elements['password'].value.trim();
    
    // Perform form validation
    if (!isValidUsername(username)) {
        errorMsg.textContent = 'Username must be at least 4 characters long';
        return;
    }
    if (!isValidEmail(email)) {
        errorMsg.textContent = 'Invalid email address';
        return;
    }
    if (!isValidPassword(password)) {
        errorMsg.textContent = 'Password must be at least 6 characters long';
        return;
    }

    // If validation passed, submit the form
    // Here you would typically send the form data to the server for processing
    // For this example, we'll just log the form data to the console
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    // Clear any previous error messages
    errorMsg.textContent = '';
});

function isValidUsername(username) {
    return username.length >= 4;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    return password.length >= 6;
}


loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = loginForm.elements['email'].value.trim();
    const password = loginForm.elements['password'].value.trim();
    
    // Perform form validation
    if (!isValidEmail(email)) {
        errorMsg.textContent = 'Invalid email address';
        return;
    }
    if (!isValidPassword(password)) {
        errorMsg.textContent = 'Password must be at least 6 characters long';
        return;
    }

    // If validation passed, submit the form
    // Here you would typically send the form data to the server for authentication
    // For this example, we'll just log the form data to the console
    console.log('Email:', email);
    console.log('Password:', password);

    // Clear any previous error messages
    errorMsg.textContent = '';
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    return password.length >= 6;
}