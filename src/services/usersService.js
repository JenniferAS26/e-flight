import axios from 'axios'
import endpoints from './endpoints'

const createData = async (body) => {
  try {
    await axios.post(endpoints.users, body)
  } catch (error) {
    console.warn(error)
  }
}

const getDataByParams = async (params) => {
  try {
    const { data } = await axios.get(endpoints.users, { params: params })
    return data
  } catch (error) {
    console.warn(error)
  }
}

export { createData, getDataByParams }