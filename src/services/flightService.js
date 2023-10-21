import axios from 'axios'
import endpoints from './endpoints'
const ACCESS_TOKEN = 'A5hehk8zmAwu1jdeGZaZ3cQrDgkh'

const getListOfFlights = async (origin, destination, departureDate, passengers, stops) => {
  const config = {
    headers: {
      "content-type": "application/vnd.amadeus+json",
      "Authorization": `Bearer ${ACCESS_TOKEN}`
    }
  }
  try {
    const { data } = await axios.get(endpoints.searchByDestination(origin, destination, departureDate, passengers, stops), config)
    return data.data
  } catch (error) {
    console.warn(error)
  }
}

export { getListOfFlights }