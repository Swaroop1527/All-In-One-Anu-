import { registerUser } from './authService.js';
import { debugUsers } from './userService.js';

document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const errorElement = document.getElementById('registerError');

    // Debug: Show initial users
    debugUsers();

    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            try {
                console.log('Attempting to register user:', { username, email });
                await registerUser(username, email, password);
                console.log('Registration successful');
               await debugUsers(); // Show updated users after registration
                alert('Registration successful! Please login.');
                window.location.href = '/login.html';
            } catch (error) {
                console.error('Registration error:', error);
                errorElement.textContent = error.message;
                errorElement.classList.add('show');
            }
        });
    }
});