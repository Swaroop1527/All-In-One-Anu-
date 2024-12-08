import { isAuthenticated } from './authService.js';

export function initAuthGuard() {
    const currentPath = window.location.pathname;
    const publicPaths = ['/login.html', '/register.html'];
    
    // Always redirect to login if accessing root directly
    if (currentPath === '/') {
        window.location.href = '/login.html';
        return;
    }
    
    // If not authenticated and trying to access protected pages
    if (!isAuthenticated() && !publicPaths.includes(currentPath)) {
        window.location.href = '/login.html';
        return;
    }
    
    // If authenticated and trying to access login/register pages
    if (isAuthenticated() && publicPaths.includes(currentPath)) {
        window.location.href = '/index.html';
        return;
    }
}