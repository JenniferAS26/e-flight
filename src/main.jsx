import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routes/AppRoutes'
import './styles/global.scss'
import FlightSearchProvider from './context/FlightSearchProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FlightSearchProvider>
        <AppRoutes />
      </FlightSearchProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
