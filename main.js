// Modal and Form Handling

// Get the modal
var modal = document.getElementById('authModal');

// Get the button that opens the modal
var authBtn = document.createElement('button');
authBtn.textContent = 'Login / Signup';
authBtn.style.position = 'fixed';
authBtn.style.top = '20px';
authBtn.style.right = '20px';
authBtn.style.padding = '10px 20px';
authBtn.style.backgroundColor = '#00d9ff';
authBtn.style.color = '#fff';
authBtn.style.border = 'none';
authBtn.style.borderRadius = '5px';
authBtn.style.cursor = 'pointer';
document.body.appendChild(authBtn);

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName('close-btn')[0];

// When the user clicks the button, open the modal
authBtn.onclick = function() {
    modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    modal.style.display = 'none';
};

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Toggle between Sign Up and Log In
document.getElementById('signupTab').onclick = function() {
    document.getElementById('signupForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupTab').classList.add('active');
    document.getElementById('loginTab').classList.remove('active');
};

document.getElementById('loginTab').onclick = function() {
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('loginTab').classList.add('active');
    document.getElementById('signupTab').classList.remove('active');
};

// Handle Sign Up form submission
document.getElementById('authForm').onsubmit = function(event) {
    event.preventDefault();
    
    // For Sign Up form
    if (document.getElementById('signupForm').style.display === 'block') {
        var username = document.getElementById('username').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        if (username && email && password) {
            localStorage.setItem('username', username);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);

            modal.style.display = 'none';
            alert('Sign Up successful! You can now log in.');

            // Switch to Login tab
            document.getElementById('signupTab').classList.remove('active');
            document.getElementById('loginTab').classList.add('active');
            document.getElementById('signupForm').style.display = 'none';
            document.getElementById('loginForm').style.display = 'block';
        } else {
            document.getElementById('authError').style.display = 'block';
        }
    }
    
    // For Login form
    if (document.getElementById('loginForm').style.display === 'block') {
        var loginEmail = document.getElementById('loginEmail').value;
        var loginPassword = document.getElementById('loginPassword').value;

        var storedEmail = localStorage.getItem('email');
        var storedPassword = localStorage.getItem('password');

        if (loginEmail === storedEmail && loginPassword === storedPassword) {
            alert('Login successful!');
            modal.style.display = 'none';
        } else {
            alert('Invalid credentials. Please try again.');
        }
    }
};

// Check if the user is already logged in
if (localStorage.getItem('username') && localStorage.getItem('email')) {
    alert('You are already logged in as ' + localStorage.getItem('username'));
}