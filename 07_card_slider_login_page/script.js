// Selecting the buttons and container by their IDs
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Adding event listener for the 'Sign Up' button
registerBtn.addEventListener('click', () => {
    container.classList.add('active'); // Add 'active' class to container
});

// Adding event listener for the 'Sign In' button
loginBtn.addEventListener('click', () => {
    container.classList.remove('active'); // Remove 'active' class from container
});
