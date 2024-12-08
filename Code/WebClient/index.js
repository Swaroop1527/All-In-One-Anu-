// Main entry point
import { initAuthGuard } from './js/auth/authGuard.js';

// Initialize authentication immediately
document.addEventListener('DOMContentLoaded', () => {
    initAuthGuard();
});