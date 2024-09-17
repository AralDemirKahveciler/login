document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const validUsername = 'X1X1X1';
        const validPassword = 'X1X1X1';

        if (username === validUsername && password === validPassword) {
            window.location.href = '/Succes.html'; 
        } else {
            alert('Invalid username or password');
        }
    });
});
