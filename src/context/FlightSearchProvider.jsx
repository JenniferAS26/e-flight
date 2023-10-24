import { useCallback, useState, useEffect} from 'react'
import { FlightSearchContext } from './FlightSearchContext'
import { getListOfFlights } from '../services/flightService'
import { getToken } from '../services/auth'
import airports from '../data/airports.json'

const FlightSearchProvider = ({ children }) => {
  const [flightList, setFlightList] = useState([])
  const [dictionaries, setDictionaries] = useState({})

  const initialValuesSearch = {
    arrival: '',
    departure: '',
    classesType: '',
    departureDate: '',
    passengers: '',
    tripType: ''
  }

  localStorage.setItem('searchDetail', JSON.stringify(initialValuesSearch))

  const searchDetail = JSON.parse(localStorage.getItem('searchDetail'))
  
  const getFlights = useCallback(() => {
    getListOfFlights(searchDetail.departure, searchDetail.arrival, searchDetail.departureDate, searchDetail.passengers, false, searchDetail.classesType)
      .then((response) => {
        setFlightList(response.data)
        setDictionaries(response.dictionaries)
      })
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
    <FlightSearchContext.Provider value={{ flightList, dictionaries, filter }}>
      { children }
    </FlightSearchContext.Provider>
  )
}

export default FlightSearchProvider
