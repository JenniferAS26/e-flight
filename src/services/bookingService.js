import axios from 'axios'
import endpoints from './endpoints'

const bookingFlight = async (body) => {
  try {
    await axios.post(endpoints.booking, body)
  } catch (error) {
    console.log(error)
  }
}

export { bookingFlight as createData }