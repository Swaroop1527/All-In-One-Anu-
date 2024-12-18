export let hotelsData = [];
export let transportData = [];
export let activitiesData = [];

export async function loadData() {
  try {
    const hotelsResponse = await fetch('js/data/hotels.json'); 
    hotelsData = await hotelsResponse.json();

    const activitiesResponse = await fetch('js/data/activities.json'); 
    activitiesData = await activitiesResponse.json();

    const transportResponse = await fetch('js/data/transport.json'); 
    transportData = await transportResponse.json();

    console.log('Hotels Data:', hotelsData);
    console.log('Activities Data:', activitiesData);
    console.log('Transport Data:', transportData);
  } catch (error) {
    console.error('Error loading JSON data:', error);
  }
}



export function getDestinationData(destination) {
    const normalizedDestination = destination.toLowerCase();
    return {
        hotels: hotelsData[normalizedDestination] || [],
        activities: activitiesData[normalizedDestination] || [],
        transport: transportData[normalizedDestination] || []
    };
}

export function getAllDestinations() {
    return Object.keys(hotelsData);
}

export async function getServicesByType(destination, serviceType) {
    await loadData();
    const data = getDestinationData(destination);
    switch(serviceType) {
        case 'hotel':
            return data.hotels;
        case 'activities':
            return data.activities;
        case 'transport':
            return data.transport;
        case 'all':
            return [...data.hotels, ...data.activities, ...data.transport];
        default:
            return [];
    }
}