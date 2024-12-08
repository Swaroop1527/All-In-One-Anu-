import { hotels, activities, transport } from './data/dummyData.js';

export function initializeBooking() {
    const searchButton = document.querySelector('.search-button');
    searchButton.addEventListener('click', handleBookingSearch);
}

function handleBookingSearch(e) {
    e.preventDefault();

    const destination = document.getElementById('destination').value;
    const dates = document.getElementById('dates').value;
    const serviceType = document.getElementById('service-type').value;

    if (!destination || !dates) {
        alert('Please fill in all required fields');
        return;
    }

    // Redirect to search results page with parameters
    const searchParams = new URLSearchParams({
        destination,
        dates,
        serviceType
    });

    window.location.href = `/search-results.html?${searchParams.toString()}`;
}