import { getUserByEmail, createUser, getAllUsers } from './userService.js';

export function registerUser(username, email, password) {
    // Check if user already exists
    debugger
    const existingUser = getUserByEmail(email);
    if (existingUser) {
        throw new Error('User already exists');
    }

    const newUser = createUser({
        username,
        email,
        password
    });

    return newUser;
}

export function loginUser(email, password) {
    const users = getAllUsers();
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
        throw new Error('Invalid credentials');
    }
    
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    return user;
}

export function isAuthenticated() {
    return sessionStorage.getItem('currentUser') !== null;
}

export function getCurrentUser() {
    const userStr = sessionStorage.getItem('currentUser');
    return userStr ? JSON.parse(userStr) : null;
}

export function logout() {
    sessionStorage.removeItem('currentUser');
}