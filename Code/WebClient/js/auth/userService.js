// Initialize users from sessionStorage or fetch if not already stored
let users = [];
const usersData = sessionStorage.getItem('users');
if(usersData == undefined)
{
    loadUsers();
}
else if (usersData) {
    users = JSON.parse(usersData);
}

// Function to load users from JSON file via fetch
debugger;

export async function loadUsers() {
    if (!users.length) {
        try {
            debugger;
            const response = await fetch('http://localhost:5127/api/User/GetUsers'); // Adjust this path
            const data = await response.json();
            users = data;
            sessionStorage.setItem('users', JSON.stringify(users));
        } catch (error) {
            console.error('Failed to load users:', error);
        }
    }
}

// Ensure users are saved initially
if (!sessionStorage.getItem('users')) {
    sessionStorage.setItem('users', JSON.stringify(users));
}

export function getAllUsers() {
    return users;
}

export function getUserById(id) {
    return users.find(user => user.id === id);
}

export function getUserByEmail(email) {
    return users.find(user => user.email === email);
}

export async function createUser(userData) {
    const newUser = {
        id: Math.floor(Math.random() * 1000000),
        ...userData,
        profile: {
            fullName: "",
            phone: "",
            preferences: {
                notifications: true,
                newsletter: false
            },
            bookingHistory: []
        }
    };
    
    users.push(newUser);
    await saveUsers();
    console.log('Current users after registration:', JSON.parse(sessionStorage.getItem('users')));
    return newUser;
}

export function updateUser(id, updates) {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) return null;
    
    users[userIndex] = { ...users[userIndex], ...updates };
    saveUsers();
    return users[userIndex];
}

export function deleteUser(id) {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) return false;
    
    users.splice(userIndex, 1);
    saveUsers();
    return true;
}

export function addBooking(userId, booking) {
    const user = getUserById(userId);
    if (!user) return null;
    
    user.profile.bookingHistory.push({
        id: `B${Date.now()}`,
        ...booking,
        status: 'upcoming'
    });
    
    saveUsers();
    return user;
}

 async function saveUsers() {
    sessionStorage.setItem('users', JSON.stringify(users));
    return await saveUsersToServer(); 
 }

async function saveUsersToServer()  {
    try {
        debugger;
        // Sending the users data to the backend
        const response = await fetch('http://localhost:5127/api/User/SaveUser', {
            method: 'POST', // HTTP method is POST to save the data
            headers: {
                'Content-Type': 'application/json', // Indicate that we're sending JSON data
            },
            body: JSON.stringify(users), // Convert the users array to a JSON string
        });

        // Ensure we got a successful response (status 200-299)
        if (!response.ok) {
            throw new Error('Failed to save users');
        }

        // Parse the JSON response
        debugger;
        const data = await response.json();
        
        // Successfully saved the users
        console.log('Users saved successfully:', data);
    } catch (error) {
        debugger;
        // Handle errors (e.g., network issues or backend problems)
        return false;
        console.error('Error saving users:', error);
    }
}



// Debug function to view current users
export function debugUsers() {
    console.log('Current users in storage:', JSON.parse(sessionStorage.getItem('users')));
}
