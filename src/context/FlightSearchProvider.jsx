import { useCallback, useState, useEffect} from 'react'
import { FlightSearchContext } from './FlightSearchContext'
import { getListOfFlights } from '../services/flightService'
import { getToken } from '../services/auth'

const FlightSearchProvider = ({ children }) => {
  const [flightList, setFlightList] = useState([])
  
  const getFlights = useCallback(() => {
    getListOfFlights('SYD', 'BKK', '2023-10-29', '2', false, 'ECONOMY')
      .then((response) => setFlightList(response))
  }, [])
  
  useEffect(() => {
    getFlights()
  }, [getFlights])

  useEffect(() => {
    getToken()
  }, [])

  return (
    <FlightSearchContext.Provider value={{ flightList }}>
      { children }
    </FlightSearchContext.Provider>
  )
}

export default FlightSearchProvider
