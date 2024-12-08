import { getCurrentUser } from './auth/authService.js';
import { addNewBooking } from './profile/profileService.js';

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const itemData = JSON.parse(decodeURIComponent(params.get('item')));
    
    displaySelectedItem(itemData);
    initializeBookingForm(itemData);
    displayUserProfile();
});

function displaySelectedItem(item) {
    const detailsContainer = document.getElementById('selectedItemDetails');
    detailsContainer.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <div class="price">${item.price}</div>
        <div class="rating">Rating: ${item.rating} ★</div>
    `;
}

function initializeBookingForm(item) {
    const form = document.getElementById('bookingForm');
    const daysInput = document.getElementById('days');
    const guestsInput = document.getElementById('guests');
    
    function updatePrices() {
        const days = parseInt(daysInput.value) || 0;
        const guests = parseInt(guestsInput.value) || 0;
        const basePrice = parseFloat(item.price.replace(/[^0-9.]/g, '')) * days * guests;
        const taxes = basePrice * 0.18;
        const total = basePrice + taxes;

        document.getElementById('basePrice').textContent = `$${basePrice.toFixed(2)}`;
        document.getElementById('taxes').textContent = `$${taxes.toFixed(2)}`;
        document.getElementById('totalPrice').textContent = `$${total.toFixed(2)}`;
    }

    daysInput.addEventListener('input', updatePrices);
    guestsInput.addEventListener('input', updatePrices);

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const bookingData = {
            itemId: item.id,
            itemName: item.name,
            days: parseInt(daysInput.value),
            guests: parseInt(guestsInput.value),
            totalAmount: parseFloat(document.getElementById('totalPrice').textContent.replace('$', '')),
            bookingDate: new Date().toISOString(),
            status: 'confirmed'
        };

        try {
            const user = getCurrentUser();
            await addNewBooking(user.id, bookingData);
            alert('Booking confirmed successfully!');
            window.location.href = 'index.html';
        } catch (error) {
            alert('Error processing booking: ' + error.message);
        }
    });
}

function displayUserProfile() {
    const user = getCurrentUser();
    if (user) {
        document.getElementById('userName').textContent = `Welcome, ${user.username}!`;
    }
    
    document.querySelector('.logout-btn').addEventListener('click', () => {
        window.location.href = 'login.html';
    });
}