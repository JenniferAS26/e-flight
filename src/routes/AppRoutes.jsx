import { Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import FlightListing from '../pages/FlightListing'
import FlightBooking from '../pages/FlightBooking'
import FlightPassenger from '../pages/FlightPassenger'

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='flight-listing' element={<FlightListing />} />
        <Route path="/flight-booking" element={<FlightBooking />} />
        <Route path="flight-passenger" element={<FlightPassenger />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
