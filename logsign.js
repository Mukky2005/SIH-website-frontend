// Function to switch between login and sign-up forms
function openForm(evt, formName) {
    var i, formContent, tabLinks;
    formContent = document.getElementsByClassName("form-content");
    for (i = 0; i < formContent.length; i++) {
        formContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(formName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Function to handle login
function handleLogin(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Login successful!');
        window.location.href = 'Index.html'; // Redirect to home page
    } else {
        alert('Invalid credentials. Please sign up.');
    }
}

// Function to handle sign-up
function handleSignUp(event) {
    event.preventDefault();
    var newUsername = document.getElementById('new-username').value;
    var newPassword = document.getElementById('new-password').value;

    localStorage.setItem('username', newUsername);
    localStorage.setItem('password', newPassword);

    alert('Sign up successful! You can now log in.');
}

// Event listeners for form submissions
document.getElementById('login-form').addEventListener('submit', handleLogin);
document.getElementById('signup-form').addEventListener('submit', handleSignUp);
