import { useEffect, useReducer} from 'react'
import { FlightSearchContext } from './FlightSearchContext'
import { getToken } from '../services/auth'
import airports from '../data/airports.json'
import { flightReducer } from '../auth/context/authReducer'

const FlightSearchProvider = ({ children }) => {

  const [ state, dispatch ] = useReducer(flightReducer, {}) 

  const filter = () => {
    const filtered = airports.filter(e => {
        return e.municipality !== null 
        // && e.municipality.toLowerCase().includes(city)
        && (e.type == "large_airport" || e.type == "medium_airport")
    })
    return filtered
  }
  

  useEffect(() => {
    getToken()
  }, [])

  return (
    <FlightSearchContext.Provider value={{ state, dispatch, filter }}>
      { children }
    </FlightSearchContext.Provider>
  )
}

export default FlightSearchProvider
