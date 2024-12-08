import { loginUser } from './authService.js';
import { debugUsers } from './userService.js';

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorElement = document.getElementById('loginError');

    // Debug: Show available users
    debugUsers();

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            debugger;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            try {
                console.log('Attempting to login with email:', email);
                await loginUser(email, password);
                console.log('Login successful');
                window.location.href = '/index.html';
            } catch (error) {
                console.error('Login error:', error);
                errorElement.textContent = error.message;
                errorElement.classList.add('show');
            }
        });
    }
});