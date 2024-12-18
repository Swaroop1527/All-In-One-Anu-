// Destinations data organized by cities
export const destinations = {
    "bengaluru": {
        hotels: [
            {
                id: "blr-h-1",
                name: "The Leela Palace Bengaluru",
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
                price: "$299/night",
                rating: 4.8,
                location: "Old Airport Road",
                description: "Luxury 5-star hotel with traditional architecture",
                coordinates: {
                    lat: 12.9606,
                    lng: 77.6484
                },
                type: "hotel"
            },
            {
                id: "blr-h-2",
                name: "ITC Gardenia",
                image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
                price: "$250/night",
                rating: 4.7,
                location: "Residency Road",
                description: "Business luxury hotel in central Bangalore",
                coordinates: {
                    lat: 12.9716,
                    lng: 77.5946
                },
                type: "hotel"
            }
        ],
        activities: [
            {
                id: "blr-a-1",
                name: "Lalbagh Botanical Garden Tour",
                image: "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613",
                price: "$20/person",
                rating: 4.5,
                duration: "3 hours",
                description: "Guided tour of historic botanical gardens",
                coordinates: {
                    lat: 12.9507,
                    lng: 77.5848
                },
                type: "activity"
            },
            {
                id: "blr-a-2",
                name: "Bangalore Palace Visit",
                image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
                price: "$30/person",
                rating: 4.6,
                duration: "2 hours",
                description: "Explore the majestic Bangalore Palace",
                coordinates: {
                    lat: 12.9988,
                    lng: 77.5921
                },
                type: "activity"
            }
        ],
        transport: [
            {
                id: "blr-t-1",
                name: "Airport Transfer Service",
                image: "https://images.unsplash.com/photo-1550355291-bbee04a92027",
                price: "$40/trip",
                rating: 4.7,
                type: "transfer",
                description: "Comfortable airport transfers",
                coordinates: {
                    lat: 13.1989,
                    lng: 77.7068
                }
            }
        ]
    },
    "hyderabad": {
        hotels: [
            {
                id: "hyd-h-1",
                name: "Taj Falaknuma Palace",
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
                price: "$399/night",
                rating: 4.9,
                location: "Engine Bowli",
                description: "Former palace of the Nizam, now a luxury hotel",
                coordinates: {
                    lat: 17.3314,
                    lng: 78.4680
                },
                type: "hotel"
            },
            {
                id: "hyd-h-2",
                name: "ITC Kohenur",
                image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
                price: "$280/night",
                rating: 4.7,
                location: "HITEC City",
                description: "Modern luxury hotel in tech hub",
                coordinates: {
                    lat: 17.4256,
                    lng: 78.3463
                },
                type: "hotel"
            }
        ],
        activities: [
            {
                id: "hyd-a-1",
                name: "Charminar Heritage Walk",
                image: "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613",
                price: "$25/person",
                rating: 4.6,
                duration: "3 hours",
                description: "Historical walking tour of Old City",
                coordinates: {
                    lat: 17.3616,
                    lng: 78.4747
                },
                type: "activity"
            }
        ],
        transport: [
            {
                id: "hyd-t-1",
                name: "City Tour Service",
                image: "https://images.unsplash.com/photo-1550355291-bbee04a92027",
                price: "$50/day",
                rating: 4.5,
                type: "transport",
                description: "Comprehensive city tour service",
                coordinates: {
                    lat: 17.3850,
                    lng: 78.4867
                }
            }
        ]
    },
    "chennai": {
        hotels: [
            {
                id: "chn-h-1",
                name: "ITC Grand Chola",
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
                price: "$270/night",
                rating: 4.8,
                location: "Guindy",
                description: "Luxury hotel inspired by Chola architecture",
                coordinates: {
                    lat: 13.0127,
                    lng: 80.2707
                },
                type: "hotel"
            }
        ],
        activities: [
            {
                id: "chn-a-1",
                name: "Marina Beach Sunrise Tour",
                image: "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613",
                price: "$15/person",
                rating: 4.4,
                duration: "2 hours",
                description: "Early morning beach tour with breakfast",
                coordinates: {
                    lat: 13.0500,
                    lng: 80.2824
                },
                type: "activity"
            }
        ],
        transport: [
            {
                id: "chn-t-1",
                name: "Temple Tour Transport",
                image: "https://images.unsplash.com/photo-1550355291-bbee04a92027",
                price: "$45/day",
                rating: 4.6,
                type: "transport",
                description: "Visit famous temples around Chennai",
                coordinates: {
                    lat: 13.0827,
                    lng: 80.2707
                }
            }
        ]
    },
    "delhi": {
        hotels: [
            {
                id: "del-h-1",
                name: "The Imperial",
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
                price: "$350/night",
                rating: 4.9,
                location: "Connaught Place",
                description: "Historic 5-star luxury hotel",
                coordinates: {
                    lat: 28.6292,
                    lng: 77.2183
                },
                type: "hotel"
            }
        ],
        activities: [
            {
                id: "del-a-1",
                name: "Old Delhi Food Walk",
                image: "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613",
                price: "$35/person",
                rating: 4.8,
                duration: "4 hours",
                description: "Culinary journey through Old Delhi",
                coordinates: {
                    lat: 28.6562,
                    lng: 77.2410
                },
                type: "activity"
            }
        ],
        transport: [
            {
                id: "del-t-1",
                name: "Golden Triangle Tour",
                image: "https://images.unsplash.com/photo-1550355291-bbee04a92027",
                price: "$100/day",
                rating: 4.7,
                type: "transport",
                description: "Delhi-Agra-Jaipur tour service",
                coordinates: {
                    lat: 28.6139,
                    lng: 77.2090
                }
            }
        ]
    }
};