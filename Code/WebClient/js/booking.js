import { getAllDestinations } from './data/dummyData.js';
import { loadData } from './data/dummyData.js';

export function initializeBooking() {
    const destinationInput = document.getElementById('destination');
    setupDestinationAutocomplete(destinationInput);
    
    const searchButton = document.querySelector('.search-button');
    searchButton.addEventListener('click', handleBookingSearch);
}

async function setupDestinationAutocomplete(input) {
   await loadData();
    const availableDestinations = getAllDestinations().map(city => 
        city.charAt(0).toUpperCase() + city.slice(1)
    );
    
    const datalist = document.createElement('datalist');
    datalist.id = 'destinations-list';
    
    availableDestinations.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        datalist.appendChild(option);
    });
    
    document.body.appendChild(datalist);
    input.setAttribute('list', 'destinations-list');
}

// ... rest of the code remains the same ...
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