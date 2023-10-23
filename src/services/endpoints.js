const API_URL = 'https://test.api.amadeus.com/v2/shopping/flight-offers'
const BASE_URL = 'https://e-flight-app.onrender.com'

const endpoints = {
  searchByDestination: (origin, destination, departureDate, passengers, stops, classes) => `${API_URL}?originLocationCode=${origin}&destinationLocationCode=${destination}&departureDate=${departureDate}&adults=${passengers}&nonStop=${stops}&max=25&travelClass=${classes}`,
  users: `${BASE_URL}/users`,
  booking: `${BASE_URL}/booking`
}

export default endpoints