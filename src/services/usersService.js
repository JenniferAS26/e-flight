import axios from 'axios'
import endpoints from './endpoints'

const createData = async (body) => {
  try {
    await axios.post(endpoints.users, body)
  } catch (error) {
    console.log(error)
  }
}

export { createData }