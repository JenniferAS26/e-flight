import { useCallback, useState, useEffect} from 'react'
import { FlightSearchContext } from './FlightSearchContext'
import { getListOfFlights } from '../services/flightService'
import { getToken } from '../services/auth'
import airports from '../data/airports.json'

const FlightSearchProvider = ({ children }) => {
  const [flightList, setFlightList] = useState([])
  
  const getFlights = useCallback(() => {
    getListOfFlights('SYD', 'BKK', '2023-10-29', '2', false, 'ECONOMY')
      .then((response) => setFlightList(response))
  }, [])

  useEffect(() => {
    getFlights()
  }, [getFlights])
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
    <FlightSearchContext.Provider value={{ flightList, filter }}>
      { children }
    </FlightSearchContext.Provider>
  )
}

export default FlightSearchProvider
