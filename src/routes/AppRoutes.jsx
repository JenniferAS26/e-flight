import { Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import FlightListing from '../pages/FlightListing'


const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='flight-listing' element={<FlightListing />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
