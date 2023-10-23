import axios from 'axios'
import endpoints from './endpoints'
import { getToken } from './auth'

const getListOfFlights = async (origin, destination, departureDate, passengers, stops, classes) => {
  let retries = 0
  while( retries < 3 ){
    try {
      let ACCESS_TOKEN = localStorage.getItem('authToken')
      // console.log(ACCESS_TOKEN)
      const config = {
        headers: {
          "content-type": "application/vnd.amadeus+json",
          "Authorization": `Bearer ${ACCESS_TOKEN}`
        }
      }
      const { data } = await axios.get(endpoints.searchByDestination(origin, destination, departureDate, passengers, stops, classes), config)
      return data.data
    } catch (error) {
      // console.warn(error.response)
      if (error.response.status == 401) {
        const { access_token } = await getToken()
        localStorage.setItem('authToken', access_token)
        retries = retries + 1
      } else {
        retries = retries + 1
      }
    }
  }
}

export { getListOfFlights }