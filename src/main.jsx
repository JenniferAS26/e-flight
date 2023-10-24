import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routes/AppRoutes'
import './styles/global.scss'
import FlightSearchProvider from './context/FlightSearchProvider'
import AuthProvider from './auth/context/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='https://e-flight-app.netlify.app/'>
      <AuthProvider>
        <FlightSearchProvider>
          <AppRoutes />
        </FlightSearchProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
