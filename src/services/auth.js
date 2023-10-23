import axios from 'axios'
import qs from 'qs'

export const getToken = async () => {
  const data = {
    "grant_type": "client_credentials",
    "client_id": "f2gBi7wYsUASmFGzMcHJVjUFvG0ypK0B",
    "client_secret": "mkNqzPAJxwzhrfXw"
  }
  const headers = {
    'content-type': 'application/x-www-form-urlencoded'
  }
  const options = {
    method: 'POST',
    headers,
    data: qs.stringify(data),
    url: 'https://test.api.amadeus.com/v1/security/oauth2/token'
  }
  try {
    const { data } = await axios(options)
    return data
  } catch (error) {
    console.warn(error)
  }
}