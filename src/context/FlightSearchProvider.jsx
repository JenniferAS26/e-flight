import { useCallback, useState } from "react"
import { FlightSearchContext } from "./FlightSearchContext"
import { getListOfFlights } from "../services/flightService"
import { useEffect } from "react"

const FlightSearchProvider = ({ children }) => {
  const [flightList, setFlightList] = useState([])
  
  const getFlights = useCallback(() => {
    getListOfFlights('BOG', 'MAD', '2023-10-21', '2', true)
      .then((response) => setFlightList(response))
  }, [])
  
  useEffect(() => {
    getFlights()
  }, [getFlights])

  return (
    <FlightSearchContext.Provider value={{ flightList }}>
      { children }
    </FlightSearchContext.Provider>
  )
}

export default FlightSearchProvider
