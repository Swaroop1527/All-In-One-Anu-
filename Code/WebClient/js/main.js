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
        displayUserProfile();
    });
}

function displayUserProfile() {
    const user = getCurrentUser();
    if (user) {
        const userNameElement = document.getElementById('userName');
        if (userNameElement) {
            userNameElement.textContent = `Welcome, ${user.username}!`;
        }

        const logoutBtn = document.querySelector('.logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                logout();
                window.location.href = '/login.html';
            });
        }
    } else {
        window.location.href = '/login.html';
    }
}