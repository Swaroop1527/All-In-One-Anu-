import { hotels, activities, transport } from './data/dummyData.js';
import { getCurrentUser } from './auth/authService.js';

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const serviceType = params.get('serviceType');
    const destination = params.get('destination');
    const dates = params.get('dates');

    let searchResults;
    switch(serviceType) {
        case 'hotel':
            searchResults = hotels;
            break;
        case 'activities':
            searchResults = activities;
            break;
        case 'transport':
            searchResults = transport;
            break;
        default:
            searchResults = [...hotels, ...activities, ...transport];
    }

    displaySearchResults(searchResults);
    initializeSorting(searchResults);
    displayUserProfile();
});

function displaySearchResults(results) {
    const resultsGrid = document.getElementById('results-grid');
    resultsGrid.innerHTML = '';
    
    results.forEach(result => {
        const card = createResultCard(result);
        resultsGrid.appendChild(card);
    });
}

function createResultCard(result) {
    const card = document.createElement('div');
    card.className = 'result-card';
    
    card.innerHTML = `
        <img src="${result.image}" alt="${result.name}" class="result-image">
        <div class="result-content">
            <h3 class="result-title">${result.name}</h3>
            <div class="result-price">${result.price}</div>
            <div class="result-rating">
                ${'★'.repeat(Math.floor(result.rating))}${result.rating % 1 ? '½' : ''}
                <span class="rating-number">(${result.rating})</span>
            </div>
            <p>${result.description}</p>
            <a href="booking-details.html?item=${encodeURIComponent(JSON.stringify(result))}" class="book-now-btn">Book Now</a>
        </div>
    `;
    
    return card;
}

function initializeSorting(results) {
    const sortSelect = document.getElementById('sort-by');
    
    sortSelect.addEventListener('change', () => {
        let sortedResults = [...results];
        
        switch(sortSelect.value) {
            case 'rating':
                sortedResults.sort((a, b) => b.rating - a.rating);
                break;
            case 'price-low':
                sortedResults.sort((a, b) => {
                    const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ''));
                    const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ''));
                    return priceA - priceB;
                });
                break;
            case 'price-high':
                sortedResults.sort((a, b) => {
                    const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ''));
                    const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ''));
                    return priceB - priceA;
                });
                break;
        }
        
        displaySearchResults(sortedResults);
    });
}

function displayUserProfile() {
    const user = getCurrentUser();
    if (user) {
        const header = document.querySelector('.navbar');
        const userProfile = document.createElement('div');
        userProfile.className = 'user-profile';
        userProfile.innerHTML = `
            <span id="userName">Welcome, ${user.username}!</span>
            <button class="logout-btn">Logout</button>
        `;
        header.appendChild(userProfile);
        
        document.querySelector('.logout-btn').addEventListener('click', () => {
            window.location.href = 'login.html';
        });
    }
}