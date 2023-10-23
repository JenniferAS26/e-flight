import { Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import FlightListing from '../pages/FlightListing'
import FlightBooking from '../pages/FlightBooking'
import SignUp from '../auth/pages/SignUp'
import SignIn from '../auth/pages/SignIn'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import { useContext } from 'react'
import { AuthContext } from '../auth/context/AuthContext'

const AppRoutes = () => {

  const { logged } = useContext( AuthContext )

  return (
    <Routes>
        <Route element={<Layout />}>
          <Route path='/flight-booking' element={
            <PrivateRoute>
              <FlightBooking />
            </PrivateRoute>
          } />
          <Route element={<PublicRoute isAuth={ logged } />}>
            <Route index element={<Home />} />
            <Route path='flight-listing' element={<FlightListing />} />
            <Route path='sign-in' element={<SignIn />} />
            <Route path='sign-up' element={<SignUp/>} />
          </Route>
        </Route>
      </Routes>
  )
}

export default AppRoutes
