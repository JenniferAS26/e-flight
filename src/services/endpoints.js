const BASE_URL = 'https://test.api.amadeus.com/v2/shopping/flight-offers'

const endpoints = {
  searchByDestination: (origin, destination, departureDate, passengers, stops) => `${BASE_URL}?originLocationCode=${origin}&destinationLocationCode=${destination}&departureDate=${departureDate}&adults=${passengers}&nonStop=${stops}&max=250`
}

export default endpoints