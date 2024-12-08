import { initializeServices } from './services.js';
import { initializeBooking } from './booking.js';
import { initializeNavigation } from './navigation.js';
import { initAuthGuard } from './auth/authGuard.js';
import { getCurrentUser, logout } from './auth/authService.js';

// Initialize authentication guard first
initAuthGuard();

// Only initialize other modules if we're on the main page
if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
    document.addEventListener('DOMContentLoaded', () => {
        initializeNavigation();
        initializeServices();
        initializeBooking();
        
        // Setup logout functionality
        const logoutButton = document.querySelector('.logout-btn');
        if (logoutButton) {
            logoutButton.addEventListener('click', (e) => {
                e.preventDefault();
                logout();
                window.location.href = '/login.html';
            });
        }

        // Display user info if logged in
        const user = getCurrentUser();
        if (user) {
            const userInfo = document.querySelector('.user-info');
            if (userInfo) {
                userInfo.textContent = `Welcome, ${user.username}!`;
            }
        }
    });
}