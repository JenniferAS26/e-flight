import { Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import FlightListing from '../pages/FlightListing'
import FlightBooking from '../pages/FlightBooking'
import SignUp from '../auth/pages/SignUp'
import SignIn from '../auth/pages/SignIn'

const AppRoutes = () => {
  return (
    <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='flight-listing' element={<FlightListing />} />
          <Route path='/flight-booking' element={<FlightBooking />} />
          <Route path='sign-in' element={<SignIn />} />
          <Route path='sign-up' element={<SignUp/>} />
        </Route>
      </Routes>
  )
}

export default AppRoutes
